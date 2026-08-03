import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const skip = new Set([".obsidian", ".git", ".vault-tools"]);

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    if (skip.has(entry.name)) return [];
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : full.endsWith(".md") ? [full] : [];
  });
}

const files = walk(root);
const byStem = new Map(files.map((f) => [path.basename(f, ".md").toLowerCase(), f]));
const broken = [];
const brokenAnchors = [];
const duplicateTitles = [];
const titleMap = new Map();
const missingCitationSections = [];
const missingRelationshipSections = [];
const linksByFile = new Map();

for (const file of files) {
  const text = fs.readFileSync(file, "utf8");
  const titleMatch = text.match(/^title:\s*"([^"]+)"/m);
  const title = (titleMatch?.[1] ?? path.basename(file, ".md")).toLowerCase();
  if (titleMap.has(title)) duplicateTitles.push([titleMap.get(title), file]);
  else titleMap.set(title, file);

  const linkMatches = [...text.matchAll(/\[\[([^\]|#]+)(?:#([^\]|]+))?(?:\|[^\]]+)?\]\]/g)];
  const links = linkMatches.map((m) => m[1].trim());
  linksByFile.set(file, links);
  for (const match of linkMatches) {
    const link = match[1].trim();
    if (!byStem.has(path.basename(link).toLowerCase()) && !titleMap.has(link.toLowerCase())) {
      broken.push({ file: path.relative(root, file), link });
      continue;
    }
    const anchor = match[2]?.trim();
    if (anchor) {
      const target = byStem.get(path.basename(link).toLowerCase()) ?? titleMap.get(link.toLowerCase());
      const targetText = fs.readFileSync(target, "utf8");
      const exists = anchor.startsWith("^")
        ? targetText.includes(anchor)
        : targetText.split(/\r?\n/).some((line) => /^#{1,6}\s+/.test(line) && line.replace(/^#{1,6}\s+/, "").trim() === anchor);
      if (!exists) brokenAnchors.push({ file: path.relative(root, file), link, anchor });
    }
  }

  if (file.includes(`${path.sep}Concepts${path.sep}`)) {
    if (!text.includes("## Sources")) missingCitationSections.push(path.relative(root, file));
    if (!text.includes("## Relationships")) missingRelationshipSections.push(path.relative(root, file));
  }
}

const orphans = files
  .filter((f) => !f.includes(`${path.sep}Mathematical Finance${path.sep}`))
  .filter((f) => ![...linksByFile.values()].flat().some((l) => path.basename(l).toLowerCase() === path.basename(f, ".md").toLowerCase()))
  .map((f) => path.relative(root, f));

const report = {
  markdownFiles: files.length,
  brokenLinks: broken,
  brokenAnchors,
  duplicateTitles: duplicateTitles.map(([a, b]) => [path.relative(root, a), path.relative(root, b)]),
  missingCitationSections,
  missingRelationshipSections,
  possibleOrphans: orphans,
};
console.log(JSON.stringify(report, null, 2));
process.exitCode = broken.length || brokenAnchors.length || duplicateTitles.length || missingCitationSections.length || missingRelationshipSections.length ? 1 : 0;

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const manifest = JSON.parse(fs.readFileSync(path.join(here, "generated-manifest.json"), "utf8"));
const files = manifest.generatedFiles.map((f) => path.join(root, f));
const sourceDir = path.join(root, "Articles by Edward O. Thorp");
const sourceStems = new Set(
  fs.readdirSync(sourceDir)
    .filter((f) => f.endsWith(".md") && f !== "Index.md")
    .map((f) => path.basename(f, ".md"))
);

const counts = (items) => Object.fromEntries(
  [...new Set(items)].sort().map((item) => [item, items.filter((x) => x === item).length])
);

const notes = files.map((file) => {
  const text = fs.readFileSync(file, "utf8");
  const title = text.match(/^title:\s*"([^"]+)"/m)?.[1] ?? path.basename(file, ".md");
  const type = text.match(/^type:\s*(.+)$/m)?.[1]?.trim() ?? "unknown";
  const area = text.match(/^area:\s*"([^"]+)"/m)?.[1] ?? "unknown";
  const status = text.match(/^status:\s*(.+)$/m)?.[1]?.trim() ?? "unknown";
  const links = [...text.matchAll(/\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|[^\]]+)?\]\]/g)].map((m) => m[1].trim());
  const sourceLinks = links.filter((l) => sourceStems.has(path.basename(l)));
  const words = text.replace(/^---[\s\S]*?---/m, "").split(/\s+/).filter(Boolean).length;
  const hash = crypto.createHash("sha256").update(text.replace(/^---[\s\S]*?---/m, "").trim()).digest("hex");
  return { file, title, type, area, status, links, sourceLinks, words, hash };
});

const inbound = new Map(notes.map((n) => [n.title, 0]));
for (const note of notes) {
  for (const link of note.links) {
    const stem = path.basename(link);
    if (inbound.has(stem)) inbound.set(stem, inbound.get(stem) + 1);
  }
}

const sourceCoverage = Object.fromEntries(
  [...sourceStems].sort().map((source) => [
    source,
    notes.filter((n) => n.sourceLinks.some((l) => path.basename(l) === source)).length,
  ])
);

const hashes = new Map();
for (const note of notes) {
  if (!hashes.has(note.hash)) hashes.set(note.hash, []);
  hashes.get(note.hash).push(note.title);
}

const claimBearing = notes.filter((n) => !["moc", "home", "meta", "template"].includes(n.type));
const report = {
  generatedNotes: notes.length,
  byType: counts(notes.map((n) => n.type)),
  byArea: counts(notes.map((n) => n.area)),
  byStatus: counts(notes.map((n) => n.status)),
  totalInternalLinks: notes.reduce((sum, n) => sum + n.links.length, 0),
  sourceCoverage,
  claimBearingNotesWithoutSourceLinks: claimBearing.filter((n) => n.sourceLinks.length === 0).map((n) => n.title),
  isolatedGeneratedNotes: notes.filter((n) => n.links.length === 0 && inbound.get(n.title) === 0).map((n) => n.title),
  exactDuplicateBodies: [...hashes.values()].filter((titles) => titles.length > 1),
  evergreenNotesUnder120Words: notes.filter((n) => n.status === "evergreen" && n.words < 120).map((n) => ({ title: n.title, words: n.words })),
};

console.log(JSON.stringify(report, null, 2));
process.exitCode = report.claimBearingNotesWithoutSourceLinks.length
  || report.isolatedGeneratedNotes.length
  || report.exactDuplicateBodies.length
  ? 1
  : 0;

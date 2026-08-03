import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { concepts, examples, strategies, researchGaps, mocs, metaNotes } from "./vault-data.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");

function yamlString(value) {
  return `"${String(value).replaceAll("\\", "\\\\").replaceAll('"', '\\"')}"`;
}

function frontmatter(note) {
  const lines = [
    "---",
    `title: ${yamlString(note.title)}`,
    `type: ${note.type}`,
    `area: ${yamlString(note.area)}`,
    `status: ${note.status ?? "evergreen"}`,
  ];
  if (note.aliases?.length) {
    lines.push("aliases:", ...note.aliases.map((x) => `  - ${yamlString(x)}`));
  }
  lines.push("tags:", ...[...(note.tags ?? []), `area/${note.area.toLowerCase().replaceAll(" ", "-")}`].map((x) => `  - ${x}`));
  if (note.sourceFiles?.length) {
    lines.push("source_files:", ...note.sourceFiles.map((x) => `  - ${yamlString(x)}`));
  }
  lines.push("---", "");
  return lines.join("\n");
}

function renderAtomic(note) {
  const relationshipLines = Object.entries(note.relationships ?? {})
    .filter(([, links]) => links?.length)
    .map(([kind, links]) => `- **${kind}:** ${links.join("; ")}`)
    .join("\n");
  const sources = (note.sources ?? []).map((s) => `- ${s}`).join("\n");
  return `${frontmatter(note)}# ${note.title}

> [!summary]
> ${note.summary}

## Purpose

${note.purpose}

## Mathematical foundation

${note.math}

## Assumptions

${note.assumptions}

## Limitations

${note.limitations}

## Practical use

${note.practical}

## Relationships

${relationshipLines || "- See the containing Map of Content."}

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

${note.inference ? `> [!inference] Inferred connection\n> ${note.inference}\n\n` : ""}## Sources

${sources}
`;
}

function renderFreeform(note) {
  return `${frontmatter(note)}# ${note.title}\n\n${note.body.trim()}\n`;
}

const groups = [
  ["Concepts", concepts, renderAtomic],
  ["Worked Examples", examples, renderFreeform],
  ["Strategies", strategies, renderFreeform],
  ["Research Gaps", researchGaps, renderFreeform],
  ["Maps of Content", mocs, renderFreeform],
  ["Meta", metaNotes, renderFreeform],
];

const written = [];
for (const [base, notes, renderer] of groups) {
  for (const note of notes) {
    const folder = path.join(root, base, note.subfolder ?? "");
    fs.mkdirSync(folder, { recursive: true });
    const target = path.join(folder, `${note.title}.md`);
    fs.writeFileSync(target, renderer(note), "utf8");
    written.push(path.relative(root, target));
  }
}

const manifest = {
  generatedAt: new Date().toISOString(),
  generatedFiles: written.sort(),
};
fs.writeFileSync(path.join(here, "generated-manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
console.log(`Generated ${written.length} vault notes.`);

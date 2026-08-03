# Vault build tools

- `node .vault-tools/build-vault.mjs` regenerates the structured notes from `vault-data.mjs`.
- `node .vault-tools/validate-vault.mjs` checks filenames, links, source anchors, duplicate titles, required atomic-note sections, and orphans.
- `node .vault-tools/audit-vault.mjs` reports note types, areas, source coverage, citation gaps, isolation, and exact duplicate bodies.

The nine source articles remain in `Articles by Edward O. Thorp/`. The builder writes only files listed in `generated-manifest.json`; the source articles are not generated.

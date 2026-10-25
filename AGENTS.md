# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Approved design
Aoyama Gakuin student LINE information landing page. Keep the headline「まだ知らない選択肢を、いつもの毎日に。」, orange/black/yellow palette, Majima Memorial Hall illustration and student figures. No Inaba profile or OB/OG visit pitch. The mobile design was approved on 2026-10-23.

## Fidelity feedback — 2026-10-23
Compare the approved master and actual browser side by side at the same width. Inspect every display glyph: weight, size, baseline, rotation, spacing and line breaks. Preserve full handdrawn underlines, three rays, clouds, loop arrows and curved CTA boundary. Uniformly rotated text is insufficient. The approved mobile reference is generated_images/exec-ed96bf80-79c3-4bb5-b1ec-dc4606dfcc9b.png in the parent workspace.

The user requires continuing until reproduction fidelity is at least 98%. The earlier passed QA is withdrawn. Do not claim 98% without a defined and reproducible comparison; visible illustration, typography, and density differences remain blocking. Preserve functional live text and controls; do not substitute a screenshot of the page to inflate a metric.

## Source extraction approved — 2026-10-23
The user explicitly selected 「原画から直接切り出す（推奨）」. Use exact, individually extracted source headline/decorative/illustration assets instead of regenerated substitutes. Main headings retain accessible text; body, buttons and navigation stay live HTML. This supersedes the earlier preference for visible live heading glyphs. Never substitute a full-page screenshot or flatten the working controls.

## Hero cleanup — 2026-10-24
The user flagged the desktop campus area: keep the original campus caption/underline/curved arrow, remove the extra loop crossing that caption, and mask unrelated crop fragments around the cloud and headline. Do not change the approved glyph shapes or mobile composition.

## Native code and marker redesign — 2026-10-24
The user explicitly supersedes raster source extraction: render all visible headings, logo, labels, numbers, icons and simple decoration in HTML/CSS/SVG, with live readable text at every breakpoint. Keep illustrations as high-resolution assets. Replace the yellow marker/sticky-note treatment around IT/career/event callouts with restrained orange rules and open typography. Retain the orange/black character, campus imagery, right-aligned fixed header, existing LINE destination and accessible interactions. This intentional redesign supersedes the earlier 98% pixel-matching target for the replaced elements.

## Approved speech-bubble direction — 2026-10-24
The user rejected the thin orange rule callouts and selected the SECOND displayed generated option: exec-df475a81-ff22-4db1-81cb-97379262a5ad.png. This supersedes the open-typography callout preference. Use warm cream speech bubbles with orange outlines/offset edges for IT and career, and a solid orange/white event bubble. Keep live HTML text and scalable vector/CSS shapes; do not turn labels into raster images. Preserve the existing main headline, campus/student art, CTA destination and right-aligned sticky header.

## Lower-section master fidelity — 2026-10-24
The user flagged the three-step section and lower-page fidelity. Restore the master composition using live text and scalable decoration: heavier handwritten step labels, yellow double underlines, orange drawn arrows/rays, no extra 01/02/03 labels above the steps. Information rows use large orange outline numbers, bold headings, jagged underlines, larger illustration presence, and a white theme-example capsule. Closing follows the master hierarchy and curved boundary. Keep the selected hero bubbles and existing LINE URL. On narrow screens prioritize readable text with no illustration overlap; do not shrink the complete desktop layout as an image. Compare full lower-page regions and focused step/CTA crops, not just the hero. Do not claim a numerical fidelity score without a reproducible measurement.

## Approved closing CTA direction — 2026-10-25
The user selected the THIRD displayed CTA proposal, exec-5084d3fe-2d4a-42cc-8b01-67a41a54aa07.png. Use the dark section with curved white boundary, cream reassurance speech bubble, white headline with orange LINE, explicit information-delivery benefit, orange button with black text and white arrow circle. On the right, build a tilted phone with three live-text information bubbles and the orange-hood student illustration. This supersedes the former closing yellow band and title underline. Preserve existing per-glyph transforms, hero, three steps, right-aligned sticky header and LINE URL. At narrow widths stack copy, illustration and button; never cover message labels with the student. Keep native HTML/CSS/SVG for text and simple shapes.

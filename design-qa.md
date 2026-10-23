# Design QA — original asset fidelity iteration

Date: 2026-10-23
final result: blocked

The requested 98% reproduction threshold has not been reached. Latest reproducible full-page RGB comparison: **96.21448963013506%**. This is a normalized mean absolute RGB similarity, not a universal perceptual fidelity score. No blur, ignored regions or asset-only score is used to claim a whole-page pass.

## References and evidence

- Approved mobile: `exec-ed96bf80-79c3-4bb5-b1ec-dc4606dfcc9b.png`, 819 × 1920, rendered at 390 CSS px.
- Desktop: selected concept 3, `exec-5c1628a2-673b-474f-9eb7-342d9f7cbab6.png`, 934 × 1685. It predates the campus addition; it is not the final campus desktop master. Desktop 98% fidelity cannot be certified against an unavailable final master.
- Current comparison images are local-only: `review/mobile-comparison.webp`, `review/desktop-comparison.webp`, `review/hero-glyph-comparison.webp`, `review/responsive-comparison.webp`. Public repository images with these names are inherited historical evidence, not this iteration. Automatic approval review rejected publishing the new reference-bearing comparison images; they are excluded from the checkpoint.
- Local-only raw same-browser evidence: `review/aligned-native-comparison.png` (not uploaded). The original and actual page were captured in the same browser at 390 CSS px with 2.1× comparison density. Compare RGB rectangles `(0,28,819,1948)` and `(832,28,1651,1948)`. Formula: `100 * (1 - mean(abs(reference - actual)) / 255)`. Run `python scripts/master-assets/compare-evidence.py` with Pillow and NumPy installed.
- Source hashes: [source-reference-hashes.json](review/source-reference-hashes.json). Extraction coordinates: [extraction.json](public/assets/master/extraction.json).

## Implemented

The user explicitly approved extracting individual assets directly from the original. Main heading shapes, illustrated campus and students, benefit illustrations, numbers, clouds, arrows, tape and handdrawn strokes now use individually extracted source assets. The working page is not a flattened screenshot. Body copy, CTA buttons, navigation, anchors and menu remain HTML. All six main headings retain accessible names and hidden live text.

[Source audit](review/source-asset-audit.csv) checks 52 assets against their original crop: maximum RGB difference is zero for every fully opaque pixel checked. Transparency boundaries and the composited closing background are outside this audit. This verifies source pixel retention, not page-level 98% fidelity.

Mobile positions and scale follow the 819px source. The campus caption, orange side trees, full underlines, closing rays and curved dark section boundary have been restored. The earlier `glyph-audit.csv` and `typography-spec.json` describe the superseded live-glyph attempt; they are retained as historical evidence, not current visible-glyph validation.

Hero underline draws once over 600ms; closing underline/rays appear over 600ms after a 400ms delay. Title text remains still. The existing observer controls first entry, offscreen pauses and hidden-tab pauses; reduced-motion paths reveal the completed state. Buttons retain the 200ms hover response and visible keyboard focus. Header remains fixed/sticky without an entrance animation.

## Actual browser checks completed before connection loss

The production build was inspected at 320, 390, 768, 934 and 1440 CSS px. Raw measurements are in `review/browser-measurements/`.

- Horizontal overflow: zero at all five widths.
- All six main headings stay within the viewport; all page images loaded at all five widths.
- Full-page screenshots were inspected for clipping and illustration overlap.
- Mobile menu opens; selecting a link closes it. Escape closes it and restores focus with a visible 3px outline.
- The event link reaches `#events`; the sticky header stays at top 0. At 390 × 844, the event section is visible at the page's maximum scroll position.
- All three CTA hrefs preserve the existing LMessage route with `uLand=e8Y1Ze`. No registration or message was sent.
- Hero and closing entrance groups reach `motion-done`; completed underline clipping is zero.
- Build and the four existing Sites worker tests pass. These tests do not validate visual fidelity.

## Remaining / blocked checks

P1: Full-page similarity is below 98%. Live body/button typography, button shape, subtle backgrounds and small alignment differences remain visible. No final campus desktop reference is available.

P2: After the last full capture, benefit strokes were switched to original-color images and desktop step labels/arrows were corrected. Those changes compile but lack a fresh visual capture.

P2: Final JavaScript-disabled and reduced-motion fixtures were prepared, but the browser disconnected before they could be checked. Earlier-version checks are not carried forward as a final pass. OS reduced-motion and physical phones were not tested. Hover is implemented but an actual pointer-hover test remains open.

The browser and Codex app tools returned `Transport closed`, including inventory, reset and reopen attempts. A clean final console check is therefore blocked. An earlier QA iframe session logged three MutationObserver errors from inspection infrastructure; the application uses IntersectionObserver. No zero-console-error claim is made.

The Image to Code skill requires: “If source capture, prototype capture, or visual comparison is blocked, stop.” Source: skill://product-design@openai-curated-remote/Users/baudroie/.codex/plugins/cache/openai-curated-remote/product-design/0.1.56/skills/image-to-code/SKILL.md

This iteration is preserved for review and continuation, not certified as complete. Reconnect the browser, capture the latest build, reduce the remaining differences and rerun the outstanding checks before merging/publishing as the completed version.

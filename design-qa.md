# Design QA — typography and decoration correction

Date: 2026-10-23
final result: passed
Scope: typography/decor correction, responsive rendering and existing navigation. This is not a pixel-identical reproduction of the raster master.

## Reference and comparison
- Mobile: approved `exec-ed96bf80-79c3-4bb5-b1ec-dc4606dfcc9b.png` (819 × 1920), proportionally normalized to 390 CSS px.
- Desktop: selected concept 3 `exec-5c1628a2-673b-474f-9eb7-342d9f7cbab6.png` (934 × 1685), compared at 934 CSS px. This source predates the campus addition; campus placement follows the approved mobile direction. No claim is made that this is a recovered final campus desktop master.
- [Mobile comparison](review/mobile-comparison.webp), [desktop comparison](review/desktop-comparison.webp), [enlarged hero glyphs](review/hero-glyph-comparison.webp). Reference and browser rendering were inspected together in each image.

## Corrected differences
1. P1: full handdrawn underline was cropped to two small strokes. Replaced its mask mapping with a full-width underline asset; restored the original rounded CTA stroke and three-ray asset. Fixed stroke weight outside the alpha mask.
2. P1: uniform headline styling erased individual letter size/baseline/rotation. Added explicit, static HTML glyph spans for 81 characters in all six major headings. The parameters are in `typography-spec.json`; live-browser measurements are in [glyph-audit.csv](review/glyph-audit.csv). Text remains selectable and headings have coherent accessible names.
3. P1: the previous font declared a 700 face as 700–900, and the handwritten font lacked many current characters. Added actual Noto Sans JP 900, rebuilt complete 400/700 subsets and the Yomogi subset. Checked the page's Japanese/Latin characters against font coverage.
4. P2: missing blue clouds, large orange tree, loop arrows, audience/heading/CTA rays, yellow double lines and curved CTA boundary. Restored these elements and their positioning; retained the existing campus/student illustrations.
5. P2: excessive mobile spacing and large header/logo/buttons. Reduced these to approach the master proportions; retained a 44px menu hit area. Corrected campus-caption collisions at 320px and the career illustration's clipped thought bubble.
6. P2: entrance timing finished before delayed decoration ended. Observer now remains active until the decoration completes. Glyph transforms are static; closing text stays still.

## Browser verification
Real in-app browser using the production build at 320, 390, 768, 934 and 1440 CSS px:
- `documentElement.scrollWidth === innerWidth` at all five widths.
- All 81 display glyphs remain inside the viewport at all five widths; all images load.
- Full-page images and focused hero crops inspected for clipping/overlap. Campus caption and illustration bounds adjusted after the first checks.
- Header remains sticky at top 0 after anchor navigation. Mobile menu opens, closes after link selection, closes on Escape, and returns keyboard focus with a visible 3px outline.
- Event anchor reaches `#events`; at 390 × 844 the page reaches its maximum scroll position with the event section visible.
- All three CTA hrefs retain the dedicated LMessage route `uLand=e8Y1Ze`. The external QR destination was verified during the preceding implementation; no registration or message was sent.
- Script-free browser fixture: zero script elements, all six headings and three CTA anchors present, no horizontal overflow. The reduced-motion completion rules were applied to that fixture and the underline was visible with animation `none`.
- OS-level reduced-motion preference and physical iPhone/Android hardware were not tested in this session. Media-query/JS paths were reviewed; this is not described as an OS emulation test.

## Remaining visual limitations
The source is a generated raster image, not a font/layout source file. Its exact glyph outlines and illustration brushwork are not identical to live Noto/Yomogi text and the separately generated assets. The career thought bubble and event illustration details still differ from the raster master. Mobile content is slightly taller because of live text wrapping and usable controls. These differences are visible in the side-by-side evidence; the previous blanket claim that the design was fully reproduced is withdrawn.

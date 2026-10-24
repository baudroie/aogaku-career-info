# Design QA — publication retry, 2026-10-23

## Status
Review release requested by the user. The 98% fidelity target remains OPEN. Do not label this release as 98% complete.

## Design changes
Individually extracted original headings, campus/student illustrations, benefit artwork, tape, numbers, clouds, rays, arrows and strokes replace approximations. Accessible heading names remain; body, buttons, menu and navigation remain live HTML. Source audit: review/source-asset-audit.csv (52 original crops, opaque RGB unchanged; not a page fidelity score).
Latest CSS refines mobile body/button type, baseline/spacing and orange tone. It restores the audience tape above the Hero boundary and the curved closing boundary. The Hero lead no longer produces a 1px horizontal overflow. Desktop navigation remains right aligned. No Inaba profile, OB/OG pitch or obsolete individual employee links.

## Measured comparison
Approved mobile source: 819 × 1920. Actual browser: 390 CSS px scaled by 2.1, beside the source at native size.
Full-page, unfiltered RGB comparison: **96.89095489810359%**.
Formula: 100 * (1 - mean(abs(reference RGB - actual RGB)) / 255).
Capture: local qa/fidelity/publish-native-comparison.png. Reference rectangle (0,28)-(819,1948); actual rectangle (832,28)-(1651,1948). Both initial animations completed before capture. No blur, ignored areas, or score selection.
The screenshot containing the full master is retained locally and is not published.
Live body/button glyph shapes and subtle background/edge rendering still differ. This scalar is not proof of perceptual equivalence. The final campus desktop master is unavailable; no desktop 98% claim. Platform fonts can differ.

## Real browser verification
Production bundle: index-BznV6cmf.css / index-Ue6QpZbe.js.
320 / 390 / 768 / 1440 CSS px:
- Horizontal overflow 0; all six headings inside viewport.
- All images loaded; screenshots visually inspected for clipped text and text/illustration collisions.
- Header remains sticky; no header entrance animation.
390px interactions: menu opens, Escape closes and restores focus with a 3px outline; event anchor closes menu, reaches #events, header top remains 0.
All three LINE CTA hrefs retain the existing LMessage destination ending uLand=e8Y1Ze. No registration or message submitted.
Clean standalone desktop tab: no console errors observed.
JavaScript-removed fixture: zero scripts, all images loaded, six headings and CTA content visible. Reduced-motion fixture: preference branch forced true and matching CSS rules activated; completed state visible, motion-ready absent, overflow 0. This is a branch test, not an OS preference or physical-phone test.
Latest build passed; all four existing Sites worker tests passed. These are packaging tests, not fidelity tests.
Actual pointer-hover testing and physical devices remain unverified.

## Motion
Hero underline: one 600ms drawing reveal. Closing group: short arrival, underline and rays 600ms after 400ms delay. Background note: one slow 3.6s movement. IntersectionObserver starts once; offscreen/hidden-tab motion pauses. Reduced motion exposes the completed state. Button hover CSS: 200ms, up 2px and arrow right 3px, reduced displacement on mobile. Display glyph transforms remain intact.

## Publication contents
Publish the functioning LP and its individual assets to the existing GitHub Pages repository. Exclude local QA fixtures, full-master comparison captures and unused generated candidates. This public review release does not close the fidelity target.


## Hero overlap correction — 2026-10-24
User screenshot identified a thin loop crossing the campus caption, yellow neighboring crop remnants beside the IT note, and a dark fragment at the cloud's lower right. Removed only the extra left loop element. Preserved the original campus caption, underline and curved arrow. Added desktop-only clipping around the existing headline and lower cloud crops to hide unrelated adjacent artwork without redrawing their shapes. Mobile image geometry and glyph transforms are unchanged.
Production bundle: index-Dsb_l0gc.css / index-DSZ2bBBk.js. Browser checks at 320,390,768,1440px: horizontal overflow 0, all headings within viewport, no extra left loop, clipping active only above 600px. Before/after inspected at 1440px. Build and four existing worker tests pass. No new page-level fidelity percentage claimed. Local evidence in qa/hero-cleanup/.

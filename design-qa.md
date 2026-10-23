# Design QA

Status: passed (visual / responsive implementation)
Date: 2026-10-23

## Reference
Approved mobile concept: exec-ed96bf80-79c3-4bb5-b1ec-dc4606dfcc9b.png. Desktop layout uses the approved concept 3, with the requested campus illustration.

## Preserved visual anchors
- Original headline, orange emphasis on 選択肢, yellow student-only label.
- Campus on left and students on right, hand-drawn illustration style.
- Three numbered information sections and a dark closing CTA.
- Mobile order follows the approved image; actual text is larger and sections taller for legibility.

## Browser checks
Production build served locally and inspected in a real Chromium browser at 320, 390, 768 and 1440 CSS pixels. Each final document scrollWidth equals viewport width. Images load successfully, headings and CTA labels are visible. 768px closing decoration overflow was found and corrected.
- Sticky header remains at top after anchor navigation.
- Mobile menu opens/closes, Escape restores focus, anchor selection closes menu.
- Keyboard focus outline is visible.
- All CTA links use the dedicated LMessage route (e8Y1Ze); destination displays the LINE QR landing page. No friend registration or message sending was performed.
- Production build succeeds. No page console errors observed.
- Motion uses one-shot IntersectionObserver, 600ms reveal, 3.6s label motion, 500ms closing entrance. No infinite animation or moving text glyphs.

## Accessibility verification scope
The source is semantic HTML; essential content has no JavaScript visibility dependency. prefers-reduced-motion rules disable all animation and transitions and show completed decoration. Code paths were reviewed; OS/browser reduced-motion emulation was not available in this browser-control session. No physical iPhone/Android device or screen-reader test was performed.

## Operations
LMessage route created specifically for this LP; delivery messages and event schedule remain separately managed. Seminar content is labelled as topic examples.

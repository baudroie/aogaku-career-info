# Master asset extraction

The user explicitly selected direct source cropping on 2026-10-23. These scripts preserve original image pixels; they do not regenerate illustrations or rasterize the entire page.

Run the numbered `.cjs` scripts in order with Node and `sharp`. Set `MASTER_WORKSPACE` to the directory containing `generated_images/` and this repository. `SHARP_MODULE` may point to an existing Sharp module. The two source image names are listed in `public/assets/master/extraction.json` and `design-qa.md`.

Headings have accessible names and hidden live text. Body copy, CTA buttons, navigation, menu and anchors remain HTML. Original white fills inside the illustrations are retained; the hero's outer background is separated with connected-component segmentation. Closing strokes are separated from the static headline and tape for animation.

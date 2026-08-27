# FullStack (Frontend Examples)

A small collection of frontend HTML/CSS examples and experiments. The repository contains several standalone HTML pages and supporting assets demonstrating layouts, selectors, typography, grids, and small UI components (including a CSS-only mustache illustration).

## Contents

Key files and what they demonstrate:

- [mustache.html](C:/Users/Lenovo/OneDrive/Desktop/FullStack/mustache.html) — A CSS-only mustache illustration built using pseudo-elements (::before / ::after) and gradients.
- [Login.html](C:/Users/Lenovo/OneDrive/Desktop/FullStack/Login.html) — A sample login form layout.
- [Grids.html](C:/Users/Lenovo/OneDrive/Desktop/FullStack/Grids.html) and [Grids2Dashboard.html](C:/Users/Lenovo/OneDrive/Desktop/FullStack/Grids2Dashboard.html) — Grid layout experiments.
- [Product-Cards.html](C:/Users/Lenovo/OneDrive/Desktop/FullStack/Product-Cards.html) — Example product card designs.
- [Typography.html](C:/Users/Lenovo/OneDrive/Desktop/FullStack/Typography.html) — Typography and font examples.
- [flex.html](C:/Users/Lenovo/OneDrive/Desktop/FullStack/flex.html) — Flexbox experiments.
- [selectors.html](C:/Users/Lenovo/OneDrive/Desktop/FullStack/selectors.html), [psuedoclass.html](C:/Users/Lenovo/OneDrive/Desktop/FullStack/psuedoclass.html), [combinators_selectors.html](C:/Users/Lenovo/OneDrive/Desktop/FullStack/combinators_selectors.html) — CSS selector demos.
- [style.css](C:/Users/Lenovo/OneDrive/Desktop/FullStack/style.css), [gridstyle.css](C:/Users/Lenovo/OneDrive/Desktop/FullStack/gridstyle.css), [grid2.css](C:/Users/Lenovo/OneDrive/Desktop/FullStack/grid2.css) — Shared stylesheet examples.
- Images: [SOLO.jpg](C:/Users/Lenovo/OneDrive/Desktop/FullStack/SOLO.jpg), [SOLO1.jpg](C:/Users/Lenovo/OneDrive/Desktop/FullStack/SOLO1.jpg), [SOLO2.jpg](C:/Users/Lenovo/OneDrive/Desktop/FullStack/SOLO2.jpg)

The repository also contains several smaller example pages and tests (see the file listing in the project root).

## How to view

These are static HTML files — the easiest ways to preview them:

1. Open directly in a browser
   - Double-click any `.html` file (e.g., open [mustache.html](C:/Users/Lenovo/OneDrive/Desktop/FullStack/mustache.html)) or drag it into a browser window.

2. Use VS Code Live Server (recommended for frequent edits)
   - Install the "Live Server" extension in VS Code and click "Go Live". Then open the desired page from the served URL.

3. Run a simple local HTTP server (works well for testing fetches or relative asset paths)
   - Python 3: run `python -m http.server 8000` from the repository root, then open `http://localhost:8000/mustache.html` in your browser.

## Notes about the mustache example

- The mustache is implemented in [mustache.html](C:/Users/Lenovo/OneDrive/Desktop/FullStack/mustache.html) using a single `<div class="mustache">` and CSS pseudo-elements (`::before` and `::after`).
- A small `.bridge` element was added to visually connect the two lobes and make it look like a proper handlebar mustache.
- The look is controlled entirely via CSS — gradients, box-shadow, transforms, and clip-path are used to shape and shade the lobes.


## Contributing

This repo is a personal playground of examples. Contributions and enhancements are welcome — open a PR with small, focused changes. When adding examples, keep each demo self-contained and include comments explaining the key techniques used.


---
# Portfolio — Afloarei Razvan-Bogdan

Static portfolio website for **Afloarei Razvan-Bogdan** — AutoCAD drafting, topographical & cadastral surveys, and civil engineering design (institutional buildings, roads, bridges). Experience with private, PNRR (EU RRF / NextGenerationEU) and state-funded projects.

Live site: **https://ARazvan99.github.io**

---

## About PNRR

PNRR (Romanian: *Planul Național de Redresare și Reziliență*) is Romania's national plan implementing the **EU Recovery and Resilience Facility (RRF)** — the main financial instrument of **NextGenerationEU**, the European Union's COVID-19 economic-recovery programme. PNRR projects are funded by the EU through the RRF and disbursed to Romania for investments and reforms.

---

## Stack

- Plain HTML, CSS, vanilla JavaScript — **no build tools, no frameworks, no CDN**.
- Bilingual: English / Romanian (toggle in the nav, preference saved in `localStorage`).
- Self-contained, mobile-first, AA contrast, keyboard-usable.

## File structure

```
.
├── index.html                # landing page, 7 sections, gallery → project pages
├── project-1.html … project-6.html   # one per project
├── style.css                 # all styles (palette, layout, project pages, responsive)
├── script.js                 # mobile menu, smooth scroll, EN/RO toggle, footer year
├── README.md
└── images/
    ├── drawing1.svg … drawing6.svg   # hero image for each project
    └── projects/
        ├── p1/  01-plan.svg  02-section.svg  03-detail.svg
        ├── p2/  01-plan.svg  02-section.svg  03-detail.svg
        ├── p3/  01-plan.svg  02-section.svg  03-detail.svg
        ├── p4/  01-plan.svg  02-section.svg  03-detail.svg
        ├── p5/  01-plan.svg  02-section.svg  03-detail.svg
        └── p6/  01-plan.svg  02-section.svg  03-detail.svg
```

## Editing content

All copy lives in **two places**:

1. **English default text** is in each HTML file (`index.html` and `project-N.html`). Each translatable element has a `data-i18n="..."` attribute.
2. **Romanian translations** (and any further edits to English) live in the `I18N` object at the top of `script.js`.

To change a sentence:
1. Find the matching key in the HTML file (e.g. `data-i18n="about.p2"` or `data-i18n="project1.overview"`).
2. Update the English text in the element.
3. Update the same key in both the `en` and `ro` sections of `script.js`.

To edit a specific project's overview, scope, location, year, area, client, funding, role or image captions, edit the matching `projectN.*` keys in `script.js`.

The project overview text is currently marked `[PLACEHOLDER OVERVIEW — EDIT ME]` / `[PLACEHOLDER — EDITEAZĂ]` — replace it with your real description when you have the project content.

## Replacing a placeholder drawing

### Hero image (top of each project page)

Each project's hero image lives in `images/` as `drawingN.svg`. To swap it:

1. Export your drawing from AutoCAD as PNG, JPG or SVG.
2. Drop it into `images/` and replace `drawingN.svg` (or save it as `drawingN.png` and edit `project-N.html` accordingly).

### Gallery images (bottom of each project page)

Each project has 3 additional image slots in `images/projects/pN/`:
- `01-plan.svg`
- `02-section.svg`
- `03-detail.svg`

To replace them, drop your real exports into that folder (same filenames) and edit `project-N.html` only if the file extension changes.

## Adding a new project

1. Copy any `project-N.html` to `project-N+1.html` and rename.
2. Update inside the new file:
   - `<title>` and `meta description`
   - The eyebrow number (`Project 0N+1`)
   - The hero `<img src="images/drawingN+1.svg">` and `<a href="images/drawingN+1.svg">`
   - Every `data-i18n="projectN+1.*"` reference
   - The three gallery `<img src="images/projects/pN+1/...">` paths
   - The Prev/Next links (don't forget to wrap the chain — update the neighbour pages too)
3. Create the folder `images/projects/pN+1/` and copy in the 3 placeholder SVGs (or your own exports).
4. Add `drawingN+1.svg` in `images/` (or use an existing one).
5. Add a new gallery `<li>` in `index.html` with `href="project-N+1.html"`.
6. Add the matching `projectN+1.*` keys to **both** `en` and `ro` sections in `script.js`.

## Removing a project

1. Delete its `project-N.html`.
2. Delete its `<li>` in `index.html`.
3. Delete its `images/projects/pN/` folder.
4. Delete its `projectN.*` keys from both language sections in `script.js`.
5. Update the Prev/Next links on the two neighbour project pages so they skip the removed one.

## Local preview

You don't need anything installed. Just double-click `index.html` and it opens in your browser.

For the smoothest experience (and to mirror how GitHub Pages serves the site), run a tiny local server:

```bash
# Python
python -m http.server 8000
# or Node
npx serve .
```

Then open http://localhost:8000

## Publishing (already done)

The site is hosted by GitHub Pages from the `main` branch, root directory.

To republish after changes:

```bash
git add .
git commit -m "Update portfolio"
git push
```

GitHub Pages will rebuild automatically within ~1 minute.

## Contact

**Afloarei Razvan-Bogdan**
- Email: afloareirazvan@yahoo.com
- Phone: +40 768 981 416
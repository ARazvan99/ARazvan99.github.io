# Portfolio — Afloarei Razvan-Bogdan

Static portfolio website for **Afloarei Razvan-Bogdan** — AutoCAD drafting, topographical & cadastral surveys, and civil engineering design (institutional buildings, roads, bridges). Experience with private, PNRR, EU and state-funded projects.

Live site: **https://ARazvan99.github.io**

---

## Stack

- Plain HTML, CSS, vanilla JavaScript — **no build tools, no frameworks, no CDN**.
- Bilingual: English / Romanian (toggle in the nav, preference saved in `localStorage`).
- Self-contained, mobile-first, AA contrast, keyboard-usable.

## File structure

```
.
├── index.html        # single page, smooth-scroll sections
├── style.css         # all styles (palette, layout, responsive)
├── script.js         # mobile menu, smooth scroll, EN/RO toggle, footer year
├── README.md
└── images/
    ├── drawing1.svg  # Topographical Survey — Urban Area
    ├── drawing2.svg  # Cadastral Plan — Lot Subdivision
    ├── drawing3.svg  # Institutional Building — School
    ├── drawing4.svg  # Road Design — County Road
    ├── drawing5.svg  # Bridge Project — Concrete Bridge
    └── drawing6.svg  # PNRR-Funded Civic Project
```

## Editing content

All copy lives in **two places**:

1. **English default text** is in `index.html` (each translatable element has a `data-i18n="..."` attribute).
2. **Romanian translations** (and any further edits to English) live in the `I18N` object at the top of `script.js`.

To change a sentence:
1. Find the matching key in `index.html` (e.g. `data-i18n="about.p2"`).
2. Update the English text in the element.
3. Update the same key in both the `en` and `ro` sections of `script.js`.

## Replacing a placeholder drawing

Each gallery item points to a file in `images/`. To swap a placeholder for a real export:

1. Export your drawing from AutoCAD as PNG, JPG or SVG (SVG keeps the file lightweight).
2. Name the file exactly like the placeholder, e.g. `drawing1.png`.
3. Drop it into the `images/` folder, replacing `drawing1.svg`.
4. Open `index.html` and find the matching `<img>` tag — change `src="images/drawing1.svg"` to `src="images/drawing1.png"` and update the `alt=""` text to describe the real drawing. The same edit applies to the wrapping `<a href="...">` so the full-size link works too.
5. Optional: also rename `images/drawing1.svg` → `images/drawing1.png` to avoid editing `index.html` at all.

The captions and tags (e.g. "Topography", "Topographical Survey — Urban Area") are stored as translations in `script.js`, so they switch correctly between EN and RO.

## Local preview

You don't need anything installed. Just double-click `index.html` and it opens in your browser.

For the smoothest experience (and to mirror how GitHub Pages serves the site), you can also run a tiny local server:

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

**Afloarei Razvan-Bogdan** — afloareirazvan@yahoo.com
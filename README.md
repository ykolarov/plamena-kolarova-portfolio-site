# Portfolio site notes

This is a single-page static portfolio starter built from the structure of the PSD:

- Hero
- About
- Services
- Selected work
- Featured categories
- Contact

## What to replace first

1. Update contact links in `index.html`.
2. Replace the placeholder project visuals inside `.work-card` items with your own `<img>` elements.
3. Edit the copy in the hero and about sections once your final positioning is decided.

## Adding more projects

Duplicate one `.work-card` block in `index.html`, then set:

- `data-category="3d"`
- `data-category="web"`
- `data-category="campaign"`
- `data-category="brand"`

That keeps the filter buttons working automatically.

## Files

- `index.html` — page structure and content
- `styles.css` — visual design and responsive layout
- `script.js` — project filtering and reveal animations

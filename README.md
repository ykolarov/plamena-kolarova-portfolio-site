# Portfolio site notes

This is a single-page static portfolio starter built from the structure of the PSD:

- Hero
- About
- Services
- Filtered field-based portfolio sections
- Contact

## What to replace first

1. Update contact links in `index.html`.
2. Replace the placeholder project visuals inside each `.slider-slide` item with your own `<img>` elements.
3. Edit the copy in the hero and about sections once your final positioning is decided.

## Adding more fields

Duplicate one `.field-section` block in `index.html`, add a matching `.field-filter` button above it, then edit:

- the field title
- the short description
- the tools list
- the slideshow slides inside `.slider-stage`

To add more images to a category, duplicate one `.slider-slide` inside that field's `.slider-stage`.
The arrows, dots, and slide counter update automatically.

## Files

- `index.html` — page structure and content
- `styles.css` — visual design and responsive layout
- `script.js` — reveal animations

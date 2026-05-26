# Plamena Kolarova Portfolio

Single-page graphic design portfolio built with static HTML, CSS, and JavaScript.
The site is designed to be served directly through GitHub Pages without a build step.

## Files

- `index.html` - page structure, content, image references, metadata, and contact links
- `styles.css` - responsive layout, theme styling, portfolio sections, and lightbox styling
- `script.js` - language switching, sliders, lightbox behavior, AJAX contact form handling, and reveal effects
- `assets/optimized/` - lightweight WebP preview images used by the page
- original image folders - full-size artwork used for "open original" lightbox links
- `Logos/fav_icon.png` - high-resolution favicon source
- `favicon.ico`, `Logos/favicon-16x16.png`, `Logos/favicon-32x32.png`, `Logos/apple-touch-icon.png` - browser icon variants
- `.nojekyll` - tells GitHub Pages to serve the static files as-is

## GitHub Pages Deployment

Use GitHub Pages with the repository root as the publishing source:

1. Push the repository to GitHub.
2. Open the repository on GitHub.
3. Go to `Settings` > `Pages`.
4. Under `Build and deployment`, choose `Deploy from a branch`.
5. Select branch `main` and folder `/ (root)`.
6. Save and wait for GitHub Pages to publish the site.

For a project repository, the site URL will usually be:

```text
https://YOUR_USERNAME.github.io/portfolio-site/
```

For a user site, name the repository `YOUR_USERNAME.github.io` and the URL will be:

```text
https://YOUR_USERNAME.github.io/
```

## Editing

Most content edits happen in `index.html`. The language-toggle copy is stored in
`script.js`, so update matching text there when changing visible copy that switches
between English and Bulgarian.

For visual edits, update `styles.css`.

For image replacements:

1. Add the new optimized image to `assets/optimized/`.
2. Keep the original full-resolution image in the relevant source folder if it should
   open in the lightbox's original-image link.
3. Update the matching `src`, `data-original-src`, `width`, and `height` values in
   `index.html`.
4. Change the `?v=` cache-busting value so browsers fetch the new file.

## Contact Form

The contact form posts to FormSubmit with AJAX, so visitors can send messages
without opening an email app or leaving the page.

Before relying on the live form, publish the site and submit the form once. The
first submission sends a confirmation email to `kolarovaplamena@gmail.com`; after
that confirmation is accepted, future submissions are delivered to that inbox.

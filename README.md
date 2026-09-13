# aedan-site

A six page personal profile site. Plain HTML and CSS, one small script on the
photos page, no build step. Open `index.html` in a browser and it runs.

## Files

```
index.html        home / profile
about.html        long bio
skills.html       certifications and skills
experience.html   work history and education
photos.html       gallery with click to enlarge
contact.html      email, LinkedIn, GitHub
style.css         all styling, organized in numbered sections
images/           your photos go here (see images/README.txt)
```

## First things to edit

1. **LinkedIn URL.** Placeholder in `index.html` and `contact.html`, search for
   `your-linkedin-here`.
2. **Photos.** Add `images/profile.jpg` plus `photo-1.jpg` through `photo-6.jpg`.
3. **The bio on about.html.** I drafted it from your resume so the page is not
   empty. Rewrite it in your own voice.
4. **AWS certification name** on `skills.html`, so it matches your actual badge.
5. **The scrolling status strip** at the top of each page, and the fake profile
   view counter in the header. Both are jokes, change or delete them.

## Changing the look

Everything lives in the `:root` block at the top of `style.css`. Change
`--bg-deep`, `--bar`, and `--border` and the whole site changes color. Set
`--border-w` to `3px` for even chunkier borders.

## Adding a section to any page

Copy this block inside a `<main class="col-main">` or `<aside class="col-side">`:

```html
<section class="module">
  <h2>Title bar text</h2>
  <div class="module-body">
    <p>Content.</p>
  </div>
</section>
```

Add `class="module tinted"` for the light gray fill instead of white.

## Publishing

Any static host works. GitHub Pages is free: push this folder to a repo, then
Settings, Pages, deploy from the main branch root. The site will be at
`aedan-johnson.github.io/repo-name`.

## Accessibility and performance notes

- No external fonts, images, or scripts, so the pages load in one request each
  plus the stylesheet.
- The background pattern is drawn in CSS, not a tiled image file.
- The scrolling strip stops for visitors with reduced motion turned on.
- Focus outlines are visible for keyboard users, and the gallery thumbnails are
  real buttons so they work without a mouse.
- A print stylesheet strips the nav and background if anyone prints a page.

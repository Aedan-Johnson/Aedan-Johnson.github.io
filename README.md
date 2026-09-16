# aedan-site

My personal site, styled like an old MySpace / SpaceHey profile: one long
scrolling page with navy and tan module boxes instead of separate tabbed
pages. No frameworks, no build step, no external CSS library, just plain
HTML/CSS and a little vanilla JS.

## Files

```
index.html   the whole site: about, interests, the garage, experience,
             certs & skills, contact
style.css    every bit of the styling, module boxes, layout, the boot
             screen, and mobile breakpoints
boot.js      fake Windows 98 startup screen, shown once per browser session
images/      photos go here, see images/README.txt for exact filenames
```

## How it's built

Everything lives on `index.html` as stacked `<section class="module">`
blocks, each with a colored header bar and a body:

```html
<section class="module" id="interests">
  <h2 class="module-header">Interests</h2>
  <div class="module-body">
    ...
  </div>
</section>
```

Give a module `module--tan` instead of the default navy header for the
secondary sidebar widgets (The Basics, On This Page). The nav bar at the
top just links to `#id` anchors on the same page, no separate pages to
maintain.

Two grid helpers handle the photo tiles:

- `.tile-grid--square` for square album art (Interests > Music)
- `.tile-grid--poster` for movie-poster shaped images (Interests > Movies)
- `.tile-grid--mixed` for the mismatched Garage extras (guitar is tall,
  F1 is wide), add `tile--tall` to a `<figure>` to force the portrait crop

## The boot screen

A fake Windows 98 startup screen plays once per browser session before the
profile shows up: `boot.js` plus the `#boot-screen` styles at the bottom of
`style.css`. Click anywhere, press a key, or wait about a second and a
half, and it fades into the site.

It's a deliberate mismatch: the rest of the site dropped the Windows 98
look entirely, but the boot screen was too fun to cut. It uses
`sessionStorage` so it only plays once per browser session (not on every
scroll or reload), and it respects `prefers-reduced-motion`.

## Stuff I still need to fill in

- **LinkedIn URL.** Still a placeholder, search `index.html` for
  `your-linkedin-here`.
- **Photos.** None of the interest photos are in yet (profile pic, PC
  build, guitar, F1, album art, movie posters). Full list and exact
  filenames are in `images/README.txt`. `cyberpatriot-18.png` is the one
  real photo already in.
- **PC build specs.** The Garage has a spec table (CPU, GPU, RAM, storage,
  case, cooling) that's all placeholder text right now, search
  `index.html` for `Add your`.
- **Exact AWS certification name**, so it matches my badge instead of the
  generic placeholder that's there now.

## Adding another module

Copy this block anywhere inside `.col-main` or `.col-side`, and add a nav
link pointing at its `id` if it should show up in the top nav or the
sidebar's "On This Page" list:

```html
<section class="module" id="something">
  <h2 class="module-header">Title</h2>
  <div class="module-body">
    <p>Content.</p>
  </div>
</section>
```

## Publishing

Any static host works. I'm using GitHub Pages: push this folder to the
repo, then Settings, Pages, deploy from the main branch root.

## Accessibility and performance notes

- No external requests at all: everything, including fonts, is local or a
  system font (Verdana/Tahoma stack).
- The boot screen is skippable by click or keypress and steps aside
  entirely for `prefers-reduced-motion`.
- Real `<table>` markup for certifications and the Garage specs, real
  `<label>` elements on the contact fields.

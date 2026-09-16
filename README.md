# aedan-site

My personal site, styled like Windows 98. No frameworks, no build step, just
plain HTML/CSS and a little vanilla JS. I built it on top of
[98.css](https://jdan.github.io/98.css), a library that recreates classic
Windows 98 UI controls in plain CSS, so I didn't have to hand-draw every
title bar and group box myself.

Live layout is six pages that all share the same look: a title bar, a tab
strip for nav, and a two column body (profile sidebar on the left, content
on the right).

## Files

```
index.html        home / profile
about.html        long bio
skills.html       certifications and skills
experience.html   work history and education
photos.html       gallery with click to enlarge
contact.html      email, LinkedIn, GitHub
style.css         page layout on top of 98.css (see below)
boot.js           fake startup screen, shown once per browser session
images/           photos go here
```

## How the styling works

Every page loads two stylesheets in this order:

```html
<link rel="stylesheet" href="https://unpkg.com/98.css">
<link rel="stylesheet" href="style.css">
```

98.css comes from a CDN (unpkg) and draws all the classic Windows 98 chrome:
windows, title bars, group boxes, tabs, tables, status bars, progress bars.
`style.css` only adds what 98.css doesn't: the teal desktop background, the
two column layout, the photo gallery grid, the boot screen, and mobile
breakpoints.

Because 98.css loads from a CDN, you need a connection the first time each
page loads (browsers cache it after that). If I ever want the site to work
fully offline, I can download the file from https://unpkg.com/98.css, save
it next to `style.css` as `98.css`, and swap the link tag on all six pages.

## The boot screen

New addition: a fake Windows 98 startup screen plays once per browser
session before the site shows up. It's `boot.js` plus the `#boot-screen`
styles at the bottom of `style.css`. Click anywhere, press a key, or just
wait about a second and a half, and it fades into the real site.

It uses `sessionStorage` so it doesn't replay on every tab click, only the
first page load of a new browser session, and it respects
`prefers-reduced-motion` by skipping straight to the site for anyone who has
that turned on.

If I ever add more of these desktop-flavored touches (a taskbar, sound
effects, desktop icons on the home page instead of tabs), this is the
pattern I'd follow: keep it in its own small file, keep it skippable, keep
it out of the way of anyone who just wants to read the page.

## Where things are built with 98.css

- Each page is one big `.window` with a `.title-bar` and minimize, maximize,
  and close buttons. The buttons are decorative, there's no JS wired to
  them, same as most 98.css portfolio sites.
- The nav bar is a `role="tablist"` tab strip. The current page's tab gets
  `aria-selected="true"`.
- Every bordered content box is a plain `<fieldset><legend>Title</legend>`,
  which 98.css turns into a classic Windows group box automatically.
- Certifications and skill levels on skills.html use real `<table>` markup
  and `.progress-indicator` bars, the same bar style the boot screen reuses.
- The Tools and Timeline widgets use `.tree-view`, the same nested list
  style Windows Explorer used.
- The photo lightbox on photos.html is a real `.window` with a working
  Close button.

## Stuff I still need to fill in

- **LinkedIn URL.** Still a placeholder in `index.html` and `contact.html`,
  search for `your-linkedin-here`.
- **Photos.** `images/profile.jpg`, `photo-2.jpg`, `photo-5.jpg`, and
  `photo-6.jpg` aren't in yet, see `images/README.txt` for exactly what
  goes where. `cyberpatriot-18.png` is already in.
- **Exact AWS certification name** on `skills.html`, so it matches my badge
  instead of the generic placeholder that's there now.

## Adding a section to any page

Copy this block inside a `<main class="col-main">` or
`<aside class="col-side">`:

```html
<fieldset>
  <legend>Title</legend>
  <p>Content.</p>
</fieldset>
```

## Publishing

Any static host works. I'm using GitHub Pages: push this folder to the
repo, then Settings, Pages, deploy from the main branch root.

## Accessibility and performance notes

- 98.css is the only external request the site makes; everything else is
  local.
- Focus outlines and keyboard navigation work throughout, since 98.css and
  this site both use real buttons, links, and form elements rather than
  divs pretending to be them.
- The gallery thumbnails are real buttons, so they work without a mouse,
  and the lightbox returns keyboard focus to the thumbnail you opened when
  you close it.
- The boot screen is skippable by click or keypress and steps aside
  entirely for `prefers-reduced-motion`.

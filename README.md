# aedan-site

A six page personal profile site styled after 98.css
(https://jdan.github.io/98.css), a library that recreates classic Windows 98
UI controls in plain CSS. No frameworks, no build tools, no JavaScript
except a small lightbox script on the photos page.

## Files

```
index.html        home / profile
about.html        long bio
skills.html       certifications and skills
experience.html   work history and education
photos.html       gallery with click to enlarge
contact.html      email, LinkedIn, GitHub
style.css         page layout on top of 98.css (see below)
images/           your photos go here
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
two column layout, the photo gallery grid, and mobile breakpoints.

Because 98.css loads from the internet, you need a connection the first
time each page loads (browsers cache it after that). If you ever want the
site to work fully offline, download the file from
https://unpkg.com/98.css, save it next to style.css as `98.css`, and change
the link tag to `href="98.css"` on all six pages.

## Where things are built with 98.css

- Each page is one big `.window` with a `.title-bar` and minimize, maximize,
  and close buttons. The buttons are decorative, there is no JavaScript
  wired to them, just like a lot of 98.css portfolio sites.
- The nav bar is a `role="tablist"` tab strip. The current page's tab gets
  `aria-selected="true"`.
- Every bordered content box is a plain `<fieldset><legend>Title</legend>`,
  which 98.css turns into a classic Windows group box automatically.
- Certifications and skill levels on skills.html use real `<table>` markup
  and `.progress-indicator` bars.
- The Tools and Timeline widgets use `.tree-view`, the same nested list
  style Windows Explorer used.
- The photo lightbox on photos.html is a real `.window` with a working
  Close button.

## First things to edit

1. **LinkedIn URL.** Placeholder in `index.html` and `contact.html`, search
   for `your-linkedin-here`.
2. **Photos.** Add `images/profile.jpg`, plus `photo-2.jpg`, `photo-5.jpg`,
   and `photo-6.jpg`. `cyberpatriot-18.png` is already in.
3. **The exact AWS certification name** on `skills.html`, so it matches
   your actual badge.

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

Any static host works. GitHub Pages is free: push this folder to a repo,
then Settings, Pages, deploy from the main branch root. See
`COPILOT_CONTEXT.md` if you're using GitHub Copilot to do the push for you.

## Accessibility and performance notes

- 98.css is the only external request the site makes; everything else is
  local.
- Focus outlines and keyboard navigation work throughout, since 98.css and
  this site both use real buttons, links, and form elements rather than
  divs pretending to be them.
- The gallery thumbnails are real buttons, so they work without a mouse,
  and the lightbox returns keyboard focus to the thumbnail you opened when
  you close it.

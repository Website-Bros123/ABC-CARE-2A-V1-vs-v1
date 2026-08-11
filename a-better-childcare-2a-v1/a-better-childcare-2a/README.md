# A Better Childcare 2A Website

A responsive HTML/CSS/JavaScript website designed to work directly in VS Code and deploy with Firebase Hosting.

## Files

- `index.html` — website structure/content
- `style.css` — design, layout, responsive styling
- `script.js` — navigation, FAQ behavior, contact-form email behavior
- `firebase.json` — Firebase Hosting configuration

## Run locally in VS Code

1. Open this folder in VS Code.
2. Open `index.html`.
3. Use the VS Code Live Server extension, or open the HTML file directly in your browser.
4. Replace the image placeholders with the client's real photos/logo.

## Firebase Hosting

If Firebase CLI is installed:

```bash
firebase login
firebase init hosting
firebase deploy
```

When Firebase asks for the public directory, use `.` for this project.

## Important customization points

### Logo
In `index.html`, search for:

`YOUR LOGO`

Replace the placeholder with something like:

```html
<img src="images/logo.png" alt="A Better Childcare 2A logo" class="real-logo">
```

Then add the corresponding CSS.

### Photos
The site intentionally uses placeholders so no fake childcare photos are presented as the client's real facility.

A simple structure would be:

```text
images/
  logo.png
  hero.jpg
  about.jpg
  gallery-01.jpg
  gallery-02.jpg
  gallery-03.jpg
  gallery-04.jpg
  gallery-05.jpg
```

### Testimonials
No testimonials were supplied in the client form, so the website has a clearly marked placeholder rather than inventing reviews.

### Social media
No social links were supplied, so the footer contains a placeholder.

### Google Maps
The website currently shows a general Bothell, WA map placeholder. Add the client's approved Google Maps embed later.

## Privacy note

The street address from the intake form is not displayed publicly in this starter design. The contact section uses "Bothell, Washington" until the client approves a public address/map listing.

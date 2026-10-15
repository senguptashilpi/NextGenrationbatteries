# Dr. Shilpi Sengupta — research portfolio

A static research portfolio site: advanced battery materials, solid-state electrolytes and flexible energy storage devices. Plain HTML, CSS and a little JavaScript, with no build step, so it runs on GitHub Pages as-is.

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home: hero, introduction, research at a glance, innovation spotlight |
| `research.html` | About & Research: biography, research activities, three research pillars |
| `materials.html` | Materials & Prototypes: synthesis portfolio, polymer electrolyte, flagship supercapacitor |
| `expertise.html` | Technical Expertise: capabilities, software and instrument tiles |
| `contact.html` | Publications & Contact: publications, CV/patent downloads, contact form |
| `404.html` | Not-found page (GitHub Pages serves it automatically) |

Shared styles are in `assets/css/style.css`; behaviour (mobile menu, scroll reveals, image lightbox, contact form) is in `assets/js/main.js`.

## Before publishing

Add the two PDFs the site links to (see `assets/docs/README.md`):

- `assets/docs/CV_Shilpi_Sengupta.pdf`
- `assets/docs/Patent_Shilpi_Sengupta.pdf`

## Deploy to GitHub Pages

1. Create a GitHub repository and push this folder to its `main` branch.
   - For a site at `https://<username>.github.io/`, name the repository `<username>.github.io`.
   - Any other name gives `https://<username>.github.io/<repo-name>/`. All links are relative, so both work.
2. On GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, then branch `main` and folder `/ (root)`, and click **Save**.
4. After a minute or so, the site is live at the URL shown on that page.

`.nojekyll` tells GitHub Pages to serve the files as they are, without Jekyll processing.

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Editing

- **Text:** edit the HTML files directly. The header and footer are repeated in each page, so a change to the navigation must be made in all six files.
- **Images:** live in `assets/img/`. Keep photos under about 300 KB (around 1600 px on the long edge).
- **Contact form:** GitHub Pages has no server, so the form opens the visitor's email app with the message pre-filled. The recipient is set by `data-to` on the `<form>` in `contact.html`. To receive submissions without email, point the form at a service such as Formspree.
- **Colours and fonts:** set as CSS variables at the top of `style.css` (`--copper`, `--paper`, `--night` and so on).

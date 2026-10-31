# Ahmed Ali — Personal Portfolio

Bilingual (English / Arabic RTL) portfolio website for **Ahmed Ali**, Civil Engineer · Planning Engineer · Cost Control · Technical Office · Project Management.

Built with **React 19**, **Vite 6**, **Bootstrap 5** (with its official RTL build) and **Bootstrap Icons**. Deploys automatically to **GitHub Pages** through GitHub Actions.

---

## 1. Edit the content

Almost everything you will want to change is in **one file**:

```
src/content/profile.js
```

| What | Where |
|---|---|
| Email, WhatsApp, LinkedIn | `contact` at the top of the file |
| CV download | `cv` (see section 2) |
| Profile photo / work photo | `photo`, `workPhoto` (files live in `public/images/`) |
| Years of experience | `yearsOfExperience` |
| All texts (English) | `content.en` |
| All texts (Arabic) | `content.ar` |
| Project images | `projects.items[].images` (files in `public/images/projects/`) |

Text in `[square brackets]` is a placeholder that still needs real information:

- `[Current job title]` and `[Start date]` for the current role
- `[Company name]` for each role
- `[LinkedIn profile URL]` — set `contact.linkedin`

When you change an English text, change the matching Arabic text too.

To add images to a project, copy a `.jpg` into `public/images/projects/` plus a smaller copy with `-sm` added to the name (for example `neom-1.jpg` and `neom-1-sm.jpg`), then add `'images/projects/neom-1.jpg'` to that project's `images` list in both languages.

## 2. Add your CV (PDF)

1. Save your CV as `public/cv/Ahmed-Ali-CV.pdf`.
2. In `src/content/profile.js` set `available: true` inside `cv`.

Until then, the CV section shows a clear "not uploaded yet" note and the hero button scrolls to it.

## 3. Run it on your computer

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install        # once
npm run dev        # opens http://localhost:5173 with live reload
npm run build      # production build into dist/
npm run preview    # serve the production build at http://localhost:4173
```

## 4. Publish on GitHub Pages (free)

### First time

1. Sign in at [github.com](https://github.com) and click **New repository**.
   - Name: for example `ahmed-portfolio`
     (or `<your-username>.github.io` if you want the shortest address).
   - Visibility: **Public** (GitHub Pages is free for public repositories).
   - Do **not** add a README, .gitignore or licence (this project already has them).
2. In the new repository go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
3. In a terminal, inside this project folder, run:

```bash
git init
git add .
git commit -m "Portfolio website"
git branch -M main
git remote add origin https://github.com/<your-username>/<repository-name>.git
git push -u origin main
```

4. Open the **Actions** tab. The *Deploy to GitHub Pages* workflow builds the site and publishes it (takes a few minutes).
5. Your site is live at:
   - `https://<your-username>.github.io/<repository-name>/`, or
   - `https://<your-username>.github.io/` if you named the repository `<your-username>.github.io`.

### Every update after that

```bash
git add .
git commit -m "Update content"
git push
```

Each push to `main` rebuilds and republishes the site automatically.

### Why it works in any repository

`vite.config.js` uses `base: './'`, so every file path in the build is relative. The same build works at the root of a domain or inside `/<repository-name>/` with no extra configuration.

## 5. QR code

The QR code opens **https://ahmadali205.github.io/Eng_Ahmed/** (the published site, not the repository).

| File | Use |
|---|---|
| `public/qr/portfolio-qr.png` | High-resolution PNG (~2400 px) for print, CV, LinkedIn |
| `public/qr/portfolio-qr.svg` | Vector, scales to any size |
| `public/qr/portfolio-qr-card.pdf` / `.png` | Printable A6 card with name and titles |

Black on white, 4-module quiet zone, error correction Q. If the site address ever changes:

```bash
pip install segno
python3 scripts/make_qr.py https://new-address/
```

and update `siteUrl` in `src/content/profile.js`. The printable card is built from `scripts/qr-card.html`.

## 6. Project structure

```
├── .github/workflows/deploy.yml   GitHub Pages deployment
├── index.html                     Page shell + SEO / social meta tags
├── public/
│   ├── cv/                        Put Ahmed-Ali-CV.pdf here
│   ├── images/                    Profile photo, work photo
│   │   └── projects/              Project images (+ -sm thumbnails)
│   └── favicon.svg
└── src/
    ├── content/profile.js         ALL website content (EN + AR)
    ├── i18n.jsx                   Language switching, RTL/LTR, Bootstrap RTL
    ├── components/                One component per section (QrSection.jsx = QR block)
    ├── styles/main.css            Design tokens and styles
    ├── App.jsx                    Section order
    └── main.jsx                   Entry point
```

## 7. Notes

- **Language:** English is the default. The visitor's choice is remembered in their browser.
- **Contact form:** the site has no server, so the form opens the visitor's own email app with the message filled in. Nothing is sent from the website itself. To receive messages directly, connect a form service such as Formspree and change `submit` in `src/components/Contact.jsx`.
- **S-curve chart** in *Project Controls* is an illustration, labelled as such on the page. It is not data from any project.
- **Skills** use coloured markers for the work areas each skill supports (planning, cost, drawings, reporting) instead of invented proficiency percentages.

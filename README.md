# Portfolio site

A minimal, clean one-page portfolio for IT support / systems administration
work. Plain HTML, CSS, and JS — no build step, no dependencies.

## Files
- `index.html` — page content
- `style.css` — all styling
- `script.js` — clock + scroll animations
- `resume.pdf` — placeholder, replace with your real résumé (or remove the
  "Download résumé" button in `index.html` if you don't want one)

## 1. Customize it
Open `index.html` and replace:
- **Name** — "Jordan Blake" throughout, and the `<title>` tag
- **Bio, stats, experience, projects** — swap in your real history
- **Contact links** — email, phone, LinkedIn, GitHub near the bottom
- **Résumé** — drop your PDF in this folder named `resume.pdf`

## 2. Host it on GitHub Pages

1. Create a new repository on GitHub (e.g. `your-username.github.io` for a
   root domain, or any name like `portfolio` for a project site).
2. Push these files to it:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```
3. On GitHub: go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to "Deploy from a branch",
   pick the **main** branch and **/ (root)** folder, then **Save**.
5. Wait a minute or two — GitHub will give you a live URL:
   - `https://YOUR-USERNAME.github.io` (if the repo is named
     `YOUR-USERNAME.github.io`), or
   - `https://YOUR-USERNAME.github.io/YOUR-REPO` (for any other repo name).

Any time you push new changes to `main`, the live site updates automatically
within a minute or two.

## Notes
- The contact links use `mailto:` and `tel:` — no backend needed. If you'd
  rather have an actual contact form, a free service like Formspree or
  Getform can be wired into a `<form>` with no server code.
- Fonts load from Google Fonts (IBM Plex Mono / IBM Plex Sans) via CDN.

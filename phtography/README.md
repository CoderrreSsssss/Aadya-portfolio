# Aadya Singh | Photography Portfolio

React + Vite + Tailwind CSS + Framer Motion. No backend, database or paid service.

> **Important:** every image in `public/images/` is a generated **sample placeholder**, not a photograph by Aadya. Replace them all with real photographs before submitting.

## Run it (Windows PowerShell)
1. Install Node.js (LTS) from https://nodejs.org, then restart PowerShell. Check with `node -v`.
2. Open the folder in VS Code: `cd path\to\photography-portfolio` then `code .`
3. `npm install`
4. `npm run dev` (open the URL it prints, usually http://localhost:5173)
5. `npm run build` (creates the `dist` folder; must finish without errors)

## Publish with GitHub and Vercel
1. Create an empty repository on https://github.com/new (no README).
2. In PowerShell inside the project:
```
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/photography-portfolio.git
git push -u origin main
```
3. On https://vercel.com sign in with GitHub, click **Add New > Project**, and import the repository.
4. Keep the defaults (Framework: Vite, Build: `npm run build`, Output: `dist`) and click **Deploy**.
5. To update later: edit, then `git add .`, `git commit -m "Update photos"`, `git push`. Vercel redeploys automatically.

## Replace the sample images
1. **Rename** your photos to the filenames below (JPG, ideally under 500 KB, about 1600px on the long edge).
2. **Place** them in `public/images/`, overwriting the samples.
3. **Paths** are already set in `src/data/portfolioData.js`. If you use different names, edit the `image` value (e.g. `/images/my-photo.jpg`).
4. **Titles and captions**: edit each `g(...)` line in the `gallery` list: `g(id, title, category, file, ratio, caption)`. Optional extras: add `location` and `year` as the last two values.
5. **Add a photo**: copy one `g(...)` line, give it a new unique `id`, file name and category (`portrait`, `nature`, `street`, `architecture`, `creative`). **Remove**: delete its line.
6. **Hero, about and featured** images: `hero.jpg`, `about.jpg`, `featured.jpg`. Paths live in `site.images` and `featured`.

Ratio: use `'3/4'` for upright photos, `'4/3'` for wide ones, `'1/1'` for square, so images are not stretched or cropped oddly.

Filenames: `hero.jpg about.jpg featured.jpg portrait-01..03.jpg nature-01..03.jpg street-01..03.jpg architecture-01..03.jpg creative-01..03.jpg`

## Edit personal details
Everything is in `src/data/portfolioData.js`: name, headline, intro, interests, process, email, Instagram URL, society link. Leave contact values as `''` to show "To be added". Page title and description are in `index.html`.

Reusing for another photographer only needs `portfolioData.js`, `index.html` and the images.

## Change the colours
In `src/data/portfolioData.js` set `theme: 'midnight'`, `'sunset'` or `'aurora'`. To make your own palette, edit the `--c-*` values in `src/index.css`.

## Store more information
- Each photo can carry a story, camera and settings: add `{ story: '...', camera: '...', settings: 'f/2.8 · 1/250s · ISO 100' }` as the last value of its `g(...)` line. They appear in the lightbox.
- `journey` and `toolkit` in `portfolioData.js` are editable timeline and gear sections. Replace the prompt text with your own story (set `toolkit.items` to `[]` to hide it).

# AKT — Personal Site

Personal website built with React + Vite. Blog posts are written in Markdown.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Writing a new blog post

1. Create a new `.md` file in `src/posts/`
2. Add frontmatter at the top:

```markdown
---
title: Your Post Title
date: 2025-06-01
excerpt: A one-sentence summary shown on the homepage.
---

Your post content goes here. Full Markdown is supported.
```

3. Save the file — it appears automatically on the homepage, sorted by date.

That's it. No config, no CMS, no database.

## Customizing

| What                  | Where                          |
|-----------------------|--------------------------------|
| Bio / About text      | `src/pages/About.jsx`          |
| Projects              | `src/pages/Projects.jsx`       |
| Contact info          | `src/pages/Contact.jsx`        |
| Nav links             | `src/components/Sidebar.jsx`   |
| Colors / typography   | `src/index.css`                |

## Deploying

### Vercel (recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# drag the `dist/` folder into netlify.com/drop
```

### GitHub Pages
Add `base: '/your-repo-name/'` to `vite.config.js`, then push to GitHub and enable Pages.

## Post frontmatter reference

| Field     | Required | Description                             |
|-----------|----------|-----------------------------------------|
| `title`   | Yes      | Post title                              |
| `date`    | Yes      | Publication date (`YYYY-MM-DD`)         |
| `excerpt` | No       | Short summary shown on the listing page |

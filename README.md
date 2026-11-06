# Mayank Pugalia, portfolio

Static HTML, CSS and a few lines of JavaScript. No build step. Hosted on Vercel from the `main` branch.

Design: the Hallmark "Console" theme (graphite, one amber accent), built and checked with the Hallmark design skill.

## Files

| File | What it is |
|---|---|
| `index.html` | Home: projects index, what I do, about, MERIDIAN, experience, skills, certifications, contact |
| `projects/*.html` | Case pages: MERIDIAN, Enterprise FP&A, CRM Arena, Incentive compensation |
| `blog.html`, `blog/*.html` | Blog index and posts (`blog/TEMPLATE.html` is the starting point for a new post) |
| `404.html` | Not-found page |
| `css/tokens.css`, `css/base.css` | Hallmark theme tokens and base rules (generated, don't edit by hand) |
| `css/site.css` | All page styles |
| `js/site.js` | Closes the mobile menu |
| `assets/resume.pdf` | The downloadable resume |
| `assets/meridian/*.png` | Real screenshots from the MERIDIAN repository |
| `vercel.json` | Redirects the old pages (about, experience, skills, etc.) to the home page sections |

## Adding a blog post

1. Copy `blog/TEMPLATE.html` to `blog/your-post.html` and fill in the date, title, description and paragraphs.
2. Add one `<li>` to the list in `blog.html`, copying the existing one.

## Content rules

No invented metrics, testimonials or links. Client names stay out (sector labels only). Project results are described qualitatively unless verified.

## Checking a change

```
node ~/.claude/skills/hallmark/scripts/sloplint.mjs index.html projects/*.html --genre modern-minimal --render
```

# Samantha An — Portfolio

Personal portfolio site, live at [www.samean.org](https://www.samean.org).

Plain HTML, CSS, and JavaScript — no build step, no framework, no external
dependencies. Deploys straight from the repo root on GitHub Pages.

## Run locally

```bash
npm start
```

then open <http://localhost:5173>. (Any static file server works; `npm start`
just wraps `python3 -m http.server`.)

## Files

| File          | Purpose                                                        |
| ------------- | -------------------------------------------------------------- |
| `index.html`  | All page content — edit text, skills, projects, and links here |
| `style.css`   | Design tokens (light/dark), layout, and components             |
| `script.js`   | Theme toggle, mobile menu, mailto contact form, footer year    |
| `favicon.svg` | Tab icon                                                       |
| `CNAME`       | Custom domain for GitHub Pages                                 |

## Customising

Search `index.html` for `TODO` — each one marks a placeholder to replace:

- **Resume** — add `resume.pdf` to the repo root (or change the link's `href`).
- **Photo** — swap the `SA` initials block in the hero for `<img src="me.jpg" alt="Samantha An">`.
- **Project screenshots** — swap each `.project__thumb` gradient for an `<img>`.

Content (experience, projects, skills, contact) is maintained directly in
`index.html`; the email address appears in the Contact card *and* the form's
`data-email` attribute, so update both if it changes.

Colours live in the `:root` and `.dark` blocks at the top of `style.css`.

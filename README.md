# Portfolio — Abdurrahman Opeyemi Adesanya

React + Vite + React Router + styled-components + Framer Motion.

## Run locally
```
npm install
npm run dev
```

## Before deploying
1. Open `src/data/profile.js` and:
   - Replace `FORMSPREE_ENDPOINT` with your real Formspree form URL (from formspree.io).
   - Confirm the items marked `flagged: true` (Base University degree, "Smart Contract Developer" cert, freeCodeCamp "Full Stack Web Development" cert) — these appeared in only some of your CV versions.
   - Add real GitHub repo links to each project's `githubUrl` field where you have them.
   - Update `linkedinUrl` with your real LinkedIn URL.
2. `npm run build` then deploy the `dist/` folder to Vercel/Netlify, or connect the repo directly.

## Structure
- `src/data/profile.js` — all CV content, single source of truth
- `src/theme.js` — color/font/spacing tokens (styled-components theme)
- `src/GlobalStyle.js` — global CSS via createGlobalStyle
- `src/pages/` — routes (Home, Projects, ProjectDetail, Certifications, Contact, NotFound)
- `src/components/` — Hero, NavBar, ProjectCard, ContactForm, Reveal (Framer Motion scroll animations), etc.
- `src/components/ui.js` — shared styled-component primitives (Section, Card, Tag, etc.)
- `src/hooks/` — useTypedHash (custom hook powering the hero's typed hash)

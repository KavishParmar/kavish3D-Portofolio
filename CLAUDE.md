# Kavish Parmar Portfolio — Claude Code Context

## Project

Personal portfolio for **Kavish Parmar** — AI Agency Founder & Web Developer.
Built with React 18 + TypeScript + Vite. Deployed on Vercel/Netlify.

## Tech Stack

- **Framework**: React 18, TypeScript, Vite
- **3D**: Three.js, @react-three/fiber, @react-three/drei
- **Animations**: GSAP (ScrollSmoother, ScrollTrigger)
- **Routing**: React Router DOM v6
- **Contact form**: Formspree (`xzdyvgan`)
- **Analytics**: @vercel/analytics

## Architecture

- `src/App.tsx` — Router with 4 routes: `/`, `/about`, `/work`, `/contact`
- `src/components/MainContainer.tsx` — Home page layout; conditionally renders 3D character on desktop (>1024px)
- `src/context/LoadingProvider.tsx` — Global loading state + loading screen
- `src/context/NavigationTransition.tsx` — Page transition animations
- `src/data/projects.ts` — All 6 portfolio projects (images in `/public/images/`)
- `src/components/Character/Scene.tsx` — Three.js 3D character (kavish3d.glb)

## Key Decisions

- **No resume button** — resume PDF section was removed; don't add it back
- **No n8n chatbot** — the old localhost webhook was removed; a Make.com chatbot is integrated in index.html instead
- **CSS variables defined in** `src/index.css`: `--accentColor`, `--backgroundColor`, `--cWidth`, `--cMaxWidth`, `--vh`
- `--whiteColor` is NOT defined — use `#eae5ec` for light text instead
- `TechStack.tsx` was deleted (was exporting null, never used)
- `Cursor.tsx` was deleted — no custom cursor; don't import it

## Images

All project images live in `public/images/`. Current images:
- kavish-parmar.png, kavish.png
- green-valley.png, yoga-with-harshwardhan.png
- kiran-copper-house.png, kiran-copper-house-v2.png
- shubham_showroom.png

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Type-check + production build
npm run preview  # Preview production build locally
```

# Pieter-Jacques le Roux — Portfolio

A personal portfolio website built with Next.js, TypeScript, and CSS. Designed with a retro terminal aesthetic featuring CRT scanlines, phosphor glow effects, and a per-letter flicker animation.

**Live site:** [my-webpage-eight-beige.vercel.app]

---

## Features

- Retro terminal UI with CRT scanline overlay
- Per-letter randomised flicker animation on headings
- Responsive single-page layout
- IBM Plex Mono + VT323 Google Fonts pairing

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | CSS Modules + Tailwind CSS |
| Fonts | Google Fonts (VT323, IBM Plex Mono) |
| Deployment | Vercel |

---

## Getting Started

```bash
git clone https://github.com/Pieterlr96/your-repo-name.git
cd your-repo-name
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
/
├── app/
│   ├── page.tsx                # Main portfolio page
│   ├── layout.tsx              # Root layout and font setup
│   └── globals.css             # Global styles and component classes
├── components/
│   └── flicker.tsx             # Per-letter flicker animation
    └──GitHubProjectCards.tsx   # Github section with cards that link to my GitHub projects
    └── typewriter.tsx          # Typewriter effect that plays on startup of website. 
└── public/
    └── imgs/
        └── Profile.jpg
```

---

## Design Decisions

**Why the terminal aesthetic?**
I wanted the site to reflect my personality rather than use a generic developer portfolio template. The retro CRT look is distinctive and gives me an opportunity to demonstrate CSS techniques like text-shadow glow effects and pseudo-element overlays.

**Why a single-page layout?**
At this stage the content fits naturally on one page. A multi-page structure would add routing complexity without adding value for the visitor.

**The flicker effect**
Built without any animation library. The `FlickerEffect` component uses the DOM to wrap each letter in a `<span>`, then schedules randomised opacity drops via `setTimeout` recursion. Each letter has an independent random delay between 4.8s and 22.8s, so the effect never looks mechanical.

---

## Roadmap
- [ ] Scroll-triggered section fade-in animations (IntersectionObserver)
- [ ] Additional project cards as projects are completed

---

## Contact

- Email: pieter96.work@gmail.com
- LinkedIn: [linkedin.com/in/software-developer-pj-le-roux](https://www.linkedin.com/in/software-developer-pj-le-roux/)
- GitHub: [github.com/Pieterlr96](https://github.com/Pieterlr96)

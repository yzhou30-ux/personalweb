# Yewen — Personal Portfolio

A personal portfolio website showcasing design, illustration, and creative exploration work. Built with Next.js, Tailwind CSS, and Framer Motion.

> **Live demo:** [Coming soon — deploy to Vercel]

---

## Features

- **Generative particle hero** — Interactive canvas animation with warm orange palette, responsive to mouse movement
- **Featured work showcase** — Alternating layout project cards with case-study style presentation
- **Illustration gallery** — Horizontal scroll strip on homepage + full masonry gallery page
- **"Now" status section** — Living section showing current activities, reading, and bookmarks
- **Smooth animations** — Scroll-triggered reveals and page transitions via Framer Motion
- **Responsive design** — Mobile-first layout with collapsible navigation

## Tech Stack

| Layer       | Technology                     |
|-------------|--------------------------------|
| Framework   | Next.js 14 (App Router)        |
| Styling     | Tailwind CSS 3.4               |
| Animation   | Framer Motion 11               |
| Deployment  | Vercel (recommended)           |
| Font        | Bebas Neue + Inter (Google Fonts) |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 18.0
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd yewen-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
yewen-portfolio/
├── public/
│   └── images/
│       ├── hero-bg-1.jpg       # Hero background texture
│       ├── hero-bg-2.jpg       # Alternate hero texture
│       ├── logo.png            # YC logo mark
│       ├── projects/           # Project cover images
│       ├── gallery/            # Photography & misc artwork
│       └── illustrations/      # Digital paintings
├── src/
│   ├── app/
│   │   ├── layout.js           # Root layout (metadata, fonts)
│   │   ├── page.js             # Homepage
│   │   ├── globals.css         # Global styles + Tailwind
│   │   ├── gallery/
│   │   │   └── page.js         # Gallery masonry page
│   │   └── about/
│   │       └── page.js         # About page
│   └── components/
│       ├── Navigation.jsx      # Fixed navbar + mobile menu
│       ├── HeroCanvas.jsx      # Generative particle animation
│       ├── ProjectCard.jsx     # Featured project card
│       ├── IllustrationStrip.jsx # Horizontal scroll gallery
│       ├── NowStatus.jsx       # "Now" status section
│       └── Footer.jsx          # Footer with contact
├── tailwind.config.js
├── next.config.js
├── package.json
└── README.md
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Vercel auto-detects Next.js — click **Deploy**
4. Your site is live with automatic HTTPS and CDN

### Other Platforms

```bash
npm run build
# Output is in .next/ directory
# Use `npm start` for Node.js hosting
# Or `next export` for static hosting (add to next.config.js)
```

## Customization

### Colors

Edit the `warm` color palette in `tailwind.config.js` to change the accent color scheme. The CSS variables in `globals.css` should also be updated to match.

### Content

- **Projects:** Edit the `projects` array in `src/app/page.js`
- **Gallery:** Edit the `galleryItems` array in `src/app/gallery/page.js`
- **Now section:** Edit `nowItems` and `bookmarks` in `src/components/NowStatus.jsx`
- **About:** Edit content directly in `src/app/about/page.js`

### Adding New Project Pages

Create `src/app/projects/[slug]/page.js` for individual project case studies. Use MDX for rich content management (see Next.js docs for MDX setup).

## Roadmap

- [ ] Individual project case study pages
- [ ] Dark mode toggle
- [ ] MDX-based content management
- [ ] Blog / micro-journal
- [ ] Improved generative hero (WebGL / Three.js)
- [ ] i18n support (EN / 中文)

## License

This project is for personal/educational use. Design and artwork © Yewen.

---

*Built with Next.js · Styled with Tailwind CSS · Animated with Framer Motion*

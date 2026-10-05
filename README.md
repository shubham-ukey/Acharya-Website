# AYURVISTA RESEARCH — Website (placeholder brand)

React 18 · Vite · Tailwind CSS 3 · GSAP (ScrollTrigger) · React Router 6 · lucide-react

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Replace the brand in minutes
| What | Where |
|---|---|
| Name, email, phone, WhatsApp, location, social links, domain | `src/config/brand.js` |
| Logo | Put a file in `/public`, set `brand.logo` (e.g. `'/logo.svg'`) |
| Favicon | Replace `public/favicon.svg`, and `<title>`/meta in `index.html` |
| Colours | RGB variables at the top of `src/index.css` (Tailwind reads them) |
| Fonts | `index.html` (Google Fonts link) + `fontFamily` in `tailwind.config.js` |

## Content lives in `src/data`
- `services.js`, `founders.js`, `articles.js`
- Founder photos: set `photo: '/images/name.jpg'` in `founders.js`. Until then a monogram portrait is shown.
- Article images: `image` accepts a URL, or `art:sprig | art:rings | art:molecule | art:lattice` for built-in illustrations.
- The illustrations (`ArtPlate.jsx`) stand in for photography. Replace with licensed images when available.

## Connecting a CMS later
The UI only calls `src/services/articlesApi.js` (`fetchArticles`, `fetchArticleBySlug`, `fetchRelatedArticles`).
Replace those function bodies with WordPress REST / headless CMS / Spring Boot calls that return the same fields:
`id, title, slug, excerpt, content (HTML), image, category, author, date (ISO), readTime`.
Forms post through `src/services/inquiryApi.js` — swap in your real endpoint the same way.

## Notes
- Routes: `/`, `/about`, `/services`, `/insights`, `/insights/:slug`, `/contact`, `/consultation`. `public/_redirects` provides the SPA fallback on Netlify; configure a rewrite to `index.html` on other hosts.
- Animations respect `prefers-reduced-motion` (see `src/animations/gsapAnimations.js`).
- Contact details, the map query, and founder profiles are realistic placeholders to be replaced with client data.

## CMS (publishing without a developer)
See `CMS-SETUP.md`. Set `VITE_WP_URL` (see `.env.example`) to read articles live from WordPress; leave it empty to use sample articles.

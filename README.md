# Acharya – Ayurveda, Yoga & Health Research Consultancy Website

A responsive, animated marketing website for **Acharya**, a research-driven consultancy bridging Ayurveda, Yoga, global traditional systems and modern integrative healthcare. The site presents the consultancy's services, founders, insights and contact channels, and is structured so a WordPress CMS can be connected later for articles and blogs.

**Developed by:** Shubham Ukey

---

## Table of Contents

- [Project Overview & Budget](#project-overview--budget)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Pages](#pages)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [EmailJS Setup](#emailjs-setup)
- [Project Structure](#project-structure)
- [Editing Content](#editing-content)
- [Design System](#design-system)
- [Adding Images](#adding-images)
- [WordPress CMS Integration (Future)](#wordpress-cms-integration-future)
- [Deployment](#deployment)
- [Scripts](#scripts)
- [Troubleshooting](#troubleshooting)

---

## Project Overview & Budget

| Detail | Information |
| --- | --- |
| Project | Acharya Ayurveda, Yoga & Health Research Consultancy Website |
| Prepared by | Shubham Ukey |
| Quotation date | 01 October 2026 |
| Delivery date | 15 October 2026 |
| Deployment | Vercel |

### Project Scope & Cost

| Service | Cost |
| --- | ---: |
| React.js Website Development | ₹5,500 |
| Responsive UI Design & Tailwind CSS | ₹3,000 |
| Website Pages & Content Sections | ₹2,500 |
| GSAP Animations & Interactive UI | ₹1,500 |
| WordPress CMS-Ready Structure for Future Integration | ₹1,000 |
| EmailJS Contact & Consultation Form | ₹1,000 |
| Google Analytics Integration | ₹500 |
| WhatsApp & Contact Integration | ₹500 |
| Basic SEO Setup | ₹500 |
| **Subtotal** | **₹16,000** |
| Custom Design & Development Value | ₹2,000 |
| **Total Project Value** | **₹18,000** |
| Special Relative Discount | − ₹2,000 |
| **Final Project Cost** | **₹16,000** |

### Included in the Project

- Responsive website for Desktop, Tablet & Mobile
- React.js + Tailwind CSS development
- Home, About, Services, Insights/Articles, Support Us, Contact and Consultation pages
- Founder profiles and Core Objectives sections
- GSAP animations and interactive UI
- WordPress CMS-ready code structure for future article/blog integration
- EmailJS contact and consultation form
- Google Analytics integration
- WhatsApp and contact integration
- Basic SEO setup
- Vercel deployment
- Basic testing and bug fixing

### Not Included

- Domain registration charges
- Hosting charges
- WordPress hosting
- Paid WordPress themes/plugins
- Paid stock images/videos
- Live WordPress CMS integration (can be added separately in future)
- New features or major redesigns after final approval
- Ongoing maintenance

Any third-party service or subscription charges are paid separately by the client.

---

## Features

- Fully responsive layout for desktop, tablet and mobile
- Smooth GSAP scroll reveals, split-text headings and hero animations
- Contact form with validation, honeypot spam protection and **two** EmailJS emails (admin notification and client auto-reply)
- WhatsApp and direct contact integration
- Content-driven pages: services, founders and pillars are plain data files
- Basic SEO setup with per-page titles and descriptions
- WordPress CMS-ready structure for future article/blog management
- Accessible markup (ARIA labels, focus states, reduced-motion support)

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | React.js (Vite) |
| Styling | Tailwind CSS with CSS-variable design tokens |
| Animation | GSAP |
| Icons | lucide-react |
| Forms / Email | EmailJS (`@emailjs/browser`) |
| Analytics | Google Analytics |
| Hosting | Vercel |

## Pages

| Route | Page | Purpose |
| --- | --- | --- |
| `/` | Home | Hero, purpose, services overview, pillars, founders, insights, roadmap |
| `/about` | About Us | Story, mission and vision, core objectives, founders, approach, roadmap |
| `/services` | Services | Four detailed services with key offerings |
| `/insights` | Insights / Articles | Article listing (CMS-ready) |
| `/support-us` | Support Us | Volunteering and funding options |
| `/contact` | Contact | Inquiry form, contact details, map |
| `/consultation` | Consultation | Consultation booking form |

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm (or yarn / pnpm)

### Installation

```bash
# 1. Clone the repository
git clone <your-repository-url>
cd ayurvista-research

# 2. Install dependencies
npm install

# 3. Create your environment file
cp .env.example .env
# then fill in the values (see below)

# 4. Start the dev server
npm run dev
```

The site runs at `http://localhost:5173` by default.

## Environment Variables

Create a `.env` file in the project root. On Vercel, add the same variables under **Project Settings → Environment Variables** and **redeploy** (Vite bakes these values in at build time).

```dotenv
# EmailJS
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_admin_template_id
VITE_EMAILJS_REPLY_TEMPLATE_ID=your_client_autoreply_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Future: WordPress CMS (leave commented until the CMS is connected)
# VITE_WP_URL=https://cms.your-domain.com
```

> Never commit your real `.env` file. Keep it in `.gitignore` and commit only `.env.example` with placeholder values.

## EmailJS Setup

The contact form sends two emails on every submission:

| Template | Variable | To Email | Purpose |
| --- | --- | --- | --- |
| Admin notification | `VITE_EMAILJS_TEMPLATE_ID` | Your own inbox | Delivers the new inquiry to you |
| Client auto-reply | `VITE_EMAILJS_REPLY_TEMPLATE_ID` | `{{email}}` | Confirms receipt to the visitor |

**Template variables used:** `{{name}}`, `{{age}}`, `{{gender}}`, `{{mobile}}`, `{{email}}`, `{{concern}}`, `{{time}}`

**Recommended settings**

- Admin template: set **Reply To** to `{{email}}` so you can reply straight to the client.
- Auto-reply template: set **Reply To** to your own email address.
- The admin email must succeed for the form to show "sent"; the auto-reply is best-effort and never blocks the form.

If the admin email is not arriving, check **EmailJS → Email History**, then your Gmail Spam and All Mail folders, and confirm the template IDs in your environment variables match the dashboard.

## Project Structure

```text
ayurvista-research/
├── public/
│   ├── banners/                 # Hero and page banners (.webp)
│   ├── images/
│   │   ├── founders/            # Founder photos (+ passport/ for card photos)
│   │   ├── pillars/             # "Why work with us" images
│   │   └── service-image/       # Service images, named by service id
│   ├── _redirects               # SPA fallback routing
│   └── favicon.svg
├── src/
│   ├── animations/
│   │   └── gsapAnimations.js    # useGsapScope + reveal/stagger/hero animations
│   ├── assets/
│   │   └── icons/
│   ├── components/              # Reusable UI (Button, Seo, CTASection, cards...)
│   ├── config/
│   │   └── brand.js             # Company name, email, phone, location, WhatsApp
│   ├── data/
│   │   ├── services.js          # Services content
│   │   ├── founders.js          # Founders content
│   │   └── pillars.js           # "Why work with us" content
│   ├── hooks/
│   │   └── useAsync.js
│   ├── pages/                   # Home, About, Services, Insights, SupportUs, Contact...
│   ├── services/
│   │   ├── articlesApi.js       # Articles source (CMS-ready)
│   │   └── inquiryApi.js        # Optional inquiry submission
│   ├── index.css                # Design tokens + shared component classes
│   └── main.jsx
├── .env.example
├── tailwind.config.js
└── package.json
```

## Editing Content

Most text lives in data files, so no component changes are needed for routine updates.

| To change | Edit |
| --- | --- |
| Services (titles, descriptions, offerings, images) | `src/data/services.js` |
| Founders (bio, background, photos, LinkedIn) | `src/data/founders.js` |
| "Why work with us" pillars | `src/data/pillars.js` |
| Company name, email, phone, location, WhatsApp | `src/config/brand.js` |
| Page-specific copy | the matching file in `src/pages/` |
| Footer service links | the `footerServices` list in the footer component |

**Services notes**

- Each service has an `id`; the footer links use it as the URL hash (for example `/services#clinical-writing`), so keep both in sync.
- `projectType` pre-selects the service when a visitor clicks "Discuss this service" (`/contact?type=<projectType>`). Make sure the Contact form understands each value.

**Founders notes**

- `photo` is the full portrait (About page). `passportPhoto` is the passport-size image used on Home cards, and falls back to `photo` when missing.

## Design System

Colours are defined as RGB tokens in `src/index.css` and mapped in `tailwind.config.js`, so the whole site can be re-themed in one place.

| Token | Hex | Use |
| --- | --- | --- |
| `forest` | `#174A3A` | Primary brand, headings, dark sections |
| `forest-deep` | `#0F3327` | Footer and dark surfaces |
| `sage` | `#7D9B84` | Secondary accents |
| `sage-soft` | `#E6EDE7` | Tints, icon backgrounds |
| `ivory` | `#F7F5EF` | Page background |
| `ivory-deep` | `#EFEBDF` | Alternate section background |
| `gold` | `#B89B5E` | Highlights, eyebrows, bullets |
| `charcoal` | `#202724` | Body text |

**Shared classes:** `container-x`, `section-pad`, `eyebrow`, `h-display`, `h-section`, `lede`, `input`, `prose-article`.

**Animation hooks (data attributes):** `data-reveal`, `data-stagger`, `data-image-reveal`, `data-hero-art`, `data-hero-art-inner`, `data-hero-label`, `data-hero-fade`.

## Adding Images

- Use **`.webp`** for all photos to keep pages fast.
- Place files in `public/` and reference them from the root, for example `/images/service-image/clinical-writing.webp` (do not include `public` in the path).
- File names are **case-sensitive on Vercel**. Use lowercase, kebab-case names that match the data `id`.
- Recommended ratios: service images 16:10, purpose image 5:4, pillar images 4:3, founder portraits 3:4, passport photos 7:9.
- For founder photos, remove or replace the background with a manual tool (such as remove.bg or Canva) rather than regenerating the person with AI, so faces stay unchanged.

## WordPress CMS Integration (Future)

The site is built with a **CMS-ready structure** for articles and blogs, but a live WordPress connection is **not included** in the current version.

When needed, the integration involves:

1. Setting up WordPress (separate hosting) and enabling the REST API.
2. Setting `VITE_WP_URL` in the environment.
3. Updating `src/services/articlesApi.js` to fetch posts from WordPress.
4. Migrating existing article content.

The `.prose-article` class already styles long-form HTML coming from a CMS.

## Deployment

The project is deployed on **Vercel**.

1. Push the repository to GitHub.
2. Import the project in Vercel (framework preset: Vite).
3. Add the environment variables from the section above.
4. Deploy. Redeploy after any environment variable change.

`public/_redirects` handles single-page-app routing on Netlify-style hosts. On Vercel, add a `vercel.json` rewrite if direct page URLs return 404:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |

## Troubleshooting

| Problem | Fix |
| --- | --- |
| Image not showing | Check the path starts with `/` (not `/public`), the folder name matches exactly, and the file name case matches. The Services page logs `Service image not found: ...` in the console. |
| Admin email not arriving | Check EmailJS Email History, Gmail Spam, and that `VITE_EMAILJS_TEMPLATE_ID` is the admin template. |
| Form works locally but not live | Add the `VITE_EMAILJS_*` variables in Vercel and redeploy. |
| Page URL gives 404 on refresh | Add the SPA rewrite shown in the Deployment section. |
| Colour class not working | Make sure the token exists in both `src/index.css` and `tailwind.config.js`. |

## Scope Notes

**Included:** responsive React + Tailwind site, all pages and sections, GSAP animations, EmailJS forms, WhatsApp/contact integration, basic SEO, Vercel deployment.

**Not included:** domain and hosting charges, WordPress hosting and live CMS connection, paid themes/plugins, paid stock media, major redesigns after approval, ongoing maintenance.

---

© Acharya. All rights reserved.

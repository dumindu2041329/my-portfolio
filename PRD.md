# Product Requirements Document (PRD)
## Personal Portfolio Website — SLIATE IT Student

**Document Version:** 1.0  
**Date:** 2026-03-22  
**Author:** [Your Name]  
**Status:** Draft

---

## 1. Overview

### 1.1 Project Summary

A personal portfolio website built with **Next.js 15** (App Router) to showcase academic background, technical skills, projects, certifications, and contact information. The site targets a futuristic dark-theme aesthetic to reflect a modern IT identity.

### 1.2 Objectives

- Establish a professional online presence as an IT student at SLIATE.
- Showcase projects, skills, and certifications to potential employers and collaborators.
- Provide a seamless, visually compelling user experience with a futuristic dark UI.
- Achieve high performance (Lighthouse score ≥ 90) and full responsiveness across devices.

### 1.3 Target Audience

- Potential employers and recruiters in the tech industry.
- Fellow students, lecturers, and academic peers.
- Freelance clients seeking junior developers.
- Open-source collaborators and the developer community.

---

## 2. Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React / React Icons |
| Form Handling | React Hook Form + EmailJS / Resend |
| Deployment | Vercel |
| Version Control | Git + GitHub |
| Package Manager | pnpm |

> **Note:** Next.js versioning follows the framework's official releases. As of this document, Next.js 15.x is the current stable major version. Always pin to the latest stable patch (e.g., `15.x.x`) in `package.json`.

---

## 3. Design System

### 3.1 Theme — Futuristic Dark

The visual language draws from cyberpunk, sci-fi interfaces, and terminal aesthetics.

| Token | Value |
|---|---|
| Background (Base) | `#050510` |
| Background (Surface) | `#0d0d1a` |
| Background (Card) | `#111128` |
| Primary Accent | `#00f0ff` (Cyan / Electric Blue) |
| Secondary Accent | `#7b2fff` (Neon Purple) |
| Highlight / CTA | `#ff2d78` (Hot Pink) |
| Text Primary | `#e8e8f0` |
| Text Muted | `#6e6e99` |
| Border | `rgba(0, 240, 255, 0.15)` |
| Success | `#00ff99` |
| Error | `#ff4d6d` |

### 3.2 Typography

| Role | Font | Weight |
|---|---|---|
| Display / Hero | `Orbitron` (Google Fonts) | 700, 900 |
| Headings | `Space Grotesk` | 600, 700 |
| Body | `Inter` | 400, 500 |
| Code / Mono | `JetBrains Mono` | 400, 500 |

### 3.3 Visual Effects & Patterns

- **Grid / scanline overlay** on hero background.
- **Glowing borders** using `box-shadow` with accent colors.
- **Glassmorphism cards** — `backdrop-filter: blur()` with translucent borders.
- **Gradient text** for headings using accent color combinations.
- **Particle / star field** background animation (canvas or CSS).
- **Neon glow pulse** on interactive elements (hover states).
- **Smooth scroll** between sections.
- **Section reveal animations** (fade-up, slide-in) on scroll via Framer Motion.
- **Cursor glow** custom cursor effect (desktop only).
- **Typewriter effect** in the Hero subtitle.

### 3.4 Layout

- Max content width: `1280px`, centered.
- Responsive breakpoints: `sm (640px)`, `md (768px)`, `lg (1024px)`, `xl (1280px)`.
- Spacing scale: Tailwind defaults (`4px` base unit).

---

## 4. Site Architecture

```
app/
├── layout.tsx           ← Root layout (fonts, metadata, navbar, footer)
├── page.tsx             ← Landing page (all sections)
├── globals.css
components/
├── layout/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── sections/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Education.tsx
│   ├── Skills.tsx
│   ├── Certifications.tsx
│   └── Contact.tsx
├── ui/
│   ├── GlowButton.tsx
│   ├── SectionHeading.tsx
│   ├── ProjectCard.tsx
│   ├── SkillBadge.tsx
│   ├── TimelineItem.tsx
│   └── CertCard.tsx
data/
├── projects.ts
├── skills.ts
├── experience.ts
├── education.ts
└── certifications.ts
public/
├── images/
│   ├── avatar.webp
│   └── og-image.png
└── resume.pdf
```

---

## 5. Sections — Detailed Requirements

### 5.1 Navbar

**Purpose:** Global navigation and identity anchor.

**Requirements:**
- Fixed/sticky at the top with `backdrop-filter: blur()` and a subtle border-bottom glow.
- Logo / name on the left (glowing text or custom SVG logo).
- Navigation links: `Home · About · Experience · Projects · Education · Skills · Certifications · Contact`
- Active section highlighted via Intersection Observer.
- **"Download CV"** CTA button (neon-styled, links to `/public/resume.pdf`).
- Hamburger menu on mobile with animated slide-down drawer.
- Scroll-to-section smooth behavior on link click.

---

### 5.2 Hero / Introduction

**Purpose:** First impression — capture attention, communicate identity.

**Content Requirements:**

| Field | Value |
|---|---|
| Pre-title label | `"Hello, I'm"` (muted, monospaced) |
| Name | Full name — large gradient display text |
| Role | Typewriter cycling through roles (e.g., `IT Student`, `Full Stack Developer`, `UI/UX Enthusiast`) |
| Tagline | One-liner value proposition (e.g., "Building tomorrow's web, today.") |
| CTAs | `View My Work` (primary) · `Download CV` (secondary ghost button) |
| Social Links | GitHub · LinkedIn · Instagram (icon links) |
| Visual Element | Animated avatar / 3D profile illustration or glowing orb |

**UX Requirements:**
- Particle animation or animated grid in the background.
- Scroll indicator arrow at bottom (bouncing animation).
- Gradient text on name. Typewriter animation on role line.
- Entrance animations: text fades in from bottom staggered.

---

### 5.3 About Me

**Purpose:** Humanize the profile — story, personality, and values.

**Content Requirements:**

| Field | Value |
|---|---|
| Section Heading | `About Me` |
| Profile Photo | Circular or hexagonal avatar with glow border |
| Bio | 2–3 paragraph narrative: background, passion for IT, goals |
| Highlights | 3–4 stat cards (e.g., Projects Completed, Technologies Known, Certifications Earned, Years Learning) |
| Downloadable CV | Inline "Download CV" link |

**UX Requirements:**
- Two-column layout on desktop (photo left, text right).
- Stat cards with animated count-up numbers on scroll-into-view.
- Subtle reveal animation for the bio text block.

---

### 5.4 Experience

**Purpose:** Demonstrate professional or practical exposure.

**Content Requirements:**

Each experience entry contains:
- Company / Organisation name
- Role / Position title
- Duration (Month Year – Month Year)
- Location (Remote / On-site / City)
- Bullet-point responsibilities and achievements
- Tech stack tags used

**Layout:** Vertical timeline with alternating left/right on desktop, single column on mobile.

**UX Requirements:**
- Timeline line with animated glowing dot per entry.
- Cards with glassmorphism styling.
- Hover: card lifts with border glow intensification.
- Each entry reveals on scroll.

> If no formal work experience yet, this section can display internships, freelance work, academic projects with professional context, or volunteer tech roles.

---

### 5.5 Projects

**Purpose:** The most critical section — demonstrate real-world capability.

**Content Requirements:**

Each project card contains:
- Project title
- Short description (2–3 sentences)
- Tech stack (icon + label badges)
- Project type tag (e.g., `Web App`, `Mobile`, `API`, `Academic`)
- Live demo link (if available)
- GitHub repository link
- Featured image / screenshot (with glow overlay)

**Layout:**
- Filterable grid — filter tabs: `All · Web · Mobile · Academic · Other`
- 3-column grid on desktop, 2 on tablet, 1 on mobile.
- Featured project(s) shown in a larger card at top.

**UX Requirements:**
- Filter tabs with animated underline/active indicator.
- Cards: glassmorphism with image top, content below.
- Hover: image zooms slightly, card border glows, "View Project" overlay appears.
- Staggered card entrance animation on scroll.

---

### 5.6 Education

**Purpose:** Communicate academic background and credentials.

**Content Requirements:**

Each education entry contains:
- Institution name and logo (if available)
- Degree / Programme title (e.g., HND in Information Technology — SLIATE)
- Field of study
- Duration (Year – Year or Expected Year)
- GPA / Grade (optional)
- Key modules or highlights (as tags or bullet points)

**Layout:** Vertical timeline (similar to Experience section).

**UX Requirements:**
- Institution logos where available with fallback initials-based badge.
- Highlighted current enrolment with a pulsing "Currently Enrolled" badge.
- Scroll-triggered reveal animations.

---

### 5.7 Skills

**Purpose:** Quick visual overview of technical and soft competencies.

**Content Requirements:**

Skills organised into categories:

| Category | Examples |
|---|---|
| Frontend | HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS |
| Backend | Node.js, Express, PHP, Python |
| Database | MySQL, PostgreSQL, MongoDB, Firebase |
| Mobile | React Native, Flutter (if applicable) |
| Tools & DevOps | Git, GitHub, Docker, Linux, VS Code, Figma |
| Soft Skills | Problem Solving, Teamwork, Communication, Time Management |

**Layout:** Categorised tab or accordion layout. Each skill shown as a badge with icon.

**UX Requirements:**
- Category filter tabs at the top.
- Skill badges with neon glow on hover.
- Proficiency indicator per skill (visual bar or ring — Beginner / Intermediate / Advanced / Expert).
- Staggered badge entrance animation per category on tab switch.

---

### 5.8 Certifications

**Purpose:** Validate skills through third-party recognition.

**Content Requirements:**

Each certification card contains:
- Certification title
- Issuing organisation (e.g., Google, Meta, Coursera, AWS, Cisco)
- Issuing organisation logo
- Date issued / Expiry date (if applicable)
- Credential ID (optional, with copy button)
- Verification link (external)
- Relevant skills covered (tags)

**Layout:** Responsive grid — 3 columns desktop, 2 tablet, 1 mobile.

**UX Requirements:**
- Cards with glassmorphism and issuer logo prominently displayed.
- Hover: reveal "Verify Certificate" button with external link icon.
- Badge-style glow border that changes colour per issuer category (e.g., Google = blue, AWS = orange).
- Entrance animation on scroll.

---

### 5.9 Contact

**Purpose:** Allow visitors to reach out easily.

**Content Requirements:**

| Element | Details |
|---|---|
| Section Heading | `Get In Touch` |
| Subheading | Short invite text (e.g., "Have a project in mind? Let's talk.") |
| Contact Form | Fields: Name, Email, Subject, Message + Send button |
| Direct Email | Clickable email address with copy-to-clipboard |
| Social Links | GitHub, LinkedIn, Instagram, WhatsApp (icon buttons) |
| Location | City, Country (Sri Lanka) |

**Form Behaviour:**
- Client-side validation via React Hook Form.
- Email delivery via EmailJS (no backend required) or Resend API route.
- Success state: animated confirmation with checkmark.
- Error state: inline field error messages.
- Submit button: loading spinner while sending.

**UX Requirements:**
- Two-column layout on desktop (form left, contact info right).
- Form fields: dark glassmorphism inputs with glowing focus ring.
- CTA button: neon glow pulse animation.

---

### 5.10 Footer

**Content:**
- Copyright line with current year (dynamic via `new Date().getFullYear()`).
- Quick nav links repeated.
- Social icon links.
- "Made with Next.js" attribution (optional).

---

## 6. Performance & Quality Requirements

| Metric | Target |
|---|---|
| Lighthouse Performance | ≥ 90 |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse SEO | ≥ 95 |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |
| Core Web Vitals | All Green |

---

## 7. SEO & Metadata

- `<title>` and `<meta description>` per route via Next.js `generateMetadata`.
- Open Graph image (`og:image`) for social sharing previews.
- Canonical URL defined.
- Structured data (JSON-LD) for `Person` schema.
- `robots.txt` and `sitemap.xml` generated via `next-sitemap`.
- All images use `next/image` with `alt` text.

---

## 8. Accessibility (a11y)

- WCAG 2.1 Level AA compliance.
- Keyboard navigable (tab order logical, focus rings visible).
- ARIA labels on icon-only buttons and interactive elements.
- Colour contrast ratio ≥ 4.5:1 for text.
- Skip-to-main-content link at top of page.
- Reduced-motion variant for all Framer Motion animations (`prefers-reduced-motion`).

---

## 9. Responsiveness

| Breakpoint | Layout Behaviour |
|---|---|
| Mobile (< 640px) | Single column, hamburger nav, stacked cards |
| Tablet (640px–1024px) | 2-column grids, condensed timeline |
| Desktop (> 1024px) | Full layout as designed, multi-column grids |

---

## 10. Deployment

- Hosted on **Vercel** (free Hobby tier sufficient for a portfolio).
- Custom domain (e.g., `yourname.dev` or `yourname.me`) via Vercel Domains.
- Environment variables for EmailJS / Resend API keys stored in Vercel project settings.
- Automatic deployment on push to `main` branch (CI/CD via Vercel GitHub integration).
- Preview deployments on pull requests.

---

## 11. Milestones & Timeline

| Phase | Tasks | Duration |
|---|---|---|
| 1 — Setup | Init Next.js 15 project, Tailwind, folder structure, design tokens, fonts | 1 day |
| 2 — Layout | Navbar, Footer, global layout, scroll behaviour | 1 day |
| 3 — Hero & About | Hero section animations, About section, stat counters | 2 days |
| 4 — Core Sections | Experience, Education (timeline), Skills (tabs) | 3 days |
| 5 — Projects | Project grid, filter tabs, project cards | 2 days |
| 6 — Certs & Contact | Certification grid, Contact form + EmailJS | 2 days |
| 7 — Polish | Animations, responsiveness, accessibility, performance | 2 days |
| 8 — Deploy | Vercel setup, domain, SEO, final review | 1 day |
| **Total** | | **~14 days** |

---

## 12. Out of Scope (v1.0)

- Blog / articles section (planned for v2.0).
- Dark / light mode toggle (dark-only for v1.0).
- CMS integration (content is hardcoded in `/data` files for v1.0).
- Admin dashboard or authentication.
- Multi-language support.

---

## 13. Future Enhancements (v2.0+)

- Blog powered by MDX or a headless CMS (e.g., Sanity, Contentful).
- Light / dark mode toggle with smooth transition.
- 3D interactive elements using Three.js / React Three Fiber.
- Testimonials section.
- Analytics integration (Vercel Analytics or Plausible).
- Content sourced dynamically from GitHub API (pinned repos).
- Admin panel for easy content updates.

---

## 14. Glossary

| Term | Definition |
|---|---|
| App Router | Next.js 13+ routing system based on the `/app` directory |
| Glassmorphism | UI style with frosted glass effect (blur + transparency) |
| LCP | Largest Contentful Paint — Core Web Vitals metric |
| CLS | Cumulative Layout Shift — Core Web Vitals metric |
| SLIATE | Sri Lanka Institute of Advanced Technological Education |
| HND | Higher National Diploma |
| WCAG | Web Content Accessibility Guidelines |

---

*End of Document — Portfolio PRD v1.0*

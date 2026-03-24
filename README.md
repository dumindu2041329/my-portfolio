# 🚀 Dumindu Damsara — Personal Portfolio

A futuristic, dark-themed personal portfolio website built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**. Showcasing my projects, skills, experience, and education with stunning animations and a premium UI.

---

## ✨ Features

- ⚡ **Next.js 16** with App Router for blazing-fast performance
- 🎨 **Futuristic dark theme** with neon cyan/purple accent colors
- 🌀 **Framer Motion** animations — smooth transitions, animated counters, and micro-interactions
- 🌐 **Three.js** animated hero background with particle effects
- 📱 **Fully responsive** across all screen sizes (mobile touch events supported)
- 🗂️ **Filterable Projects** section (Web, Mobile, Academic, Other)
- 🧠 **Skills** categorised by Frontend, Backend, Database, Mobile, Tools & DevOps
- 💼 **Experience** timeline with role details
- 🎓 **Education** timeline with academic highlights
- 🏅 **Certifications** showcase with flip-card design
- 📬 **Contact** form with **EmailJS** integration and real-time validation
- 📄 **Downloadable CV** button in the navbar

---

## 🛠️ Tech Stack

| Category        | Technologies                                                   |
|-----------------|----------------------------------------------------------------|
| 🖼️ Framework    | Next.js 16, React 19                                           |
| 🔷 Language     | TypeScript                                                     |
| 🎨 Styling      | Tailwind CSS 4, Custom CSS (glassmorphism, neon)               |
| 🌀 Animation    | Framer Motion                                                  |
| 🌐 3D / WebGL   | Three.js, @react-three/fiber, @react-three/drei               |
| 📬 Email        | EmailJS (`@emailjs/browser`)                                   |
| 📋 Forms        | React Hook Form                                                |
| 🔣 Icons        | Lucide React                                                   |
| 🖋️ Fonts        | Google Fonts (Outfit, JetBrains Mono)                          |
| ☁️ Deployment   | Vercel                                                         |

---

## 📁 Project Structure

```
my-portfolio/
├── app/
│   ├── layout.tsx              # Root layout with metadata & fonts
│   └── page.tsx                # Main page composing all sections
├── components/
│   ├── layout/
│   │   └── Navbar.tsx          # Sticky nav with active section detection & CV download
│   ├── sections/
│   │   ├── Hero.tsx            # Animated hero with Three.js background
│   │   ├── About.tsx           # About me with animated stats
│   │   ├── Experience.tsx      # Work experience timeline
│   │   ├── Projects.tsx        # Filterable project cards
│   │   ├── Education.tsx       # Education timeline
│   │   ├── Skills.tsx          # Skill badges by category
│   │   ├── Certifications.tsx  # Certification flip-cards
│   │   └── Contact.tsx         # Contact form with EmailJS
│   └── ui/                     # Reusable UI components
│       ├── CertCard.tsx
│       ├── GlowButton.tsx
│       ├── ProjectCard.tsx
│       ├── ScrollToTop.tsx
│       ├── SectionHeading.tsx
│       ├── SkillBadge.tsx
│       ├── ThreeBackground.tsx
│       └── TimelineItem.tsx
├── data/
│   ├── projects.ts             # All project entries
│   ├── skills.ts               # Skill categories
│   ├── education.ts            # Education timeline
│   ├── experience.ts           # Work experience
│   └── certifications.ts       # Certifications data
├── public/
│   ├── My CV.pdf               # Downloadable resume
│   ├── profile.png             # Profile photo
│   └── projects/               # Project screenshot images
└── email_template.html         # EmailJS email template
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js **18+**
- npm / yarn / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/dumindu2041329/my-portfolio.git

# Navigate into the directory
cd my-portfolio

# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file in the root and add your EmailJS credentials:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

```bash
npm run build
npm start
```

---

## 🗂️ Projects Showcased

| Project | Type | Links |
|---------|------|-------|
| 🎨 phpMyAdmin Themes | Other | [GitHub](https://github.com/dumindu2041329/phpmyadmin-themes) |
| 🔒 FileShare | Web | [GitHub](https://github.com/dumindu2041329/file-share) · [Live](https://file-share-puce.vercel.app) |
| 🖼️ Free AI Image Generator | Web | [GitHub](https://github.com/dumindu2041329/Image-Generator) · [Live](https://image-generator-silk-mu.vercel.app) |
| 💳 Stripe Payment Integration | Web | [GitHub](https://github.com/dumindu2041329/stripe-payment) · [Live](https://stripe-payment-seven-beta.vercel.app) |
| 🍽️ Grilli Restaurant Template | Academic | [GitHub](https://github.com/dumindu2041329/grilli-restaurant) |
| 🎮 Ubisoft Store Clone | Academic | [GitHub](https://github.com/dumindu2041329/ubisoft-store) |

---

## 👨‍💻 About Me

I'm **Dumindu Damsara**, an aspiring IT professional pursuing a **Higher National Diploma in Information Technology** at SLIATE. I'm passionate about full-stack web development and love building modern, clean, and functional web experiences.

- 📦 **6** Projects Completed
- 🛠️ **10+** Technologies Known
- 📅 **2+** Years of Learning

---

## 📬 Contact

- 🐙 **GitHub**: [github.com/dumindu2041329](https://github.com/dumindu2041329)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

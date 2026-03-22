export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  type: "Web" | "Mobile" | "Academic" | "Other";
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "phpmyadmin-themes",
    title: "phpMyAdmin Themes",
    description: "A collection of beautiful, handcrafted themes for phpMyAdmin (including NeoBrutalism and Supabase themes) — giving your database management interface a stunning modern look.",
    techStack: ["CSS", "SCSS", "UI Design"],
    type: "Other",
    githubUrl: "https://github.com/dumindu2041329/phpmyadmin-themes",
  },
  {
    id: "file-share",
    title: "FileShare",
    description: "A full-stack web application that enables users to upload, store, and share files securely with end-to-end encryption.",
    techStack: ["React", "TypeScript", "Node.js", "Express"],
    type: "Web",
    githubUrl: "https://github.com/dumindu2041329/file-share",
    liveUrl: "https://file-share-puce.vercel.app",
  },
  {
    id: "Image-Generator",
    title: "Free AI Image Generator",
    description: "An unlimited AI image generator powered by Pollinations AI, featuring customizable styles, aspect ratios, and Supabase integration for image history logging.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase"],
    type: "Web",
    githubUrl: "https://github.com/dumindu2041329/Image-Generator",
    liveUrl: "https://image-generator-silk-mu.vercel.app",
  },
  {
    id: "stripe-payment",
    title: "Stripe Payment Integration",
    description: "A full-stack application demonstrating secure Stripe payment integration for digital products like PDF downloads.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Express.js", "Stripe API"],
    type: "Web",
    githubUrl: "https://github.com/dumindu2041329/stripe-payment",
    liveUrl: "https://stripe-payment-seven-beta.vercel.app",
  },
  {
    id: "grilli-restaurant",
    title: "Grilli - Restaurant HTML Template",
    description: "A 1st-semester individual project. Grilli is an amazing and delicious restaurant HTML template featuring a modern design with menus, a chefs section, booking requests, and more.",
    techStack: ["HTML", "CSS", "JavaScript"],
    type: "Academic",
    githubUrl: "https://github.com/dumindu2041329/grilli-restaurant",
  },
  {
    id: "ubisoft-store",
    title: "Ubisoft Store Clone",
    description: "A frontend mockup/clone of the Ubisoft International Store. This static website replicates the look and feel of the official Ubisoft digital storefront, featuring detailed navigation menus, promotional banners, game catalogs, and responsive layouts.",
    techStack: ["HTML", "CSS", "JavaScript"],
    type: "Academic",
    githubUrl: "https://github.com/dumindu2041329/ubisoft-store",
  }
];

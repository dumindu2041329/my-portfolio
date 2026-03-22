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
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce web application with product management, cart functionality, and secure checkout. Built with modern web technologies for optimal performance.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Stripe"],
    type: "Web",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop support, and team workspaces.",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB"],
    type: "Web",
    githubUrl: "https://github.com",
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description:
      "A Python-based weather application that fetches real-time weather data and displays forecasts with interactive charts.",
    techStack: ["Python", "Flask", "OpenWeather API", "Chart.js"],
    type: "Web",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "4",
    title: "Student Management System",
    description:
      "An academic project for managing student records, grades, and course registrations with role-based access for students, lecturers, and admins.",
    techStack: ["PHP", "MySQL", "Bootstrap", "jQuery"],
    type: "Academic",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "5",
    title: "Fitness Tracker Mobile App",
    description:
      "A cross-platform mobile app for tracking workouts, calories, and health metrics with personalized recommendations.",
    techStack: ["React Native", "Firebase", "Expo"],
    type: "Mobile",
    githubUrl: "https://github.com",
  },
  {
    id: "6",
    title: "<Dumindu Damsara/> Website",
    description:
      "A personal portfolio website showcasing projects, skills, and certifications with a futuristic dark-themed design.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    type: "Web",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

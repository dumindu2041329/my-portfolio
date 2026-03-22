export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  responsibilities: string[];
  techStack: string[];
}

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Tech Solutions Lanka",
    role: "Intern Software Developer",
    duration: "Jun 2025 – Aug 2025",
    location: "Colombo, Sri Lanka",
    responsibilities: [
      "Developed and maintained web applications using React and Node.js",
      "Collaborated with the design team to implement responsive UI components",
      "Participated in code reviews and agile sprint planning",
      "Optimised database queries resulting in 30% faster page load times",
    ],
    techStack: ["React", "Node.js", "MySQL", "Git"],
  },
  {
    id: "2",
    company: "Freelance",
    role: "Web Developer",
    duration: "Jan 2025 – Present",
    location: "Remote",
    responsibilities: [
      "Designed and developed responsive websites for small businesses",
      "Implemented SEO best practices to improve client search rankings",
      "Managed project timelines and client communication",
      "Built custom WordPress themes and plugins",
    ],
    techStack: ["WordPress", "PHP", "JavaScript", "CSS"],
  },
  {
    id: "3",
    company: "SLIATE IT Club",
    role: "Technical Lead",
    duration: "Sep 2024 – Present",
    location: "On-site",
    responsibilities: [
      "Organised coding workshops and hackathons for fellow students",
      "Mentored junior members in web development fundamentals",
      "Led the development of the club's official website",
      "Coordinated with industry professionals for guest lectures",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

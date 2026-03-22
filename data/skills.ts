export interface Skill {
  name: string;
  icon?: string;
  proficiency: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML", proficiency: "Expert" },
      { name: "CSS", proficiency: "Expert" },
      { name: "JavaScript", proficiency: "Advanced" },
      { name: "TypeScript", proficiency: "Intermediate" },
      { name: "React", proficiency: "Advanced" },
      { name: "Next.js", proficiency: "Advanced" },
      { name: "Tailwind CSS", proficiency: "Advanced" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", proficiency: "Advanced" },
      { name: "Express", proficiency: "Advanced" },
      { name: "PHP", proficiency: "Intermediate" },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "MySQL", proficiency: "Advanced" },
      { name: "PostgreSQL", proficiency: "Intermediate" },
    ],
  },
  {
    name: "Mobile",
    skills: [
      { name: "React Native", proficiency: "Intermediate" },
      { name: "Flutter", proficiency: "Beginner" },
    ],
  },
  {
    name: "Tools & DevOps",
    skills: [
      { name: "Git", proficiency: "Advanced" },
      { name: "GitHub", proficiency: "Advanced" },
      { name: "VS Code", proficiency: "Expert" },
    ],
  },
  {
    name: "Soft Skills",
    skills: [
      { name: "Problem Solving", proficiency: "Advanced" },
      { name: "Teamwork", proficiency: "Advanced" },
      { name: "Communication", proficiency: "Advanced" },
      { name: "Time Management", proficiency: "Intermediate" },
    ],
  },
];

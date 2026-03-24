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
    company: "Panadugama Samurdhi Bank",
    role: "Computer operator trainee",
    duration: "Jun 2021 – Mar 2022",
    location: "Panadugama, Sri Lanka",
    responsibilities: [
      "Managed digital customer registration using the Samurdhi bank's online portal, ensuring data accuracy and secure information handling.",
      "Performed comprehensive data entry operations using Microsoft Word and Excel to organize and maintain critical bank records.",
    ],
    techStack: ["Word", "Excel"],
  },
];

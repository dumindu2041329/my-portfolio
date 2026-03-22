export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  gpa?: string;
  highlights: string[];
  current?: boolean;
}

export const educations: Education[] = [
  {
    id: "1",
    institution: "Sri Lanka Institute of Advanced Technological Education (SLIATE)",
    degree: "Higher National Diploma (HND)",
    field: "Information Technology",
    duration: "2023 – Present",
    highlights: [
      "Web Application Development",
      "Database Management Systems",
      "Object-Oriented Programming",
      "Software Engineering",
      "Networking Fundamentals",
    ],
    current: true,
  },
  {
    id: "2",
    institution: "Central College, Colombo",
    degree: "G.C.E. Advanced Level",
    field: "Technology Stream",
    duration: "2020 – 2022",
    gpa: "3 A Passes",
    highlights: [
      "Science For Technology",
      "Engineering Technology",
      "Information Technology",
    ],
  },
  {
    id: "3",
    institution: "Central College, Colombo",
    degree: "G.C.E. Ordinary Level",
    field: "General Education",
    duration: "2018 – 2019",
    gpa: "9 A Passes",
    highlights: [
      "Mathematics",
      "Science",
      "ICT",
    ],
  },
];

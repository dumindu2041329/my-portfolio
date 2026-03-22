export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issuerColor: string;
  dateIssued: string;
  expiryDate?: string;
  credentialId?: string;
  verifyUrl?: string;
  skills: string[];
}

export const certifications: Certification[] = [
  {
    id: "1",
    title: "Google IT Support Professional Certificate",
    issuer: "Google",
    issuerColor: "#4285F4",
    dateIssued: "Jan 2025",
    credentialId: "GOOG-IT-2025-XXXX",
    verifyUrl: "https://www.coursera.org/verify",
    skills: ["Networking", "Security", "System Administration", "Troubleshooting"],
  },
  {
    id: "2",
    title: "Meta Front-End Developer Certificate",
    issuer: "Meta",
    issuerColor: "#0081FB",
    dateIssued: "Mar 2025",
    credentialId: "META-FE-2025-XXXX",
    verifyUrl: "https://www.coursera.org/verify",
    skills: ["React", "JavaScript", "HTML/CSS", "UI/UX"],
  },
  {
    id: "3",
    title: "AWS Cloud Practitioner",
    issuer: "AWS",
    issuerColor: "#FF9900",
    dateIssued: "Feb 2025",
    expiryDate: "Feb 2028",
    credentialId: "AWS-CP-2025-XXXX",
    verifyUrl: "https://aws.amazon.com/verify",
    skills: ["Cloud Computing", "AWS Services", "Security", "Architecture"],
  },
  {
    id: "4",
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    issuerColor: "#0A0A23",
    dateIssued: "Nov 2024",
    credentialId: "FCC-RWD-2024-XXXX",
    verifyUrl: "https://www.freecodecamp.org/certification",
    skills: ["HTML", "CSS", "Accessibility", "Responsive Design"],
  },
  {
    id: "5",
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    issuerColor: "#1BA0D7",
    dateIssued: "Dec 2024",
    credentialId: "CISCO-CS-2024-XXXX",
    verifyUrl: "https://www.credly.com/verify",
    skills: ["Cybersecurity", "Network Security", "Threat Analysis"],
  },
];

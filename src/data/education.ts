import type { Certification, EducationItem } from '@/types';

export const educationItems: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'BSc. in Software Engineering',
    institution: 'Zetech University',
    period: '2022 — 2026',
    description:
      'Coursework in algorithms, data structures, operating systems, databases, software engineering, and distributed systems.',
    highlights: [
      'Built a final-year capstone: a real-time collaboration platform with WebSockets',
      'Teaching assistant for Introduction to Programming (Python)',
      'Active member of the campus developer community',
    ],
  },
];
export const certifications: Certification[] = [
  {
    id: 'cert-1',
    title: 'Web, Python and Database Development Certificate',
    issuer: 'PowerLearn · African Virtual University',
    year: '2025',
    credentialUrl: 'https://drive.google.com/file/d/1dKPTUaPJzC4O70KipTJyfxteoNhXghSZ/view?usp=drive_link',
    learned: [
      'Building responsive UIs with React and modern JavaScript, the MERN stack, and Python web frameworks',
      'State management patterns and component composition',
      'Accessibility, semantic HTML, and testing front-end code',
      'Version control with Git and collaborative workflows',
    ],
  },
  {
    id: 'cert-2',
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: '2024',
    credentialUrl: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
    learned: [
      'Core AWS services: EC2, S3, RDS, Lambda, IAM, VPC',
      'Cloud architecture principles and the well-architected framework',
      'Pricing, billing, and cost-optimisation strategies',
      'Security and compliance fundamentals in the cloud',
    ],
  },
  {
    id: 'cert-3',
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google · Coursera',
    year: '2023',
    credentialUrl: 'https://www.coursera.org/professional-certificates/google-data-analytics',
    learned: [
      'Data cleaning, transformation, and analysis with SQL and spreadsheets',
      'Exploratory data analysis and visualisation with R and Tableau',
      'Building data-driven recommendations and reports',
      'Statistical thinking for business decisions',
    ],
  },
  {
    id: 'cert-4',
    title: 'freeCodeCamp — Responsive Web Design & JavaScript Algorithms',
    issuer: 'freeCodeCamp',
    year: '2022',
    credentialUrl: 'https://www.freecodecamp.org/learn',
    learned: [
      'HTML5, CSS3, Flexbox, and Grid for responsive layouts',
      'Core JavaScript: ES6+, closures, async/await, and the DOM',
      'Algorithmic problem solving and data structures fundamentals',
      'Project-based learning by shipping small apps end-to-end',
    ],
  },
];

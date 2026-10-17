import type { Certification, EducationItem } from '@/types';

export const educationItems: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'Bachelors of science in Software Engineering',
    institution: 'Zetech University',
    period: 'Sep 2022 — Aug 2026',
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
    title: 'AI Essentials for professionals Certificate',
    issuer: 'Moringa School',
    year: '2026',
    credentialUrl: 'https://drive.google.com/file/d/194eRGNIcSJDlrNx2DYAxD7oKCWFF5ihF/view?usp=drive_link',
    learned: [
      'Core AI concepts and techniques',
      'Natural language processing fundamentals',
      'Machine learning fundamentals and applications',
      'Prompt Engineering for effective AI interactions',
      'Generation and cost-optimisation strategies',
      'Ethical considerations and best practices for responsible AI use',
    ],
  },
  {
    id: 'cert-3',
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google · Coursera',
    year: '2026',
    credentialUrl: '',
    learned: [
      'COURSE ONGOING...',
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
    year: '2026',
    credentialUrl: '',
    learned: [
      'COURSE ONGOING...',
      'HTML5, CSS3, Flexbox, and Grid for responsive layouts',
      'Core JavaScript: ES6+, closures, async/await, and the DOM',
      'Algorithmic problem solving and data structures fundamentals',
      'Project-based learning by shipping small apps end-to-end',
    ],
  },
];

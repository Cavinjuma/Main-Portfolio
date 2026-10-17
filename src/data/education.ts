import type { Certification, EducationItem } from '@/types';

export const educationItems: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'Bachelors of Science in Software Engineering',
    institution: 'Zetech University',
    period: 'Sep 2022 — Aug 2026',
    description:
      'Coursework in: DSA, Object Oriented Programming(Java, C++, Python), Operating Systems, Databases, Distributed Systems, Web, Mobile and Enterprise Application Development, Data Science and AI, CyberSecurity, Network Programming.',
    highlights: [
      'Built multiple projects including a final-year capstone: a real-time collaboration platform with WebSockets',
      'Attended and actively participated in various tech meetups, hackathons, and coding competitions, enhancing practical skills and networking with industry professionals.',
      'Led a team of 4 in a software development project, applying agile methodologies and version control with Git to deliver a functional application within the semester timeline.',
      'Integrated third-party APIs and services into projects, gaining experience in API consumption, authentication, and data handling.',
      'Conducted code reviews and provided constructive feedback to peers, fostering a collaborative learning environment and improving code quality.',
    ],
  },
];
export const certifications: Certification[] = [
  {
    id: 'cert-1',
    title: 'Web, Python and Database Development Certificate',
    issuer: 'PLP-Africa · PowerLearn Project, Africa',
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
        title: 'AI Engineering Mastery Certificate',
        issuer: 'Ivy Code Academy',
        year: '2026',
        credentialUrl: 'https://drive.google.com/file/d/1--z5nsI4Xxf5eLKcBclANFxkma1ASZaS/view?usp=drive_link',
        learned: [
          'AI model development and deployment with Python and TensorFlow',
          'Real-world AI applications in computer vision, NLP, and recommendation systems',
          'Retrieval-augmented generation (RAG) and fine-tuning techniques',
          'AI project management, collaboration, and ethical considerations',
    ],
  },
  
  {
    id: 'cert-4',
        title: 'Certificate in Communication Skills',
        issuer: 'YENA · Youth Empowerment Network Africa',
        year: '2026',
        credentialUrl: 'https://drive.google.com/file/d/1qVQdvrd4qBIqlo9zo9dhC7fkAcM8Eaww/view?usp=drive_link',
        learned: [
          'Communication strategies for effective interpersonal and professional interactions',
          'Active listening and feedback techniques',
          'Public speaking and presentation skills',
          'Conflict resolution and negotiation tactics',
    ],
  },
  {
    id: 'cert-5',
    title: 'Google IT Support Professional Certificate',
    issuer: 'Google',
    year: '2026',
    credentialUrl: '',
    learned: [
      'COURSE ONGOING...',
      'IT fundamentals, troubleshooting, and customer support',
      'Networking, system administration, and security basics',
      'Hands-on labs and real-world scenarios for practical experience',
      'Preparation for the Google IT Support Professional Certificate exam',
    ],
  },
];

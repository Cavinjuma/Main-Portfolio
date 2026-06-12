import type { Project } from '@/types';

// Generic tech / coding cover imagery from Unsplash
const codeCover = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1280&q=80`;

export const projects: Project[] = [
  {
    id: '1',
    title: 'Capital Stock App',
    category: 'web',
    year: '2026',
    slug: 'capital-stock-app',
    coverImage: codeCover('photo-1517245386807-bb43f82c33c4'),
    description:
      'A real-time team productivity platform with boards, sprints, and granular permissions. Built with a React + TypeScript frontend and a Node.js GraphQL API backed by PostgreSQL. Optimistic UI, offline support, and end-to-end type safety.',
    client: 'Lead Engineer · Independent',
    camera: 'React, TypeScript, GraphQL, Node.js, PostgreSQL, Redis',
    location: 'https://github.com/Cavinjuma/Capital-Stock-Market-app',
    images: [
      { id: '1-1', src: codeCover('photo-1517245386807-bb43f82c33c4'), alt: 'TaskFlow dashboard', aspectRatio: 'landscape' },
      { id: '1-2', src: codeCover('photo-1555066931-4365d14bab8c'), alt: 'Code editor view', aspectRatio: 'landscape' },
      { id: '1-3', src: codeCover('photo-1542831371-29b0f74f9713'), alt: 'API architecture diagram', aspectRatio: 'landscape' },
    ],
  },
  {
    id: '2',
    title: 'BookEasy — Automated appointment booking system',
    category: 'web',
    year: '2026',
    slug: 'bookeasy',
    coverImage: codeCover('photo-1556742111-a301076d9d18'),
    description:
      'A React Native mobile app that helps users track expenses across M-Pesa and bank accounts. Features secure local storage, biometric auth, and AI-assisted categorisation of transactions.',
    client: 'Solo project',
    camera: 'React Native, Expo, TypeScript, SQLite, OpenAI API',
    location: 'https://github.com/Cavinjuma/BookEasy',
    images: [
      { id: '2-1', src: codeCover('photo-1556742111-a301076d9d18'), alt: 'Mobile app screen', aspectRatio: 'portrait' },
      { id: '2-2', src: codeCover('photo-1601597111158-2fceff292cdc'), alt: 'Phone with code', aspectRatio: 'portrait' },
      { id: '2-3', src: codeCover('photo-1512941937669-90a1b58e7e9c'), alt: 'Mobile development workspace', aspectRatio: 'landscape' },
    ],
  },
  {
    id: '3',
    title: 'TamuHR — Human Resource Portal',
    category: 'web',
    year: '2026',
    slug: 'tamuhr',
    coverImage: codeCover('photo-1558494949-ef010cbdcc31'),
    description:
      'A Human Resource management portal with employee records, leave requests, and payroll integration. Built a RESTful API with Node.js and Fastify, using PostgreSQL for data storage and Vercel for deployment. Implemented role-based access control(RBAC) and comprehensive test coverage.',
    client: 'Solo Engineer · Human Resource',
    camera: 'React, Javascript, Node.js, Fastify, PostgreSQL, Terraform, Vercel',
    location: 'https://github.com/Cavinjuma/Human-Resource-Portal',
    images: [
      { id: '3-1', src: codeCover('photo-1558494949-ef010cbdcc31'), alt: 'Server racks', aspectRatio: 'landscape' },
      { id: '3-2', src: codeCover('photo-1605379399642-870262d3d051'), alt: 'API code', aspectRatio: 'landscape' },
      { id: '3-3', src: codeCover('photo-1607799279861-4dd421887fb3'), alt: 'Architecture diagram', aspectRatio: 'landscape' },
    ],
  },
  {
    id: '4',
    title: 'Jenga Construction — Building and construction company website',
    category: 'web',
    year: '2025',
    slug: 'jenga-construction',
    coverImage: codeCover('photo-1677442136019-21780ecad995'),
    description:
      'A modern website for a building and construction company, showcasing their services and projects. Built with HTML5, Javascript and styled-components for a responsive design.',
    client: 'Solo project',
    camera: 'HTML5, Javascript, styled-components, Supabase, Vercel',
    location: 'https://github.com/Cavinjuma/Jenga-Construction',
    images: [
      { id: '4-1', src: codeCover('photo-1677442136019-21780ecad995'), alt: 'AI chat UI', aspectRatio: 'landscape' },
      { id: '4-2', src: codeCover('photo-1620712943543-bcc4688e7485'), alt: 'AI concept', aspectRatio: 'landscape' },
      { id: '4-3', src: codeCover('photo-1526378722484-bd91ca387e72'), alt: 'Data visualization', aspectRatio: 'landscape' },
    ],
  },
  {
    id: '5',
    title: 'use-async-state — Open Source React Hook',
    category: 'opensource',
    year: '2024',
    slug: 'use-async-state',
    coverImage: codeCover('photo-1633356122544-f134324a6cee'),
    description:
      'A tiny, dependency-free React hook for managing async state with cancellation, retries, and TypeScript-first ergonomics. Published to npm with 100% test coverage and full documentation site.',
    client: 'Maintainer · Open Source',
    camera: 'TypeScript, React, Vitest, tsup, Changesets',
    location: 'https://github.com/jumaotienocavin',
    images: [
      { id: '5-1', src: codeCover('photo-1633356122544-f134324a6cee'), alt: 'Open source code', aspectRatio: 'landscape' },
      { id: '5-2', src: codeCover('photo-1518770660439-4636190af475'), alt: 'GitHub repo', aspectRatio: 'landscape' },
    ],
  },
  {
    id: '6',
    title: 'Shamba — Smart Farming Dashboard',
    category: 'web',
    year: '2023',
    slug: 'shamba',
    coverImage: codeCover('photo-1460925895917-afdab827c52f'),
    description:
      'A dashboard for smallholder farmers visualising soil sensor data, weather forecasts, and yield predictions. Built with Next.js, server components, and a Python data pipeline.',
    client: 'Full-stack Engineer',
    camera: 'Next.js, TypeScript, Python, TimescaleDB, Recharts',
    location: 'https://github.com/jumaotienocavin',
    images: [
      { id: '6-1', src: codeCover('photo-1460925895917-afdab827c52f'), alt: 'Dashboard charts', aspectRatio: 'landscape' },
      { id: '6-2', src: codeCover('photo-1551288049-bebda4e38f71'), alt: 'Analytics view', aspectRatio: 'landscape' },
    ],
  },
];

// Helper function to get project by slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};

// Helper function to get projects by category
export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter((project) => project.category === category);
};

// Helper function to get featured projects (first 4)
export const getFeaturedProjects = (): Project[] => {
  return projects.slice(0, 4);
};

// Helper function to get next/previous project
export const getAdjacentProjects = (
  currentSlug: string,
): { prev: Project | null; next: Project | null } => {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);

  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null,
  };
};

import type { PhotographerInfo } from '@/types';

/**
 * Profile info for Juma Otieno Cavin.
 * The exported name is kept as `photographerInfo` to avoid a wide rename,
 * but the data describes a software engineer.
 */
export const photographerInfo: PhotographerInfo = {
  name: 'Juma Otieno Cavin',
  tagline: 'Software Engineer',
  heroIntroduction:
    'Building reliable, well-crafted software — from clean APIs to delightful user interfaces.',
  biography: `Juma Otieno Cavin is a software engineer focused on building production-grade web and mobile applications. He works across the stack with TypeScript, React, Node.js, and Python, and enjoys turning fuzzy problems into clean, maintainable systems.

His work spans full-stack web apps, REST and GraphQL APIs, cloud deployments, and AI-assisted tooling. He cares about code quality, developer experience, and shipping software that real people enjoy using.`,
  approach: `My engineering practice is guided by three principles: clarity, correctness, and craft. I write code that the next person can read, design systems that fail gracefully, and ship iteratively with tight feedback loops.

Whether I'm architecting a new service or polishing the last 10% of a UI, my goal is the same: software that's honest about what it does and a pleasure to maintain.`,
  awards: [
    'Open-source contributor — multiple TypeScript / React projects',
    'Hackathon finalist — built an AI-powered productivity tool',
    'Speaker at local developer meetups on modern web architecture'
  ],
  clients: [
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Python',
    'PostgreSQL',
    'Docker',
    'AWS'
  ],
  education: 'BSc Software Engineering, Zetech University',
  location: 'Nairobi, Kenya',
  email: 'jumacavin28@gmail.com',
  phone: '+254 704225571',
  availability: 'Open to full-time/part-time roles and freelance engagements',
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/juma-cavin9090',
    github: 'https://github.com/Cavinjuma'
  },
  // Photo 
   portraitImage:'MeX.jpeg',
};

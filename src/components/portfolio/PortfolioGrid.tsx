import type { Project } from '@/types';
import { ProjectCard } from './ProjectCard';

interface PortfolioGridProps {
  projects: Project[];
  onSelect: (project: Project) => void;
}

/**
 * Portfolio grid using CSS Grid
 * Responsive: 3 columns desktop, 2 tablet, 1 mobile
 */
export function PortfolioGrid({ projects, onSelect }: PortfolioGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 md:gap-x-8 md:gap-y-14">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          onSelect={onSelect}
          aspectRatio="landscape"
          showCategory={true}
          index={index}
        />
      ))}
    </div>
  );
}

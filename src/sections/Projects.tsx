import { useState } from 'react';
import { projects } from '@/data/projects';
import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid';
import { ProjectDialog } from '@/components/portfolio/ProjectDialog';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { Project } from '@/types';

/**
 * Projects: every project as a card; details open in a modal.
 */
export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="portfolio"
      className="py-24 md:py-32 px-6 lg:px-8 bg-muted/40 border-t border-border"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Projects"
          subtitle="A selection of software I've designed, built, and shipped"
        />

        <PortfolioGrid projects={projects} onSelect={setSelectedProject} />
      </div>

      <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}

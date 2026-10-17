import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/types';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  aspectRatio?: 'portrait' | 'landscape' | 'square';
  showCategory?: boolean;
  index?: number;
}

const MAX_STACK_CHIPS = 3;

/**
 * Project card with cover image, always-visible title/meta and tech chips.
 * Opens the project detail dialog on click (no route change on a single page).
 */
export function ProjectCard({
  project,
  onSelect,
  aspectRatio,
  showCategory = true,
  index = 0,
}: ProjectCardProps) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const ratio = aspectRatio || 'landscape';

  const aspectRatioClasses = {
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[3/2]',
    square: 'aspect-square',
  };

  const stack = (project.camera ?? '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
  const visibleStack = stack.slice(0, MAX_STACK_CHIPS);
  const hiddenCount = stack.length - visibleStack.length;

  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
    >
      <button
        type="button"
        onClick={() => onSelect(project)}
        aria-haspopup="dialog"
        aria-label={`View details for ${project.title}`}
        className="group flex h-full w-full flex-col text-left rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
      >
        {/* Image Container */}
        <div className={cn('relative overflow-hidden rounded-sm bg-muted', aspectRatioClasses[ratio])}>
          <img
            src={project.coverImage}
            alt=""
            className={cn(
              'absolute inset-0 w-full h-full object-cover transition-all duration-700',
              isLoaded ? 'opacity-100' : 'opacity-0',
              'group-hover:scale-105'
            )}
            loading={index < 6 ? 'eager' : 'lazy'}
            onLoad={() => setIsLoaded(true)}
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-500">
            <div className="absolute bottom-4 right-4 flex size-10 items-center justify-center rounded-full bg-white/90 text-black">
              <ArrowUpRight className="size-5" />
            </div>
          </div>
        </div>

        {/* Always-visible details (works on touch devices too) */}
        <div className="flex flex-1 flex-col gap-3 pt-5">
          <h3 className="text-lg md:text-xl font-light tracking-wide leading-snug transition-colors group-hover:text-muted-foreground">
            {project.title}
          </h3>

          {showCategory && (
            <div className="flex items-center gap-3 text-sm text-muted-foreground font-light tracking-wide">
              <span className="capitalize">{project.category}</span>
              <span aria-hidden="true">•</span>
              <span>{project.year}</span>
            </div>
          )}

          {visibleStack.length > 0 && (
            <div className="mt-auto flex flex-wrap gap-2 pt-1">
              {visibleStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="font-light">
                  {tech}
                </Badge>
              ))}
              {hiddenCount > 0 && (
                <Badge variant="outline" className="font-light text-muted-foreground">
                  +{hiddenCount}
                </Badge>
              )}
            </div>
          )}
        </div>
      </button>
    </motion.div>
  );
}

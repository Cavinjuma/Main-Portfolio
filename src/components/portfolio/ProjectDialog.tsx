import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, Code2, ExternalLink, X } from 'lucide-react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ImageWithLightbox } from '@/components/portfolio/ImageWithLightbox';
import { Lightbox } from '@/components/portfolio/Lightbox';
import type { Project } from '@/types';

interface ProjectDialogProps {
  project: Project | null;
  onClose: () => void;
}

/**
 * Project detail view shown in a modal on top of the single page.
 * Carries everything the old /project/:slug page showed:
 * cover, title, year, category, repo link, description,
 * tech stack, role and the image gallery with a full-screen lightbox.
 */
export function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Keep rendering the last project while the close animation plays
  const lastProject = useRef<Project | null>(null);
  if (project) lastProject.current = project;
  const shown = project ?? lastProject.current;

  // Reset the lightbox whenever a different project opens
  useEffect(() => {
    setLightboxOpen(false);
    setCurrentImageIndex(0);
  }, [project?.id]);

  if (!shown) return null;

  const stack = (shown.camera ?? '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <Dialog open={!!project} onOpenChange={(open) => !open && onClose()}>
        <DialogContent className="block max-w-4xl w-[calc(100%-1.5rem)] max-h-[90vh] overflow-y-auto p-0 sm:rounded-sm [&>button]:hidden">
          {/* Cover */}
          <div className="relative aspect-[16/8] md:aspect-[16/7] w-full overflow-hidden bg-muted">
            <img
              src={shown.coverImage}
              alt={shown.title}
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-black/30" />
            <DialogClose
              className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Close project details"
            >
              <X className="size-5" />
            </DialogClose>
          </div>

          <div className="space-y-8 p-6 md:p-10">
            <DialogHeader className="space-y-4 text-left sm:text-left">
              <DialogTitle className="text-3xl md:text-4xl font-light tracking-wide leading-tight">
                {shown.title}
              </DialogTitle>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground font-light">
                <div className="flex items-center gap-2">
                  <Calendar className="size-4" />
                  <span>{shown.year}</span>
                </div>
                <div className="flex items-center gap-2 capitalize">
                  <span aria-hidden="true">•</span>
                  <span>{shown.category}</span>
                </div>
                {shown.location && (
                  <div className="flex items-center gap-2">
                    <span aria-hidden="true">•</span>
                    <ExternalLink className="size-4" />
                    <a
                      href={shown.location}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-foreground transition-colors underline-offset-4 hover:underline"
                    >
                      View repo / live
                    </a>
                  </div>
                )}
              </div>
            </DialogHeader>

            <Separator />

            <DialogDescription className="text-base md:text-lg font-light leading-relaxed text-foreground">
              {shown.description}
            </DialogDescription>

            {/* Technical details */}
            {(stack.length > 0 || shown.client) && (
              <div className="grid gap-8 md:grid-cols-2">
                {stack.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm font-light tracking-wide uppercase text-muted-foreground">
                      <Code2 className="size-4" />
                      <span>Tech Stack</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {stack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="font-light">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
                {shown.client && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm font-light tracking-wide uppercase text-muted-foreground">
                      <Briefcase className="size-4" />
                      <span>Role</span>
                    </div>
                    <p className="font-light text-foreground">{shown.client}</p>
                  </div>
                )}
              </div>
            )}

            {/* Gallery: uniform thumbnails, full image in the lightbox */}
            {shown.images.length > 0 && (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
                {shown.images.map((image, index) => (
                  <ImageWithLightbox
                    key={image.id}
                    image={{ ...image, aspectRatio: 'landscape' }}
                    onClick={() => openLightbox(index)}
                    priority={index === 0}
                    index={index}
                    className="w-full"
                  />
                ))}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <Lightbox
        images={shown.images}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen && !!project}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setCurrentImageIndex}
      />
    </>
  );
}

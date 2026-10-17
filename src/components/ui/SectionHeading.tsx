import { ReactNode } from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: ReactNode;
  className?: string;
}

/**
 * Consistent centered heading used at the top of every page section.
 */
export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <ScrollReveal>
      <div className={cn('text-center space-y-4 mb-14 md:mb-20', className)}>
        <h2 className="text-4xl md:text-5xl font-light tracking-wide">{title}</h2>
        <div className="h-px w-12 mx-auto bg-foreground/30" aria-hidden="true" />
        {subtitle && (
          <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
}

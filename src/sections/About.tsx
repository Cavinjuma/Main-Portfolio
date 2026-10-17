import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';
import { Separator } from '@/components/ui/separator';
import { SectionHeading } from '@/components/ui/SectionHeading';

/**
 * About: portrait, name/tagline, biography and contact basics.
 */
export function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="About" subtitle="Software Engineer & Builder" />

        <div className="grid md:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Portrait */}
          <motion.div
            className="md:col-span-2 space-y-6 max-w-sm mx-auto md:max-w-none w-full"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-[3/4] relative overflow-hidden rounded-sm bg-muted shadow-lg">
              <img
                src={photographerInfo.portraitImage}
                alt={photographerInfo.name}
                className="absolute inset-0 w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              {photographerInfo.socialLinks.github && (
                <a
                  href={photographerInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-border rounded-sm hover:bg-accent transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="size-5" />
                </a>
              )}
              {photographerInfo.socialLinks.linkedin && (
                <a
                  href={photographerInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-border rounded-sm hover:bg-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="size-5" />
                </a>
              )}
            </div>
          </motion.div>

          {/* Biography and info */}
          <motion.div
            className="md:col-span-3 space-y-8"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Name and tagline */}
            <div className="space-y-3">
              <h3 className="text-3xl md:text-4xl font-light tracking-wide">
                {photographerInfo.name}
              </h3>
              <p className="text-xl text-muted-foreground font-light tracking-wide">
                {photographerInfo.tagline}
              </p>
            </div>

            <Separator />

            {/* Biography */}
            <div className="space-y-4">
              {photographerInfo.biography.split('\n\n').map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base md:text-lg font-light leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Contact basics */}
            <div className="pt-2 space-y-2">
              <div className="text-sm font-light tracking-wide">
                <span className="text-muted-foreground">Email: </span>
                <a
                  href={`mailto:${photographerInfo.email}`}
                  className="text-foreground hover:text-muted-foreground transition-colors"
                >
                  {photographerInfo.email}
                </a>
              </div>
              <div className="text-sm font-light tracking-wide">
                <span className="text-muted-foreground">Location: </span>
                <span className="text-foreground">{photographerInfo.location}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

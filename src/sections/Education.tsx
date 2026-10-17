import { GraduationCap, Award, ExternalLink, BookOpen } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { educationItems, certifications } from '@/data/education';

/**
 * Education: formal education timeline plus certification cards.
 * Each certification lists what was learned so visitors understand the depth
 * behind the credential, not just the badge.
 */
export function Education() {
  return (
    <section id="education" className="py-24 md:py-32 px-6 lg:px-8 bg-background border-t border-border">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Education"
          subtitle="Formal study, certifications, and what I took away from each."
        />

        {/* Formal Education */}
        <div className="space-y-10">
          <ScrollReveal>
            <div className="flex items-center gap-3">
              <GraduationCap className="size-6 text-muted-foreground" />
              <h3 className="text-2xl md:text-3xl font-light tracking-wide">Formal Education</h3>
            </div>
          </ScrollReveal>

          <div className="space-y-10">
            {educationItems.map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 0.1}>
                <article className="space-y-4 border-l-2 border-border pl-6 md:pl-8">
                  <div className="space-y-1">
                    <h4 className="text-xl md:text-2xl font-light tracking-wide">{item.degree}</h4>
                    <p className="text-base font-light text-muted-foreground">
                      {item.institution} · {item.period}
                    </p>
                  </div>
                  {item.description && (
                    <p className="text-base md:text-lg font-light leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  )}
                  {item.highlights.length > 0 && (
                    <ul className="space-y-2 pt-2">
                      {item.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-sm md:text-base font-light text-foreground flex gap-3"
                        >
                          <span className="text-muted-foreground">—</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="space-y-10 mt-20 md:mt-24">
          <ScrollReveal>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Award className="size-6 text-muted-foreground" />
                <h3 className="text-2xl md:text-3xl font-light tracking-wide">Certifications</h3>
              </div>
              <p className="text-base font-light text-muted-foreground">
                Each entry includes the key skills and concepts I picked up.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => {
              // "COURSE ONGOING..." is a status line in the data, shown as a badge
              const isOngoing = cert.learned[0]?.toUpperCase().startsWith('COURSE ONGOING');
              const learnedItems = isOngoing ? cert.learned.slice(1) : cert.learned;

              return (
                <ScrollReveal key={cert.id} delay={(index % 2) * 0.08} className="h-full">
                  <article className="h-full flex flex-col border border-border rounded-sm p-6 space-y-5 bg-card hover:border-foreground/30 hover:shadow-md transition-all duration-300">
                    <header className="space-y-2">
                      {isOngoing && (
                        <Badge
                          variant="outline"
                          className="font-light tracking-wide text-[11px] text-muted-foreground"
                        >
                          {cert.learned[0]}
                        </Badge>
                      )}
                      <h4 className="text-xl font-light tracking-wide">{cert.title}</h4>
                      <p className="text-sm font-light text-muted-foreground">
                        {cert.issuer} · {cert.year}
                      </p>
                    </header>

                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-2 text-xs font-light tracking-wide uppercase text-muted-foreground">
                        <BookOpen className="size-3.5" />
                        <span>What I learned</span>
                      </div>
                      <ul className="space-y-1.5">
                        {learnedItems.map((item, i) => (
                          <li key={i} className="text-sm font-light text-foreground/90 flex gap-2">
                            <span className="text-muted-foreground">·</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-light tracking-wide text-foreground hover:text-muted-foreground transition-colors pt-1"
                      >
                        <span>View Certificate</span>
                        <ExternalLink className="size-3.5" />
                      </a>
                    )}
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

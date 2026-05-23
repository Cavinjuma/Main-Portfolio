import { motion } from 'framer-motion';
import { GraduationCap, Award, ExternalLink, BookOpen } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { educationItems, certifications } from '@/data/education';

/**
 * Education page — showcases formal education and professional certifications.
 * Each certification lists what was learned so visitors understand the depth
 * behind the credential, not just the badge.
 */
export default function Education() {
  return (
    <>
      <SEOHead
        title="Education"
        description="Formal education, professional certifications, and the skills behind each credential."
      />

      <div className="min-h-screen">
        {/* Hero */}
        
        <section 
      className="relative h-[400px] w-full bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
      style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/glowing-lowpoly-graduation-cap-illustration-dark-background_939992-9738.jpg')" }}
    >
      {/* Dark Overlay to make white text readable over the background image */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0.8, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">
                Education
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
                Formal study, certifications, and what I took away from each.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Formal Education */}
        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <ScrollReveal>
              <div className="flex items-center gap-3">
                <GraduationCap className="size-6 text-muted-foreground" />
                <h2 className="text-3xl md:text-4xl font-light tracking-wide">
                  Formal Education
                </h2>
              </div>
            </ScrollReveal>

            <div className="space-y-10">
              {educationItems.map((item, index) => (
                <ScrollReveal key={item.id} delay={index * 0.1}>
                  <article className="space-y-4 border-l border-border pl-6">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-light tracking-wide">{item.degree}</h3>
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
        </section>

        <Separator />

        {/* Certifications */}
        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <ScrollReveal>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Award className="size-6 text-muted-foreground" />
                  <h2 className="text-3xl md:text-4xl font-light tracking-wide">
                    Certifications
                  </h2>
                </div>
                <p className="text-base font-light text-muted-foreground">
                  Each entry includes the key skills and concepts I picked up.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <ScrollReveal key={cert.id} delay={index * 0.08}>
                  <article className="h-full border border-border rounded-sm p-6 space-y-4 hover:border-foreground/20 transition-colors">
                    <header className="space-y-2">
                      <h3 className="text-xl font-light tracking-wide">{cert.title}</h3>
                      <p className="text-sm font-light text-muted-foreground">
                        {cert.issuer} · {cert.year}
                      </p>
                    </header>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-light tracking-wide uppercase text-muted-foreground">
                        <BookOpen className="size-3.5" />
                        <span>What I learned</span>
                      </div>
                      <ul className="space-y-1.5">
                        {cert.learned.map((item, i) => (
                          <li
                            key={i}
                            className="text-sm font-light text-foreground/90 flex gap-2"
                          >
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
                        className="inline-flex items-center gap-2 text-sm font-light tracking-wide text-foreground hover:text-muted-foreground transition-colors pt-2"
                      >
                        <span>View credential</span>
                        <ExternalLink className="size-3.5" />
                      </a>
                    )}
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <div className="h-16" />
      </div>
    </>
  );
}

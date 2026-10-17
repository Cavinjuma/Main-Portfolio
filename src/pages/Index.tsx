import { SEOHead } from '@/components/seo/SEOHead';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Projects } from '@/sections/Projects';
import { Education } from '@/sections/Education';
import { Contact } from '@/sections/Contact';

/**
 * Single-page portfolio.
 * Section order: Home → About → Portfolio → Education → Contact
 * Section ids (see src/lib/scroll.ts) drive the header navigation.
 */
const Index = () => {
  return (
    <>
      <SEOHead />
      <Hero />
      <About />
      <Projects />
      <Education />
      <Contact />
    </>
  );
};

export default Index;

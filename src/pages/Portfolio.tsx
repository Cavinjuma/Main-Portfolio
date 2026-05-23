import { projects } from '@/data/projects';
import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid';
import { SEOHead } from '@/components/seo/SEOHead';
import { motion } from 'framer-motion';

/**
 * Portfolio page with masonry grid
 * Features smooth animations and responsive layout
 */
export default function Portfolio() {

  return (
    <>
      <SEOHead 
        title="Portfolio"
        description="A selection of software engineering projects — web apps, mobile apps, APIs, AI tools, and open-source work."
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
      
       <section 
      className="relative h-[400px] w-full bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
      style={{ backgroundImage: "url('https://wallpapers.com/images/hd/futuristic-project-management-inbiirodqxwccs7h.jpg')" }}
    >
      {/* Dark Overlay to make white text readable over the background image */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">
              Projects
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto">
              A selection of software I've designed, built, and shipped
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid - Edge to edge */}
      <section className="py-12 md:py-16 px-2 md:px-4">
        <PortfolioGrid projects={projects} />
      </section>

        {/* Bottom spacing */}
        <div className="h-24" />
      </div>
    </>
  );
}

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { HandwrittenName } from '@/components/HandwrittenName';
import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/lib/scroll';

/**
 * Hero: full-viewport intro with portrait background,
 * glowing handwritten name, tagline and introduction.
 */
export function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[640px] w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="MeX.jpeg"
          alt=""
          className="w-full h-full object-cover object-top"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      {/* Hero content */}
      <div className="relative h-full flex flex-col items-center justify-center px-6">
        <motion.div
          className="text-center space-y-6 max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="font-extralight tracking-widest text-white">
            <span className="sr-only">{photographerInfo.name}</span>
            <span aria-hidden="true">
              <HandwrittenName
                name={photographerInfo.name}
                style={{ fontSize: 'clamp(2rem, 8.5vw, 6rem)', minHeight: '1.2em' }}
              />
            </span>
          </h1>

          <motion.p
            className="text-xl md:text-2xl font-light tracking-wide text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {photographerInfo.tagline}
          </motion.p>

          <motion.p
            className="text-base md:text-lg font-light leading-relaxed text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {photographerInfo.heroIntroduction}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('portfolio')}
              className="group bg-white text-black hover:bg-white/90 px-8 py-6 text-base font-light tracking-wide"
            >
              View All Projects
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-white/60 bg-transparent text-white hover:bg-white/10 hover:text-white px-8 py-6 text-base font-light tracking-wide"
            >
              Get in Touch
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <ScrollIndicator />
        </motion.div>
      </div>
    </section>
  );
}

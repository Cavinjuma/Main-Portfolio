import { Menu } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useActiveSection } from '@/hooks/useActiveSection';
import { SECTION_IDS, scrollToSection } from '@/lib/scroll';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { photographerInfo } from '@/data/photographer';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Portfolio', id: 'portfolio' },
  { name: 'Education', id: 'education' },
  { name: 'Contact', id: 'contact' },
];

/**
 * Main header component with scroll-aware styling and scroll-spy navigation
 * Transparent over the hero, solid once the page is scrolled
 * Navigation links are grouped in a menu on all screen sizes
 */
export function Header() {
  const { isScrolled } = useScrollPosition();
  const activeSection = useActiveSection(SECTION_IDS);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Header is transparent only over the hero, before the page is scrolled
  const isTransparent = !isScrolled;

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    scrollToSection(id);
  };

  // Close the sheet first so its scroll-lock is released before we scroll
  const handleMobileNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    window.setTimeout(() => scrollToSection(id), 250);
  };

  const toggleClass = isTransparent ? 'text-white hover:bg-white/10 hover:text-white' : undefined;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isTransparent
          ? 'bg-transparent'
          : 'bg-background/90 backdrop-blur-lg border-b border-border shadow-sm'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className={cn(
              'text-lg font-light tracking-widest transition-all duration-300',
              isTransparent
                ? 'text-white hover:text-white/80'
                : 'text-foreground hover:text-foreground/80'
            )}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block"
            >
              {photographerInfo.name.toUpperCase()}
            </motion.span>
          </a>

          <div className="flex items-center gap-3">
            <ThemeToggle className={toggleClass} />
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn('size-9', toggleClass)}
                  aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                  aria-expanded={mobileMenuOpen}
                >
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80">
                <SheetTitle className="sr-only">Navigation menu</SheetTitle>
                <SheetDescription className="sr-only">Jump to a section of the page.</SheetDescription>
                <nav className="mt-8 flex flex-col gap-6" aria-label="Primary">
                  {navLinks.map((link) => (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      onClick={(e) => handleMobileNavClick(e, link.id)}
                      aria-current={activeSection === link.id ? 'true' : undefined}
                      className={cn(
                        'text-lg leading-7 font-light tracking-wide transition-colors',
                        activeSection === link.id
                          ? 'text-foreground'
                          : 'text-muted-foreground hover:text-foreground'
                      )}
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

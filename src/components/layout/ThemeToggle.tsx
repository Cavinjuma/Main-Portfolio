import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  className?: string;
}

/**
 * Pill switch for changing between light and dark modes.
 */
export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        className={cn(
          'h-9 w-[4.25rem] justify-start rounded-full border border-current/30 p-1',
          className
        )}
        disabled
        role="switch"
        aria-checked={false}
        aria-label="Toggle color theme"
      >
        <span className="flex size-7 items-center justify-center rounded-full bg-background text-foreground">
          <Sun className="size-4" />
        </span>
      </Button>
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <Button
      variant="ghost"
      className={cn(
        'relative h-9 w-[4.25rem] justify-start rounded-full border border-current/30 bg-muted/70 p-1 transition-colors hover:bg-muted',
        className
      )}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle color theme"
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <Sun className="absolute left-2 size-4 text-muted-foreground" aria-hidden="true" />
      <Moon className="absolute right-2 size-4 text-muted-foreground" aria-hidden="true" />
      <span
        className={cn(
          'relative z-10 flex size-7 items-center justify-center rounded-full bg-background text-foreground shadow-sm transition-transform duration-200',
          isDark && 'translate-x-7'
        )}
      >
        {isDark ? (
          <Moon className="size-4" aria-hidden="true" />
        ) : (
          <Sun className="size-4" aria-hidden="true" />
        )}
      </span>
    </Button>
  );
}

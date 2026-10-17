/**
 * Section ids used by the single-page layout.
 * Order matches the order sections appear on the page.
 */
export const SECTION_IDS = ['home', 'about', 'portfolio', 'education', 'contact'] as const;

export type SectionId = (typeof SECTION_IDS)[number];

/**
 * Smoothly scroll to a section and keep the URL hash in sync
 * (without adding a history entry for every click).
 */
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });

  const url = id === 'home' ? window.location.pathname : `#${id}`;
  window.history.replaceState(null, '', url);
}

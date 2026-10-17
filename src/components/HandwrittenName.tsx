import type { CSSProperties } from 'react';

interface HandwrittenNameProps {
  name: string;
  className?: string;
  style?: CSSProperties;
}

export function HandwrittenName({
  name,
  className = '',
  style,
}: HandwrittenNameProps) {
  return (
    <span
      className={`hero-name ${className}`}
      data-text={name}
      style={style}
    >
      {name}
    </span>
  );
}

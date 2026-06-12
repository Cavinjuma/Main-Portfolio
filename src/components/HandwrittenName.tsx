import React, { useEffect, useState, useRef } from 'react';

interface HandwrittenNameProps {
  name: string;
  className?: string;
  style?: React.CSSProperties;
  typingSpeed?: number;      // ms per letter when typing
  erasingSpeed?: number;     // ms per letter when erasing
  pauseBeforeErase?: number; // ms after full name before erasing
  pauseBeforeType?: number;  // ms after empty before retyping
  loop?: boolean;            // enable infinite loop
  initialDelay?: number;     // delay before starting first typing
}

export const HandwrittenName: React.FC<HandwrittenNameProps> = ({
  name,
  className = '',
  style = {},
  typingSpeed = 100,
  erasingSpeed = 80,
  pauseBeforeErase = 1500,
  pauseBeforeType = 500,
  loop = true,
  initialDelay = 300,
}) => {
  const [displayLetters, setDisplayLetters] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const targetLetters = name.split('');

  useEffect(() => {
    let currentIndex = 0;
    let currentIsTyping = true;
    let isActive = true;

    const clearTimer = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };

    const step = () => {
      if (!isActive) return;

      if (currentIsTyping) {
        // Typing phase
        if (currentIndex < targetLetters.length) {
          setDisplayLetters(targetLetters.slice(0, currentIndex + 1));
          currentIndex++;
          timeoutRef.current = setTimeout(step, typingSpeed);
        } else {
          // Finished typing: pause then start erasing if loop enabled
          if (loop) {
            timeoutRef.current = setTimeout(() => {
              currentIsTyping = false;
              step();
            }, pauseBeforeErase);
          }
        }
      } else {
        // Erasing phase
        if (currentIndex > 0) {
          setDisplayLetters(targetLetters.slice(0, currentIndex - 1));
          currentIndex--;
          timeoutRef.current = setTimeout(step, erasingSpeed);
        } else {
          // Finished erasing: pause then start typing again if loop enabled
          if (loop) {
            timeoutRef.current = setTimeout(() => {
              currentIsTyping = true;
              step();
            }, pauseBeforeType);
          }
        }
      }
    };

    // Initial delay before starting
    const startTimeout = setTimeout(() => {
      if (isActive) {
        setIsTyping(true);
        step();
      }
    }, initialDelay);

    return () => {
      isActive = false;
      clearTimeout(startTimeout);
      clearTimer();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, typingSpeed, erasingSpeed, pauseBeforeErase, pauseBeforeType, loop, initialDelay]);

  return (
    <>
      <style>{`
        .handwritten-typing-container {
          font-family: 'Caveat', 'Comic Neue', cursive;
          font-size: 3rem;
          font-weight: 500;
          line-height: 1.2;
          display: inline-flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.02em;
        }
        .handwritten-typing-letter {
          display: inline-block;
          opacity: 0;
          transform: rotate(-8deg) translateY(12px);
          animation: handwrittenTypingPop 0.2s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
        }
        @keyframes handwrittenTypingPop {
          0% { opacity: 0; transform: rotate(-12deg) translateY(20px) scale(0.8); }
          60% { opacity: 1; transform: rotate(2deg) translateY(-2px) scale(1.05); }
          100% { opacity: 1; transform: rotate(0deg) translateY(0) scale(1); }
        }
          .cursor-blink {
  display: inline-block;
  font-family: monospace;
  font-weight: 300;
  font-size: 0.9em;
  margin-left: 2px;
  animation: blink 1s step-end infinite;
  opacity: 1;
}
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
      `}</style>
      <div className={`handwritten-typing-container ${className}`} style={style}>
        {displayLetters.map((letter, idx) => (
          <span key={idx} className="handwritten-typing-letter">
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
        {/* Optional blinking cursor effect */}
        <span className="cursor-blink">|</span>
      </div>
    </>
  );
};
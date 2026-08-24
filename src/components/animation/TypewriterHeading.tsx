'use client';

import React, { useState, useEffect, useRef } from 'react';

interface TypewriterHeadingProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  speed?: number; // ms per character
  delay?: number; // start delay in ms
}

export default function TypewriterHeading({
  text,
  className = '',
  as: Component = 'h2',
  speed = 35,
  delay = 100,
}: TypewriterHeadingProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasTriggered = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setDisplayedText(text);
      setIsComplete(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasTriggered.current) {
          hasTriggered.current = true;
          startTyping();
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text]);

  const startTyping = () => {
    let currentIndex = 0;
    setIsTyping(true);

    timeoutRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setIsTyping(false);
          setIsComplete(true);
        }
      }, speed);
    }, delay);
  };

  return (
    <div ref={elementRef} className="inline-block">
      {/* Screen Reader accessible full heading text */}
      <Component className={className} aria-label={text}>
        <span aria-hidden="true">
          {displayedText}
          {!isComplete && (
            <span
              className={`inline-block ml-1 font-normal opacity-90 ${
                isTyping ? 'animate-pulse' : 'hidden'
              }`}
            >
              |
            </span>
          )}
        </span>
      </Component>
    </div>
  );
}

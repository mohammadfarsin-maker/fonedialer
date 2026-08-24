'use client';

import { motion, useReducedMotion } from 'motion/react';
import React from 'react';

interface ScrollSlideCardProps {
  children: React.ReactNode;
  index?: number;
  className?: string;
  direction?: 'left' | 'right' | 'auto';
  delay?: number;
}

export default function ScrollSlideCard({
  children,
  index = 0,
  className = '',
  direction = 'auto',
  delay,
}: ScrollSlideCardProps) {
  const shouldReduceMotion = useReducedMotion();

  // Determine direction: alternate odd/even if auto
  const isLeft = direction === 'left' || (direction === 'auto' && index % 2 === 0);
  const calculatedDelay = delay !== undefined ? delay : (index % 3) * 0.12;

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isLeft ? -40 : 40,
        scale: 0.96,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{
        duration: 0.65,
        ease: [0.25, 0.8, 0.25, 1],
        delay: calculatedDelay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

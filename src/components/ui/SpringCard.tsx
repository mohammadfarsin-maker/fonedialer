'use client';

import { useSpring, animated } from '@react-spring/web';
import { ReactNode } from 'react';

interface SpringCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function SpringCard({ children, className = '', onClick }: SpringCardProps) {
  const [props, api] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 1, tension: 280, friction: 20 },
  }));

  const calc = (x: number, y: number, rect: DOMRect) => [
    -(y - rect.top - rect.height / 2) / 25,
    (x - rect.left - rect.width / 2) / 25,
    1.02,
  ];

  const trans = (x: number, y: number, s: number) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  return (
    <animated.div
      className={`cursor-pointer transition-shadow duration-300 ${className}`}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        api.start({ xys: calc(e.clientX, e.clientY, rect) });
      }}
      onMouseLeave={() => api.start({ xys: [0, 0, 1] })}
      style={{
        transform: props.xys.to(trans),
      }}
      onClick={onClick}
    >
      {children}
    </animated.div>
  );
}

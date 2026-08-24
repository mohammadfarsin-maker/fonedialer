'use client';

import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

interface IllustrationProps {
  type: 'hero' | 'outbound' | 'inbound' | 'lead-gen' | 'telemarketing' | 'process' | 'security';
  className?: string;
}

export default function Illustration({ type, className = '' }: IllustrationProps) {
  const containerRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Anime.js v4 micro-animations for decorative SVG details (Tech Stack Lock - Section 2)
    const nodes = containerRef.current.querySelectorAll('.pulse-node');
    const waves = containerRef.current.querySelectorAll('.signal-wave');

    if (nodes.length > 0) {
      animate(nodes, {
        scale: [0.95, 1.08, 0.95],
        opacity: [0.7, 1, 0.7],
        ease: 'easeInOutSine',
        duration: 3000,
        loop: true,
        delay: stagger(400),
      });
    }

    if (waves.length > 0) {
      animate(waves, {
        opacity: [0.3, 1, 0.3],
        ease: 'easeInOutQuad',
        duration: 2500,
        delay: stagger(300),
        loop: true,
      });
    }
  }, [type]);

  if (type === 'hero') {
    return (
      <svg
        ref={containerRef}
        viewBox="0 0 600 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-auto drop-shadow-xl ${className}`}
      >
        {/* Background Ambient Glow */}
        <circle cx="300" cy="240" r="200" fill="#2C476A" fillOpacity="0.06" />
        <circle cx="300" cy="240" r="140" fill="#E8A33D" fillOpacity="0.08" />

        {/* Dashboard Frame (Representing structured reporting infrastructure) */}
        <rect x="80" y="60" width="440" height="340" rx="16" fill="#16283F" stroke="#2C476A" strokeWidth="2" />
        <rect x="100" y="84" width="400" height="36" rx="8" fill="#2C476A" fillOpacity="0.4" />
        <circle cx="124" cy="102" r="5" fill="#E8A33D" />
        <circle cx="140" cy="102" r="5" fill="#2C476A" />
        <circle cx="156" cy="102" r="5" fill="#5C6B7D" />

        {/* Call Flow Waveforms */}
        <path
          className="signal-wave"
          d="M 120 220 Q 180 160 240 220 T 360 220 T 480 220"
          stroke="#E8A33D"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <path
          className="signal-wave"
          d="M 120 250 Q 180 300 240 250 T 360 250 T 480 250"
          stroke="#2C476A"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="6 6"
          fill="none"
        />

        {/* Agent Node */}
        <g className="pulse-node">
          <circle cx="180" cy="220" r="32" fill="#2C476A" stroke="#E8A33D" strokeWidth="3" />
          <path d="M 170 215 C 170 205, 190 205, 190 215 C 190 225, 170 225, 170 215 Z" fill="#F7F5F0" />
          <path d="M 166 232 C 166 226, 194 226, 194 232 V 236 H 166 Z" fill="#E8A33D" />
        </g>

        {/* Central Operations Hub */}
        <g className="pulse-node">
          <rect x="250" y="170" width="100" height="100" rx="14" fill="#E8A33D" />
          <text x="300" y="215" textAnchor="middle" fill="#111823" fontWeight="bold" fontSize="14">
            FONEDIALER
          </text>
          <text x="300" y="235" textAnchor="middle" fill="#16283F" fontSize="11" fontWeight="600">
            QA & CRM HUB
          </text>
        </g>

        {/* Customer Node */}
        <g className="pulse-node">
          <circle cx="420" cy="220" r="32" fill="#2C476A" stroke="#F7F5F0" strokeWidth="2" />
          <circle cx="420" cy="212" r="10" fill="#F7F5F0" />
          <path d="M 405 234 C 405 227, 435 227, 435 234 V 238 H 405 Z" fill="#F7F5F0" />
        </g>

        {/* Live Metrics Floating Badges */}
        <g className="pulse-node">
          <rect x="110" y="320" width="140" height="52" rx="10" fill="#111823" stroke="#2C476A" strokeWidth="1.5" />
          <text x="125" y="342" fill="#E8A33D" fontWeight="bold" fontSize="16">
            68% Connect
          </text>
          <text x="125" y="358" fill="#5C6B7D" fontSize="11">
            Optimized Pitch
          </text>
        </g>

        <g className="pulse-node">
          <rect x="350" y="320" width="150" height="52" rx="10" fill="#111823" stroke="#E8A33D" strokeWidth="1.5" />
          <text x="365" y="342" fill="#F7F5F0" fontWeight="bold" fontSize="16">
            100% CRM Sync
          </text>
          <text x="365" y="358" fill="#E8A33D" fontSize="11">
            Real-time Call Logs
          </text>
        </g>
      </svg>
    );
  }

  if (type === 'outbound') {
    return (
      <svg
        ref={containerRef}
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-auto ${className}`}
      >
        <rect width="400" height="300" rx="16" fill="#16283F" />
        <circle cx="200" cy="150" r="90" fill="#2C476A" fillOpacity="0.3" />

        {/* Outbound Arrow Concept */}
        <path
          className="signal-wave"
          d="M 120 180 L 260 120 M 260 120 L 220 115 M 260 120 L 255 160"
          stroke="#E8A33D"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <circle cx="120" cy="180" r="24" fill="#2C476A" stroke="#E8A33D" strokeWidth="2" />
        <path d="M 112 176 L 118 182 L 128 172" stroke="#E8A33D" strokeWidth="3" strokeLinecap="round" />

        <circle cx="280" cy="110" r="28" fill="#E8A33D" />
        <path d="M 270 110 L 290 110 M 280 100 L 280 120" stroke="#111823" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === 'inbound') {
    return (
      <svg
        ref={containerRef}
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-auto ${className}`}
      >
        <rect width="400" height="300" rx="16" fill="#16283F" />
        {/* Receiving / Support Wave */}
        <circle cx="200" cy="150" r="70" stroke="#2C476A" strokeWidth="3" strokeDasharray="8 8" />
        <circle cx="200" cy="150" r="45" fill="#2C476A" className="pulse-node" />
        <path d="M 185 150 C 185 135, 215 135, 215 150" stroke="#E8A33D" strokeWidth="4" fill="none" strokeLinecap="round" />
        <rect x="180" y="152" width="40" height="20" rx="6" fill="#E8A33D" />
      </svg>
    );
  }

  if (type === 'lead-gen') {
    return (
      <svg
        ref={containerRef}
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-auto ${className}`}
      >
        <rect width="400" height="300" rx="16" fill="#16283F" />
        {/* Funnel to Handshake */}
        <path d="M 100 80 L 300 80 L 240 180 L 240 240 L 160 240 L 160 180 Z" fill="#2C476A" fillOpacity="0.4" stroke="#2C476A" strokeWidth="2" />
        <circle cx="200" cy="210" r="26" fill="#E8A33D" className="pulse-node" />
        <path d="M 190 210 L 197 217 L 212 202" stroke="#111823" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg
      ref={containerRef}
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto ${className}`}
    >
      <rect width="400" height="300" rx="16" fill="#16283F" />
      <path className="signal-wave" d="M 60 150 Q 130 80 200 150 T 340 150" stroke="#E8A33D" strokeWidth="3" fill="none" />
      <circle cx="200" cy="150" r="30" fill="#2C476A" stroke="#E8A33D" strokeWidth="3" className="pulse-node" />
    </svg>
  );
}

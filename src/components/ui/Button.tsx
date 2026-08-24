'use client';

import { ReactNode } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'accent' | 'outline' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseStyle =
    'inline-flex items-center justify-center font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-7 py-3.5 text-lg',
  };

  const variantStyles = {
    primary:
      'bg-[#2C476A] text-white hover:bg-[#16283F] focus:ring-[#2C476A] shadow-md hover:shadow-lg',
    accent:
      'bg-[#E8A33D] text-[#111823] font-bold hover:bg-[#D9922B] focus:ring-[#E8A33D] shadow-md hover:shadow-lg',
    outline:
      'border-2 border-[#2C476A] text-[#2C476A] hover:bg-[#2C476A] hover:text-white focus:ring-[#2C476A]',
    ghost:
      'text-[#2C476A] hover:bg-[#2C476A]/10 focus:ring-[#2C476A]',
    dark:
      'bg-[#111823] border border-[#2C476A] text-white hover:bg-[#16283F] focus:ring-[#E8A33D]',
  };

  const combinedClasses = `${baseStyle} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className="inline-block">
        <motion.span
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={combinedClasses}
        >
          {children}
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {children}
    </motion.button>
  );
}

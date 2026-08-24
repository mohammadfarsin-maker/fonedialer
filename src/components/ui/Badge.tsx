import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'accent' | 'primary' | 'dark' | 'outline';
  className?: string;
}

export default function Badge({ children, variant = 'accent', className = '' }: BadgeProps) {
  const variantStyles = {
    accent: 'bg-[#E8A33D]/15 text-[#111823] border border-[#E8A33D]/40 font-semibold',
    primary: 'bg-[#2C476A]/15 text-[#2C476A] border border-[#2C476A]/30 font-semibold',
    dark: 'bg-[#16283F] text-[#F7F5F0] border border-[#2C476A] font-medium',
    outline: 'border border-[#5C6B7D] text-[#5C6B7D] font-medium',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs uppercase tracking-wider rounded-full ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

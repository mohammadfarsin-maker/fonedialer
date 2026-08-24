interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  align = 'center',
  theme = 'light',
  className = '',
}: SectionHeaderProps) {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  }[align];

  const titleColor = theme === 'dark' ? 'text-white' : 'text-[#1A1F26]';
  const subtitleColor = theme === 'dark' ? 'text-[#DCE1E8]/80' : 'text-[#5C6B7D]';

  return (
    <div className={`flex flex-col max-w-3xl mb-12 sm:mb-16 ${alignClass} ${className}`}>
      {badge && (
        <span className="inline-block px-3.5 py-1 mb-3 text-xs font-semibold uppercase tracking-widest text-[#E8A33D] bg-[#E8A33D]/10 border border-[#E8A33D]/30 rounded-full">
          {badge}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight ${titleColor}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

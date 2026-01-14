import { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({ 
  children, 
  subtitle, 
  centered = false, 
  className = '' 
}: SectionTitleProps) {
  const alignment = centered ? 'text-center' : '';
  
  return (
    <div className={`mb-12 ${alignment} ${className}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

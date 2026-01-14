import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  const hoverStyles = hover ? 'hover:shadow-xl hover:-translate-y-1' : '';
  
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300 ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hover = false }) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg p-8 border border-gray-100 ${
        hover ? 'transition-all duration-300 hover:shadow-2xl hover:-translate-y-2' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

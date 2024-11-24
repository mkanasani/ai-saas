import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'cyber-button font-mono rounded-md transition-all duration-300';
  
  const variants = {
    primary: 'bg-cyan-400/10 hover:bg-cyan-400/20 text-cyan-400 border border-cyan-400/30',
    secondary: 'bg-cyan-950 hover:bg-cyan-900 text-cyan-400 border border-cyan-400/30',
    outline: 'border border-cyan-400/30 hover:bg-cyan-400/10 text-cyan-400',
  };

  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
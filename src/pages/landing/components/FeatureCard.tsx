import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="cyber-container p-6 hover:border-cyan-400/50 transition-all duration-300">
      <div className="w-12 h-12 rounded-lg bg-cyan-400/10 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-cyan-400" />
      </div>
      <h3 className="text-xl font-bold mb-2 cyber-text-glow">{title}</h3>
      <p className="text-cyan-400/70">{description}</p>
    </div>
  );
};
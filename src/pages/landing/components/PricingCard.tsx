import React from 'react';
import { LucideIcon, Check } from 'lucide-react';
import { Button } from '../../../components/ui/Button';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  icon: LucideIcon;
  buttonText: string;
  highlighted?: boolean;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
  icon: Icon,
  buttonText,
  highlighted = false,
}) => {
  return (
    <div className={`cyber-container p-8 ${
      highlighted ? 'border-cyan-400/50 shadow-[0_0_30px_rgba(6,182,212,0.2)]' : ''
    }`}>
      <div className="flex items-center gap-3 mb-6">
        <Icon className="w-6 h-6 text-cyan-400" />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="mb-6">
        <div className="flex items-baseline">
          <span className="text-4xl font-bold cyber-text-glow">{price}</span>
          <span className="text-cyan-400/70 ml-2">/month</span>
        </div>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3 text-cyan-400/90">
            <Check className="w-5 h-5 text-cyan-400" />
            {feature}
          </li>
        ))}
      </ul>
      <Button
        variant={highlighted ? 'primary' : 'outline'}
        className="w-full justify-center"
      >
        {buttonText}
      </Button>
    </div>
  );
};
import React from 'react';

interface StatsCounterProps {
  value: string;
  label: string;
}

export const StatsCounter: React.FC<StatsCounterProps> = ({ value, label }) => {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold cyber-text-glow mb-2">{value}</div>
      <div className="text-sm text-cyan-400/70">{label}</div>
    </div>
  );
};
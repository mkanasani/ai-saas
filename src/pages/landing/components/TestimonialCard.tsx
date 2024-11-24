import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  image: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  image,
}) => {
  return (
    <div className="cyber-container p-6">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image}
          alt={author}
          className="w-12 h-12 rounded-full border-2 border-cyan-400/30"
        />
        <div>
          <h4 className="font-bold cyber-text-glow">{author}</h4>
          <p className="text-sm text-cyan-400/70">{role}</p>
        </div>
      </div>
      <blockquote className="text-cyan-400/90">
        "{quote}"
      </blockquote>
    </div>
  );
};
import React from 'react';

export const Chat: React.FC = () => {
  return (
    <div className="w-full h-[600px] rounded-lg overflow-hidden cyber-container">
      <iframe
        src="https://app.vectorshift.ai/portals/deployed/672e815e6130d01cf8fd006d?isEmbed=true"
        className="w-full h-full border-0"
        allow="clipboard-read; clipboard-write; microphone"
      />
    </div>
  );
};
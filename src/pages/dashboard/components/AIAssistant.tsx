import React from 'react';

export const AIAssistant: React.FC = () => {
  return (
    <div className="w-full h-[600px] rounded-lg overflow-hidden cyber-container">
      <iframe
        id="audio_iframe"
        src="https://widget.synthflow.ai/widget/v2/1732124593780x292242760250556400/1732124593711x245688036159956930"
        className="w-full h-full border-0"
        allow="microphone"
        style={{ background: 'transparent' }}
      />
    </div>
  );
};
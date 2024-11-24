import React, { useState, useEffect } from 'react';
import { Bot, User } from 'lucide-react';

interface Message {
  type: 'user' | 'ai';
  content: string;
}

const initialMessages: Message[] = [
  { type: 'ai', content: 'Hello! How can I assist you today?' },
  { type: 'user', content: 'Can you help me with a React component?' },
  { type: 'ai', content: 'Of course! I can help you design, implement, and debug React components. What specifically would you like to create?' },
];

export const DemoChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < initialMessages.length) {
      const timer = setTimeout(() => {
        setMessages(prev => [...prev, initialMessages[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  return (
    <div className="space-y-4">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex items-start gap-3 ${
            message.type === 'user' ? 'flex-row-reverse' : ''
          }`}
        >
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
            message.type === 'ai' ? 'bg-cyan-400/10' : 'bg-cyan-400/20'
          }`}>
            {message.type === 'ai' ? (
              <Bot className="w-5 h-5 text-cyan-400" />
            ) : (
              <User className="w-5 h-5 text-cyan-400" />
            )}
          </div>
          <div className={`cyber-container p-3 max-w-[80%] ${
            message.type === 'user' ? 'bg-cyan-400/10' : ''
          }`}>
            <p className="text-sm text-cyan-400/90">{message.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
import React from 'react';

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (tabId: string) => void;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onChange }) => {
  return (
    <div className="flex border-b border-cyan-400/30">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`flex-1 pb-3 text-sm font-medium transition-colors ${
            activeTab === tab.id
              ? 'text-cyan-400 border-b-2 border-cyan-400'
              : 'text-cyan-400/50 hover:text-cyan-400/70'
          }`}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};
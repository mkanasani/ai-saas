import React, { useState } from 'react';
import { Layout } from '../../components/layout/Layout';
import { AIAssistant } from './components/AIAssistant';
import { Chat } from './components/Chat';
import { Notes } from './components/Notes';
import { Tabs } from '../../components/ui/Tabs';

export const DashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'voice' | 'chat'>('voice');

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* AI Assistant Section */}
          <div className="cyber-container p-6 lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold cyber-text-glow mb-4">AI Assistant</h2>
              <Tabs
                tabs={[
                  { id: 'voice', label: 'Voice Assistant' },
                  { id: 'chat', label: 'Chat Assistant' }
                ]}
                activeTab={activeTab}
                onChange={(tab) => setActiveTab(tab as 'voice' | 'chat')}
              />
            </div>
            {activeTab === 'voice' ? <AIAssistant /> : <Chat />}
          </div>

          {/* Notes Section */}
          <div className="cyber-container p-6 lg:col-span-1">
            <h2 className="text-2xl font-bold cyber-text-glow mb-6">Notes</h2>
            <Notes />
          </div>
        </div>
      </div>
    </Layout>
  );
};
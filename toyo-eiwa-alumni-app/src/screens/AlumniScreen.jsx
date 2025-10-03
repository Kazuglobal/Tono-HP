import React, { useState } from 'react';
import AlumniCareerScreen from './AlumniCareerScreen';
import StoreInfoScreen from './StoreInfoScreen';

const AlumniScreen = () => {
  const [activeTab, setActiveTab] = useState('career');

  const tabs = [
    { id: 'career', label: '卒業生キャリア紹介' },
    { id: 'store', label: '店舗情報' }
  ];

  return (
    <div className="bg-off-white min-h-screen">
      {/* Tab Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-4 py-3 font-gothic text-sm font-medium transition-colors relative ${
                activeTab === tab.id
                  ? 'text-[#1976D2]'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1976D2]" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'career' && <AlumniCareerScreen />}
        {activeTab === 'store' && <StoreInfoScreen />}
      </div>
    </div>
  );
};

export default AlumniScreen;


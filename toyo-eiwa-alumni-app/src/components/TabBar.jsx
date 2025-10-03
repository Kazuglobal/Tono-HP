import React from 'react';
import { Home, GraduationCap, Bell, Gift, MessageCircle } from 'lucide-react';

const TabBar = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'home', label: 'ホーム', icon: Home },
    { id: 'alumni', label: '卒業生情報', icon: GraduationCap },
    { id: 'news', label: 'お知らせ', icon: Bell },
    { id: 'donation', label: '寄付', icon: Gift },
    { id: 'mypage', label: 'お問い合わせ', icon: MessageCircle },
  ];

  return (
    <nav className="bg-white border-t border-gray-200 px-2 py-1">
      <div className="flex justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center py-2 px-3 min-w-0 flex-1 transition-colors duration-200 ${
                isActive 
                  ? 'text-wine-red' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Icon 
                size={20} 
                className={`mb-1 ${isActive ? 'fill-current' : ''}`}
              />
              <span className="text-xs font-gothic leading-tight text-center">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default TabBar;


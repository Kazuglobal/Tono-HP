import React, { useState, useEffect } from 'react';
import AlumniCareerScreen from './AlumniCareerScreen';
import StoreInfoScreen from './StoreInfoScreen';
import { Users, Heart, MessageCircle, X } from 'lucide-react';

const AlumniScreen = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('career');
  const [showConnectionPopup, setShowConnectionPopup] = useState(false);

  const tabs = [
    { id: 'career', label: '卒業生キャリア紹介' },
    { id: 'store', label: '店舗情報' }
  ];

  // 初回表示時にポップアップを表示
  useEffect(() => {
    setShowConnectionPopup(true);
  }, []);

  const handleClosePopup = () => {
    setShowConnectionPopup(false);
  };

  const handleConnectNow = () => {
    setShowConnectionPopup(false);
    // 必要に応じて他のアクションを実行
  };

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

      {/* Connection Popup */}
      {showConnectionPopup && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl p-6 w-full max-w-lg mx-auto shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={handleClosePopup}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>

            {/* Popup Content */}
            <div className="text-center">
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-[#1976D2] to-[#1565C0] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h2 className="text-xl font-mincho font-bold text-gray-900 mb-3">
                卒業生とつながろう！
              </h2>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                全国の同窓生とつながり、新しい出会いや交流の機会を見つけましょう。
                キャリア情報や店舗情報から、あなたの興味に合った卒業生を見つけることができます。
              </p>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleConnectNow}
                  className="w-full bg-gradient-to-r from-[#1976D2] to-[#1565C0] text-white py-3 px-6 rounded-xl font-medium hover:from-[#1565C0] hover:to-[#0D47A1] transition-all duration-200 shadow-lg"
                >
                  <Heart className="w-5 h-5 inline mr-2" />
                  今すぐつながる
                </button>
                
                <button
                  onClick={handleClosePopup}
                  className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                >
                  後で見る
                </button>
              </div>

              {/* Registration Form */}
              <div className="mt-3 pt-3 border-t border-gray-100">
                <h3 className="text-xs font-normal text-gray-700 mb-1 text-center">
                  卒業生登録フォーム
                </h3>
                <div className="bg-gray-50 rounded-lg p-1">
                  <iframe 
                    src="https://keen-whale-2c2.notion.site/ebd/2826e2231c40807aa844e554e4404588" 
                    width="100%" 
                    height="300" 
                    frameBorder="0" 
                    allowFullScreen
                    className="rounded-md"
                    style={{ transform: 'scale(0.7)', transformOrigin: 'top left', width: '143%', height: '428px' }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1 text-center">
                  登録をしたひとはこちらから申請ください
                </p>
              </div>

              {/* Additional Info */}
              <div className="mt-3">
                <div className="flex items-center justify-center text-xs text-gray-500">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  <span>いつでもお問い合わせください</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlumniScreen;


import React, { useEffect, useRef, useState } from 'react';
import Layout from './components/Layout';
import TabBar from './components/TabBar';
import HomeScreen from './screens/HomeScreen';
import AlumniScreen from './screens/AlumniScreen';
import NewsScreen from './screens/NewsScreen';
import NewsListScreen from './screens/NewsListScreen';
import NewsDetailScreen from './screens/NewsDetailScreen';
import ShoppingScreen from './screens/ShoppingScreen';
import DonationScreen from './screens/DonationScreen';
import MyPageScreen from './screens/MyPageScreen';
import AlumniActivitiesScreen from './screens/AlumniActivitiesScreen';
import ClubReportsScreen from './screens/ClubReportsScreen';
import CareerOverviewScreen from './screens/CareerOverviewScreen';
import NewsletterArchiveScreen from './screens/NewsletterArchiveScreen';
import AdvertisementScreen from './screens/AdvertisementScreen';
import ContactScreen from './screens/ContactScreen';
import './App.css';

const ROUTE_TITLES = {
  'news-list': 'ニュース一覧',
  shopping: 'ショッピング',
  'alumni-activities': '同窓会活動',
  'club-reports': 'クラブ活動報告',
  'career-overview': 'キャリア情報',
  'newsletter-archive': '会報アーカイブ',
  contact: 'お問い合わせ',
  ads: '広告ギャラリー',
};

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [navigationStack, setNavigationStack] = useState([]);

  const audioRef = useRef(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  useEffect(() => {
    const audio = new Audio("/audio/ambient.mp3");
    audio.loop = true;
    audio.volume = 0.6;
    audioRef.current = audio;

    const attemptPlayback = async () => {
      try {
        await audio.play();
        setIsAudioPlaying(true);
        setAutoplayBlocked(false);
      } catch (error) {
        setAutoplayBlocked(true);
      }
    };

    attemptPlayback();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setNavigationStack([]); // Clear navigation stack when switching tabs
  };

  const handleNavigate = (route, data = null) => {
    setNavigationStack(prev => [...prev, { route, data, previousTab: activeTab }]);
  };

  const handleBackClick = () => {
    if (navigationStack.length > 0) {
      const newStack = [...navigationStack];
      newStack.pop();
      setNavigationStack(newStack);
    }
  };

  const handleToggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    if (isAudioPlaying) {
      audio.pause();
      audio.currentTime = 0;
      setIsAudioPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsAudioPlaying(true);
      setAutoplayBlocked(false);
    } catch (error) {
      setAutoplayBlocked(true);
    }
  };

  const getCurrentScreen = () => {
    // If there's a navigation stack, show the top screen
    if (navigationStack.length > 0) {
      const currentRoute = navigationStack[navigationStack.length - 1];
      
      switch (currentRoute.route) {
        case 'news-list':
          return <NewsListScreen onNavigate={handleNavigate} />;
        case 'shopping':
          return <ShoppingScreen />;
        case 'alumni-activities':
          return <AlumniActivitiesScreen onNavigate={handleNavigate} />;
        case 'club-reports':
          return <ClubReportsScreen onNavigate={handleNavigate} />;
        case 'career-overview':
          return <CareerOverviewScreen onNavigate={handleNavigate} />;
        case 'newsletter-archive':
          return <NewsletterArchiveScreen onNavigate={handleNavigate} />;
        case 'ads':
          return <AdvertisementScreen />;
        case 'contact':
          return <ContactScreen onNavigate={handleNavigate} />;
        case 'news-detail': {
          // News detail will be shown as modal, so return the previous screen
          const previousRoute = navigationStack[navigationStack.length - 2];
          if (previousRoute && previousRoute.route === 'news-list') {
            return <NewsListScreen onNavigate={handleNavigate} />;
          }
          return <HomeScreen onNavigate={handleNavigate} />;
        }
        default:
          // For other routes, show placeholder
          return (
            <div className="bg-off-white min-h-screen p-4">
              <div className="text-center py-20">
                <h2 className="text-xl font-mincho font-semibold wine-red mb-4">
                  {currentRoute.route}
                </h2>
                <p className="text-gray-600 font-gothic">
                  詳細画面（実装予定）
                </p>
              </div>
            </div>
          );
      }
    }

    // Default tab screens
    switch (activeTab) {
      case 'home':
        return <HomeScreen onNavigate={handleNavigate} />;
      case 'alumni':
        return <AlumniScreen onNavigate={handleNavigate} />;
      case 'news':
        return <NewsScreen onNavigate={handleNavigate} />;
      case 'donation':
        return <DonationScreen onNavigate={handleNavigate} />;
      case 'mypage':
        return <ContactScreen onNavigate={handleNavigate} />;
      default:
        return <HomeScreen onNavigate={handleNavigate} />;
    }
  };

  const getHeaderTitle = () => {
    if (navigationStack.length > 0) {
      const currentRoute = navigationStack[navigationStack.length - 1];
      // Don't show header title for news-detail as it's a modal
      if (currentRoute.route === 'news-detail') {
        const previousRoute = navigationStack[navigationStack.length - 2];
        return previousRoute ? (ROUTE_TITLES[previousRoute.route] ?? previousRoute.route) : null;
      }
      return ROUTE_TITLES[currentRoute.route] ?? currentRoute.route;
    }
    return null;
  };

  const getCurrentModal = () => {
    if (navigationStack.length > 0) {
      const currentRoute = navigationStack[navigationStack.length - 1];
      if (currentRoute.route === 'news-detail') {
        return (
          <NewsDetailScreen
            newsItem={currentRoute.data}
            onClose={handleBackClick}
          />
        );
      }
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-off-white">
      <div className="fixed bottom-24 left-1/2 z-50 flex w-full max-w-md -translate-x-1/2 justify-center px-4">
        <div className="flex w-full flex-col items-center space-y-2">
          {autoplayBlocked && !isAudioPlaying && (
            <span className="rounded-2xl bg-white/95 px-3 py-2 text-[11px] font-gothic text-gray-600 shadow-lg">
              校歌が止まっている場合はボタンを押してください。
            </span>
          )}
          <button
            type="button"
            onClick={handleToggleAudio}
            className="flex items-center gap-2 rounded-full bg-[#1976D2] px-5 py-3 text-sm font-semibold text-white shadow-lg transition active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1976D2]"
          >
            {isAudioPlaying ? "校歌を止める" : "校歌を再生する"}
          </button>
        </div>
      </div>

      <Layout
        showBackButton={navigationStack.length > 0 && navigationStack[navigationStack.length - 1].route !== 'news-detail'}
        onBackClick={handleBackClick}
        headerTitle={getHeaderTitle()}
      >
        {getCurrentScreen()}
      </Layout>
      
      {/* Fixed TabBar at bottom */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md">
        <TabBar activeTab={activeTab} onTabChange={handleTabChange} />
      </div>

      {/* Modal overlay */}
      {getCurrentModal()}
    </div>
  );
}

export default App;



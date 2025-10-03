import React, { useState } from 'react';
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
import ContactScreen from './screens/ContactScreen';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [navigationStack, setNavigationStack] = useState([]);

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
        case 'contact':
          return <ContactScreen onNavigate={handleNavigate} />;
        case 'news-detail':
          // News detail will be shown as modal, so return the previous screen
          const previousRoute = navigationStack[navigationStack.length - 2];
          if (previousRoute && previousRoute.route === 'news-list') {
            return <NewsListScreen onNavigate={handleNavigate} />;
          }
          return <HomeScreen onNavigate={handleNavigate} />;
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
        return previousRoute ? previousRoute.route : null;
      }
      return currentRoute.route;
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


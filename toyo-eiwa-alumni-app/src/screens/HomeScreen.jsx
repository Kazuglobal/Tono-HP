import React, { useState, useEffect } from 'react';
import { ChevronRight, Users, Trophy, GraduationCap, BookOpen, Megaphone, Image } from 'lucide-react';
import skyCrossImg from '../assets/sky-cross.jpg';
import chapelCrossImg from '../assets/chapel-cross.jpg';
import schoolBuildingImg from '../assets/school-building.jpg';
import principalSpeechImg from '../assets/principal-speech.jpg';
import chairmanMeetingImg from '../assets/chairman-meeting.jpg';
import presidentPhotoImg from '../assets/president-photo.png';

const HomeScreen = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { id: 1, image: skyCrossImg, alt: '本館と青空' },
    { id: 2, image: chapelCrossImg, alt: 'チャペルの十字架' },
    { id: 3, image: schoolBuildingImg, alt: '校舎全景' }
  ];

  const newsItems = [
    {
      id: 1,
      title: '2024年度 同窓会総会のお知らせ',
      date: '2024年03月15日',
      category: 'イベント',
      image: chairmanMeetingImg,
      eventDetails: {
        eventDate: '2024年4月15日（月）14:00〜17:00',
        location: '東京校舎 講堂',
        deadline: '2024年4月8日（月）',
        description: '2024年度同窓会総会を4月15日に開催します。今年のテーマは「つながる・広がる・挑戦する」。最新の活動報告と交流企画をご用意していますので、ぜひご参加ください。'
      }
    },
    { id: 2, title: '卒業30周年記念パーティー開催レポート', date: '2024年06月10日', image: '/api/placeholder/300/200' },
    { id: 3, title: 'キャリア支援セミナー 参加者募集', date: '2024年01月15日', image: '/api/placeholder/300/200' },
    { id: 4, title: '同窓会長からのメッセージ', date: '2024年03月20日', image: presidentPhotoImg },
    { id: 5, title: '在校生からの近況報告', date: '2024年03月18日', image: principalSpeechImg }
  ];

  const shortcutButtons = [
    { id: 'ads', title: '広告ページ', icon: Megaphone, bgColor: 'from-[#FDE68A] to-[#FCD34D]', iconBg: 'bg-white' },
    { id: 'alumni-activities', title: '同窓会活動', icon: Users, bgColor: 'from-[#BFDBFE] to-[#93C5FD]', iconBg: 'bg-white' },
    { id: 'club-reports', title: '部活動報告', icon: Trophy, bgColor: 'from-[#FBCFE8] to-[#F9A8D4]', iconBg: 'bg-white' },
    { id: 'career-overview', title: '進路概要', icon: GraduationCap, bgColor: 'from-[#BAE6FD] to-[#7DD3FC]', iconBg: 'bg-white' },
    { id: 'newsletter-archive', title: '過去の会報バックナンバー', icon: BookOpen, bgColor: 'from-[#BBF7D0] to-[#86EFAC]', iconBg: 'bg-white' },
    { id: 'memory-corner', title: '思い出コーナー', icon: Image, bgColor: 'from-[#E9D5FF] to-[#D8B4FE]', iconBg: 'bg-white' }
  ];

  const featuredAd = {
    title: '広告ギャラリー公開中',
    description: '同窓会の皆さま向けの最新広告をまとめました。スワイプで次の広告をチェックできます。',
    tag: 'NEW',
  };

  const alumniTopics = [
    { id: 1, title: '卒業生ネットワークインタビュー', date: '2024年03月12日', image: '/api/placeholder/60/60' },
    { id: 2, title: '春の交流会レポート', date: '2024年03月08日', image: '/api/placeholder/60/60' }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="bg-off-white min-h-screen">
      {/* Main Visual Slider */}
      <div className="relative h-48 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Advertisement Promo */}
        <section>
          <button
            onClick={() => onNavigate('ads')}
            className="w-full text-left"
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-6 shadow-md transition-transform duration-200 hover:scale-[1.01]">
              <span className="inline-flex items-center rounded-md bg-pink-500 px-3 py-1 text-xs font-bold text-white tracking-wide">
                {featuredAd.tag}
              </span>
              <h2 className="mt-3 text-2xl font-bold text-gray-900">
                {featuredAd.title}
              </h2>
              <p className="mt-2 text-sm text-gray-700 font-gothic leading-relaxed">
                {featuredAd.description}
              </p>
              <div className="mt-4 inline-flex items-center text-sm font-medium text-blue-600">
                詳細を見る
                <ChevronRight size={16} className="ml-1" />
              </div>
            </div>
          </button>
        </section>

        {/* News Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-mincho font-semibold wine-red">ニュース</h2>
            <button 
              onClick={() => onNavigate('news-list')}
              className="flex items-center text-sm text-gray-600 hover:text-wine-red transition-colors"
            >
              もっと見る
              <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
          
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {newsItems.map((item) => (
              <div
                key={item.id}
                onClick={() => onNavigate('news-detail', item)}
                className="flex-shrink-0 w-72 bg-white rounded-lg overflow-hidden card-shadow card-shadow-hover cursor-pointer"
              >
                {/* News Image */}
                <div className="h-32 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* News Content */}
                <div className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-wine-red rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xs">楓</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-gothic text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-500">{item.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Shortcut Buttons */}
        <section>
          <div className="grid grid-cols-3 gap-3">
            {shortcutButtons.map((button) => {
              const IconComponent = button.icon;
              return (
                <button
                  key={button.id}
                  onClick={() => onNavigate(button.id)}
                  className="relative bg-white rounded-2xl p-4 h-[120px] flex flex-col items-start justify-between shadow-sm hover:shadow-md transition-all overflow-hidden"
                >
                  <div className={`absolute top-4 right-4 w-20 h-20 rounded-full bg-gradient-to-br ${button.bgColor} opacity-80`} />
                  <div className="relative z-10 w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <IconComponent className="w-5 h-5 text-blue-600" strokeWidth={2} />
                  </div>
                  <span className="relative z-10 font-gothic text-xs font-medium text-gray-900 leading-tight">
                    {button.title}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Alumni Topics */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-mincho font-semibold wine-red">卒業生トピックス</h2>
            <button 
              onClick={() => onNavigate('alumni-topics')}
              className="flex items-center text-sm text-gray-600 hover:text-wine-red transition-colors"
            >
              もっと見る
              <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
          
          <div className="space-y-3">
            {alumniTopics.map((topic) => (
              <div
                key={topic.id}
                onClick={() => onNavigate('alumni-detail', topic)}
                className="bg-white rounded-lg p-4 card-shadow card-shadow-hover cursor-pointer"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-wine-red rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">楓</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-gothic text-sm font-medium text-gray-900 mb-1">
                      {topic.title}
                    </h3>
                    <p className="text-xs text-gray-500">{topic.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeScreen;


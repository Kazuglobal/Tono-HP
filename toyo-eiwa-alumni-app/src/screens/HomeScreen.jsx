import React, { useState, useEffect } from 'react';
import { ChevronRight, Users, Trophy, GraduationCap, BookOpen } from 'lucide-react';
import skyCrossImg from '../assets/sky-cross.jpg';
import chapelCrossImg from '../assets/chapel-cross.jpg';
import schoolBuildingImg from '../assets/school-building.jpg';
import principalSpeechImg from '../assets/principal-speech.jpg';
import chairmanMeetingImg from '../assets/chairman-meeting.jpg';
import tonoGraduationImg from '../assets/tono-graduation.jpg';
import presidentPhotoImg from '../assets/president-photo.png';

const HomeScreen = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      image: skyCrossImg,
      alt: '空と十字架'
    },
    {
      id: 2,
      image: chapelCrossImg,
      alt: '礼拝堂'
    },
    {
      id: 3,
      image: schoolBuildingImg,
      alt: '校舎'
    }
  ];

  const newsItems = [
    {
      id: 1,
      title: '2024年度同窓会総会のお知らせ',
      date: '2024年03月15日',
      category: 'イベント',
      image: chairmanMeetingImg,
      eventDetails: {
        eventDate: '2024年4月15日（土）14:00-17:00',
        location: '遠野市民会館',
        deadline: '2024年4月8日（月）',
        description: '平素より本学院の教育活動にご理解とご協力を賜り、誠にありがとうございます。\n\n来る4月15日（土）に、2024年度同窓会総会を開催いたします。今年度は「つながり～過去から未来へ～」をテーマに、多くの卒業生の皆様にお集まりいただき、学院の現状報告や今後の展望についてお話しさせていただく予定です。\n\nまた、総会終了後には懇親会も予定しておりますので、久しぶりに同窓生の皆様と旧交を温めていただければ幸いと思います。'
      }
    },
    {
      id: 2,
      title: '「感謝を力に変えて全力で。」サッカー部 県総体連覇',
      date: '2024年06月10日',
      image: '/api/placeholder/300/200'
    },
    {
      id: 3,
      title: '海外事業報告「チャタヌーガ研修に参加して」',
      date: '2024年01月15日',
      image: '/api/placeholder/300/200'
    },
    {
      id: 4,
      title: '同窓会会長挨拶',
      date: '2024年03月20日',
      image: presidentPhotoImg
    },
    {
      id: 5,
      title: '校長挨拶',
      date: '2024年03月18日',
      image: principalSpeechImg
    }
  ];

  const shortcutButtons = [
    { id: 'alumni-activities', title: '同窓会活動', icon: Users },
    { id: 'club-reports', title: '部活動報告', icon: Trophy },
    { id: 'career-overview', title: '進路概要', icon: GraduationCap },
    { id: 'newsletter-archive', title: '過去の会報バックナンバー', icon: BookOpen }
  ];

  const alumniTopics = [
    {
      id: 1,
      title: '卒業生起業家インタビュー',
      date: '2024年03月12日',
      image: '/api/placeholder/60/60'
    },
    {
      id: 2,
      title: '遠野の魅力を世界に発信',
      date: '2024年03月08日',
      image: '/api/placeholder/60/60'
    }
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
          <div className="grid grid-cols-2 gap-3">
            {shortcutButtons.map((button) => {
              const IconComponent = button.icon;
              return (
                <button
                  key={button.id}
                  onClick={() => onNavigate(button.id)}
                  className="bg-[#1976D2] text-white rounded-xl p-4 h-[100px] flex flex-col items-center justify-center space-y-2 hover:bg-[#1565C0] transition-colors shadow-md"
                >
                  <IconComponent className="w-8 h-8" strokeWidth={2} />
                  <span className="font-gothic text-xs font-medium text-center leading-tight">
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


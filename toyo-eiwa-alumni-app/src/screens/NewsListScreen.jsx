import React from 'react';
import { ChevronRight } from 'lucide-react';
import principalSpeechImg from '../assets/principal-speech.jpg';
import chairmanMeetingImg from '../assets/chairman-meeting.jpg';
import tonoGraduationImg from '../assets/tono-graduation.jpg';
import graduationCeremonyImg from '../assets/graduation-ceremony.jpg';
import graduationGroupImg from '../assets/graduation-group.jpg';
import reunionDinnerImg from '../assets/reunion-dinner.jpg';
import presidentPhotoImg from '../assets/president-photo.png';

const NewsListScreen = ({ onNavigate }) => {
  const newsItems = [
    {
      id: 1,
      title: '同窓会会長挨拶',
      date: '2024年03月20日',
      category: 'ご挨拶',
      summary: '新年度を迎えるにあたり、同窓会会長よりご挨拶申し上げます。',
      image: presidentPhotoImg
    },
    {
      id: 2,
      title: '校長挨拶',
      date: '2024年03月18日',
      category: 'ご挨拶',
      summary: '遠野高等学校校長より、新年度に向けてのメッセージです。',
      image: principalSpeechImg
    },
    {
      id: 3,
      title: '2024年度同窓会総会のお知らせ',
      date: '2024年03月15日',
      category: 'イベント',
      summary: '今年度の同窓会総会を開催いたします。多くの皆様のご参加をお待ちしております。',
      image: tonoGraduationImg
    },
    {
      id: 4,
      title: '卒業生の活躍が新聞に掲載されました',
      date: '2024年03月01日',
      category: 'ニュース',
      summary: '本校卒業生の地域での活躍が各種メディアで紹介されています。',
      image: graduationCeremonyImg
    },
    {
      id: 5,
      title: '同窓会報「遠野」最新号発行',
      date: '2024年02月28日',
      category: 'お知らせ',
      summary: '同窓会報「遠野」の最新号を発行いたしました。',
      image: graduationGroupImg
    },
    {
      id: 6,
      title: '地域別同窓会懇親会のご案内',
      date: '2024年02月25日',
      category: 'イベント',
      summary: '各地域での同窓会懇親会を開催予定です。',
      image: reunionDinnerImg
    }
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'イベント':
        return 'bg-blue-100 text-blue-800';
      case 'お知らせ':
        return 'bg-green-100 text-green-800';
      case 'ニュース':
        return 'bg-purple-100 text-purple-800';
      case 'ご挨拶':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-off-white min-h-screen">
      <div className="px-4 py-6">
        <h1 className="text-xl font-mincho font-semibold wine-red mb-6">
          ニュース一覧
        </h1>
        
        <div className="space-y-4">
          {newsItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onNavigate('news-detail', item)}
              className="bg-white rounded-lg overflow-hidden card-shadow card-shadow-hover cursor-pointer transition-all duration-200"
            >
              {/* News Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* News Content */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-500">{item.date}</span>
                </div>
                
                <h3 className="font-gothic text-base font-medium text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {item.summary}
                </p>
                
                <div className="flex items-center justify-end">
                  <span className="text-sm text-wine-red font-medium">詳細を見る</span>
                  <ChevronRight size={16} className="ml-1 text-wine-red" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsListScreen;


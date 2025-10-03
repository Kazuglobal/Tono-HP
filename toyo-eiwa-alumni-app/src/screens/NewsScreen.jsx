import React, { useState } from 'react';
import { Calendar, ChevronRight } from 'lucide-react';

const NewsScreen = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState('すべて');

  const categories = [
    { id: 'すべて', label: 'すべて' },
    { id: 'イベント', label: 'イベント' },
    { id: '募集', label: '募集' },
    { id: 'お知らせ', label: 'お知らせ' },
    { id: '制度変更', label: '制度変更' }
  ];

  const newsItems = [
    {
      id: 1,
      title: '2024年度同窓会総会開催のお知らせ',
      date: '2024年3月15日',
      category: 'イベント',
      description: '今年度の同窓会総会を下記の通り開催いたします。多くの皆様のご参加をお待ちしております。',
      image: '/api/placeholder/80/80',
      eventDetails: {
        eventDate: '2024年4月15日（土）14:00-17:00',
        location: '遠野市民会館',
        deadline: '2024年4月8日（月）',
        description: '平素より本学院の教育活動にご理解とご協力を賜り、誠にありがとうございます。\n\n来る4月15日（土）に、2024年度同窓会総会を開催いたします。今年度は「つながり～過去から未来へ～」をテーマに、多くの卒業生の皆様にお集まりいただき、学院の現状報告や今後の展望についてお話しさせていただく予定です。\n\nまた、総会終了後には懇親会も予定しておりますので、久しぶりに同窓生の皆様と旧交を温めていただければ幸いと思います。'
      }
    },
    {
      id: 2,
      title: '楓園祭2024のボランティア募集について',
      date: '2024年3月12日',
      category: '募集',
      description: '今年の楓園祭開催にあたり、当日のボランティアスタッフを募集いたします。',
      image: '/api/placeholder/80/80'
    },
    {
      id: 3,
      title: '新校舎建設計画に関するご報告',
      date: '2024年3月10日',
      category: 'お知らせ',
      description: '学院の新校舎建設計画について、詳細が決定いたしましたのでご報告いたします。',
      image: '/api/placeholder/80/80'
    },
    {
      id: 4,
      title: '奨学金制度の変更について',
      date: '2024年3月8日',
      category: '制度変更',
      description: '来年度より奨学金制度の一部が変更となります。詳細はこちらをご確認ください。',
      image: '/api/placeholder/80/80'
    },
    {
      id: 5,
      title: '春季遠足の実施について',
      date: '2024年3月5日',
      category: 'イベント',
      description: '4月に予定されている春季遠足の詳細についてお知らせいたします。',
      image: '/api/placeholder/80/80'
    },
    {
      id: 6,
      title: '図書館利用時間の変更',
      date: '2024年3月3日',
      category: 'お知らせ',
      description: '4月より図書館の利用時間が変更となります。',
      image: '/api/placeholder/80/80'
    }
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'イベント':
        return 'bg-red-100 text-red-700';
      case '募集':
        return 'bg-green-100 text-green-700';
      case 'お知らせ':
        return 'bg-blue-100 text-blue-700';
      case '制度変更':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const filteredNews = selectedCategory === 'すべて' 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory);

  const handleNewsClick = (newsItem) => {
    onNavigate('news-detail', newsItem);
  };

  return (
    <div className="bg-off-white min-h-screen">
      <div className="px-4 py-6">
        <h1 className="text-xl font-mincho font-semibold text-[#1976D2] mb-6">
          お知らせ
        </h1>

        {/* Category Filter */}
        <div className="mb-6">
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-gothic whitespace-nowrap transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-[#1976D2] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* News List */}
        <div className="space-y-4">
          {filteredNews.map((newsItem) => (
            <div
              key={newsItem.id}
              onClick={() => handleNewsClick(newsItem)}
              className="bg-white rounded-lg p-4 card-shadow card-shadow-hover cursor-pointer"
            >
              <div className="flex items-start space-x-3">
                {/* News Image */}
                <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
                  <img
                    src={newsItem.image}
                    alt={newsItem.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* News Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(newsItem.category)}`}>
                      {newsItem.category}
                    </span>
                    <ChevronRight size={16} className="text-gray-400 flex-shrink-0" />
                  </div>

                  <h3 className="font-gothic text-base font-semibold text-gray-900 mb-2 line-clamp-2">
                    {newsItem.title}
                  </h3>

                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar size={14} className="mr-1" />
                    <span>{newsItem.date}</span>
                  </div>

                  <p className="text-sm text-gray-600 line-clamp-2">
                    {newsItem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">該当するお知らせが見つかりませんでした。</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsScreen;


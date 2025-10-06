import React from 'react';
import { Calendar, Users, Heart, Award, BookOpen, MapPin } from 'lucide-react';

const AlumniActivitiesScreen = ({ onNavigate }) => {
  const annualSchedule = [
    {
      id: 1,
      title: '入学式',
      date: '4月7日',
      description: '新入生を迎える入学式が行われます。',
      icon: <Users className="w-6 h-6" />,
      type: '学校行事'
    },
    {
      id: 2,
      title: '同窓会三役会',
      date: '4月30日',
      description: '同窓会の三役による会議が開催されます。',
      icon: <Heart className="w-6 h-6" />,
      type: '同窓会活動'
    },
    {
      id: 3,
      title: '開校記念日',
      date: '5月17日',
      description: '学校の開校記念日を祝います。',
      icon: <Award className="w-6 h-6" />,
      type: '学校行事'
    },
    {
      id: 4,
      title: '年度幹事会・総会の在り方協議会',
      date: '5月28日',
      description: '年度幹事会と総会の在り方について協議します。',
      icon: <Calendar className="w-6 h-6" />,
      type: '同窓会活動'
    },
    {
      id: 5,
      title: '同窓会総会幹事会',
      date: '5月～8月（1回～4回）',
      description: '同窓会総会に向けた幹事会を複数回開催します。',
      icon: <Users className="w-6 h-6" />,
      type: '同窓会活動'
    },
    {
      id: 6,
      title: '同窓会報第1号発行',
      date: '7月19日',
      description: '年度最初の同窓会報を発行します。',
      icon: <BookOpen className="w-6 h-6" />,
      type: '同窓会活動'
    },
    {
      id: 7,
      title: '同窓会総会',
      date: '8月11日',
      description: 'たかむろ水光園にて同窓会総会を開催します。',
      icon: <MapPin className="w-6 h-6" />,
      type: '同窓会活動',
      location: 'たかむろ水光園'
    },
    {
      id: 8,
      title: '盛岡支部総会',
      date: '9月28日',
      description: '盛岡支部の総会をアートホテルにて開催します。',
      icon: <MapPin className="w-6 h-6" />,
      type: '支部活動',
      location: 'アートホテル'
    },
    {
      id: 9,
      title: '首都圏支部総会',
      date: '11月16日',
      description: '首都圏支部の総会をホテルラングウッドにて開催します。',
      icon: <MapPin className="w-6 h-6" />,
      type: '支部活動',
      location: 'ホテルラングウッド'
    },
    {
      id: 10,
      title: '同窓会報第2号発行',
      date: '2月28日',
      description: '年度後半の同窓会報を発行します。',
      icon: <BookOpen className="w-6 h-6" />,
      type: '同窓会活動'
    },
    {
      id: 11,
      title: '同窓会入会式',
      date: '2月28日',
      description: '新たに卒業する生徒の同窓会入会式を行います。',
      icon: <Heart className="w-6 h-6" />,
      type: '同窓会活動'
    },
    {
      id: 12,
      title: '卒業式',
      date: '3月1日',
      description: '卒業生を送る卒業式が行われます。',
      icon: <Award className="w-6 h-6" />,
      type: '学校行事'
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case '学校行事':
        return 'bg-blue-100 text-blue-700';
      case '同窓会活動':
        return 'bg-red-100 text-red-700';
      case '支部活動':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-off-white min-h-screen">
      <div className="px-4 py-6">
        <h1 className="text-xl font-mincho font-semibold text-[#1976D2] mb-6">
          同窓会活動
        </h1>

        {/* 年間スケジュール */}
        <section className="mb-8">
          <h2 className="text-lg font-mincho font-medium text-[#1976D2] mb-4">年間スケジュール</h2>
          <div className="space-y-3">
            {annualSchedule.map((event) => (
              <div key={event.id} className="bg-white rounded-lg p-4 card-shadow">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-[#1976D2] rounded-full flex items-center justify-center text-white flex-shrink-0">
                    {event.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-gothic text-base font-medium text-gray-900">
                        {event.title}
                      </h3>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${getTypeColor(event.type)}`}>
                        {event.type}
                      </span>
                    </div>
                    <p className="text-sm text-[#1976D2] font-medium mb-2">
                      {event.date}
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                      {event.description}
                    </p>
                    {event.location && (
                      <p className="text-xs text-gray-500">
                        会場: {event.location}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 参加のお誘い */}
        <section className="mt-8">
          <div className="bg-gradient-to-r from-[#1976D2] to-[#1565C0] text-white rounded-lg p-6 text-center">
            <h2 className="text-lg font-mincho font-semibold mb-3">
              同窓会活動への参加をお待ちしています
            </h2>
            <p className="text-sm mb-4">
              遠野高校の発展と同窓生の絆を深めるため、ぜひご参加ください。
            </p>
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-white text-[#1976D2] px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              お問い合わせ
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AlumniActivitiesScreen;


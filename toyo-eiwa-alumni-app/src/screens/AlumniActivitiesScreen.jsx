import React from 'react';
import { Calendar, Users, Heart, Award } from 'lucide-react';

const AlumniActivitiesScreen = ({ onNavigate }) => {
  const activities = [
    {
      id: 1,
      title: '年次総会',
      date: '毎年5月',
      description: '同窓生が一堂に会し、活動報告や今後の方針を決定します。',
      icon: <Users className="w-6 h-6" />,
      participants: '約200名'
    },
    {
      id: 2,
      title: '地域別懇親会',
      date: '年2回',
      description: '各地域の同窓生が集まり、親睦を深める懇親会を開催しています。',
      icon: <Heart className="w-6 h-6" />,
      participants: '各地域30-50名'
    },
    {
      id: 3,
      title: '母校支援活動',
      date: '通年',
      description: '奨学金制度の運営や学校施設の整備支援を行っています。',
      icon: <Award className="w-6 h-6" />,
      participants: '全同窓生'
    },
    {
      id: 4,
      title: '文化祭協力',
      date: '毎年10月',
      description: '母校の文化祭に協力し、模擬店の運営や展示を行います。',
      icon: <Calendar className="w-6 h-6" />,
      participants: '約50名'
    }
  ];

  const recentActivities = [
    {
      date: '2024年3月15日',
      title: '令和6年度同窓会総会開催',
      content: '今年度の総会を開催し、新役員の選出と活動報告を行いました。'
    },
    {
      date: '2024年2月20日',
      title: '奨学金授与式',
      content: '優秀な在校生3名に同窓会奨学金を授与いたしました。'
    },
    {
      date: '2024年1月10日',
      title: '新年懇親会',
      content: '新年を祝う懇親会を開催し、多くの同窓生が参加しました。'
    }
  ];

  return (
    <div className="bg-off-white min-h-screen">
      <div className="px-4 py-6">
        <h1 className="text-xl font-mincho font-semibold wine-red mb-6">
          同窓会活動
        </h1>

        {/* 主な活動 */}
        <section className="mb-8">
          <h2 className="text-lg font-mincho font-medium wine-red mb-4">主な活動</h2>
          <div className="grid gap-4">
            {activities.map((activity) => (
              <div key={activity.id} className="bg-white rounded-lg p-4 card-shadow">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-wine-red rounded-full flex items-center justify-center text-white flex-shrink-0">
                    {activity.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-gothic text-base font-medium text-gray-900 mb-1">
                      {activity.title}
                    </h3>
                    <p className="text-sm text-wine-red font-medium mb-2">
                      開催時期: {activity.date}
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                      {activity.description}
                    </p>
                    <p className="text-xs text-gray-500">
                      参加者数: {activity.participants}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 最近の活動 */}
        <section>
          <h2 className="text-lg font-mincho font-medium wine-red mb-4">最近の活動</h2>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="bg-white rounded-lg p-4 card-shadow">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-wine-red rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 mb-1">{activity.date}</p>
                    <h3 className="font-gothic text-sm font-medium text-gray-900 mb-2">
                      {activity.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {activity.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 参加のお誘い */}
        <section className="mt-8">
          <div className="bg-wine-red text-white rounded-lg p-6 text-center">
            <h2 className="text-lg font-mincho font-semibold mb-3">
              同窓会活動への参加をお待ちしています
            </h2>
            <p className="text-sm mb-4">
              遠野高校の発展と同窓生の絆を深めるため、ぜひご参加ください。
            </p>
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-white text-wine-red px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
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


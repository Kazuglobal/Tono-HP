import React, { useState } from 'react';
import { User, Settings, Bell, Lock, HelpCircle, LogOut, ChevronRight, Edit, Mail, Phone, MapPin, Calendar } from 'lucide-react';

const MyPageScreen = () => {
  const [user] = useState({
    name: '田中 花子',
    graduationYear: '2010年卒',
    department: '国際社会学部',
    email: 'hanako.tanaka@example.com',
    phone: '090-1234-5678',
    address: '東京都港区',
    profileImage: '/api/placeholder/80/80'
  });

  const menuItems = [
    {
      icon: <Edit size={20} />,
      title: 'プロフィール編集',
      description: '個人情報の変更・更新',
      action: () => alert('プロフィール編集画面に移動します。（実装予定）')
    },
    {
      icon: <Bell size={20} />,
      title: '通知設定',
      description: 'お知らせの受信設定',
      action: () => alert('通知設定画面に移動します。（実装予定）')
    },
    {
      icon: <Lock size={20} />,
      title: 'パスワード変更',
      description: 'ログインパスワードの変更',
      action: () => alert('パスワード変更画面に移動します。（実装予定）')
    },
    {
      icon: <Settings size={20} />,
      title: 'アプリ設定',
      description: '表示設定・その他の設定',
      action: () => alert('アプリ設定画面に移動します。（実装予定）')
    },
    {
      icon: <HelpCircle size={20} />,
      title: 'ヘルプ・サポート',
      description: 'よくある質問・お問い合わせ',
      action: () => alert('ヘルプ画面に移動します。（実装予定）')
    }
  ];

  const recentActivities = [
    {
      type: 'news',
      title: '2024年度同窓会総会のお知らせを閲覧',
      date: '2024年3月15日',
      icon: '📰'
    },
    {
      type: 'shopping',
      title: 'Maple Bijoux でシルバーネックレスを閲覧',
      date: '2024年3月12日',
      icon: '🛍️'
    },
    {
      type: 'alumni',
      title: '卒業生キャリア紹介で検索を実行',
      date: '2024年3月10日',
      icon: '👥'
    }
  ];

  return (
    <div className="bg-off-white min-h-screen">
      <div className="px-4 py-6">
        <h1 className="text-xl font-mincho font-semibold wine-red mb-6">
          マイページ
        </h1>

        {/* User Profile Card */}
        <div className="bg-white rounded-lg p-4 card-shadow mb-6">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0 overflow-hidden mr-4">
              <img
                src={user.profileImage}
                alt={user.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-gothic font-semibold text-gray-900">
                {user.name}
              </h2>
              <p className="text-sm text-gray-600">
                {user.department} {user.graduationYear}
              </p>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Edit size={18} className="text-wine-red" />
            </button>
          </div>

          <div className="space-y-3">
            <div className="flex items-center text-sm text-gray-700">
              <Mail size={16} className="text-wine-red mr-3 flex-shrink-0" />
              <span>{user.email}</span>
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <Phone size={16} className="text-wine-red mr-3 flex-shrink-0" />
              <span>{user.phone}</span>
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <MapPin size={16} className="text-wine-red mr-3 flex-shrink-0" />
              <span>{user.address}</span>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="bg-white rounded-lg card-shadow mb-6">
          <div className="divide-y divide-gray-200">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className="w-full px-4 py-4 flex items-center hover:bg-gray-50 transition-colors"
              >
                <div className="text-wine-red mr-4">
                  {item.icon}
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-gothic font-medium text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
                <ChevronRight size={18} className="text-gray-400" />
              </button>
            ))}
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-lg p-4 card-shadow mb-6">
          <h3 className="text-lg font-mincho font-semibold wine-red mb-4">
            最近の活動
          </h3>
          <div className="space-y-3">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start">
                <span className="text-lg mr-3 flex-shrink-0">{activity.icon}</span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 mb-1">
                    {activity.title}
                  </p>
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar size={12} className="mr-1" />
                    {activity.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* App Information */}
        <div className="bg-white rounded-lg p-4 card-shadow mb-6">
          <h3 className="text-lg font-mincho font-semibold wine-red mb-4">
            アプリ情報
          </h3>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex justify-between">
              <span>バージョン</span>
              <span>1.0.0</span>
            </div>
            <div className="flex justify-between">
              <span>最終更新</span>
              <span>2024年3月15日</span>
            </div>
            <div className="flex justify-between">
              <span>開発者</span>
              <span>東洋英和女学院 同窓会</span>
            </div>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={() => alert('ログアウトしますか？（実装予定）')}
          className="w-full bg-white rounded-lg p-4 card-shadow flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <LogOut size={20} className="text-red-500 mr-2" />
          <span className="font-medium text-red-500">ログアウト</span>
        </button>
      </div>
    </div>
  );
};

export default MyPageScreen;


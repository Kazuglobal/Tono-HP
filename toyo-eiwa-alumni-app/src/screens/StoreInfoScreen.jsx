import React, { useState } from 'react';
import { MapPin, Phone, Clock, ExternalLink, Filter } from 'lucide-react';

const StoreInfoScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('全て');
  const [selectedRegion, setSelectedRegion] = useState('全て');

  const categories = ['全て', '飲食店', '小売店', 'サービス業', '製造業', 'その他'];
  const regions = ['全て', '東京', '神奈川', '大阪', '愛知', '福岡', 'その他'];

  const storeData = [
    {
      id: 1,
      name: 'カフェ・ラ・メール',
      owner: '山田 由美（2005年卒）',
      category: '飲食店',
      region: '東京',
      address: '東京都港区麻布台1-2-3',
      phone: '03-1234-5678',
      hours: '10:00 - 20:00',
      closed: '月曜日',
      description: 'フランス仕込みの本格的なカフェ。オーガニック素材にこだわったメニューを提供。',
      image: '/api/placeholder/300/200',
      website: 'https://example.com'
    },
    {
      id: 2,
      name: 'アトリエ・花',
      owner: '佐藤 恵子（2000年卒）',
      category: '小売店',
      region: '東京',
      address: '東京都渋谷区神宮前3-4-5',
      phone: '03-2345-6789',
      hours: '11:00 - 19:00',
      closed: '水曜日',
      description: '季節の花を使ったフラワーアレンジメント教室も開催。',
      image: '/api/placeholder/300/200',
      website: 'https://example.com'
    },
    {
      id: 3,
      name: 'ビューティサロン Grace',
      owner: '田中 美智子（1995年卒）',
      category: 'サービス業',
      region: '神奈川',
      address: '神奈川県横浜市中区山下町1-1',
      phone: '045-123-4567',
      hours: '9:00 - 18:00',
      closed: '日曜日',
      description: 'エステとヘアサロンを併設した美容サロン。',
      image: '/api/placeholder/300/200',
      website: 'https://example.com'
    },
    {
      id: 4,
      name: 'ナチュラル工房',
      owner: '鈴木 麻衣（2010年卒）',
      category: '製造業',
      region: '大阪',
      address: '大阪府大阪市北区梅田2-3-4',
      phone: '06-3456-7890',
      hours: '10:00 - 18:00',
      closed: '土日祝',
      description: 'オーガニックコスメの製造・販売。肌に優しい自然派化粧品。',
      image: '/api/placeholder/300/200',
      website: 'https://example.com'
    },
    {
      id: 5,
      name: 'ブックカフェ 栞',
      owner: '高橋 智子（2008年卒）',
      category: '飲食店',
      region: '愛知',
      address: '愛知県名古屋市中区栄3-4-5',
      phone: '052-456-7890',
      hours: '11:00 - 22:00',
      closed: '不定休',
      description: '本と珈琲を楽しめる落ち着いた空間。定期的に読書会も開催。',
      image: '/api/placeholder/300/200',
      website: 'https://example.com'
    },
    {
      id: 6,
      name: 'ヨガスタジオ Harmony',
      owner: '中村 理恵（2012年卒）',
      category: 'サービス業',
      region: '福岡',
      address: '福岡県福岡市中央区天神2-3-4',
      phone: '092-567-8901',
      hours: '7:00 - 21:00',
      closed: '不定休',
      description: '初心者から上級者まで楽しめるヨガクラスを多数開催。',
      image: '/api/placeholder/300/200',
      website: 'https://example.com'
    }
  ];

  const filteredStores = storeData.filter(store => {
    const matchesCategory = selectedCategory === '全て' || store.category === selectedCategory;
    const matchesRegion = selectedRegion === '全て' || store.region === selectedRegion;
    return matchesCategory && matchesRegion;
  });

  return (
    <div className="bg-off-white min-h-screen">
      <div className="px-4 py-6">
        <h1 className="text-xl font-mincho font-semibold wine-red mb-6">
          店舗情報
        </h1>

        {/* Filters */}
        <div className="bg-white rounded-lg card-shadow p-4 mb-6">
          <div className="flex items-center mb-4">
            <Filter size={20} className="text-wine-red mr-2" />
            <span className="font-medium text-gray-900">絞り込み</span>
          </div>

          <div className="space-y-4">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                業種
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-[#1976D2] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Region Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                地域
              </label>
              <div className="flex flex-wrap gap-2">
                {regions.map((region) => (
                  <button
                    key={region}
                    onClick={() => setSelectedRegion(region)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedRegion === region
                        ? 'bg-[#1976D2] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {region}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            {filteredStores.length}件の店舗が見つかりました
          </p>
        </div>

        {/* Store List */}
        <div className="space-y-4">
          {filteredStores.map((store) => (
            <div
              key={store.id}
              className="bg-white rounded-lg overflow-hidden card-shadow card-shadow-hover"
            >
              {/* Store Image */}
              <div className="h-40 overflow-hidden bg-gray-200">
                <img
                  src={store.image}
                  alt={store.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Store Info */}
              <div className="p-4">
                <div className="mb-3">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-gothic text-lg font-semibold text-gray-900">
                      {store.name}
                    </h3>
                    <span className="px-2 py-1 bg-[#1976D2]/10 text-[#1976D2] text-xs font-medium rounded-full flex-shrink-0 ml-2">
                      {store.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    オーナー: {store.owner}
                  </p>
                </div>

                <p className="text-sm text-gray-700 mb-3">
                  {store.description}
                </p>

                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <MapPin size={16} className="text-[#1976D2] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{store.address}</span>
                  </div>

                  <div className="flex items-center">
                    <Phone size={16} className="text-[#1976D2] mr-2 flex-shrink-0" />
                    <a href={`tel:${store.phone}`} className="text-gray-700 hover:text-[#1976D2]">
                      {store.phone}
                    </a>
                  </div>

                  <div className="flex items-start">
                    <Clock size={16} className="text-[#1976D2] mr-2 flex-shrink-0 mt-0.5" />
                    <div className="text-gray-700">
                      <div>{store.hours}</div>
                      <div className="text-xs text-gray-500">定休日: {store.closed}</div>
                    </div>
                  </div>

                  {store.website && (
                    <div className="pt-2">
                      <a
                        href={store.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[#1976D2] hover:text-[#1565C0] font-medium"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        ウェブサイトを見る
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredStores.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">検索条件に一致する店舗が見つかりませんでした。</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StoreInfoScreen;


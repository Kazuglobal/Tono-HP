import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { MapPin, Phone, Clock, ExternalLink, Filter, Plus, X } from 'lucide-react';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';

const SWIPE_THRESHOLD = 120;
const SWIPE_VELOCITY = 600;
const MotionArticle = motion.article;

const SwipeCard = ({ store, isTop, stackPosition, stackSize, onSwipe }) => {
  const controls = useAnimation();
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-240, 240], [-12, 12]);

  const baseScale = 1 - stackPosition * 0.05;
  const baseY = stackPosition * 16;
  const baseOpacity = Math.max(0.6, 1 - stackPosition * 0.12);

  useEffect(() => {
    controls.start({
      scale: baseScale,
      y: baseY,
      opacity: baseOpacity,
      x: 0,
      rotate: 0,
      transition: { type: 'spring', stiffness: 320, damping: 26 },
    });
  }, [baseOpacity, baseScale, baseY, controls]);

  const handleDragEnd = async (_event, info) => {
    if (!isTop) {
      await controls.start({
        x: 0,
        rotate: 0,
        transition: { type: 'spring', stiffness: 320, damping: 26 },
      });
      return;
    }

    const hasSwipeConfidence =
      Math.abs(info.offset.x) > SWIPE_THRESHOLD || Math.abs(info.velocity.x) > SWIPE_VELOCITY;

    if (hasSwipeConfidence) {
      const direction = info.offset.x > 0 ? 1 : -1;
      await controls.start({
        x: direction * 480,
        rotate: direction * 18,
        opacity: 0,
        transition: { duration: 0.24, ease: 'easeIn' },
      });
      onSwipe(direction);
      controls.set({
        x: 0,
        rotate: 0,
        opacity: baseOpacity,
        scale: baseScale,
        y: baseY,
      });
    } else {
      await controls.start({
        x: 0,
        rotate: 0,
        transition: { type: 'spring', stiffness: 320, damping: 26 },
      });
    }
  };

  return (
    <MotionArticle
      layout
      initial={{ scale: baseScale, y: baseY, opacity: baseOpacity }}
      animate={controls}
      drag={isTop ? 'x' : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.2}
      onDragEnd={handleDragEnd}
      className={`absolute inset-0 bg-white rounded-3xl p-4 shadow-sm card-shadow-hover flex flex-col gap-4 transition-shadow duration-300 ${
        isTop ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
      style={{ x, rotate, zIndex: stackSize - stackPosition }}
      data-testid="store-slide"
      data-active={isTop}
      aria-roledescription="store-card"
      aria-hidden={!isTop}
      tabIndex={isTop ? 0 : -1}
    >
      <div className="relative h-48 w-full overflow-hidden rounded-2xl">
        <img src={store.image} alt={store.name} className="h-full w-full object-cover" />
        {store.category && (
          <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-800 backdrop-blur-sm">
            {store.category}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <div className="space-y-1">
          <h2 className="text-lg font-mincho font-semibold text-gray-900">{store.name}</h2>
          <p className="text-xs text-gray-500">オーナー：{store.owner}</p>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed">{store.description}</p>

        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-start gap-2">
            <MapPin size={16} className="text-[#1976D2] mt-0.5" aria-hidden="true" />
            <span>{store.address}</span>
          </div>

          <div className="flex items-center gap-2">
            <Phone size={16} className="text-[#1976D2]" aria-hidden="true" />
            <a href={`tel:${store.phone}`} className="text-gray-700 hover:text-[#1976D2]" tabIndex={isTop ? 0 : -1}>
              {store.phone}
            </a>
          </div>

          <div className="flex items-start gap-2">
            <Clock size={16} className="text-[#1976D2] mt-0.5" aria-hidden="true" />
            <div>
              <div>{store.hours}</div>
              <div className="text-xs text-gray-500">定休日：{store.closed}</div>
            </div>
          </div>
        </div>

        {store.website && (
          <Button
            asChild
            variant="outline"
            className="w-full font-gothic"
            tabIndex={isTop ? 0 : -1}
          >
            <a href={store.website} target="_blank" rel="noreferrer">
              ウェブサイトを見る
              <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
              <span className="sr-only">（外部サイトが開きます）</span>
            </a>
          </Button>
        )}
      </div>
    </MotionArticle>
  );
};

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
    description: 'フランス仕込みの本格的なカフェ。オーガニック素材にこだわったメニューを提供しています。',
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
    description: '季節の花を使ったフラワーアレンジメント教室も開催する、人気のフラワーショップです。',
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
    description: 'エステとヘアサロンを併設し、トータルビューティをサポートするサロンです。',
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
    description: 'オーガニックコスメの製造・販売を行う自然派ブランド。肌に優しい製品が人気です。',
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
    description: '本と珈琲を楽しめる落ち着いた空間。定期的に読書会やイベントを開催しています。',
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
    description: '初心者から上級者まで楽しめるヨガクラスを多数開催し、心と体のリフレッシュをサポートします。',
    image: '/api/placeholder/300/200',
    website: 'https://example.com'
  }
];


const StoreInfoScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('全て');
  const [selectedRegion, setSelectedRegion] = useState('全て');
  const [showForm, setShowForm] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredStores = useMemo(() => {
    return storeData.filter((store) => {
      const matchesCategory = selectedCategory === '全て' || store.category === selectedCategory;
      const matchesRegion = selectedRegion === '全て' || store.region === selectedRegion;
      return matchesCategory && matchesRegion;
    });
  }, [selectedCategory, selectedRegion]);

  useEffect(() => {
    setCurrentIndex((prev) => {
      if (!filteredStores.length) {
        return 0;
      }
      if (prev >= filteredStores.length) {
        return 0;
      }
      return prev;
    });
  }, [filteredStores.length]);

  const stackedStores = useMemo(() => {
    if (!filteredStores.length) return [];

    const stackSize = Math.min(filteredStores.length, 3);
    return Array.from({ length: stackSize }, (_, position) => {
      const nextIndex = (currentIndex + position) % filteredStores.length;
      return {
        store: filteredStores[nextIndex],
        stackPosition: position,
        stackSize,
      };
    });
  }, [currentIndex, filteredStores]);

  const handleSwipe = useCallback((direction) => {
    if (!filteredStores.length) return;

    setCurrentIndex((prev) => {
      const total = filteredStores.length;
      if (direction > 0) {
        return (prev + 1) % total;
      }
      return (prev - 1 + total) % total;
    });
  }, [filteredStores]);

  const handleIndicatorClick = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  const totalStores = filteredStores.length;

  return (
    <div className="bg-off-white min-h-screen">
      <div className="px-4 py-6">
        <h1 className="text-xl font-mincho font-semibold wine-red mb-6">店舗情報</h1>

        <div className="bg-white rounded-lg card-shadow mb-6 p-4">
          <div className="text-center">
            <h2 className="text-sm font-medium text-gray-900 mb-3">店舗登録</h2>
            <p className="text-xs text-gray-600 mb-4">ご自身のお店をご紹介ください。</p>
            <button
              onClick={() => setShowForm(true)}
              className="bg-[#1976D2] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1565C0] transition-colors flex items-center justify-center mx-auto space-x-2"
            >
              <Plus size={20} />
              <span>店舗を登録する</span>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg card-shadow mb-6 p-4 space-y-4">
          <div>
            <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
              <Filter size={18} className="text-wine-red" />
              <span>カテゴリで絞り込む</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentIndex(0);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-[#1976D2] text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  type="button"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
              <MapPin size={18} className="text-wine-red" />
              <span>エリア</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => {
                    setSelectedRegion(region);
                    setCurrentIndex(0);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedRegion === region
                      ? 'bg-[#1976D2] text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  type="button"
                >
                  {region}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-600">{totalStores}件の店舗が見つかりました</p>
        </div>

        {totalStores > 0 ? (
          <div className="flex flex-col items-center">
            <div className="relative mx-auto h-[620px] w-full max-w-xl">
              {stackedStores.map(({ store, stackPosition, stackSize }) => (
                <SwipeCard
                  key={store.id}
                  store={store}
                  isTop={stackPosition === 0}
                  stackPosition={stackPosition}
                  stackSize={stackSize}
                  onSwipe={handleSwipe}
                />
              ))}
            </div>

            <div className="mt-4 flex justify-center gap-2">
              {filteredStores.map((store, index) => (
                <button
                  key={store.id}
                  type="button"
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    currentIndex === index ? 'bg-wine-red' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => handleIndicatorClick(index)}
                  aria-label={`${store.name}の店舗に移動`}
                  data-active={currentIndex === index}
                  data-testid="store-indicator"
                />
              ))}
            </div>

            <p className="mt-2 text-xs text-gray-500">
              {currentIndex + 1}/{totalStores}件の店舗を表示しています。
            </p>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">条件に合う店舗は見つかりませんでした。</p>
          </div>
        )}
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-2xl mx-auto shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>

            <div>
              <h2 className="text-lg font-mincho font-semibold text-[#1976D2] mb-4 text-center">店舗登録フォーム</h2>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-4">
                  店舗登録フォームは外部サイトで開きます
                </p>
                <a
                  href="https://keen-whale-2c2.notion.site/2826e2231c408083a3b6d1e6b5e9eaf1?pvs=105"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#1976D2] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1565C0] transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  店舗登録フォームを開く
                </a>
              </div>
              <p className="text-xs text-gray-500 mt-3 text-center">店舗登録が完了すると事務局よりご連絡いたします。</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StoreInfoScreen;

import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, ChevronLeft, ChevronRight } from 'lucide-react';

const ShoppingScreen = () => {
  const [activeShopTab, setActiveShopTab] = useState('maple-bijoux');
  const [currentSlide, setCurrentSlide] = useState(0);

  const shopTabs = [
    { id: 'maple-bijoux', name: 'Maple Bijoux' },
    { id: 'eiwa-leaf', name: 'Eiwa Leaf' },
    { id: 'nojiri-moyai', name: '野尻もやい' }
  ];

  const slides = [
    {
      id: 1,
      image: '/api/placeholder/400/200',
      title: '新商品のご案内'
    },
    {
      id: 2,
      image: '/api/placeholder/400/200',
      title: '春の特別セール'
    },
    {
      id: 3,
      image: '/api/placeholder/400/200',
      title: '限定アイテム'
    }
  ];

  const products = {
    'maple-bijoux': [
      {
        id: 1,
        name: 'シルバーネックレス',
        price: 5000,
        image: '/api/placeholder/150/150',
        labels: ['NEW']
      },
      {
        id: 2,
        name: 'パールイヤリング',
        price: 3500,
        image: '/api/placeholder/150/150',
        labels: ['HOT']
      },
      {
        id: 3,
        name: 'ゴールドブレスレット',
        price: 7200,
        image: '/api/placeholder/150/150',
        labels: []
      },
      {
        id: 4,
        name: 'クリスタルリング',
        price: 4800,
        image: '/api/placeholder/150/150',
        labels: ['NEW', 'HOT']
      },
      {
        id: 5,
        name: 'シルバーピアス',
        price: 2800,
        image: '/api/placeholder/150/150',
        labels: []
      },
      {
        id: 6,
        name: 'パールブローチ',
        price: 6500,
        image: '/api/placeholder/150/150',
        labels: ['NEW']
      }
    ],
    'eiwa-leaf': [
      {
        id: 1,
        name: '学院オリジナルマグカップ',
        price: 1200,
        image: '/api/placeholder/150/150',
        labels: ['NEW']
      },
      {
        id: 2,
        name: '楓の葉ピンバッジ',
        price: 800,
        image: '/api/placeholder/150/150',
        labels: []
      }
    ],
    'nojiri-moyai': [
      {
        id: 1,
        name: '野尻湖特産品セット',
        price: 3200,
        image: '/api/placeholder/150/150',
        labels: ['HOT']
      },
      {
        id: 2,
        name: '信州そば',
        price: 1500,
        image: '/api/placeholder/150/150',
        labels: []
      }
    ]
  };

  const announcements = [
    '新商品が続々入荷中です！',
    '送料無料キャンペーン実施中（5,000円以上お買い上げ）',
    'ポイント2倍デー開催中'
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const getLabelColor = (label) => {
    switch (label) {
      case 'NEW':
        return 'bg-red-500 text-white';
      case 'HOT':
        return 'bg-orange-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="bg-off-white min-h-screen">
      {/* Shop Tab Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="flex">
          {shopTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveShopTab(tab.id)}
              className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
                activeShopTab === tab.id
                  ? 'bg-black text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-white px-4 py-3 flex items-center justify-between border-b border-gray-200">
        <button className="p-2 hover:bg-gray-100 rounded">
          <Menu size={20} className="text-gray-600" />
        </button>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded">
            <Search size={20} className="text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded relative">
            <ShoppingCart size={20} className="text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Image Slider */}
        <div className="relative bg-white rounded-lg overflow-hidden card-shadow">
          <div className="relative h-48">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
            />
            
            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
            >
              <ChevronRight size={20} />
            </button>

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
        </div>

        {/* Announcements */}
        <div className="bg-white rounded-lg p-4 card-shadow">
          <div className="flex items-center mb-3">
            <div className="w-6 h-6 bg-wine-red rounded-full flex items-center justify-center mr-2">
              <span className="text-white text-xs font-bold">!</span>
            </div>
            <h3 className="font-mincho font-semibold text-wine-red">お知らせ</h3>
          </div>
          <ul className="space-y-2">
            {announcements.map((announcement, index) => (
              <li key={index} className="text-sm text-gray-700 flex items-start">
                <span className="text-wine-red mr-2">•</span>
                {announcement}
              </li>
            ))}
          </ul>
        </div>

        {/* Products Grid */}
        <div>
          <h3 className="text-lg font-mincho font-semibold wine-red mb-4">
            商品一覧
          </h3>
          
          <div className="grid grid-cols-2 gap-4">
            {products[activeShopTab].map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden card-shadow card-shadow-hover cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-32 object-cover"
                  />
                  
                  {/* Product labels */}
                  {product.labels.length > 0 && (
                    <div className="absolute top-2 left-2 flex flex-col space-y-1">
                      {product.labels.map((label, index) => (
                        <span
                          key={index}
                          className={`px-2 py-1 text-xs font-bold rounded ${getLabelColor(label)}`}
                        >
                          {label}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="p-3">
                  <h4 className="font-gothic text-sm font-medium text-gray-900 mb-2 line-clamp-2">
                    {product.name}
                  </h4>
                  <p className="text-wine-red font-bold">
                    ¥{product.price.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingScreen;


import React, { useState } from 'react';
import { GraduationCap, Building, TrendingUp, Users, BookOpen, Briefcase, ChevronDown, ChevronUp } from 'lucide-react';

const CareerOverviewScreen = ({ onNavigate }) => {
  const [showHistoricalData, setShowHistoricalData] = useState(false);

  // 令和6年度受験者数・合格者数データ
  const careerData2024 = {
    "国公立大学": {
      "総合型選抜": { 合格: 0, 受験: 2, 合格率: 0 },
      "学校推薦": { 合格: 9, 受験: 16, 合格率: 56 },
      "一般": { 合格: 2, 受験: 8, 合格率: 25 },
      "合計": { 合格: 11, 受験: 26 }
    },
    "私立大学": {
      "総合型選抜": { 合格: 7, 受験: 9, 合格率: 78 },
      "学校推薦": { 合格: 17, 受験: 18, 合格率: 94 },
      "一般": { 合格: 10, 受験: 28, 合格率: 36 },
      "合計": { 合格: 34, 受験: 55 }
    },
    "公立短大": {
      "総合型選抜": { 合格: 1, 受験: 1, 合格率: 100 },
      "学校推薦": { 合格: 1, 受験: 1, 合格率: 100 },
      "一般": { 合格: 4, 受験: 5, 合格率: 80 },
      "合計": { 合格: 6, 受験: 7 }
    },
    "私立短大": {
      "学校推薦": { 合格: 2, 受験: 2, 合格率: 100 },
      "合計": { 合格: 2, 受験: 2 }
    },
    "医療系専門": {
      "学校推薦": { 合格: 7, 受験: 8, 合格率: 88 },
      "一般": { 合格: 2, 受験: 2, 合格率: 100 },
      "合計": { 合格: 9, 受験: 10 }
    },
    "各種専門": {
      "総合型選抜": { 合格: 9, 受験: 9, 合格率: 100 },
      "学校推薦": { 合格: 16, 受験: 16, 合格率: 100 },
      "一般": { 合格: 4, 受験: 4, 合格率: 100 },
      "合計": { 合格: 29, 受験: 29 }
    },
    "文科外": {
      "学校推薦": { 合格: 1, 受験: 1, 合格率: 100 },
      "一般": { 合格: 1, 受験: 1, 合格率: 100 },
      "合計": { 合格: 2, 受験: 2 }
    },
    "就職(管内)": {
      "学校推薦": { 合格: 11, 受験: 12, 合格率: 92 },
      "合計": { 合格: 11, 受験: 12 }
    },
    "就職(県内)": {
      "学校推薦": { 合格: 4, 受験: 4, 合格率: 100 },
      "合計": { 合格: 4, 受験: 4 }
    },
    "就職(県外)": {
      "学校推薦": { 合格: 5, 受験: 5, 合格率: 100 },
      "合計": { 合格: 5, 受験: 5 }
    },
    "公務員": {
      "一般": { 合格: 5, 受験: 9, 合格率: 56 },
      "合計": { 合格: 5, 受験: 9 }
    }
  };

  // 過去6年間の推移データ
  const historicalData = {
    "国公立大学": [
      { year: "R6", 決定: 11, 合格: 12 },
      { year: "R5", 決定: 11, 合格: 14 },
      { year: "R4", 決定: 17, 合格: 17 },
      { year: "R3", 決定: 17, 合格: 17 },
      { year: "R2", 決定: 15, 合格: 16 },
      { year: "R1", 決定: 8, 合格: 9 }
    ],
    "私立大学": [
      { year: "R6", 決定: 33, 合格: 46 },
      { year: "R5", 決定: 32, 合格: 40 },
      { year: "R4", 決定: 29, 合格: 47 },
      { year: "R3", 決定: 33, 合格: 53 },
      { year: "R2", 決定: 33, 合格: 48 },
      { year: "R1", 決定: 31, 合格: 35 }
    ],
    "公立短大": [
      { year: "R6", 決定: 2, 合格: 3 },
      { year: "R5", 決定: 5, 合格: 6 },
      { year: "R4", 決定: 3, 合格: 4 },
      { year: "R3", 決定: 3, 合格: 5 },
      { year: "R2", 決定: 3, 合格: 3 },
      { year: "R1", 決定: 3, 合格: 4 }
    ],
    "私立短大": [
      { year: "R6", 決定: 2, 合格: 2 },
      { year: "R5", 決定: 2, 合格: 3 },
      { year: "R4", 決定: 2, 合格: 2 },
      { year: "R3", 決定: 5, 合格: 5 },
      { year: "R2", 決定: 2, 合格: 3 },
      { year: "R1", 決定: 13, 合格: 14 }
    ],
    "医療系専門": [
      { year: "R6", 決定: 9, 合格: 10 },
      { year: "R5", 決定: 12, 合格: 14 },
      { year: "R4", 決定: 5, 合格: 6 },
      { year: "R3", 決定: 10, 合格: 12 },
      { year: "R2", 決定: 14, 合格: 18 },
      { year: "R1", 決定: 11, 合格: 12 }
    ],
    "各種専門": [
      { year: "R6", 決定: 29, 合格: 29 },
      { year: "R5", 決定: 23, 合格: 24 },
      { year: "R4", 決定: 16, 合格: 17 },
      { year: "R3", 決定: 20, 合格: 23 },
      { year: "R2", 決定: 38, 合格: 38 },
      { year: "R1", 決定: 18, 合格: 18 }
    ],
    "文科外": [
      { year: "R6", 決定: 2, 合格: 2 },
      { year: "R5", 決定: 1, 合格: 2 },
      { year: "R4", 決定: 4, 合格: 4 },
      { year: "R3", 決定: 7, 合格: 7 },
      { year: "R2", 決定: 1, 合格: 1 },
      { year: "R1", 決定: 4, 合格: 4 }
    ],
    "就職(管内)": [
      { year: "R6", 決定: 11, 合格: 11 },
      { year: "R5", 決定: 12, 合格: 12 },
      { year: "R4", 決定: 6, 合格: 6 },
      { year: "R3", 決定: 8, 合格: 8 },
      { year: "R2", 決定: 9, 合格: 9 },
      { year: "R1", 決定: 20, 合格: 20 }
    ],
    "就職(県内)": [
      { year: "R6", 決定: 4, 合格: 4 },
      { year: "R5", 決定: 1, 合格: 1 },
      { year: "R4", 決定: 2, 合格: 2 },
      { year: "R3", 決定: 5, 合格: 5 },
      { year: "R2", 決定: 9, 合格: 9 },
      { year: "R1", 決定: 11, 合格: 11 }
    ],
    "就職(県外)": [
      { year: "R6", 決定: 5, 合格: 5 },
      { year: "R5", 決定: 1, 合格: 1 },
      { year: "R4", 決定: 1, 合格: 1 },
      { year: "R3", 決定: 4, 合格: 5 },
      { year: "R2", 決定: 6, 合格: 6 },
      { year: "R1", 決定: 6, 合格: 6 }
    ],
    "公務員": [
      { year: "R6", 決定: 5, 合格: 5 },
      { year: "R5", 決定: 3, 合格: 5 },
      { year: "R4", 決定: 6, 合格: 7 },
      { year: "R3", 決定: 5, 合格: 9 },
      { year: "R2", 決定: 4, 合格: 6 },
      { year: "R1", 決定: 2, 合格: 2 }
    ],
    "合計": [
      { year: "R6", 決定: 113, 合格: 129 },
      { year: "R5", 決定: 103, 合格: 122 },
      { year: "R4", 決定: 91, 合格: 113 },
      { year: "R3", 決定: 117, 合格: 149 },
      { year: "R2", 決定: 134, 合格: 157 },
      { year: "R1", 決定: 127, 合格: 135 }
    ]
  };

  return (
    <div className="bg-off-white min-h-screen">
      <div className="px-4 py-6">
        <h1 className="text-xl font-mincho font-semibold wine-red mb-6">
          進路概要
        </h1>

        {/* 進路概況タイトル */}
        <section className="mb-8">
          <h2 className="text-lg font-mincho font-medium wine-red mb-4">
            令和6年度 卒業生の受験者数・合格者数
          </h2>
          
          {/* 各カテゴリー別データ */}
          <div className="space-y-6">
            {Object.entries(careerData2024).map(([category, data]) => (
              <div key={category} className="bg-white rounded-lg p-4 card-shadow">
                <h3 className="font-mincho font-semibold text-wine-red text-lg mb-4 border-b border-gray-200 pb-2">
                  {category}
                </h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 font-medium text-gray-700">選抜方法</th>
                        <th className="text-right py-2 font-medium text-gray-700">合格</th>
                        <th className="text-right py-2 font-medium text-gray-700">受験</th>
                        <th className="text-right py-2 font-medium text-gray-700">合格率(%)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(data).map(([method, stats]) => (
                        <tr key={method} className={`border-b border-gray-100 ${
                          method === '合計' ? 'bg-gray-50 font-medium' : ''
                        }`}>
                          <td className="py-2">{method}</td>
                          <td className="text-right py-2">{stats.合格}</td>
                          <td className="text-right py-2">{stats.受験}</td>
                          <td className="text-right py-2">
                            {stats.合格率 !== undefined ? stats.合格率 : '-'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 合格数の推移 */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-mincho font-medium wine-red">
              合格数の推移
            </h2>
            <button
              onClick={() => setShowHistoricalData(!showHistoricalData)}
              className="flex items-center space-x-1 text-wine-red hover:text-wine-red/80 transition-colors"
            >
              <span className="text-sm">過去6年間のデータ</span>
              {showHistoricalData ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          </div>

          {showHistoricalData && (
            <div className="space-y-4">
              {Object.entries(historicalData).map(([category, years]) => (
                <div key={category} className="bg-white rounded-lg p-4 card-shadow">
                  <h3 className="font-mincho font-semibold text-wine-red mb-3">
                    {category}
                  </h3>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 font-medium text-gray-700">年度</th>
                          <th className="text-right py-2 font-medium text-gray-700">決定</th>
                          <th className="text-right py-2 font-medium text-gray-700">合格</th>
                        </tr>
                      </thead>
                      <tbody>
                        {years.map((yearData, index) => (
                          <tr key={index} className="border-b border-gray-100">
                            <td className="py-2">{yearData.year}年度卒業</td>
                            <td className="text-right py-2">{yearData.決定}</td>
                            <td className="text-right py-2">{yearData.合格}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* 同窓会による支援 */}
        <section>
          <div className="bg-gradient-to-r from-wine-red to-purple-700 text-white rounded-lg p-6">
            <h2 className="text-lg font-mincho font-semibold mb-3 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2" />
              同窓会による進路支援
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <p>奨学金制度による経済的支援</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <p>卒業生による職業講話・進路相談</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <p>インターンシップ受け入れ企業の紹介</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <p>就職活動における面接指導</p>
              </div>
            </div>
            <button 
              onClick={() => onNavigate('contact')}
              className="mt-4 bg-white text-wine-red px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              進路支援についてお問い合わせ
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CareerOverviewScreen;


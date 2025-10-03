import React, { useState } from 'react';
import { Trophy, Medal, Star, Users, ChevronDown, ChevronUp, Award } from 'lucide-react';

const ClubReportsScreen = ({ onNavigate }) => {
  const [showDetails, setShowDetails] = useState({});

  const toggleDetails = (category) => {
    setShowDetails(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  // 概要サマリー
  const summary = [
    { label: '文化系', value: 18 },
    { label: '運動系', value: 12 },
    { label: '学術系', value: 8 },
  ];

  // 最近の活動
  const recentActivities = [
    {
      id: 'music-concert',
      tag: '合唱祭',
      title: '春季コンサート開催',
      club: '軽音楽部300名',
      date: '2024年3月20日',
      image: '/api/placeholder/320/160',
      category: '文化系',
    },
    {
      id: 'tennis-victory',
      tag: 'テニス部',
      title: '都大会準優勝',
      club: '東京大会 準優勝',
      date: '2024年3月15日',
      image: '/api/placeholder/320/160',
      category: '運動系',
    },
  ];

  // 主な成績・受賞
  const achievements = [
    { icon: '🏆', club: 'バスケットボール部', result: '関東大会出場', event: '関東大会' },
    { icon: '🥈', club: '文芸部', result: '全国コンクール入賞', event: '全国大会' },
    { icon: '⭐', club: '吹奏楽部', result: '東京都コンクール金賞', event: '都大会' },
    { icon: '🍵', club: '茶道部', result: '文化祭最優秀賞', event: '校内大会' },
  ];

  // 注目の部活動
  const featuredClubs = [
    {
      name: '音楽部',
      type: '文化系',
      members: 25,
      description: 'ピアノ、バイオリン、声楽など様々なジャンルで音楽を追求しています。',
      recent: '定期演奏会で多くの観客を魅了',
    },
    {
      name: '写真部',
      type: '文化系',
      members: 18,
      description: '校内外での撮影活動を通して、美しい瞬間を切り取っています。',
      recent: '写真コンテストで3名が入賞',
    },
    {
      name: 'ディベート部',
      type: '学術系',
      members: 15,
      description: '論理的思考力と表現力を磨き、様々な社会問題について議論しています。',
      recent: '全国大会出場決定',
    },
    {
      name: '書道部',
      type: '文化系',
      members: 20,
      description: '伝統的な書から現代的な表現まで、幅広く書の表現に取り組みます。',
      recent: '地域展で優秀賞',
    },
  ];

  // R6年度部活動報告データ
  const clubReports = {
    "第76回岩手県高等学校総合体育大会": {
      "サッカー": {
        icon: <Trophy className="w-6 h-6" />,
        color: 'bg-slate-600',
        achievement: "2年連続22回目 優勝",
        matches: [
          { round: "3回戦", opponent: "花巻南", score: "10 - 0" },
          { round: "準々決勝", opponent: "釜石・釜石商工・遠野緑峰", score: "8 - 0" },
          { round: "準決勝", opponent: "盛岡市立", score: "3 - 0" },
          { round: "決勝", opponent: "専大北上", score: "2 - 1" }
        ],
        notes: ["*優勝回数はインターハイと名称変更後の回数。通算は29回目", "全国高等学校総合体育大会（福島県）、第66回東北高等学校サッカー選手権大会 出場"]
      },
      "陸上競技": {
        icon: <Medal className="w-6 h-6" />,
        color: 'bg-slate-500',
        achievement: "女子2000m障害 全国大会出場",
        results: ["佐々木寧音（3年） 6位 8分36秒42"]
      },
      "ソフトボール": {
        icon: <Star className="w-6 h-6" />,
        color: 'bg-stone-500',
        achievement: "1回戦敗退",
        matches: [{ round: "1回戦", opponent: "盛岡北・紫波・宮古・宮古商工・盛岡中央", score: "5 - 12" }]
      },
      "バレー男子": {
        icon: <Star className="w-6 h-6" />,
        color: 'bg-stone-500',
        achievement: "2回戦敗退",
        matches: [{ round: "2回戦", opponent: "盛岡商業", score: "1 - 2" }]
      },
      "バレー女子": {
        icon: <Star className="w-6 h-6" />,
        color: 'bg-stone-500',
        achievement: "1回戦敗退",
        matches: [{ round: "1回戦", opponent: "盛岡商業", score: "0 - 2" }]
      },
      "ソフトテニス男子": {
        icon: <Star className="w-6 h-6" />,
        color: 'bg-stone-500',
        achievement: "1回戦敗退",
        matches: [{ round: "団体戦 1回戦", opponent: "盛岡北", score: "0 - 3" }]
      },
      "ソフトテニス女子": {
        icon: <Star className="w-6 h-6" />,
        color: 'bg-slate-500',
        achievement: "2回戦進出",
        matches: [
          { round: "団体戦 1回戦", opponent: "盛岡誠桜", score: "③ - 0" },
          { round: "2回戦", opponent: "大船渡", score: "0 - ③" }
        ]
      },
      "バドミントン": {
        icon: <Star className="w-6 h-6" />,
        color: 'bg-stone-500',
        achievement: "2回戦敗退",
        matches: [{ round: "学校対抗 2回戦", opponent: "盛岡一", score: "0 - 3" }]
      },
      "バスケットボール": {
        icon: <Star className="w-6 h-6" />,
        color: 'bg-stone-500',
        achievement: "1回戦敗退",
        matches: [{ round: "男子 1回戦", opponent: "久慈", score: "62 - 81" }]
      },
      "剣道": {
        icon: <Star className="w-6 h-6" />,
        color: 'bg-stone-500',
        achievement: "予選リーグ敗退",
        results: [
          "男子団体 予選リーグ 遠野 0 - 3 一関第二",
          "遠野 1 - 4 盛岡第三",
          "女子団体 2回戦 遠野 1 - 4 予選リーグ敗退"
        ]
      },
      "弓道": {
        icon: <Award className="w-6 h-6" />,
        color: 'bg-slate-600',
        achievement: "男女とも個人戦で健闘",
        results: [
          "男子 団体予選（40射） 遠野 13中 予選敗退",
          "菊池陽翔 3回戦進出",
          "小水内海里 2回戦敗退",
          "菊池琥珀 2回戦敗退",
          "女子 団体予選（40射） 遠野 5中 準決勝進出",
          "似田貝聖奈 2回戦進出",
          "白金結衣 2回戦進出",
          "菊池雪乃 1回戦敗退",
          "山口まりや 1回戦敗退",
          "松原悠乃 2回戦敗退",
          "安部楓 1回戦敗退",
          "仲宗根千尋 1回戦敗退",
          "大木戸美空 1回戦敗退"
        ]
      }
    },
    "その他大会": {
      "サッカー": {
        icon: <Trophy className="w-6 h-6" />,
        color: 'bg-slate-600',
        achievement: "東北大会2年連続6回目優勝",
        results: [
          "高円宮杯 JFA U-18 サッカーリーグ 2024 岩手 i.LEAGUE * 6月4日時点",
          "D1 7勝0分0敗 第1位",
          "D2A 3勝0分4敗 第5位",
          "D3 サテライト 1勝1分4敗",
          "第66回東北高等学校サッカー選手権大会",
          "1回戦 VS 秋田南 5 - 0",
          "準々決勝 VS 尚志 2 - 1",
          "準決勝 VS 仙台育英 2 - 0",
          "決勝 VS 専大北上 0 - 0 (9PK8)",
          "2年連続6回目の優勝"
        ]
      },
      "野球": {
        icon: <Star className="w-6 h-6" />,
        color: 'bg-stone-500',
        achievement: "春季大会 地区予選敗退",
        results: [
          "春季東北地区高等学校野球岩手県大会花巻地区予選",
          "1回戦 対 黒沢尻工 4対5× 負",
          "敗者復活1回戦 対 花巻農業 11対12× 負",
          "（延長10回タイブレーク）（延長11回タイブレーク）"
        ]
      }
    }
  };

  return (
    <div className="bg-off-white min-h-screen">
      <div className="px-4 py-6">
        <h1 className="text-xl font-mincho font-semibold wine-red mb-6">
          部活動報告
        </h1>

        {/* 概要サマリー */}
        <section className="mb-6">
          <h2 className="text-sm text-gray-600 mb-2">生徒たちの活発な部活動の様子をお伝えします</h2>
          <div className="flex gap-3">
            {summary.map((item) => (
              <div key={item.label} className="flex-1 bg-white rounded-xl card-shadow p-4 text-center">
                <div className="text-2xl font-bold text-[#1976D2]">{item.value}</div>
                <div className="text-xs text-gray-600 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 最近の活動 */}
        <section className="mb-8">
          <h2 className="text-lg font-mincho font-medium wine-red mb-3">最近の活動</h2>
          <div className="overflow-x-auto no-scrollbar">
            <div className="flex gap-4 pr-4 snap-x snap-mandatory">
              {recentActivities.map((act) => (
                <div key={act.id} className="min-w-[240px] max-w-[240px] bg-white rounded-lg overflow-hidden card-shadow snap-start">
                  <div className="h-36 bg-gray-200 overflow-hidden">
                    <img src={act.image} alt={act.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <span className="inline-block text-xs bg-[#1976D2]/10 text-[#1976D2] px-2 py-1 rounded mr-2">{act.tag}</span>
                    <span className="inline-block text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{act.category}</span>
                    <h3 className="mt-2 font-gothic font-semibold text-gray-900 line-clamp-2">{act.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{act.club}</p>
                    <div className="text-xs text-gray-500 mt-2">{act.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 主な成果 */}
        <section className="mb-8">
          <h2 className="text-lg font-mincho font-medium wine-red mb-3">主な成績・受賞</h2>
          <div className="space-y-3">
            {achievements.map((a, i) => (
              <div key={i} className="bg-white rounded-xl card-shadow p-4 flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#FFD54F] flex items-center justify-center text-lg mr-3">{a.icon}</div>
                <div className="flex-1">
                  <div className="font-gothic font-semibold text-gray-900">{a.club}</div>
                  <div className="text-sm text-[#1976D2]">{a.result}</div>
                  <div className="text-xs text-gray-500">{a.event}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* R6部活動報告 */}
        <section className="mb-8">
          <h2 className="text-lg font-mincho font-medium wine-red mb-4">R6部活動報告</h2>
          
          {Object.entries(clubReports).map(([category, clubs]) => (
            <div key={category} className="mb-6">
              <button
                onClick={() => toggleDetails(category)}
                className="w-full bg-wine-red text-white rounded-lg p-4 flex items-center justify-between mb-4 hover:bg-wine-red/90 transition-colors"
              >
                <h3 className="font-mincho font-semibold text-lg">{category}</h3>
                {showDetails[category] ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              
              {showDetails[category] && (
                <div className="space-y-4">
                  {Object.entries(clubs).map(([sport, data]) => (
                    <div key={sport} className="bg-white rounded-lg p-4 card-shadow">
                      <div className="flex items-start space-x-3">
                        <div className={`w-12 h-12 ${data.color} rounded-full flex items-center justify-center text-white flex-shrink-0`}>
                          {data.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-gothic text-base font-medium text-gray-900 mb-2">
                            {sport}
                          </h4>
                          <p className="text-sm font-medium wine-red mb-3">
                            {data.achievement}
                          </p>
                          
                          {/* 試合結果 */}
                          {data.matches && (
                            <div className="mb-3">
                              <h5 className="text-sm font-medium text-gray-700 mb-2">試合結果：</h5>
                              <div className="space-y-1">
                                {data.matches.map((match, idx) => (
                                  <div key={idx} className="text-sm text-gray-600 pl-2 border-l-2 border-gray-200">
                                    <span className="font-medium">{match.round}</span> VS {match.opponent} <span className="font-mono">{match.score}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {/* その他の結果 */}
                          {data.results && (
                            <div className="mb-3">
                              <div className="space-y-1">
                                {data.results.map((result, idx) => (
                                  <div key={idx} className="text-sm text-gray-600">
                                    • {result}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {/* 注釈 */}
                          {data.notes && (
                            <div className="text-xs text-gray-500 mt-2 space-y-1">
                              {data.notes.map((note, idx) => (
                                <div key={idx}>{note}</div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>

        {/* 注目の部活動 */}
        <section className="mb-8">
          <h2 className="text-lg font-mincho font-medium wine-red mb-3">注目の部活動</h2>
          <div className="space-y-3">
            {featuredClubs.map((c) => (
              <div key={c.name} className="bg-white rounded-xl card-shadow p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-gothic font-semibold text-gray-900">{c.name}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{c.type}　員: {c.members}名</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mt-2">{c.description}</p>
                <div className="text-sm text-[#1976D2] mt-2">最近の活動：{c.recent}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 部活動支援 */}
        <section>
          <div className="bg-gradient-to-r from-[#1976D2] to-[#1565C0] text-white rounded-lg p-6">
            <h2 className="text-lg font-mincho font-semibold mb-3 flex items-center">
              <Users className="w-5 h-5 mr-2" />
              同窓会による部活動支援
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <p>部活動備品の購入支援</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <p>大会遠征費の一部補助</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <p>優秀な成績を収めた部活動への表彰</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <p>OB・OGによる技術指導</p>
              </div>
            </div>
            <button 
              onClick={() => onNavigate('contact')}
              className="mt-4 bg-white text-wine-red px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              支援についてお問い合わせ
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ClubReportsScreen;


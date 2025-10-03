import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, MapPin, Building, Calendar } from 'lucide-react';

const AlumniCareerScreen = () => {
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedJobType, setSelectedJobType] = useState('');

  const departments = [
    '全て',
    '国際社会学部',
    '人間科学部',
    '文学部',
    '経済学部',
    '教育学部'
  ];

  const jobTypes = [
    '全て',
    '教育・研究',
    '医療・福祉',
    '金融・保険',
    '商社・貿易',
    'IT・通信',
    'メディア・広告',
    '公務員',
    '起業・経営',
    'その他'
  ];

  const alumniData = [
    {
      id: 1,
      name: '田中 美智子',
      graduationYear: '1995年卒',
      department: '国際社会学部',
      jobTitle: '国際機関職員',
      company: '国連難民高等弁務官事務所',
      location: 'ジュネーブ',
      jobType: '公務員',
      image: '/api/placeholder/320/180',
      headline: 'テクノロジーで社会を変える',
      description: '国際協力の分野で活躍。難民支援プログラムの企画・運営を担当。'
    },
    {
      id: 2,
      name: '佐藤 恵子',
      graduationYear: '2000年卒',
      department: '人間科学部',
      jobTitle: '小児科医',
      company: '東京大学医学部附属病院',
      location: '東京',
      jobType: '医療・福祉',
      image: '/api/placeholder/320/180',
      headline: '患者さんに寄り添う医療を',
      description: '小児医療の専門医として、子どもたちの健康を守る仕事に従事。'
    },
    {
      id: 3,
      name: '山田 由美',
      graduationYear: '2005年卒',
      department: '文学部',
      jobTitle: 'テレビプロデューサー',
      company: 'NHK',
      location: '東京',
      jobType: 'メディア・広告',
      image: '/api/placeholder/320/180',
      headline: '言葉の力で心を動かす',
      description: 'ドキュメンタリー番組の制作を手がけ、社会問題を伝える番組を制作。'
    },
    {
      id: 4,
      name: '鈴木 麻衣',
      graduationYear: '2010年卒',
      department: '経済学部',
      jobTitle: 'IT企業CEO',
      company: 'テックイノベーション株式会社',
      location: '東京',
      jobType: '起業・経営',
      image: '/api/placeholder/320/180',
      headline: '正義を追求し続ける',
      description: 'AIを活用した教育サービスを提供するスタートアップを創業。'
    },
    {
      id: 5,
      name: '高橋 智子',
      graduationYear: '2008年卒',
      department: '教育学部',
      jobTitle: '高校教師',
      company: '東洋英和女学院高等部',
      location: '東京',
      jobType: '教育・研究',
      image: '/api/placeholder/80/80',
      description: '母校で英語教師として勤務。国際教育プログラムの開発にも携わる。'
    },
    {
      id: 6,
      name: '中村 理恵',
      graduationYear: '2012年卒',
      department: '国際社会学部',
      jobTitle: '外資系コンサルタント',
      company: 'マッキンゼー・アンド・カンパニー',
      location: '東京',
      jobType: 'その他',
      image: '/api/placeholder/80/80',
      description: '企業の戦略立案や組織改革をサポートするコンサルティング業務。'
    }
  ];

  const filteredAlumni = alumniData.filter(alumni => {
    const matchesSearch = searchQuery === '' || 
      alumni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alumni.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alumni.company.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesDepartment = selectedDepartment === '' || selectedDepartment === '全て' || 
      alumni.department === selectedDepartment;
    
    const matchesJobType = selectedJobType === '' || selectedJobType === '全て' || 
      alumni.jobType === selectedJobType;
    
    return matchesSearch && matchesDepartment && matchesJobType;
  });

  return (
    <div className="bg-off-white min-h-screen">
      <div className="px-4 py-6">
        <h1 className="text-xl font-mincho font-semibold wine-red mb-6">
          卒業生キャリア紹介
        </h1>

        {/* Search Accordion */}
        <div className="bg-white rounded-lg card-shadow mb-6 overflow-hidden">
          <button
            onClick={() => setSearchExpanded(!searchExpanded)}
            className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center">
              <Search size={20} className="text-wine-red mr-2" />
              <span className="font-medium text-gray-900">検索・絞り込み</span>
            </div>
            {searchExpanded ? (
              <ChevronUp size={20} className="text-gray-500" />
            ) : (
              <ChevronDown size={20} className="text-gray-500" />
            )}
          </button>

          <div className={`transition-all duration-300 ease-in-out ${
            searchExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}>
            <div className="px-4 pb-4 space-y-4 border-t border-gray-200">
              {/* Search Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  キーワード検索
                </label>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="名前、職業、会社名で検索"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wine-red focus:border-transparent"
                />
              </div>

              {/* Department Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  学部
                </label>
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wine-red focus:border-transparent"
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept === '全て' ? '' : dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>

              {/* Job Type Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  職種
                </label>
                <select
                  value={selectedJobType}
                  onChange={(e) => setSelectedJobType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wine-red focus:border-transparent"
                >
                  {jobTypes.map((type) => (
                    <option key={type} value={type === '全て' ? '' : type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            {filteredAlumni.length}件の卒業生が見つかりました
          </p>
        </div>

        {/* Alumni Grid (2列カード) */}
        <div className="grid grid-cols-2 gap-4">
          {filteredAlumni.map((alumni) => (
            <div key={alumni.id} className="bg-white rounded-xl card-shadow overflow-hidden">
              <div className="h-28 w-full bg-gray-200 overflow-hidden">
                <img src={alumni.image} alt={alumni.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-3">
                {alumni.headline && (
                  <div className="text-xs font-medium text-[#D81B60] mb-1 line-clamp-2">{alumni.headline}</div>
                )}
                <div className="font-gothic text-base font-semibold text-gray-900">{alumni.name}</div>
                <div className="text-xs text-gray-600 mt-0.5">{alumni.department} {alumni.graduationYear}</div>
                <div className="text-sm text-gray-700 mt-2 line-clamp-2">
                  <span className="font-medium">{alumni.jobTitle}</span>
                  <span className="mx-1">／</span>
                  <span className="text-gray-600">{alumni.company}</span>
                </div>
                <div className="flex items-center text-xs text-gray-600 mt-1">
                  <MapPin size={14} className="text-[#1976D2] mr-1" />{alumni.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredAlumni.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">検索条件に一致する卒業生が見つかりませんでした。</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AlumniCareerScreen;


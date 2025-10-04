import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, MapPin, Building, Calendar, Plus, X } from 'lucide-react';
import AlumniCareerDetailScreen from './AlumniCareerDetailScreen';

const AlumniCareerScreen = () => {
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDetailedJobType, setSelectedDetailedJobType] = useState('');
  const [selectedJobCategory, setSelectedJobCategory] = useState('');
  const [selectedAlumni, setSelectedAlumni] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const detailedJobTypes = [
    '全て',
    '医師・看護師',
    '教師・教育関係',
    'エンジニア・プログラマー',
    'デザイナー・クリエイター',
    '営業・マーケティング',
    'コンサルタント',
    '公務員・公的機関',
    '金融・保険',
    '商社・貿易',
    'メディア・広告・出版',
    '法律・弁護士',
    '会計・税理士',
    '建築・建設',
    '製造業・技術者',
    '小売・サービス業',
    '飲食・ホテル',
    '農業・林業・漁業',
    '芸能・エンターテイメント',
    'スポーツ・フィットネス',
    'NPO・NGO',
    '起業・経営者',
    'フリーランス',
    'その他'
  ];

  const jobCategories = [
    '全て',
    '教育・研究',
    '医療・福祉',
    '金融・保険',
    '商社・貿易',
    'IT・通信',
    'メディア・広告・出版',
    '公務員・公的機関',
    '法律・法務',
    '会計・税務',
    '建築・建設・不動産',
    '製造業・技術',
    '小売・サービス業',
    '飲食・ホテル・観光',
    '農業・林業・漁業',
    '芸能・エンターテイメント',
    'スポーツ・フィットネス',
    'NPO・NGO・社会貢献',
    '起業・経営・フリーランス',
    'コンサルティング',
    '営業・マーケティング',
    '人事・総務・事務',
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
      jobType: 'NPO・NGO・社会貢献',
      detailedJobType: 'NPO・NGO',
      image: '/api/placeholder/320/180',
      headline: 'テクノロジーで社会を変える',
      description: '国際協力の分野で活躍。難民支援プログラムの企画・運営を担当しています。世界中の難民の方々に寄り添い、彼らの権利を守るために日々奔走しています。\n\n東洋英和での学びが、今の私の原点です。多様な価値観を尊重し、弱い立場の人々に寄り添う姿勢は、在学中に培われました。',
      website: 'https://example.com/tanaka',
      facebook: 'https://facebook.com/tanaka',
      linkedin: 'https://linkedin.com/in/tanaka',
      careerPath: [
        { period: '1995-1998', position: 'NGO職員', company: '国際協力NGO' },
        { period: '1998-2005', position: 'プログラムオフィサー', company: 'JICA' },
        { period: '2005-現在', position: '上級プログラムオフィサー', company: 'UNHCR' }
      ],
      message: '国際協力の分野は決して華やかではありませんが、誰かの人生を支えることができる、やりがいのある仕事です。在学中に様々なことに挑戦し、自分の「やりたいこと」を見つけてください。'
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
      detailedJobType: '医師・看護師',
      image: '/api/placeholder/320/180',
      headline: '患者さんに寄り添う医療を',
      description: '小児医療の専門医として、子どもたちの健康を守る仕事に従事しています。特に先天性心疾患の治療に力を入れており、多くの子どもたちの命を救ってきました。\n\n医師として最も大切にしているのは、患者さんとそのご家族に寄り添うこと。東洋英和で学んだ「愛と奉仕」の精神が、今の私の医療の基盤となっています。',
      website: 'https://example.com/sato',
      linkedin: 'https://linkedin.com/in/sato',
      careerPath: [
        { period: '2000-2006', position: '医学部学生', company: '東京大学医学部' },
        { period: '2006-2010', position: '研修医・レジデント', company: '東京大学医学部附属病院' },
        { period: '2010-現在', position: '小児科医', company: '東京大学医学部附属病院' }
      ],
      message: '医師の道は長く厳しいですが、患者さんの笑顔を見るたびに、この仕事を選んでよかったと思います。夢を持ち続けることの大切さを、後輩の皆さんに伝えたいです。'
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
      detailedJobType: 'メディア・広告・出版',
      image: '/api/placeholder/320/180',
      headline: '言葉の力で心を動かす',
      description: 'ドキュメンタリー番組の制作を手がけ、社会問題を伝える番組を制作しています。特に環境問題や貧困問題をテーマにした番組を多く手掛けてきました。\n\n文学部で学んだ批評的思考力と表現力が、今の仕事に大いに役立っています。',
      facebook: 'https://facebook.com/yamada',
      linkedin: 'https://linkedin.com/in/yamada',
      careerPath: [
        { period: '2005-2008', position: 'AD（アシスタントディレクター）', company: 'NHK' },
        { period: '2008-2015', position: 'ディレクター', company: 'NHK' },
        { period: '2015-現在', position: 'プロデューサー', company: 'NHK' }
      ],
      message: 'メディアの力は大きいです。その力を社会のために使えることに、誇りを感じています。皆さんも自分の得意なことを活かして、社会に貢献してください。'
    },
    {
      id: 4,
      name: '鈴木 麻衣',
      graduationYear: '2010年卒',
      department: '経済学部',
      jobTitle: 'IT企業CEO',
      company: 'テックイノベーション株式会社',
      location: '東京',
      jobType: '起業・経営・フリーランス',
      detailedJobType: '起業・経営者',
      image: '/api/placeholder/320/180',
      headline: '正義を追求し続ける',
      description: 'AIを活用した教育サービスを提供するスタートアップを創業しました。「すべての子どもに質の高い教育を」をミッションに、テクノロジーで教育格差の解消に取り組んでいます。\n\n起業は簡単ではありませんが、自分の信念を貫き通せることに大きなやりがいを感じています。',
      website: 'https://example.com/suzuki',
      facebook: 'https://facebook.com/suzuki',
      linkedin: 'https://linkedin.com/in/suzuki',
      careerPath: [
        { period: '2010-2015', position: 'ソフトウェアエンジニア', company: 'Google Japan' },
        { period: '2015-2018', position: 'プロダクトマネージャー', company: 'Google Japan' },
        { period: '2018-現在', position: 'CEO・創業者', company: 'テックイノベーション株式会社' }
      ],
      message: '失敗を恐れず、挑戦し続けてください。東洋英和で培った「Be a Messenger of Peace」の精神を胸に、世界を変える一歩を踏み出しましょう。'
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
      detailedJobType: '教師・教育関係',
      image: '/api/placeholder/80/80',
      description: '母校で英語教師として勤務しています。国際教育プログラムの開発にも携わり、生徒たちのグローバルな視野を育むことに力を入れています。\n\n自分が受けた素晴らしい教育を、今度は後輩たちに還元できることに喜びを感じています。',
      website: 'https://example.com/takahashi',
      careerPath: [
        { period: '2008-2010', position: '大学院生', company: '上智大学大学院' },
        { period: '2010-2015', position: '英語教師', company: '私立中高一貫校' },
        { period: '2015-現在', position: '英語教師', company: '東洋英和女学院高等部' }
      ],
      message: '教育は人を育てる尊い仕事です。母校で教えられることを誇りに思っています。在校生の皆さんの成長を楽しみにしています。'
    },
    {
      id: 6,
      name: '中村 理恵',
      graduationYear: '2012年卒',
      department: '国際社会学部',
      jobTitle: '外資系コンサルタント',
      company: 'マッキンゼー・アンド・カンパニー',
      location: '東京',
      jobType: 'コンサルティング',
      detailedJobType: 'コンサルタント',
      image: '/api/placeholder/80/80',
      description: '企業の戦略立案や組織改革をサポートするコンサルティング業務に従事しています。様々な業界のクライアントと共に、ビジネスの課題解決に取り組んでいます。\n\n論理的思考力とコミュニケーション能力が求められる仕事ですが、東洋英和での学びが大いに役立っています。',
      linkedin: 'https://linkedin.com/in/nakamura',
      careerPath: [
        { period: '2012-2014', position: 'ビジネスアナリスト', company: 'アクセンチュア' },
        { period: '2014-2018', position: 'コンサルタント', company: 'ボストン コンサルティング グループ' },
        { period: '2018-現在', position: 'シニアコンサルタント', company: 'マッキンゼー・アンド・カンパニー' }
      ],
      message: 'コンサルティングの仕事は、常に学び続けることが求められます。好奇心を持ち続け、様々なことに挑戦してください。'
    }
  ];

  const filteredAlumni = alumniData.filter(alumni => {
    const matchesSearch = searchQuery === '' || 
      alumni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alumni.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alumni.company.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesDetailedJobType = selectedDetailedJobType === '' || selectedDetailedJobType === '全て' || 
      alumni.detailedJobType === selectedDetailedJobType;
    
    const matchesJobCategory = selectedJobCategory === '' || selectedJobCategory === '全て' || 
      alumni.jobType === selectedJobCategory;
    
    return matchesSearch && matchesDetailedJobType && matchesJobCategory;
  });

  return (
    <div className="bg-off-white min-h-screen">
      <div className="px-4 py-6">
        <h1 className="text-xl font-mincho font-semibold wine-red mb-6">
          卒業生キャリア紹介
        </h1>

        {/* Career Registration Button */}
        <div className="bg-white rounded-lg card-shadow mb-6 p-4">
          <div className="text-center">
            <h2 className="text-sm font-medium text-gray-900 mb-3">
              キャリア情報登録
            </h2>
            <p className="text-xs text-gray-600 mb-4">
              あなたのキャリアを同窓生に紹介しませんか？
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="bg-[#1976D2] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1565C0] transition-colors flex items-center justify-center mx-auto space-x-2"
            >
              <Plus size={20} />
              <span>キャリアを登録する</span>
            </button>
          </div>
        </div>

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

              {/* Detailed Job Type Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  詳細な職種
                </label>
                <select
                  value={selectedDetailedJobType}
                  onChange={(e) => setSelectedDetailedJobType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wine-red focus:border-transparent"
                >
                  {detailedJobTypes.map((type) => (
                    <option key={type} value={type === '全て' ? '' : type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Job Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  職種カテゴリ
                </label>
                <select
                  value={selectedJobCategory}
                  onChange={(e) => setSelectedJobCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wine-red focus:border-transparent"
                >
                  {jobCategories.map((category) => (
                    <option key={category} value={category === '全て' ? '' : category}>
                      {category}
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
            <div
              key={alumni.id}
              className="bg-white rounded-xl card-shadow overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setSelectedAlumni(alumni)}
            >
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

      {/* Detail Modal */}
      {selectedAlumni && (
        <AlumniCareerDetailScreen
          alumni={selectedAlumni}
          onClose={() => setSelectedAlumni(null)}
        />
      )}

      {/* Career Registration Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-2xl mx-auto shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>

            {/* Form Content */}
            <div>
              <h2 className="text-lg font-mincho font-semibold text-[#1976D2] mb-4 text-center">
                キャリア情報登録フォーム
              </h2>
              <div className="bg-gray-50 rounded-lg p-2">
                <iframe 
                  src="https://keen-whale-2c2.notion.site/ebd/2826e2231c40807aa844e554e4404588" 
                  width="100%" 
                  height="500" 
                  frameBorder="0" 
                  allowFullScreen
                  className="rounded-md"
                  style={{ transform: 'scale(0.8)', transformOrigin: 'top left', width: '125%', height: '625px' }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-3 text-center">
                キャリア情報を登録された方はこちらから申請ください
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlumniCareerScreen;


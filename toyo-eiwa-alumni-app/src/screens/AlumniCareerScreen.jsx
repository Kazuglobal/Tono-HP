import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Search, ChevronDown, ChevronUp, MapPin, Building, Calendar, Plus, X, ExternalLink } from 'lucide-react';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import AlumniCareerDetailScreen from './AlumniCareerDetailScreen';


const SWIPE_THRESHOLD = 120;
const SWIPE_VELOCITY = 600;
const MotionArticle = motion.article;

const SwipeCard = ({ profile, isTop, stackPosition, stackSize, onSwipe, onOpenDetail }) => {
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
      className={`absolute inset-0 bg-white rounded-3xl p-5 shadow-sm card-shadow-hover flex flex-col gap-4 transition-shadow duration-300 ${
        isTop ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
      style={{ x, rotate, zIndex: stackSize - stackPosition }}
      data-testid="career-slide"
      data-active={isTop}
      aria-roledescription="alumni-profile"
      aria-hidden={!isTop}
      tabIndex={isTop ? 0 : -1}
    >
      <div className="relative h-48 w-full overflow-hidden rounded-2xl">
        <img src={profile.image} alt={profile.name} className="h-full w-full object-cover" />
        {profile.jobType && (
          <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-800 backdrop-blur-sm">
            {profile.jobType}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-3">
        {profile.headline && (
          <p className="text-xs font-semibold text-[#D81B60] leading-snug">{profile.headline}</p>
        )}

        <div className="space-y-1">
          <h2 className="text-lg font-mincho font-semibold text-gray-900">{profile.name}</h2>
          <p className="text-xs text-gray-500">{profile.department} {profile.graduationYear}</p>
          <p className="text-sm text-gray-700">
            <span className="font-medium">{profile.jobTitle}</span>
            {profile.company && (
              <span className="text-gray-600">
                <span className="mx-1 text-gray-400">／</span>
                {profile.company}
              </span>
            )}
          </p>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">{profile.description}</p>

        <div className="space-y-2 text-sm text-gray-600">
          {profile.location && (
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-[#1976D2]" aria-hidden="true" />
              <span>{profile.location}</span>
            </div>
          )}
          {profile.graduationYear && (
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-[#1976D2]" aria-hidden="true" />
              <span>{profile.graduationYear}</span>
            </div>
          )}
          {profile.detailedJobType && (
            <div className="flex items-center gap-2">
              <Building size={16} className="text-[#1976D2]" aria-hidden="true" />
              <span>{profile.detailedJobType}</span>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2 pt-2">
          <Button
            variant="outline"
            className="w-full font-gothic"
            onClick={onOpenDetail}
            tabIndex={isTop ? 0 : -1}
          >
            プロフィールの詳細を見る
          </Button>
          {profile.website && (
            <Button
              asChild
              variant="ghost"
              className="w-full font-gothic text-[#1976D2]"
              tabIndex={isTop ? 0 : -1}
            >
              <a href={profile.website} target="_blank" rel="noreferrer">
                Webサイトを開く
                <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
                <span className="sr-only">（外部サイトが開きます）</span>
              </a>
            </Button>
          )}
        </div>
      </div>
    </MotionArticle>
  );
};


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


const AlumniCareerScreen = () => {
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDetailedJobType, setSelectedDetailedJobType] = useState('');
  const [selectedJobCategory, setSelectedJobCategory] = useState('');
  const [selectedAlumni, setSelectedAlumni] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredAlumni = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return alumniData.filter((alumni) => {
      const matchesSearch =
        normalizedQuery === '' ||
        alumni.name.toLowerCase().includes(normalizedQuery) ||
        alumni.jobTitle.toLowerCase().includes(normalizedQuery) ||
        alumni.company.toLowerCase().includes(normalizedQuery);

      const matchesDetailedJobType =
        selectedDetailedJobType === '' ||
        selectedDetailedJobType === '全て' ||
        alumni.detailedJobType === selectedDetailedJobType;

      const matchesJobCategory =
        selectedJobCategory === '' ||
        selectedJobCategory === '全て' ||
        alumni.jobType === selectedJobCategory;

      return matchesSearch && matchesDetailedJobType && matchesJobCategory;
    });
  }, [searchQuery, selectedDetailedJobType, selectedJobCategory]);

  useEffect(() => {
    setCurrentIndex((prev) => {
      if (!filteredAlumni.length) {
        return 0;
      }
      if (prev >= filteredAlumni.length) {
        return 0;
      }
      return prev;
    });
  }, [filteredAlumni.length]);

  useEffect(() => {
    if (selectedAlumni && !filteredAlumni.some((alumni) => alumni.id === selectedAlumni.id)) {
      setSelectedAlumni(null);
    }
  }, [filteredAlumni, selectedAlumni]);

  const stackedAlumni = useMemo(() => {
    if (!filteredAlumni.length) return [];

    const stackSize = Math.min(filteredAlumni.length, 3);
    return Array.from({ length: stackSize }, (_, position) => {
      const nextIndex = (currentIndex + position) % filteredAlumni.length;
      return {
        profile: filteredAlumni[nextIndex],
        stackPosition: position,
        stackSize,
      };
    });
  }, [currentIndex, filteredAlumni]);

  const handleSwipe = useCallback((direction) => {
    if (!filteredAlumni.length) return;

    setCurrentIndex((prev) => {
      const total = filteredAlumni.length;
      if (direction > 0) {
        return (prev + 1) % total;
      }
      return (prev - 1 + total) % total;
    });
  }, [filteredAlumni]);

  const handleIndicatorClick = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  const totalAlumni = filteredAlumni.length;

  return (
    <div className="bg-off-white min-h-screen">
      <div className="px-4 py-6">
        <h1 className="text-xl font-mincho font-semibold wine-red mb-6">卒業生キャリア紹介</h1>

        <div className="bg-white rounded-lg card-shadow mb-6 p-4">
          <div className="text-center">
            <h2 className="text-sm font-medium text-gray-900 mb-3">卒業生登録</h2>
            <p className="text-xs text-gray-600 mb-4">ご自身のキャリアをご紹介ください。</p>
            <button
              onClick={() => setShowForm(true)}
              className="bg-[#1976D2] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1565C0] transition-colors flex items-center justify-center mx-auto space-x-2"
            >
              <Plus size={20} />
              <span>卒業生を登録する</span>
            </button>
          </div>
        </div>

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

          <div
            className={`transition-all duration-300 ease-in-out ${
              searchExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden`}
          >
            <div className="px-4 pb-4 space-y-4 border-t border-gray-200">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">キーワード検索</label>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="お名前・役職・企業名で検索"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wine-red focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">詳細な職種</label>
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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">業種カテゴリ</label>
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

        <div className="mb-4">
          <p className="text-sm text-gray-600">
            {totalAlumni}件の卒業生プロフィールが見つかりました
          </p>
        </div>

        {totalAlumni > 0 ? (
          <div className="flex flex-col items-center">
            <div className="relative mx-auto h-[640px] w-full max-w-xl">
              {stackedAlumni.map(({ profile, stackPosition, stackSize }) => (
                <SwipeCard
                  key={profile.id}
                  profile={profile}
                  isTop={stackPosition === 0}
                  stackPosition={stackPosition}
                  stackSize={stackSize}
                  onSwipe={handleSwipe}
                  onOpenDetail={() => setSelectedAlumni(profile)}
                />
              ))}
            </div>

            <div className="mt-4 flex justify-center gap-2">
              {filteredAlumni.map((alumni, index) => (
                <button
                  key={alumni.id}
                  type="button"
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    currentIndex === index ? 'bg-wine-red' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => handleIndicatorClick(index)}
                  aria-label={`${alumni.name}のプロフィールに移動`}
                  data-active={currentIndex === index}
                  data-testid="career-indicator"
                />
              ))}
            </div>

            <p className="mt-2 text-xs text-gray-500">
              {currentIndex + 1}/{totalAlumni}件のプロフィールを表示しています。
            </p>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">条件に合う卒業生プロフィールは見つかりませんでした。</p>
          </div>
        )}
      </div>

      {selectedAlumni && (
        <AlumniCareerDetailScreen
          alumni={selectedAlumni}
          onClose={() => setSelectedAlumni(null)}
        />
      )}

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
              <h2 className="text-lg font-mincho font-semibold text-[#1976D2] mb-4 text-center">卒業生登録フォーム</h2>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-4">
                  卒業生登録フォームは外部サイトで開きます
                </p>
                <a
                  href="https://keen-whale-2c2.notion.site/2826e2231c40807aa844e554e4404588?pvs=105"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#1976D2] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1565C0] transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  卒業生登録フォームを開く
                </a>
              </div>
              <p className="text-xs text-gray-500 mt-3 text-center">
                卒業生登録が完了すると事務局よりご連絡いたします。
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default AlumniCareerScreen;

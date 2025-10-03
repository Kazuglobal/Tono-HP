import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Download, Eye, Calendar } from 'lucide-react';

const NewsletterArchiveScreen = ({ onNavigate }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const newsletters = [
    {
      id: 'R6dousoukaihou',
      title: '令和6年度 同窓会報',
      year: '2024年',
      issue: '第1号',
      date: '2024年3月発行',
      pages: 12,
      file: '/pdfs/R6dousoukaihou.pdf',
      description: '新年度の活動報告と今後の予定をお知らせします。'
    },
    {
      id: 'R5dousoukaihou2',
      title: '令和5年度 同窓会報',
      year: '2023年',
      issue: '第2号',
      date: '2023年9月発行',
      pages: 8,
      file: '/pdfs/R5dousoukaihou2.pdf',
      description: '夏の活動報告と秋のイベント案内を掲載。'
    },
    {
      id: 'R3dousoukaihou2',
      title: '令和3年度 同窓会報',
      year: '2021年',
      issue: '第2号',
      date: '2021年9月発行',
      pages: 6,
      file: '/pdfs/R3dousoukaihou2.pdf',
      description: 'コロナ禍での活動報告と新しい取り組みについて。'
    },
    {
      id: 'R2dousoukaihou2',
      title: '令和2年度 同窓会報',
      year: '2020年',
      issue: '第2号',
      date: '2020年9月発行',
      pages: 8,
      file: '/pdfs/R2dousoukaihou2.pdf',
      description: '新型コロナウイルス対応と活動の変化について。'
    },
    {
      id: 'R2dousoukaihou1',
      title: '令和2年度 同窓会報',
      year: '2020年',
      issue: '第1号',
      date: '2020年3月発行',
      pages: 24,
      file: '/pdfs/R2dousoukaihou1.pdf',
      description: '新年度の抱負と大規模な活動報告を掲載。'
    },
    {
      id: 'R1dousoukaihou2',
      title: '令和元年度 同窓会報',
      year: '2019年',
      issue: '第2号',
      date: '2019年9月発行',
      pages: 8,
      file: '/pdfs/R1dousoukaihou2.pdf',
      description: '令和最初の同窓会報として記念すべき内容。'
    },
    {
      id: 'h31dousoukaihou1',
      title: '平成31年度 同窓会報',
      year: '2019年',
      issue: '第1号',
      date: '2019年3月発行',
      pages: 32,
      file: '/pdfs/h31dousoukaihou1.pdf',
      description: '平成最後の同窓会報として特別編集。'
    },
    {
      id: 'h30dousoukaihou2',
      title: '平成30年度 同窓会報',
      year: '2018年',
      issue: '第2号',
      date: '2018年9月発行',
      pages: 10,
      file: '/pdfs/h30dousoukaihou2.pdf',
      description: '創立記念行事の報告を中心に構成。'
    },
    {
      id: 'h30dousoukaihou1',
      title: '平成30年度 同窓会報',
      year: '2018年',
      issue: '第1号',
      date: '2018年3月発行',
      pages: 20,
      file: '/pdfs/h30dousoukaihou1.pdf',
      description: '新体制での活動開始と今後の方針について。'
    },
    {
      id: 'h29dousoukaihou2',
      title: '平成29年度 同窓会報',
      year: '2017年',
      issue: '第2号',
      date: '2017年9月発行',
      pages: 12,
      file: '/pdfs/h29dousoukaihou2.pdf',
      description: '秋の活動報告と卒業生の近況をお伝えします。'
    }
  ];

  const itemsPerPage = 2;
  const totalPages = Math.ceil(newsletters.length / itemsPerPage);

  const handlePageChange = (direction) => {
    if (isFlipping) return;
    
    setIsFlipping(true);
    setTimeout(() => {
      if (direction === 'next' && currentPage < totalPages - 1) {
        setCurrentPage(currentPage + 1);
      } else if (direction === 'prev' && currentPage > 0) {
        setCurrentPage(currentPage - 1);
      }
      setIsFlipping(false);
    }, 300);
  };

  const getCurrentItems = () => {
    const startIndex = currentPage * itemsPerPage;
    return newsletters.slice(startIndex, startIndex + itemsPerPage);
  };

  const handleDownload = (file, title) => {
    const link = document.createElement('a');
    link.href = file;
    link.download = `${title}.pdf`;
    link.click();
  };

  return (
    <div className="bg-off-white min-h-screen">
      <div className="px-4 py-6">
        <h1 className="text-xl font-mincho font-semibold wine-red mb-6">
          過去の会報バックナンバー
        </h1>

        {/* 統計情報 */}
        <div className="bg-white rounded-lg p-4 card-shadow mb-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold wine-red">{newsletters.length}</div>
              <div className="text-sm text-gray-600">総発行数</div>
            </div>
            <div>
              <div className="text-2xl font-bold wine-red">6</div>
              <div className="text-sm text-gray-600">発行年数</div>
            </div>
            <div>
              <div className="text-2xl font-bold wine-red">年2回</div>
              <div className="text-sm text-gray-600">発行頻度</div>
            </div>
          </div>
        </div>

        {/* ページめくりコントロール */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => handlePageChange('prev')}
            disabled={currentPage === 0 || isFlipping}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
              currentPage === 0 || isFlipping
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-wine-red text-white hover:bg-wine-red/90'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>前のページ</span>
          </button>

          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">
              {currentPage + 1} / {totalPages}
            </span>
          </div>

          <button
            onClick={() => handlePageChange('next')}
            disabled={currentPage === totalPages - 1 || isFlipping}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
              currentPage === totalPages - 1 || isFlipping
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-wine-red text-white hover:bg-wine-red/90'
            }`}
          >
            <span>次のページ</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* 会報一覧 - ページめくりアニメーション */}
        <div className="relative">
          <div 
            className={`transition-all duration-300 ${
              isFlipping ? 'transform scale-95 opacity-50' : 'transform scale-100 opacity-100'
            }`}
          >
            <div className="space-y-4">
              {getCurrentItems().map((newsletter, index) => (
                <div 
                  key={newsletter.id} 
                  className={`bg-white rounded-lg p-6 card-shadow transform transition-all duration-500 ${
                    isFlipping ? 'rotate-y-180' : 'rotate-y-0'
                  }`}
                  style={{
                    transformStyle: 'preserve-3d',
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar className="w-4 h-4 text-wine-red" />
                        <span className="text-sm text-wine-red font-medium">{newsletter.date}</span>
                      </div>
                      <h3 className="text-lg font-mincho font-semibold text-gray-900 mb-1">
                        {newsletter.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {newsletter.issue} • {newsletter.pages}ページ
                      </p>
                      <p className="text-sm text-gray-700">
                        {newsletter.description}
                      </p>
                    </div>
                    <div className="flex flex-col space-y-2 ml-4">
                      <button
                        onClick={() => window.open(newsletter.file, '_blank')}
                        className="flex items-center space-x-2 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
                      >
                        <Eye className="w-4 h-4" />
                        <span>閲覧</span>
                      </button>
                      <button
                        onClick={() => handleDownload(newsletter.file, newsletter.title)}
                        className="flex items-center space-x-2 px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm"
                      >
                        <Download className="w-4 h-4" />
                        <span>DL</span>
                      </button>
                    </div>
                  </div>
                  
                  {/* プレビューエリア */}
                  <div className="border-t pt-4">
                    <div className="bg-gray-100 rounded-lg p-4 text-center">
                      <div className="text-gray-500 mb-2">
                        📄 PDF プレビュー
                      </div>
                      <p className="text-xs text-gray-600">
                        クリックして会報を閲覧・ダウンロードできます
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ページインジケーター */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isFlipping) {
                  setIsFlipping(true);
                  setTimeout(() => {
                    setCurrentPage(index);
                    setIsFlipping(false);
                  }, 300);
                }
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentPage
                  ? 'bg-wine-red'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* 会報について */}
        <div className="mt-8 bg-wine-red text-white rounded-lg p-6">
          <h2 className="text-lg font-mincho font-semibold mb-3">
            同窓会報について
          </h2>
          <div className="space-y-2 text-sm">
            <p>• 年2回（3月・9月）定期発行</p>
            <p>• 同窓生の近況や学校の様子をお伝え</p>
            <p>• 各種イベントの報告と予定をご案内</p>
            <p>• 卒業生の活躍や功績を紹介</p>
          </div>
          <button 
            onClick={() => onNavigate('contact')}
            className="mt-4 bg-white text-wine-red px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            会報に関するお問い合わせ
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterArchiveScreen;


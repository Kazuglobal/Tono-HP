import React from 'react';
import { MapPin, Building, Calendar, Globe, Facebook, Linkedin, ArrowUpRight } from 'lucide-react';

const AlumniCareerDetailScreen = ({ alumni, onClose }) => {
  const handleSocialClick = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 py-6">
        <div className="bg-white rounded-lg shadow-xl max-w-2xl mx-auto">
          {/* Header Image */}
          <div className="h-48 w-full bg-gray-200 overflow-hidden rounded-t-lg">
            <img
              src={alumni.image}
              alt={alumni.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Headline */}
            {alumni.headline && (
              <div className="text-lg font-bold text-[#D81B60] mb-3">
                {alumni.headline}
              </div>
            )}

            {/* Name and Basic Info */}
            <h2 className="text-2xl font-mincho font-bold text-gray-900 mb-2">
              {alumni.name}
            </h2>
            <div className="text-sm text-gray-600 mb-4">
              {alumni.department} {alumni.graduationYear}
            </div>

            {/* Current Position */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="flex items-start mb-2">
                <Building size={20} className="text-[#1976D2] mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900">{alumni.jobTitle}</div>
                  <div className="text-gray-700">{alumni.company}</div>
                </div>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin size={18} className="text-[#1976D2] mr-2" />
                <span>{alumni.location}</span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">プロフィール</h3>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {alumni.description}
              </p>
            </div>

            {/* Career Path (if available) */}
            {alumni.careerPath && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">キャリアパス</h3>
                <div className="space-y-3">
                  {alumni.careerPath.map((career, index) => (
                    <div key={index} className="flex items-start">
                      <Calendar size={18} className="text-[#1976D2] mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-gray-600">{career.period}</div>
                        <div className="text-gray-900">{career.position}</div>
                        <div className="text-gray-700">{career.company}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Message (if available) */}
            {alumni.message && (
              <div className="mb-6 bg-[#FFF8E1] rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">在校生へのメッセージ</h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {alumni.message}
                </p>
              </div>
            )}

            {/* SNS Links */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">SNS・リンク</h3>
              <div className="flex flex-wrap gap-3">
                {alumni.website && (
                  <button
                    onClick={() => handleSocialClick(alumni.website)}
                    className="flex items-center px-4 py-2 bg-[#1976D2] text-white rounded-lg hover:bg-[#1565C0] transition-colors"
                  >
                    <Globe size={18} className="mr-2" />
                    <span>Website</span>
                    <ArrowUpRight size={16} className="ml-1" />
                  </button>
                )}
                {alumni.facebook && (
                  <button
                    onClick={() => handleSocialClick(alumni.facebook)}
                    className="flex items-center px-4 py-2 bg-[#1877F2] text-white rounded-lg hover:bg-[#166FE5] transition-colors"
                  >
                    <Facebook size={18} className="mr-2" />
                    <span>Facebook</span>
                    <ArrowUpRight size={16} className="ml-1" />
                  </button>
                )}
                {alumni.linkedin && (
                  <button
                    onClick={() => handleSocialClick(alumni.linkedin)}
                    className="flex items-center px-4 py-2 bg-[#0A66C2] text-white rounded-lg hover:bg-[#004182] transition-colors"
                  >
                    <Linkedin size={18} className="mr-2" />
                    <span>LinkedIn</span>
                    <ArrowUpRight size={16} className="ml-1" />
                  </button>
                )}
              </div>
              {!alumni.website && !alumni.facebook && !alumni.linkedin && (
                <p className="text-gray-500 text-sm">SNS情報は登録されていません</p>
              )}
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-full py-3 bg-[#D81B60] text-white rounded-lg font-semibold hover:bg-[#C2185B] transition-colors"
            >
              閉じる
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniCareerDetailScreen;

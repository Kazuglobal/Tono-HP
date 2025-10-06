import React, { useState } from 'react';
import { Heart, CreditCard, Building, Phone, Mail, ExternalLink } from 'lucide-react';

const DonationScreen = () => {
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');

  const donationAmounts = [
    { value: '1000', label: '1,000円' },
    { value: '3000', label: '3,000円' },
    { value: '5000', label: '5,000円' },
    { value: '10000', label: '10,000円' },
    { value: '30000', label: '30,000円' },
    { value: 'custom', label: 'その他の金額' }
  ];

  const donationPurposes = [
    {
      title: '教育振興基金',
      description: '学生の教育環境向上、奨学金制度の充実を支援します。',
      icon: '📚'
    },
    {
      title: '施設整備基金',
      description: '校舎・設備の改修、新しい学習環境の整備を支援します。',
      icon: '🏛️'
    },
    {
      title: '国際交流基金',
      description: '海外研修プログラム、留学生支援を通じた国際教育を支援します。',
      icon: '🌍'
    },
    {
      title: '同窓会活動基金',
      description: '同窓会イベント、卒業生ネットワーク活動を支援します。',
      icon: '🤝'
    }
  ];

  const handleDonationClick = () => {
    // In a real app, this would redirect to a secure payment gateway
    alert('寄付手続きページに移動します。（実装予定）');
  };

  return (
    <div className="bg-off-white min-h-screen">
      <div className="px-4 py-6">
        <h1 className="text-xl font-mincho font-semibold wine-red mb-6">
          寄付のお願い
        </h1>

        {/* Introduction */}
        <div className="bg-white rounded-lg p-4 card-shadow mb-6">
          <div className="flex items-center mb-4">
            <Heart size={24} className="text-[#1976D2] mr-3" />
            <h2 className="text-lg font-mincho font-semibold text-gray-900">
              岩手県立遠野高等学校同窓会への寄付
            </h2>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            岩手県立遠野高等学校同窓会は、創立以来多くの卒業生を輩出し、地域社会の発展に貢献してまいりました。
            皆様からのご寄付は、母校の発展と同窓生の絆を深める活動に活用させていただきます。
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            温かいご支援を心よりお願い申し上げます。
          </p>
        </div>

        {/* Donation Purposes */}
        <div className="mb-6">
          <h3 className="text-lg font-mincho font-semibold wine-red mb-4">
            寄付の使途
          </h3>
          <div className="space-y-3">
            {donationPurposes.map((purpose, index) => (
              <div key={index} className="bg-white rounded-lg p-4 card-shadow">
                <div className="flex items-start">
                  <span className="text-2xl mr-3 flex-shrink-0">{purpose.icon}</span>
                  <div>
                    <h4 className="font-gothic font-semibold text-gray-900 mb-2">
                      {purpose.title}
                    </h4>
                    <p className="text-sm text-gray-700">
                      {purpose.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Donation Amount Selection */}
        <div className="bg-white rounded-lg p-4 card-shadow mb-6">
          <h3 className="text-lg font-mincho font-semibold wine-red mb-4">
            寄付金額の選択
          </h3>
          
          <div className="grid grid-cols-2 gap-3 mb-4">
            {donationAmounts.map((amount) => (
              <button
                key={amount.value}
                onClick={() => setSelectedAmount(amount.value)}
                className={`p-3 rounded-lg border-2 transition-colors ${
                  selectedAmount === amount.value
                    ? 'border-wine-red bg-wine-red/10 text-wine-red'
                    : 'border-gray-200 hover:border-wine-red/50'
                }`}
              >
                <span className="font-medium">{amount.label}</span>
              </button>
            ))}
          </div>

          {selectedAmount === 'custom' && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                寄付金額を入力してください
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder="金額を入力"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wine-red focus:border-transparent"
                />
                <span className="absolute right-3 top-2 text-gray-500">円</span>
              </div>
            </div>
          )}

          <button
            onClick={handleDonationClick}
            disabled={!selectedAmount}
            className={`w-full py-3 rounded-lg font-medium transition-colors ${
              selectedAmount
                ? 'bg-wine-red text-white hover:bg-wine-red/90'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <CreditCard size={20} className="inline mr-2" />
            寄付手続きに進む
          </button>
        </div>

        {/* Payment Methods */}
        <div className="bg-white rounded-lg p-4 card-shadow mb-6">
          <h3 className="text-lg font-mincho font-semibold wine-red mb-4">
            お支払い方法
          </h3>
          <div className="space-y-3">
            <div className="flex items-center p-3 border border-gray-200 rounded-lg">
              <CreditCard size={20} className="text-wine-red mr-3" />
              <span className="text-sm">クレジットカード（Visa、MasterCard、JCB）</span>
            </div>
            <div className="flex items-center p-3 border border-gray-200 rounded-lg">
              <Building size={20} className="text-wine-red mr-3" />
              <span className="text-sm">銀行振込</span>
            </div>
          </div>
        </div>

        {/* Tax Benefits */}
        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <h3 className="text-lg font-mincho font-semibold text-blue-800 mb-3">
            税制上の優遇措置について
          </h3>
          <p className="text-sm text-blue-700 leading-relaxed mb-2">
            岩手県立遠野高等学校同窓会への寄付金は、所得税法上の寄付金控除の対象となります。
          </p>
          <p className="text-sm text-blue-700 leading-relaxed">
            確定申告の際に寄付金受領証明書をご提出いただくことで、税制上の優遇を受けることができます。
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg p-4 card-shadow">
          <h3 className="text-lg font-mincho font-semibold text-[#1976D2] mb-4">
            お問い合わせ
          </h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <Building size={16} className="text-[#1976D2] mr-3 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-gray-900">岩手県立遠野高等学校同窓会 募金事務局</p>
              </div>
            </div>
            <div className="flex items-center">
              <Phone size={16} className="text-[#1976D2] mr-3 flex-shrink-0" />
              <p className="text-sm text-gray-700">03-3400-0000</p>
            </div>
            <div className="flex items-center">
              <Mail size={16} className="text-[#1976D2] mr-3 flex-shrink-0" />
              <p className="text-sm text-gray-700">donation@toyoeiwa.ac.jp</p>
            </div>
            <div className="flex items-start">
              <ExternalLink size={16} className="text-[#1976D2] mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-gray-700">受付時間：平日 9:00～17:00</p>
                <p className="text-sm text-gray-700">（土日祝日を除く）</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationScreen;


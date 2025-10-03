import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const ContactScreen = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    graduationYear: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // フォーム送信処理（実際の実装では適切なAPIを呼び出し）
    alert('お問い合わせを受け付けました。後日ご連絡いたします。');
    setFormData({
      name: '',
      email: '',
      phone: '',
      graduationYear: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = {
    address: '〒028-0525　岩手県遠野市六日町３－１７',
    phone: '0198-62-2823',
    fax: '0198-62-2805',
    email: 'tono-alumni@example.com',
    hours: '平日 9:00-17:00（土日祝日除く）'
  };

  const inquiryTypes = [
    '同窓会活動について',
    '会報・バックナンバーについて',
    '進路支援について',
    '部活動支援について',
    '寄付・支援について',
    'イベント・懇親会について',
    'その他'
  ];

  return (
    <div className="bg-off-white min-h-screen">
      <div className="px-4 py-6">
        <h1 className="text-xl font-mincho font-semibold wine-red mb-6">
          お問い合わせ
        </h1>

        {/* 連絡先情報 */}
        <section className="mb-8">
          <h2 className="text-lg font-mincho font-medium wine-red mb-4">連絡先情報</h2>
          <div className="bg-white rounded-lg p-6 card-shadow">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-wine-red mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 mb-1">住所</p>
                  <p className="text-sm text-gray-600">{contactInfo.address}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-wine-red mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 mb-1">電話番号</p>
                  <p className="text-sm text-gray-600">
                    <a href={`tel:${contactInfo.phone}`} className="hover:text-wine-red">
                      {contactInfo.phone}
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-wine-red mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 mb-1">FAX</p>
                  <p className="text-sm text-gray-600">{contactInfo.fax}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-wine-red mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 mb-1">受付時間</p>
                  <p className="text-sm text-gray-600">{contactInfo.hours}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* お問い合わせフォーム */}
        <section className="mb-8">
          <h2 className="text-lg font-mincho font-medium wine-red mb-4 flex items-center">
            <MessageCircle className="w-5 h-5 mr-2" />
            お問い合わせフォーム
          </h2>
          <div className="bg-white rounded-lg p-6 card-shadow">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wine-red focus:border-transparent"
                    placeholder="山田 太郎"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    卒業年度
                  </label>
                  <input
                    type="text"
                    name="graduationYear"
                    value={formData.graduationYear}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wine-red focus:border-transparent"
                    placeholder="平成○年度 / 令和○年度"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wine-red focus:border-transparent"
                    placeholder="example@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    電話番号
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wine-red focus:border-transparent"
                    placeholder="090-1234-5678"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  お問い合わせ種別 <span className="text-red-500">*</span>
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wine-red focus:border-transparent"
                >
                  <option value="">選択してください</option>
                  {inquiryTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wine-red focus:border-transparent resize-none"
                  placeholder="お問い合わせ内容を詳しくご記入ください..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-wine-red text-white py-3 px-6 rounded-lg font-medium hover:bg-wine-red/90 transition-colors flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>送信する</span>
              </button>
            </form>
          </div>
        </section>

        {/* よくある質問 */}
        <section>
          <h2 className="text-lg font-mincho font-medium wine-red mb-4">よくある質問</h2>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-4 card-shadow">
              <h3 className="font-medium text-gray-900 mb-2">Q. 同窓会の入会手続きはどうすればよいですか？</h3>
              <p className="text-sm text-gray-600">A. 卒業と同時に自動的に同窓会員となります。特別な手続きは不要です。</p>
            </div>
            
            <div className="bg-white rounded-lg p-4 card-shadow">
              <h3 className="font-medium text-gray-900 mb-2">Q. 住所変更の連絡はどこにすればよいですか？</h3>
              <p className="text-sm text-gray-600">A. 上記の連絡先まで電話またはこのフォームからご連絡ください。</p>
            </div>
            
            <div className="bg-white rounded-lg p-4 card-shadow">
              <h3 className="font-medium text-gray-900 mb-2">Q. 会報が届かなくなりました。</h3>
              <p className="text-sm text-gray-600">A. 住所変更の可能性があります。最新の住所をお知らせください。</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactScreen;


import React from 'react';
import { Mail, ExternalLink, User, Calendar, MapPin, Clock } from 'lucide-react';
import chairmanPhotoImg from '../assets/chairman-photo.png';

const NewsDetailScreen = ({ newsItem, onClose }) => {
  if (!newsItem) return null;

  // 会長挨拶の内容
  const chairmanMessage = {
    title: '同窓会会長挨拶',
    name: '新田 光志',
    position: '同窓会長',
    content: `春の訪れが待ち遠しい頃となりましたが、全国の遠野高校同窓会会員の皆様におかれましては、お元気でご活躍のこととお慶び申し上げます。

日頃は、同窓会活動ならびに本校在校生支援に向けて物心両面にわたり多大なるご協力を頂いております事に心より御礼申し上げます。

同窓会活動の柱である総会におきましては盛岡支部、遠野、首都圏同窓会の３地区で総会や集いが行われ、各地区の同窓生の皆様との交流を深めたことや、母校への熱いエールを頂戴しましたことに深く感謝申し上げます。

さて、本年度の在校生の活躍ぶりは健在で、全国高校サッカー選手権の全国大会出場は惜しくも逃したものの次回に繋ぐ手応えを選手諸君は感じ、必ずや再燃してくれると期待を寄せているところです。進路面におきましても、いわゆる難関と言われる大学への合格を果たすなど、今の時代に即した受験スタイルに順応し、夢を実現する後輩達の姿は輝かしく映ります。

本年度の同窓会としては、定期的に更新される同窓会名簿の新版発行の作業が進められております。しかしながら、個人情報の取扱が方々で問題になるなど、発行そのものが困難な時代となってきました。

本同窓会も個々人の考え方が多様化しており年々総会等の参加者も少なくなっているのが実情です。名簿発刊含めこれからの活動のあり方を検討しながら事業を推進していきたいと思います。

皆様のご健勝とますますのご活躍を祈りつつ、これからも変わらぬ同窓会と在校生への声援を宜しくお願い申し上げます。`
  };

  // サッカー部主将メッセージの内容
  const soccerCaptainMessage = {
    title: '「感謝を力に変えて全力で。」サッカー部 県総体連覇',
    name: '馬場大瀬',
    position: 'サッカー部主将',
    content: `日頃より、遠野高校サッカー部を応援して頂いている皆様、誠にありがとうございます。

私たちは先日行われた岩手県高校総体で優勝しインターハイ出場を決め、その後行われた東北選手権でも優勝することができました。どちらも昨年に引き続き2連覇という結果を残せたこと、嬉しく思います。特に、東北選手権は本校史上初の連覇ということで、伝統ある遠野高校サッカー部の歴史に新たなページを刻めたことを誇りに思います。

ただ、この結果に満足することなくもっと上を目指して精進しなければいけないと感じています。私たちは近年、全国大会の舞台で勝てていません。昨年度も全国大会を二度経験しながらも一勝もすることができませんでした。今年は「昨年の自分を超え」を一つの目標とし、「一戦必勝」で一つずつ勝ち進められるようにがんばります。

私自身、小さい頃から遠野高校サッカー部の全国大会で戦う姿を見て、憧れを抱き、元気をもらっていたことを覚えています。今度は自分たちが全国で勝ち続ける姿を見せ、応援してくださる方々に元気や勇気を届けられるよう、精一杯頑張ります。全身全霊を挑みます。`
  };

  // 海外事業報告の内容
  const chattanoogaReportMessage = {
    title: '海外事業報告「チャタヌーガ研修に参加して」',
    name: '榊原 康生',
    position: '3年2組',
    content: `私は、1月5日から9日間、中高生会が派遣交流事業としてアメリカのテネシー州チャタヌーガ市に行ってきました。チャタヌーガでは、チャタヌーガスクールフォージアーツアンドサイエンス（CSAS）との学校交流、バスケットボールの試合観戦、市の散策、日本企業への訪問など、刺激的なことばかりの毎日でした。チャタヌーガでのホームステイに来てくれた友人とも再会を果たすことができ、最高の思い出となりました。

私がこの9日間で、たくさんのことを見て、耳で聞き、心で感じることでアメリカと日本の文化の違いを改めて肌で感じることができました。そして、それらを乗り越えていくことの大切さを感じました。この研修で学んだことをいかし、より視野を広げ、自国の文化をもっと学び、日本の「よさ」を発信できるようになりたいと思います。

最後に、私の本事業への参加のためにご理解とご協力を賜った方々に深く感謝いたします。`
  };

  // 校長挨拶の内容
  const principalMessage = {
    title: '校長挨拶',
    name: '伊藤 正則',
    position: '校長',
    content: `遠野高等学校同窓会員の皆様には、日頃から多大なるご支援を賜り心から感謝申し上げます。さて、今年度の同窓会報第１号でも述べたことですが、本校の現在の学校規模は、急速に進む少子化の影響を受け、往時の３分の１に満たないものになっております。そのような、決して他校よりも有利とはいえない教育環境の中においても、令和６年度の１年間、生徒達はよく頑張りました。

特筆すべきは、昨年度に引き続きサッカー部の活躍で、高総体県大会において、２連覇を達成しました。この勝利によって高総体県大会での優勝は29度目となりました。東北選手権でも２年連続６度目の優勝を果たしました。本校サッカー部史上、東北選手権連覇は初めての偉業でした。なお、インターハイでは、１回戦の三重高校戦を制して進出した２回戦で、今年度の全国選手権で初出場ながら３位に躍進した東海大学相模高校と対戦しました。結果は惜敗でしたが、インターハイでは念願の全国大会１勝を果たしました。さらに、プリンスリーグ東北プレーオフに出場し、昇格決定戦で八戸学院野辺地西高校を撃破し、令和７年度におけるプリンスリーグ東北への参入を決めました。プリンスリーグ昇格は４年ぶりの快挙でした。

また、今年度の進路状況についてですが、就職希望者は、民間企業からの内定や、公務員試験での合格により、自らの進む道を決定させることができました。進学では、岩手大学など国公立大学への合格や、私立大学などへの合格を果たしました。その中で特筆すべきは、難関私大の一つとして「早慶上理」と称される上智大学への合格を果たしたことです。生徒達がこのような成果を挙げることが出来ましたのも皆様の厚いご支援の賜物であります。

今春、新たに113名が卒業し同窓生に加わります。皆様には、新会員を郷友として仲間に入れて戴き、ご指導ご支援等を賜りますよう心からお願い申し上げます。

結びに、同窓会の益々のご隆盛と同窓会員各位のご健勝とご多幸をご祈念申し上げ、会報に寄せる挨拶とさせていただきます。`
  };

  // その他のイベント詳細（既存のコンテンツ）
  const eventDetails = {
    title: newsItem.title,
    date: '2024年4月20日（土）',
    time: '14:00～16:00（受付13:30～）',
    location: '岩手県立遠野高等学校',
    venue: '体育館',
    capacity: '200名',
    fee: '無料',
    deadline: '2024年4月15日（月）',
    contact: {
      department: '遠野高等学校 同窓会事務局',
      phone: '0198-62-2823',
      email: 'tono-alumni@example.com',
      hours: '平日 9:00～17:00'
    }
  };

  // コンテンツタイプを判定
  const isGreeting = newsItem.title.includes('挨拶');
  const isChairmanMessage = newsItem.title.includes('会長');
  const isPrincipalMessage = newsItem.title.includes('校長');
  const isSoccerCaptainMessage = newsItem.title.includes('サッカー部 県総体連覇');
  const isChattanoogaReport = newsItem.title.includes('チャタヌーガ研修');
  const isAlumniEvent = newsItem.title.includes('同窓会総会') || newsItem.eventDetails;

  const renderGreetingContent = () => {
    const message = isChairmanMessage ? chairmanMessage : 
                   isSoccerCaptainMessage ? soccerCaptainMessage :
                   isChattanoogaReport ? chattanoogaReportMessage :
                   principalMessage;
    
    return (
      <div className="p-4 space-y-6">
        <div>
          <h1 className="text-xl font-mincho font-bold text-gray-900 mb-6 text-center">
            ご 挨 拶
          </h1>
        </div>

        {/* Chairman Photo - only show for chairman message */}
        {isChairmanMessage && (
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-wine-red shadow-lg">
              <img
                src={chairmanPhotoImg}
                alt="同窓会会長 新田 光志"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        <div className="text-center mb-6">
          <p className="font-mincho font-semibold wine-red text-lg">
            {message.position} {message.name}
          </p>
        </div>

        <div className="prose prose-sm max-w-none">
          {message.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-sm text-gray-700 leading-relaxed mb-4 text-justify">
              {paragraph}
            </p>
          ))}
        </div>

        {/* お問い合わせ */}
        <div className="bg-gray-50 rounded-lg p-4 mt-8">
          <h3 className="font-mincho font-semibold text-wine-red mb-3">お問い合わせ</h3>
          <div className="space-y-2 text-sm">
            <p><span className="font-medium">担当：</span>{eventDetails.contact.department}</p>
            <p><span className="font-medium">電話：</span>{eventDetails.contact.phone}</p>
            <p><span className="font-medium">メール：</span>{eventDetails.contact.email}</p>
            <p><span className="font-medium">受付時間：</span>{eventDetails.contact.hours}</p>
          </div>
        </div>
      </div>
    );
  };

  const renderAlumniEventContent = () => {
    if (!newsItem.eventDetails) return null;

    return (
      <div className="p-4 space-y-6">
        {/* Event Banner */}
        {newsItem.category && (
          <div className="bg-[#1976D2] text-white px-3 py-1 rounded-md inline-block text-sm font-medium">
            {newsItem.category}
          </div>
        )}

        <div>
          <h1 className="text-xl font-mincho font-bold text-gray-900 mb-2">
            {newsItem.title}
          </h1>
          <p className="text-sm text-gray-500">{newsItem.date}</p>
        </div>

        {/* Event Image */}
        {newsItem.image && (
          <div className="rounded-lg overflow-hidden">
            <img src={newsItem.image} alt={newsItem.title} className="w-full h-48 object-cover" />
          </div>
        )}

        {/* Event Description */}
        {newsItem.eventDetails.description && (
          <div className="prose prose-sm max-w-none">
            {newsItem.eventDetails.description.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-sm text-gray-700 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        )}

        {/* Event Details */}
        <div className="bg-gray-50 rounded-lg p-4 space-y-4">
          <h3 className="font-gothic font-semibold text-[#1976D2] mb-3">開催概要</h3>
          
          <div className="space-y-3">
            <div className="flex items-start">
              <Calendar size={20} className="text-[#1976D2] mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-medium text-gray-900">日時</div>
                <div className="text-sm text-gray-700">{newsItem.eventDetails.eventDate}</div>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin size={20} className="text-[#1976D2] mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-medium text-gray-900">場所</div>
                <div className="text-sm text-gray-700">{newsItem.eventDetails.location}</div>
              </div>
            </div>

            <div className="flex items-start">
              <Clock size={20} className="text-[#1976D2] mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-medium text-gray-900">申込期限</div>
                <div className="text-sm text-gray-700">{newsItem.eventDetails.deadline}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Buttons */}
        <div className="space-y-3">
          <h3 className="font-gothic font-semibold text-[#1976D2]">お申込み</h3>
          
          <button className="w-full flex items-center justify-center space-x-2 border-2 border-[#1976D2] text-[#1976D2] px-4 py-3 rounded-lg hover:bg-[#1976D2] hover:text-white transition-colors">
            <Mail size={20} />
            <span className="font-medium">メールでのお申込み</span>
          </button>

          <button className="w-full flex items-center justify-center space-x-2 bg-[#1976D2] text-white px-4 py-3 rounded-lg hover:bg-[#1565C0] transition-colors">
            <ExternalLink size={20} />
            <span className="font-medium">Googleフォームでのお申込み</span>
          </button>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-gothic font-semibold text-[#1976D2] mb-3">お問い合わせ</h3>
          <div className="space-y-2 text-sm">
            <p><span className="font-medium">担当：</span>{eventDetails.contact.department}</p>
            <p><span className="font-medium">電話：</span>{eventDetails.contact.phone}</p>
            <p><span className="font-medium">メール：</span>{eventDetails.contact.email}</p>
            <p><span className="font-medium">受付時間：</span>{eventDetails.contact.hours}</p>
          </div>
        </div>
      </div>
    );
  };

  const renderEventContent = () => {
    return (
      <div className="p-4 space-y-6">
        <div>
          <h1 className="text-xl font-mincho font-bold text-gray-900 mb-2">
            {eventDetails.title}
          </h1>
        </div>

        {/* Event Details */}
        <div className="space-y-3">
          <div className="flex items-start">
            <span className="font-medium text-wine-red mr-2">◆</span>
            <div>
              <span className="font-medium">日時：</span>
              <span className="text-gray-700">{eventDetails.date}</span>
              <br />
              <span className="text-gray-700 ml-6">{eventDetails.time}</span>
            </div>
          </div>

          <div className="flex items-start">
            <span className="font-medium text-wine-red mr-2">◆</span>
            <div>
              <span className="font-medium">会場：</span>
              <span className="text-gray-700">{eventDetails.location}</span>
              <br />
              <span className="text-gray-700 ml-6">{eventDetails.venue}</span>
            </div>
          </div>

          <div className="flex items-start">
            <span className="font-medium text-wine-red mr-2">◆</span>
            <div>
              <span className="font-medium">定員：</span>
              <span className="text-gray-700">{eventDetails.capacity}</span>
            </div>
          </div>

          <div className="flex items-start">
            <span className="font-medium text-wine-red mr-2">◆</span>
            <div>
              <span className="font-medium">参加費：</span>
              <span className="text-gray-700">{eventDetails.fee}</span>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-mincho font-semibold text-wine-red mb-3">お問い合わせ</h3>
          <div className="space-y-2 text-sm">
            <p><span className="font-medium">担当：</span>{eventDetails.contact.department}</p>
            <p><span className="font-medium">電話：</span>{eventDetails.contact.phone}</p>
            <p><span className="font-medium">メール：</span>{eventDetails.contact.email}</p>
            <p><span className="font-medium">受付時間：</span>{eventDetails.contact.hours}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end">
      <div className="bg-white w-full max-w-md mx-auto rounded-t-lg max-h-[90vh] overflow-y-auto slide-up-enter slide-up-enter-active">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-mincho font-semibold wine-red">
              {isGreeting ? 'ご挨拶' : isAlumniEvent ? 'イベント詳細' : 'イベント詳細'}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-xl font-bold"
            >
              ×
            </button>
          </div>
        </div>

        {(isGreeting || isSoccerCaptainMessage || isChattanoogaReport) ? renderGreetingContent() : 
         isAlumniEvent ? renderAlumniEventContent() : renderEventContent()}
      </div>
    </div>
  );
};

export default NewsDetailScreen;


import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ExternalLink } from "lucide-react";
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import reunionDinnerImg from "../assets/reunion-dinner.jpg";
import graduationCapsImg from "../assets/graduation-caps.jpg";
import principalCeremonyImg from "../assets/principal-ceremony.jpg";
import schoolMeetingImg from "../assets/school-meeting.jpg";

const SWIPE_THRESHOLD = 120;
const SWIPE_VELOCITY = 600;

const MotionArticle = motion.article;

const advertisementItems = [
  {
    id: "reunion-festival",
    title: "創立120周年フェスティバル 協賛プラン",
    sponsor: "東洋英和女学院同窓会",
    category: "イベント協賛",
    image: reunionDinnerImg,
    description:
      "2025年秋に開催される創立120周年フェスティバルの協賛企業・個人を募集しています。ブース出展やパンフレット広告など、目的に合わせてお選びいただけます。",
    highlights: [
      "パンフレット広告 3万円〜（先着20枠）",
      "卒業生向け特別ブースは電源・Wi-Fi完備",
      "申込み締切：2025年5月31日（土）",
    ],
    link: "https://www.toyoeiwa.ac.jp/",
    actionLabel: "協賛プランを確認",
    detailHeading: "こんな方におすすめ",
    detailPoints: [
      "卒業生向けにサービスを広げたい企業やショップ",
      "周年イベントに合わせてプロモーションを行いたい方",
      "同窓会活動を支援したい個人・団体",
    ],
  },
  {
    id: "graduation-ring",
    title: "卒業記念リング オーダーフェア",
    sponsor: "記念品制作部",
    category: "記念グッズ",
    image: graduationCapsImg,
    description:
      "卒業生に人気のリング・ペンダントのオーダー会を開催中です。職人による刻印サービス付きで、校章やイニシャルを入れることができます。",
    highlights: [
      "同窓会会員特典：制作費10%OFF",
      "来校が難しい方にはオンライン相談を実施",
      "申込み締切：2025年3月25日（火）",
    ],
    link: "https://www.toyoeiwa.ac.jp/alumni",
    actionLabel: "リングをデザインする",
    detailHeading: "選べるカスタマイズ",
    detailPoints: [
      "ゴールド・シルバー・プラチナの3種から選択",
      "内側にメッセージを刻む無料サービス付き",
      "専用ボックスと保証書を同梱",
    ],
  },
  {
    id: "charity-concert",
    title: "港区チャリティコンサート 出演者募集",
    sponsor: "音楽委員会",
    category: "文化イベント",
    image: principalCeremonyImg,
    description:
      "毎年恒例のチャリティコンサートでは、同窓生の音楽家・グループの出演枠を設けています。クラシック・合唱・ジャズなどジャンルは問いません。",
    highlights: [
      "出演者説明会：2025年4月6日（日）オンライン",
      "会場は学院講堂、グランドピアノ常設",
      "参加費は全額チャリティとして寄付します",
    ],
    link: "https://www.toyoeiwa.ac.jp/event",
    actionLabel: "出演申込みをする",
    detailHeading: "応募条件",
    detailPoints: [
      "少なくとも1名が本校卒業生で構成されたグループ",
      "15分以内のステージ構成をご準備ください",
      "チャリティの趣旨に賛同いただける方",
    ],
  },
  {
    id: "career-seminar",
    title: "キャリアセミナー 参加企業募集",
    sponsor: "キャリアサポート室",
    category: "キャリア支援",
    image: schoolMeetingImg,
    description:
      "在校生と卒業生をつなぐキャリアセミナーでは、業界紹介やワークショップを実施いただける企業・団体を募集しています。",
    highlights: [
      "開催日：2025年6月7日（土）午後",
      "参加費無料・交通費一部補助あり",
      "定員12社（応募多数の場合は抽選）",
    ],
    link: "https://www.toyoeiwa.ac.jp/career",
    actionLabel: "説明資料を請求",
    detailHeading: "プログラム概要",
    detailPoints: [
      "卒業生によるキャリアパネルディスカッション",
      "業界別ミニセッションと相談ブース",
      "リモート参加のハイブリッド配信にも対応",
    ],
  },
];


const SwipeCard = ({ ad, isTop, stackPosition, stackSize, onSwipe }) => {
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
      transition: { type: "spring", stiffness: 320, damping: 26 },
    });
  }, [baseOpacity, baseScale, baseY, controls]);

  const handleDragEnd = async (_event, info) => {
    if (!isTop) {
      await controls.start({
        x: 0,
        rotate: 0,
        transition: { type: "spring", stiffness: 320, damping: 26 },
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
        transition: { duration: 0.24, ease: "easeIn" },
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
        transition: { type: "spring", stiffness: 320, damping: 26 },
      });
    }
  };

  return (
    <MotionArticle
      layout
      initial={{ scale: baseScale, y: baseY, opacity: baseOpacity }}
      animate={controls}
      drag={isTop ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.2}
      onDragEnd={handleDragEnd}
      className={`absolute inset-0 bg-white rounded-3xl p-4 shadow-sm card-shadow-hover flex flex-col space-y-4 transition-shadow duration-300 ${
        isTop ? "pointer-events-auto" : "pointer-events-none"
      }`}
      style={{ x, rotate, zIndex: stackSize - stackPosition }}
      data-testid="ad-slide"
      data-active={isTop}
      aria-roledescription="advertisement"
      aria-hidden={!isTop}
      tabIndex={isTop ? 0 : -1}
    >
      <div className="relative h-48 w-full overflow-hidden rounded-2xl">
        <img src={ad.image} alt={ad.title} className="h-full w-full object-cover" />
        <Badge
          variant="secondary"
          className="absolute left-3 top-3 bg-white/90 text-gray-800 backdrop-blur-sm"
        >
          {ad.category}
        </Badge>
      </div>

      <div className="flex flex-col space-y-3">
        <div className="space-y-1">
          <h2 className="text-lg font-mincho font-semibold text-gray-900">{ad.title}</h2>
          <p className="text-xs text-gray-500 font-gothic">{ad.sponsor}</p>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed font-gothic">{ad.description}</p>

        <ul className="space-y-2 text-sm text-gray-600 font-gothic">
          {ad.highlights.map((highlight, highlightIndex) => (
            <li key={highlightIndex} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-wine-red"></span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <Button asChild variant="outline" className="w-full font-gothic">
          <a href={ad.link} target="_blank" rel="noreferrer" tabIndex={isTop ? 0 : -1}>
            {ad.actionLabel}
            <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
            <span className="sr-only">（外部サイトが開きます）</span>
          </a>
        </Button>
      </div>
    </MotionArticle>
  );
};



const AdvertisementScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalAds = advertisementItems.length;

  const stackedAds = useMemo(() => {
    if (!totalAds) return [];
    const stackSize = Math.min(totalAds, 3);
    return Array.from({ length: stackSize }, (_, position) => {
      const nextIndex = (currentIndex + position) % totalAds;
      return {
        ad: advertisementItems[nextIndex],
        stackPosition: position,
        stackSize,
      };
    });
  }, [currentIndex, totalAds]);

  const handleSwipe = useCallback(
    (direction) => {
      if (!totalAds) return;
      setCurrentIndex((prev) => {
        if (direction > 0) {
          return (prev + 1) % totalAds;
        }
        return (prev - 1 + totalAds) % totalAds;
      });
    },
    [totalAds],
  );

  const handleIndicatorClick = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  const activeAd = advertisementItems[currentIndex];

  return (
    <div className="bg-off-white min-h-screen pb-24">
      <section className="px-4 pt-6 pb-4 space-y-3">
        <h1 className="text-2xl font-mincho font-semibold wine-red">広告ギャラリー</h1>
        <p className="text-sm text-gray-600 leading-relaxed">
          同窓会の皆さまに向けたおすすめのサービスやイベント情報をまとめました。左右にスワイプして次の広告をご確認いただけます。
        </p>
        <p className="text-xs text-gray-500">広告内容は随時更新予定です。</p>
      </section>

      <section className="px-2">
        <div className="relative mx-auto h-[520px] w-full max-w-xl">
          {stackedAds.map(({ ad, stackPosition, stackSize }) => (
            <SwipeCard
              key={ad.id}
              ad={ad}
              isTop={stackPosition === 0}
              stackPosition={stackPosition}
              stackSize={stackSize}
              onSwipe={handleSwipe}
            />
          ))}
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {advertisementItems.map((ad, index) => (
            <button
              key={ad.id}
              type="button"
              data-testid="ad-indicator"
              data-active={currentIndex === index}
              aria-label={`${ad.title}の広告に移動`}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                currentIndex === index ? "bg-wine-red" : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => handleIndicatorClick(index)}
            />
          ))}
        </div>
      </section>

      {activeAd && (
        <section className="px-4 mt-6" aria-live="polite">
          <div className="bg-white rounded-3xl shadow-sm p-4 space-y-3">
            <h3 className="text-lg font-mincho font-semibold text-gray-900">{activeAd.detailHeading}</h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 font-gothic">
              {activeAd.detailPoints.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </div>
  );
};
export default AdvertisementScreen;

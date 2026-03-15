import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-box">
        {/* スマホで文字がはみ出ないように調整されたタイトル */}
        <h1 className="hero-title">
          くらんの<span className="text-orange-500">おうち</span>
        </h1>
        
        {/* サブタイトル */}
        <p className="hero-subtitle">
          家族のように、大切にお預かりします
        </p>

        {/* ボタンエリア（CSS側でスマホ時は縦並び、PC時は横並びにする） */}
        <div className="hero-buttons">
          <Link href="#about" className="btn-round btn-white">
            詳しく見る
          </Link>
          <Link href="#contact" className="btn-round btn-orange">
            予約・相談 (Insta)
          </Link>
        </div>
      </div>
    </section>
  );
}
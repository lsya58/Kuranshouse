export default function Pricing() {
  const plans = [
    { size: "小型犬 (10kgまで)", day: "2,500", night: "4,000", icon: "🐶" },
    { size: "中型犬 (25kgまで)", day: "3,000", night: "5,000", icon: "🐕" },
    { size: "大型犬 (40kgまで)", day: "3,500", night: "6,000", icon: "🦮" },
  ];

  return (
    <section id="pricing" className="pricing-section">
      <div className="container-inner">
        <h2 className="section-title">料金について</h2>
        
        {/* スマホで1列、PCで3列になるグリッド */}
        <div className="responsive-grid">
          {plans.map((p) => (
            <div key={p.size} className="card-base">
              <div className="card-icon">{p.icon}</div>
              <h3 className="card-dog-size">{p.size}</h3>
              
              <div className="card-prices">
                <div className="price-row">
                  <span className="price-label">日帰り</span>
                  <span className="price-value">¥{p.day}</span>
                </div>
                <div className="price-row">
                  <span className="price-label">1泊</span>
                  <span className="price-value highlight">¥{p.night}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 注意事項エリア */}
        <div className="pricing-notes">
          <p className="note-title">【延長・早朝料金】</p>
          <p className="note-text">20時から8時の間は1時間ごとに¥1,000いただきます</p>
          <div className="note-sub-box">
            <p>※ キャンセル料は前日50% 当日100%頂きます。</p>
            <p>※ 詳しい料金やお預かり条件については、お気軽にお問い合わせください</p>
          </div>
        </div>
      </div>
    </section>
  );
}
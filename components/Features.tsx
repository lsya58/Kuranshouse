export default function Features() {
  const features = [
    { icon: "🏠", title: "家庭的な環境", desc: "自宅でのお預かりなので、ワンちゃんもリラックスできます" },
    { icon: "🐕", title: "少頭数制", desc: "一度に数頭までのお預かりなので、目が行き届きます" },
    { icon: "🎾", title: "お散歩・遊び", desc: "毎日のお散歩と遊びの時間を大切にしています" },
  ];

  return (
    <section id="features" className="features-section">
      <div className="container-inner">
        <h2 className="section-title">お預かりの特徴</h2>
        
        {/* Pricingと同じレスポンシブグリッドを再利用 */}
        <div className="responsive-grid">
          {features.map((f) => (
            <div key={f.title} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3 className="feature-card-title">{f.title}</h3>
              <p className="feature-card-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default function Home() {
  return (
    <main className="main-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">くらんのおうち</h1>
          <p className="hero-subtitle">家族のように、大切にお預かりします</p>
          <div className="hero-buttons">
            <a href="#about" className="btn btn-primary">詳しく見る</a>
            <a href="#contact" className="btn btn-secondary">お問い合わせ </a>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-container">
          <h2 className="section-title">くらんのおうちについて</h2>
          <div className="about-content">
            <p className="about-text">自宅でワンちゃんのお預かりをしています。</p>
            <p className="about-text">大型の施設ではなく、普段の家庭環境でリラックスして過ごしていただけます。お散歩や遊びの時間もたっぷり取って、家族のように大切にお世話させていただきます。</p>
            <p className="about-text">初めての方もお気軽にご相談ください。</p>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="features-container">
          <h2 className="section-title">お預かりの特徴</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏠</div>
              <h3 className="feature-title">家庭的な環境</h3>
              <p className="feature-description">自宅でのお預かりなので、ワンちゃんもリラックスできます</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🐕</div>
              <h3 className="feature-title">少頭数制</h3>
              <p className="feature-description">一度に数頭までのお預かりなので、目が行き届きます</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎾</div>
              <h3 className="feature-title">お散歩・遊び</h3>
              <p className="feature-description">毎日のお散歩と遊びの時間を大切にしています</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-section">
  <div className="pricing-container">
    <h2 className="section-title">料金について</h2>
    <div className="pricing-box">
      <div className="pricing-items">
        <div className="pricing-item">
          <span className="dog-size">小型犬 (10kgまで)</span>
          <div className="price-container">
            <span className="price-daytrip">¥2,500 / 日帰り</span>
            <span className="price-overnight">¥4,000 / 泊</span>
          </div>
        </div>
        <div className="pricing-item">
          <span className="dog-size">中型犬 (25kgまで)</span>
          <div className="price-container">
            <span className="price-daytrip">¥3,000 / 日帰り</span>
            <span className="price-overnight">¥5,000 / 泊</span>
          </div>
        </div>
        <div className="pricing-item">
          <span className="dog-size">大型犬 (40kgまで)</span>
          <div className="price-container">
            <span className="price-daytrip">¥3,500 / 日帰り</span>
            <span className="price-overnight">¥6,000 / 泊</span>
          </div>
        </div>
      </div>
      
      <div className="extra-charges">
        <h3 className="extra-charges-title">延長・早朝料金</h3>
        <p className="extra-charges-text">20時から8時の間は1時間ごとに¥1,000いただきます</p>
      </div>

      <p className="pricing-note">
        ※ キャンセル料は前日50% 当日100%頂きます。<br/>
        ※ 詳しい料金やお預かり条件については、お気軽にお問い合わせください
      </p>
    </div>
  </div>
</section>

      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h2 className="section-title">お問い合わせ</h2>
          <p className="contact-subtitle">ご不明な点やご質問など、お気軽にお問い合わせください</p>
          <form className="contact-form">
            <div className="form-group">
              <label className="form-label">お名前</label>
              <input type="text" className="form-input" />
            </div>
            <div className="form-group">
              <label className="form-label">メールアドレス</label>
              <input type="email" className="form-input" />
            </div>
            <div className="form-group">
              <label className="form-label">お問い合わせ内容</label>
              <textarea rows={5} className="form-textarea" />
            </div>
            <button type="submit" className="form-submit">送信する</button>
          </form>
        </div>
      </section>
    </main>
  );
}
export default function Features() {
  const features = [
    { icon: "🏠", title: "家庭的な環境", desc: "自宅でのお預かりなので、ワンちゃんもリラックスできます" },
    { icon: "🐕", title: "少頭数制", desc: "一度に数頭までのお預かりなので、目が行き届きます" },
    { icon: "🎾", title: "お散歩・遊び", desc: "毎日のお散歩と遊びの時間を大切にしています" },
  ];

  return (
    <section id="features" className="py-24 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">お預かりの特徴</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((f) => (
            <div key={f.title} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition text-center border border-orange-100">
              <div className="text-5xl mb-6">{f.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
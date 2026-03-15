export default function Pricing() {
  const plans = [
    { size: "小型犬 (10kgまで)", day: "2,500", night: "4,000" },
    { size: "中型犬 (25kgまで)", day: "3,000", night: "5,000" },
    { size: "大型犬 (40kgまで)", day: "3,500", night: "6,000" },
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">料金について</h2>
        <div className="bg-orange-50 rounded-3xl p-8 md:p-12 border border-orange-100">
          <div className="space-y-8">
            {plans.map((p) => (
              <div key={p.size} className="flex flex-col md:flex-row md:items-center justify-between border-b border-orange-200 pb-6 gap-4">
                <span className="text-xl font-bold text-gray-700">{p.size}</span>
                <div className="flex gap-6">
                  <div className="text-right">
                    <p className="text-xs text-gray-400">日帰り</p>
                    <p className="text-2xl font-bold text-orange-500">¥{p.day}</p>
                  </div>
                  <div className="text-right border-l border-orange-200 pl-6">
                    <p className="text-xs text-gray-400">1泊</p>
                    <p className="text-2xl font-bold text-orange-600">¥{p.night}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 bg-white/50 rounded-2xl text-sm text-gray-600 space-y-2">
            <p className="font-bold text-gray-800">【延長・早朝料金】</p>
            <p>20時から8時の間は1時間ごとに¥1,000いただきます。</p>
            <p className="mt-4 pt-4 border-t border-orange-200">※ キャンセル料は前日50%、当日100%頂きます。</p>
          </div>
        </div>
      </div>
    </section>
  );
}
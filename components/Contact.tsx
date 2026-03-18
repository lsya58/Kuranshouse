export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">お問い合わせ</h2>
        <p className="text-gray-600 mb-12 leading-relaxed">
          ご不明な点や空き状況の確認など、お気軽にご相談ください。<br />
          お問い合わせは、Instagramのダイレクトメッセージ（DM）にて承っております。
        </p>
        
        <div className="bg-orange-50 rounded-3xl p-10 shadow-sm border border-orange-100">
          <p className="text-orange-700 font-bold mb-6">🐾 下のボタンからインスタへ移動します 🐾</p>
          <a 
            href="https://www.instagram.com/kurannouchi?igsh=MXM0NWVtZWxqZTVjaA==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-500 text-white px-10 py-4 rounded-full text-xl font-bold hover:scale-105 transition-transform shadow-lg"
          >
            <span>InstagramでDMを送る</span>
          </a>
          <p className="mt-6 text-sm text-gray-400">
            ※24時間以内に返信いたします。
          </p>
        </div>
      </div>
    </section>
  );
}
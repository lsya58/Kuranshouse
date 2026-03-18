import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function GalleryPage() {
  // --- 📸 写真データエリア ---
  // 写真をもらったら、srcの '/images/gallery/xxx.jpg' を実際のファイル名に書き換えるだけ！
  const galleryImages = [
    { src: '/images/gallery/dog1.jpg', alt: 'ワンちゃんの様子1', caption: 'みんなでお散歩🐾' },
    { src: '/images/gallery/dog2.jpg', alt: 'ワンちゃんの様子2', caption: 'お昼寝タイム💤' },
    { src: '/images/gallery/cat1.jpg', alt: '猫ちゃんの様子1', caption: '日向ぼっこ中☀️' },
    { src: '/images/gallery/dog3.jpg', alt: 'ワンちゃんの様子3', caption: 'おもちゃで遊びました🎾' },
    { src: '/images/gallery/dog4.jpg', alt: 'ワンちゃんの様子4', caption: '今日のごはん！' },
    { src: '/images/gallery/dog5.jpg', alt: 'ワンちゃんの様子5', caption: '仲良く並んでパシャリ📸' },
  ];

  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-20">
        {/* タイトルセクション */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">お預かりの様子</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            くらんのおうちで過ごすワンちゃん・猫ちゃんたちの日常をご紹介します。
            わが家のようにリラックスした表情をご覧ください。
          </p>
        </div>

        {/* 📸 写真グリッド */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative aspect-square bg-orange-100 rounded-[32px] overflow-hidden border border-orange-200 shadow-sm hover:shadow-xl transition-all"
            >
              {/* 画像本体（srcが空だとエラーになるので、実際のファイルを入れるまでダミー画像が出るようにしてあります） */}
              <Image
                src={image.src}
                alt={image.alt}
                fill // 枠いっぱいに広げる
                className="object-cover transition-transform duration-700 group-hover:scale-110" // マウスを乗せるとズーム
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {/* ホバーした時に出るキャプション */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <p className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram 誘導エリア */}
        <div className="mt-24 text-center bg-white p-12 md:p-20 rounded-[50px] border border-orange-100 shadow-sm">
          <span className="text-orange-500 text-5xl mb-6 block">📱</span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            最新の様子はInstagramで更新中！
          </h2>
          <p className="text-gray-600 mb-10 leading-relaxed">
            ストーリーではリアルタイムなお散歩の様子や、<br className="hidden md:block" />
            可愛い寝顔などを毎日アップしています。ぜひフォローしてください🐾
          </p>
          <a 
            href="https://www.instagram.com/kurannouchi?igsh=MXM0NWVtZWxqZTVjaA==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-500 text-white px-10 py-4 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-lg"
          >
            Instagramを見に行く
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
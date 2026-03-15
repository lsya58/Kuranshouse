import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function GalleryPage() {
  // 後で本物の写真（URL）を入れるための配列
  const dummyPhotos = [1, 2, 3, 4, 5, 6];

  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">お預かりの様子</h1>
          <p className="text-gray-600">くらんのおうちで過ごすワンちゃんたちの日常をご紹介します。</p>
        </div>

        {/* 写真のグリッド表示 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyPhotos.map((item) => (
            <div 
              key={item} 
              className="group relative aspect-square bg-orange-100 rounded-[32px] overflow-hidden border border-orange-200 shadow-sm hover:shadow-xl transition-all"
            >
              {/* 写真が入る場所のプレースホルダー */}
              <div className="absolute inset-0 flex items-center justify-center text-orange-300">
                <span className="text-sm font-bold tracking-widest">PHOTO COMING SOON</span>
              </div>
              
              {/* マウスを乗せた時にふわっと出る説明（イメージ） */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white text-sm font-bold">楽しいお散歩の時間 🐾</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center bg-white p-10 rounded-[40px] border border-orange-100 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">最新の様子はInstagramでも！</h2>
          <p className="text-gray-600 mb-8">毎日のお預かりの様子をストーリーズや投稿で更新しています。</p>
          <a 
            href="https://www.instagram.com/あなたのアカウント名" 
            target="_blank" 
            className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full font-bold"
          >
            Instagramを見る
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
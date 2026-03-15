import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-orange-100">
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 tracking-tighter">
          くらんのおうち
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-10 font-medium">
          家族のように、大切にお預かりします
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="#about" className="bg-white text-orange-500 px-8 py-4 rounded-full font-bold shadow-lg hover:bg-orange-50 transition">
            詳しく見る
          </Link>
          <Link href="#contact" className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-orange-600 transition">
            お問い合わせ
          </Link>
        </div>
      </div>
    </section>
  );
}
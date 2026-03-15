export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h3 className="text-white text-2xl font-bold mb-6">くらんのおうち</h3>
        <p className="text-sm mb-8">家族のように、大切にお預かりします</p>
        <div className="flex justify-center gap-6 mb-12 text-sm">
          <a href="#about" className="hover:text-white transition">コンセプト</a>
          <a href="#features" className="hover:text-white transition">特徴</a>
          <a href="#pricing" className="hover:text-white transition">料金表</a>
        </div>
        <p className="text-xs text-gray-500">
          &copy; 2026 くらんのおうち All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
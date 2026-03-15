"use client"; // メニューの開閉（useState）を使うのでこれが必要

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'コンセプト', href: '#about' },
    { name: '特徴', href: '#features' },
    { name: '料金表', href: '#pricing' },
    { name: 'お預かりの様子', href: '/gallery' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* ロゴエリア */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-orange-600 tracking-tight flex items-center gap-2">
              <span className="text-3xl">🐾</span>
              <span>くらんのおうち</span>
            </Link>
          </div>

          {/* デスクトップ用メニュー */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className="text-gray-600 hover:text-orange-500 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link 
              href="#contact" 
              className="bg-orange-500 text-white px-6 py-2.5 rounded-full font-bold hover:bg-orange-600 transition-all shadow-md shadow-orange-200 active:scale-95"
            >
              予約・相談 (Insta)
            </Link>
          </nav>

          {/* スマホ用メニューボタン */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-orange-500 focus:outline-none"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* スマホ用ドロップダウンメニュー */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-orange-100 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded-md"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 text-base font-bold text-orange-500 border-t border-orange-50"
            >
              予約・相談 (Instagram DM)
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
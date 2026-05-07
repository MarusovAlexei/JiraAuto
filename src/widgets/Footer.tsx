'use client';

import React from 'react';
import { Container } from '@/shared/ui/Container';
import { Button } from '@/shared/ui/Button';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-[#4C1D95] via-[#5B21B6] to-[#6D28D9] text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      
      <Container maxWidth="2xl" className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 px-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#7C3AED] font-bold text-2xl shadow-xl">
              МОЯ7Я
            </div>
            <div>
              <div className="font-bold text-base">ЦЕНТР</div>
              <div className="text-sm opacity-90">МЕЖДУНАРОДНОЙ НЕДВИЖИМОСТИ</div>
            </div>
          </div>

          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4">
            <div className="text-sm opacity-90 mb-1">График работы:</div>
            <div className="font-bold text-lg">09.00-21.00 ежедневно</div>
          </div>

          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 text-center lg:text-left">
            <span className="text-3xl flex-shrink-0">📍</span>
            <div>
              <div className="text-sm opacity-90">Адрес:</div>
              <div className="font-bold text-lg">Пр-т Независимости, 95/1</div>
            </div>
          </div>

          <div className="text-center">
            <Button variant="accent" size="md" className="mb-3">
              Бесплатная консультация
            </Button>
            <a
              href="tel:+375333500903"
              className="block text-xl font-bold hover:text-yellow-300 transition-colors"
            >
              +375 (33) 350-09-03
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm opacity-75">
          © 2026 Центр международной недвижимости МОЯ7Я. Все права защищены.
        </div>
      </Container>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] text-white rounded-2xl shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 z-50 text-2xl font-bold"
        aria-label="Наверх"
      >
        ↑
      </button>
    </footer>
  );
};

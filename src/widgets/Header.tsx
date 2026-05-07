'use client';

import React from 'react';
import { Container } from '@/shared/ui/Container';
import { Button } from '@/shared/ui/Button';

export const Header: React.FC = () => {
  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between py-5 gap-6">
          {/* Логотип */}
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
              МОЯ7Я
            </div>
            <div>
              <div className="font-bold text-sm text-[#111827]">ЦЕНТР</div>
              <div className="text-xs text-[#6B7280]">МЕЖДУНАРОДНОЙ НЕДВИЖИМОСТИ</div>
            </div>
          </div>

          {/* График работы */}
          <div className="text-center lg:text-left">
            <div className="text-[#6B7280] text-xs">График работы:</div>
            <div className="text-[#111827] font-semibold">09.00-21.00 ежедневно</div>
          </div>

          {/* Награда */}
          <div className="flex items-center gap-3 bg-gradient-to-r from-yellow-50 to-yellow-100 px-4 py-3 rounded-xl border border-yellow-200">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
              🏆
            </div>
            <div className="text-xs max-w-[200px]">
              <span className="font-bold text-yellow-900 block">Победитель премии Народная марка 2026</span>
              <span className="text-yellow-700">в номинации «Агентство недвижимости»</span>
            </div>
          </div>

          {/* Контакты и CTA */}
          <div className="flex flex-col items-center lg:items-end gap-2">
            <Button variant="accent" size="md">
              Бесплатная консультация
            </Button>
            <a href="tel:+375333500903" className="text-lg font-bold text-[#111827] hover:text-[#7C3AED] transition-colors">
              +375 (33) 350-09-03
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
};

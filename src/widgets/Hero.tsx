'use client';

import React from 'react';
import { Container } from '@/shared/ui/Container';
import { Button } from '@/shared/ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[700px] bg-cover bg-center flex items-center" style={{
      backgroundImage: 'linear-gradient(135deg, rgba(124, 58, 237, 0.9), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920")',
    }}>
      <Container className="py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-12 leading-tight">
            МЫ ГАРАНТИРУЕМ БЫСТРУЮ ПРОДАЖУ КВАРТИРЫ
          </h1>

          <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl flex-1 max-w-md">
              <span className="text-7xl font-extrabold bg-gradient-to-r from-[#EF4444] to-[#DC2626] bg-clip-text text-transparent">90%</span>
              <p className="text-white text-lg mt-4 leading-relaxed">
                объектов находят покупателя всего за <span className="font-bold text-yellow-300">1,5 месяца</span>,
                причём большинство дороже оценочной стоимости!
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl flex-1 max-w-md">
              <div>
                <span className="text-3xl font-bold text-[#EF4444]">Более</span>
                <br />
                <span className="text-7xl font-extrabold bg-gradient-to-r from-[#EF4444] to-[#DC2626] bg-clip-text text-transparent">10 000</span>
              </div>
              <p className="text-white text-lg mt-4 leading-relaxed">
                <span className="font-bold text-yellow-300">семей уже осуществили</span> с нами мечту о новом доме
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button variant="primary" size="lg">
              Рассчитать стоимость
            </Button>
            <Button variant="accent" size="lg">
              Получить консультацию
            </Button>
          </div>

          <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md rounded-2xl p-8 inline-block border border-white/30 shadow-2xl">
            <p className="text-white text-xl mb-3 font-semibold">
              Наш клиент продал свою квартиру
            </p>
            <p className="text-white text-3xl font-extrabold mb-6 bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
              на 24% дороже рыночной стоимости!
            </p>
            <Button variant="accent" size="md" icon={<span className="text-2xl">📹</span>}>
              Смотреть видеоотзыв
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

import React from 'react';
import { Container } from '@/shared/ui/Container';

export const Map: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-4">
            Где мы{' '}
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#EC4899] bg-clip-text text-transparent">
              находимся
            </span>
          </h2>
          <p className="text-lg text-[#6B7280]">
            Пр-т Независимости, 95/1 • График работы: 09.00-21.00 ежедневно
          </p>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200 max-w-6xl mx-auto">
          <div className="aspect-video bg-gray-200 relative">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=27.561831,53.902284&z=15"
              width="100%"
              height="100%"
              frameBorder="0"
              className="w-full h-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

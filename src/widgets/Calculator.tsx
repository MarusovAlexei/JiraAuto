'use client';

import React, { useState } from 'react';
import { Container } from '@/shared/ui/Container';
import { Card } from '@/shared/ui/Card';
import { Button } from '@/shared/ui/Button';

const apartmentTypes = [
  { id: 1, name: 'Без отделки', image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=300' },
  { id: 2, name: 'Требует ремонта', image: 'https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=300' },
  { id: 3, name: 'Косметический', image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=300' },
  { id: 4, name: 'Дизайнерский', image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=300' },
  { id: 5, name: 'Евроремонт', image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=300' },
  { id: 6, name: 'Современный', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=300' },
];

export const Calculator: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-6">
            Узнайте стоимость квартиры{' '}
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#EC4899] bg-clip-text text-transparent">
              БЕСПЛАТНО!
            </span>
          </h2>
          <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
            Ответьте на несколько простых вопросов и получите информацию по стоимости Вашей квартиры
          </p>
        </div>

        <Card className="max-w-6xl mx-auto shadow-2xl">
          <h3 className="text-3xl font-bold mb-8 text-center">Состояние квартиры:</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
            {apartmentTypes.map((type) => (
              <div
                key={type.id}
                onClick={() => setSelected(type.id)}
                className={`cursor-pointer rounded-2xl overflow-hidden border-4 transition-all duration-300 ${
                  selected === type.id
                    ? 'border-[#7C3AED] shadow-2xl scale-105 ring-4 ring-purple-200'
                    : 'border-gray-200 hover:border-[#7C3AED] hover:shadow-xl'
                }`}
              >
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <img
                    src={type.image}
                    alt={type.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  {selected === type.id && (
                    <div className="absolute top-3 right-3 bg-[#7C3AED] text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
                      ✓
                    </div>
                  )}
                </div>
                <div className="p-4 bg-white text-center font-semibold text-lg">
                  {type.name}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center pt-6 border-t border-gray-200">
            <div className="flex items-center gap-3">
              <span className="text-[#9CA3AF] font-medium">Шаг 1 из 6</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5, 6].map((step) => (
                  <div
                    key={step}
                    className={`h-2 w-12 rounded-full transition-all ${
                      step === 1 ? 'bg-[#7C3AED]' : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="primary" size="md" className="opacity-50">
                ← Назад
              </Button>
              <Button variant="primary" size="md">
                Далее →
              </Button>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
};

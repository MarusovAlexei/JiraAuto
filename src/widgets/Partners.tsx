import React from 'react';
import { Container } from '@/shared/ui/Container';
import { Card } from '@/shared/ui/Card';

const partners = [
  { name: 'MUROWEI', discount: '40%', description: 'на первый час работы экипажа' },
  { name: 'GUTEHOUZE', discount: '30%', description: 'на натяжные потолки и мебель на заказ' },
  { name: 'SOFA CLUB', discount: '10%', description: 'на первую покупку мягкой мебели премиум-класса' },
  { name: 'ORBITA', discount: '20%', description: 'при покупке от 2х и более окон ПВХ' },
];

export const Partners: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-4">
            Бонусы <span className="bg-gradient-to-r from-[#7C3AED] to-[#EC4899] bg-clip-text text-transparent">от наших партнеров</span>
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Эксклюзивные предложения для наших клиентов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {partners.map((partner, index) => (
            <Card key={index} hover>
              <div className="text-center">
                <div className="h-16 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-[#111827]">{partner.name}</span>
                </div>
                <div className="inline-block bg-gradient-to-r from-[#EF4444] to-[#DC2626] text-white px-6 py-3 rounded-xl mb-4 shadow-lg">
                  <div className="text-4xl font-extrabold">
                    {partner.discount}
                  </div>
                </div>
                <p className="text-sm text-[#6B7280] leading-relaxed">{partner.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

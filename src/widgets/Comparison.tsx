import React from 'react';
import { Container } from '@/shared/ui/Container';

const comparisons = [
  {
    bad: { title: 'Долго', description: 'Неэффективные поиски, неудачные показы, трудности в переговорах' },
    good: { title: 'Быстро', description: 'Приведем покупателей с помощью собственной базы и профессиональной стратегии продвижения' },
  },
  {
    bad: { title: 'Невыгодно', description: 'Риск продать квартиру по заниженной цене из-за незнания рынка' },
    good: { title: 'Выгодно', description: 'Выбор самого лучшего предложения, понимание цен и тенденций рынка' },
  },
  {
    bad: { title: 'Все на ваших плечах', description: 'Много звонков от случайных людей. Переговоры и показы займут время и силы' },
    good: { title: 'Комфортно', description: 'Фильтруем неподходящих покупателей и показываем квартиру только заинтересованным. Переговоры берем на себя' },
  },
  {
    bad: { title: 'Юридические проблемы', description: 'Сделка может сорваться — возможны проблемы с документами и мошенниками' },
    good: { title: 'Юридическая безопасность', description: 'Проверим документы, оформим сделку по закону — без рисков для вас' },
  },
];

export const Comparison: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <Container maxWidth="2xl">
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 max-w-4xl mx-auto leading-tight">
            Почему продажу квартиры{' '}
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#EC4899] bg-clip-text text-transparent">
              стоит доверить нам
            </span>
            ?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-br from-gray-600 to-gray-700 text-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-500">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="text-2xl md:text-3xl opacity-50">❌</span>
              Самостоятельно
            </h3>
            {comparisons.map((item, index) => (
              <div key={index} className="mb-6 md:mb-8 pb-6 md:pb-8 border-b border-white/20 last:border-0">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl md:text-3xl opacity-70 flex-shrink-0">✕</span>
                  <h4 className="text-xl md:text-2xl font-bold">{item.bad.title}</h4>
                </div>
                <p className="text-sm md:text-base opacity-90 leading-relaxed ml-9 md:ml-11">{item.bad.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[#EF4444] to-[#DC2626] text-white p-8 md:p-10 rounded-3xl shadow-2xl border border-red-400 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3 relative z-10">
              <span className="text-2xl md:text-3xl flex-shrink-0">✅</span>
              С Центром МОЯ7Я
            </h3>
            {comparisons.map((item, index) => (
              <div key={index} className="mb-6 md:mb-8 pb-6 md:pb-8 border-b border-white/20 last:border-0 relative z-10">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl md:text-3xl flex-shrink-0">✓</span>
                  <h4 className="text-xl md:text-2xl font-bold">{item.good.title}</h4>
                </div>
                <p className="text-sm md:text-base opacity-95 leading-relaxed ml-9 md:ml-11">{item.good.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

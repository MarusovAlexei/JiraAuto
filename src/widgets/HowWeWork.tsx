import React from 'react';
import { Container } from '@/shared/ui/Container';

const steps = [
  {
    number: 1,
    title: 'Бесплатная оценка вашей квартиры',
    description: '90% собственников ошибаются с ценой и теряют покупателей. Доверьтесь нам — определим точную стоимость, чтобы сделка прошла быстро и выгодно',
  },
  {
    number: 2,
    title: 'Подготовка к продаже',
    description: 'Наши специалисты помогут вам грамотно подчеркнуть достоинства вашей квартиры, чтобы максимально повысить её ценность и привлечь больше покупателей',
  },
  {
    number: 3,
    title: 'Рекламная кампания',
    description: 'Профессиональная фотосессия, размещение на лучших локальных и международных интернет-порталах, продвижение в соцсетях, использование наружной рекламы — всё для повышения цены вашей квартиры',
  },
  {
    number: 4,
    title: 'Организация показов',
    description: 'Профессионально организуем показ квартиры: составим план показов, избавим вас от нецелевых контактов и преподнесем объект с лучшей стороны',
  },
  {
    number: 5,
    title: 'Выбор самого выгодного предложения',
    description: 'На этом этапе агент собирает и систематизирует все предложения, проводит работу по повышению стоимости и предлагает вам наиболее выгодные варианты',
  },
  {
    number: 6,
    title: 'Заключение сделки',
    description: 'Проводим переговоры с покупателями, отстаиваем вашу позицию и помогаем получить задаток. Процесс завершается заключением сделки в соответствии с законодательством',
  },
];

export const HowWeWork: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-4">
            Как мы <span className="bg-gradient-to-r from-[#7C3AED] to-[#EC4899] bg-clip-text text-transparent">работаем</span>
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Прозрачный процесс работы с обратной связью на каждом этапе
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-6xl mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-6 bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg">
                {step.number}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#111827]">{step.title}</h3>
                <p className="text-[#6B7280] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 bg-gradient-to-r from-yellow-50 to-yellow-100 p-8 rounded-2xl max-w-2xl mx-auto shadow-lg border-2 border-yellow-200">
          <div className="text-6xl animate-pulse">❗</div>
          <p className="text-2xl font-bold text-yellow-900">Обратная связь на каждом этапе!</p>
        </div>
      </Container>
    </section>
  );
};

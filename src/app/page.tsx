import { Header } from '@/widgets/Header';
import { Hero } from '@/widgets/Hero';
import { Partners } from '@/widgets/Partners';
import { Calculator } from '@/widgets/Calculator';
import { HowWeWork } from '@/widgets/HowWeWork';
import { Comparison } from '@/widgets/Comparison';
import { Map } from '@/widgets/Map';
import { Footer } from '@/widgets/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Partners />
      <Calculator />
      <HowWeWork />
      <Comparison />
      <Map />
      <Footer />
    </div>
  );
}

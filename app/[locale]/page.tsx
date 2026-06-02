import { Hero } from '@/components/Hero';
import { Works } from '@/components/Works';
import { Contact } from '@/components/Contact';
import { Services } from '@/components/Services';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Works />
      <Contact />
    </main>
  );
}

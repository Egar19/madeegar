'use client';
import { useTranslations } from 'next-intl';
import { Globe, Rocket, ShoppingBag, Code2, LucideIcon } from 'lucide-react';
import { ServiceCard } from '@/components/ServicesCard';
import Container from '@/components/Container';
import { SectionHeader } from './SectionHeader';

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Rocket,
  ShoppingBag,
  Code2,
};

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export const Services = () => {
  const t = useTranslations('services');
  const items = t.raw('items') as ServiceItem[];

  return (
    <section id='services' className='py-10 bg-accent'>
      <Container>
        <div className='flex flex-col gap-12'>
          <SectionHeader title={t('title')} subtitle={t('subtitle')} />
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {items.map((item) => (
              <ServiceCard
                key={item.title}
                icon={iconMap[item.icon]}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

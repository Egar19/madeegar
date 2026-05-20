'use client';

import { useTranslations } from 'next-intl';

import {
  ArrowRight,
} from 'lucide-react';

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import { Button } from '@/components/ui/button';
import Container from './Container';

export const Hero = () => {
  const t = useTranslations('hero');

  return (
    <section
      id='hero'
      className='relative overflow-hidden py-24 md:py-32'
    >
      {/* Background Blur */}
      <div className='absolute inset-0 -z-10'>
        <div className='absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl' />
      </div>

      <Container>
        <div className='flex flex-col items-center text-center'>
          {/* Greeting */}
          <p className='mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground'>
            {t('greeting')}
          </p>

          {/* Heading */}
          <h1 className='max-w-4xl text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl'>
            {t('name')}
          </h1>

          {/* Role */}
          <h2 className='mt-3 bg-linear-to-r from-primary to-primary/60 bg-clip-text text-2xl font-semibold text-transparent md:text-4xl'>
            {t('role')}
          </h2>

          {/* Description */}
          <p className='mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg'>
            {t('description')}
          </p>

          {/* CTA */}
          <div className='mt-8 flex flex-col items-center gap-3 sm:flex-row'>
            <Button
              size='lg'
              className='rounded-full px-6'
            >
              {t('cta_primary')}
              <ArrowRight className='ml-2 h-4 w-4' />
            </Button>

            <Button
              variant='outline'
              size='lg'
              className='rounded-full px-6'
            >
              {t('cta_secondary')}
              <FaWhatsapp className='ml-2 h-4 w-4' />
            </Button>
          </div>

          {/* Social */}
          <div className='mt-10 flex items-center gap-3'>
            <Button
              variant='outline'
              size='icon'
              className='rounded-full'
            >
              <FaGithub className='h-4 w-4' />
            </Button>

            <Button
              variant='outline'
              size='icon'
              className='rounded-full'
            >
              <FaLinkedin className='h-4 w-4' />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
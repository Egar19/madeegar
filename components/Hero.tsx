'use client';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import Container from './Container';
import Image from 'next/image';
import { motion } from 'motion/react';
import { TypingText } from './TypingText';

export const Hero = () => {
  const t = useTranslations('hero');

  return (
    <section id='hero' className='relative overflow-hidden py-10'>
      <div className='absolute inset-0 grid-bg opacity-40' aria-hidden />
      <div
        className='absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-background'
        aria-hidden
      />
      <Container>
        <div className='relative z-10 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-10'>
          <div className='flex flex-col items-center text-center md:items-start md:text-left gap-6'>
            <h1 className='max-w-3xl text-4xl font-bold leading-tight text-primary md:text-5xl'>
              {t('title')}
            </h1>

            <p className='max-w-xl text-base text-muted-foreground sm:text-lg md:text-xl'>
              {t('subtitle')}
            </p>

            <div className='flex flex-wrap items-center justify-center md:justify-start gap-4 mt-2'>
              <Button
                size='lg'
                className='bg-primary hover:bg-accent-hover text-accent gap-2 cursor-pointer'
                onClick={() =>
                  window.open('https://wa.me/+6281995376844', '_blank')
                }
              >
                {t('cta_primary')}
                <ArrowRight className='w-4 h-4' />
              </Button>

              <Button
                size='lg'
                variant='outline'
                className='border-border text-foreground hover:bg-card gap-2 cursor-pointer'
                onClick={() => {
                  document.getElementById('works')?.scrollIntoView({
                    behavior: 'smooth',
                  });
                }}
              >
                {t('cta_secondary')}
              </Button>
            </div>
          </div>

          <div className='flex flex-col items-center gap-4 shrink-0'>
            <div className='flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground shadow-sm'>
              <div className='flex items-center'>
                <TypingText text={t('badge')} />
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                  }}
                >
                  |
                </motion.span>
              </div>
            </div>

            <div className='relative'>
              <div className='absolute inset-0 rounded-full bg-primary/20 dark:bg-primary/30 blur-3xl' />

              <Image
                src='/photo-profile.png'
                alt='profile'
                width={250}
                height={250}
                className='relative rounded-full w-35 h-35 md:w-55 md:h-55 object-cover'
              />
            </div>

            <p className='text-sm text-muted-foreground tracking-wide text-center'>
              {t('role')}
              <span className='mx-2 text-accent'>·</span>
              {t('location')}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

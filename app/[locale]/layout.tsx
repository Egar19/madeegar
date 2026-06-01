import type { Metadata } from 'next';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { getMessages } from 'next-intl/server';
import { Poppins } from 'next/font/google';

import '../globals.css';

import ThemeProviders from '@/components/ThemeProviders';
import Navbar from '@/components/Navbar';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'My Personal Web',
  description: 'Personal website',
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${poppins.className} bg-background text-foreground`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProviders>
            <Navbar />
            {children}
          </ThemeProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
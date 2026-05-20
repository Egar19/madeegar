import type { Metadata } from 'next';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { getMessages } from 'next-intl/server';
import '../globals.css';
import ThemeProviders from '@/components/ThemeProviders';
import Navbar from '@/components/Navbar';

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
    <html lang={locale} suppressHydrationWarning >
      <body className="bg-background text-foreground">
        <NextIntlClientProvider messages={messages}>
          <ThemeProviders
          >
            <Navbar />
            {children}
          </ThemeProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

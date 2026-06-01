'use client';

import { useEffect } from 'react';
import { Languages } from 'lucide-react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';

import { Button } from '@/components/ui/button';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const nextLocale = locale === 'id' ? 'en' : 'id';

  const switchLocale = () => {
    router.replace(pathname, {
      locale: nextLocale,
    });
  };

  useEffect(() => {
    localStorage.setItem('preferred-lang', locale);
  }, [locale]);

  return (
    <Button
      variant="outline"
      size="sm"
      className="
        rounded-full
        text-xs font-medium
        gap-1.5
      "
      onClick={switchLocale}
    >
      <Languages className="h-3.5 w-3.5" />
      {locale.toUpperCase()}
    </Button>
  );
}
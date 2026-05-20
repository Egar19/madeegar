'use client';

import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { Home, User, Code2, Mail, Languages, Hexagon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ModeToggle';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

const navItems = [
  { key: 'home', sectionId: 'hero', icon: Home },
  { key: 'about', sectionId: 'about', icon: User },
  { key: 'works', sectionId: 'works', icon: Code2 },
  { key: 'contact', sectionId: 'contact', icon: Mail },
];

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState('hero');

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    localStorage.setItem('preferred-lang', newLocale);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const nextLocale = locale === 'id' ? 'en' : 'id';

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    navItems.forEach(({ sectionId }) => {
      const el = document.getElementById(sectionId);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="w-full px-4 md:px-6 py-3 flex items-center justify-between border-b border-border/40 bg-background sticky top-0 z-40">
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-2 text-sm font-medium border border-border rounded-full px-4 py-1.5 hover:bg-muted transition-colors"
        >
          <Hexagon className="w-4 h-4" />
          Made Egar
        </button>

        <nav className="hidden md:flex items-center gap-1 bg-muted border border-border rounded-full p-1">
          {navItems.map(({ key, sectionId, icon: Icon }) => (
            <button
              key={key}
              onClick={() => scrollToSection(sectionId)}
              className={cn(
                'flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm transition-colors',
                activeSection === sectionId
                  ? 'bg-background text-foreground font-medium border border-border shadow-sm'
                  : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
              )}
            >
              <Icon className="w-3.5 h-3.5" />
              {t(key)}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="rounded-full gap-1.5 text-xs font-medium"
            onClick={() => switchLocale(nextLocale)}
          >
            <Languages className="w-3.5 h-3.5" />
            {locale.toUpperCase()}
          </Button>
          <ModeToggle />
        </div>
      </header>

      <nav className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 bg-background border border-border rounded-full p-1.5 shadow-lg">
        {navItems.map(({ key, sectionId, icon: Icon }) => (
          <button
            key={key}
            onClick={() => scrollToSection(sectionId)}
            aria-label={t(key)}
            className={cn(
              'flex items-center justify-center w-10 h-10 rounded-full transition-colors',
              activeSection === sectionId
                ? 'bg-muted text-foreground border border-border'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
            )}
          >
            <Icon className="w-4 h-4" />
          </button>
        ))}
      </nav>
    </>
  );
}
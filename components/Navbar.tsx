'use client';

import { useTranslations } from 'next-intl';

import {
  Home,
  User,
  Code2,
  Mail,
  Hexagon,
  NotebookPen,
} from 'lucide-react';

import { ModeToggle } from '@/components/ModeToggle';
import LanguageSwitcher from '@/components/LanguageSwitcher';

import { cn } from '@/lib/utils';

import { useState, useEffect } from 'react';

const navItems = [
  { key: 'home', sectionId: 'hero', icon: Home },
  { key: 'services', sectionId: 'services', icon: NotebookPen },
  { key: 'about', sectionId: 'about', icon: User },
  { key: 'works', sectionId: 'works', icon: Code2 },
  { key: 'contact', sectionId: 'contact', icon: Mail },
];

export default function Navbar() {
  const t = useTranslations('nav');

  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);

    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    navItems.forEach(({ sectionId }) => {
      const el = document.getElementById(sectionId);

      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className="
          sticky top-0 z-40
          w-full
          border-b border-border/40
          bg-background/80
          backdrop-blur-xl
        "
      >
        <div
          className="
            mx-auto
            flex h-16 max-w-7xl
            items-center justify-between
            px-4 md:px-6
          "
        >
          <button
            onClick={() => scrollToSection('hero')}
            className="
              flex items-center gap-2
              rounded-full
              border border-border
              px-4 py-1.5
              text-sm font-bold
              transition-colors
              hover:bg-muted
            "
          >
            <Hexagon className="h-4 w-4" />
            Made Egar
          </button>

          <nav
            className="
              hidden lg:flex
              items-center gap-1
              rounded-full
              border border-border
              bg-muted/50
              p-1
              backdrop-blur
            "
          >
            {navItems.map(({ key, sectionId, icon: Icon }) => (
              <button
                key={key}
                onClick={() => scrollToSection(sectionId)}
                className={cn(
                  `
                    flex items-center gap-1.5
                    rounded-full
                    px-4 py-1.5
                    text-sm
                    transition-all
                  `,
                  activeSection === sectionId
                    ? `
                        border border-border
                        bg-background
                        text-foreground
                        shadow-sm
                        font-medium
                      `
                    : `
                        text-muted-foreground
                        hover:bg-background/60
                        hover:text-foreground
                      `
                )}
              >
                <Icon className="h-3.5 w-3.5" />
                {t(key)}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ModeToggle />
          </div>
        </div>
      </header>

      <nav
        className="
          fixed bottom-4 left-1/2 z-50
          flex -translate-x-1/2
          items-center gap-1
          rounded-full
          border border-border
          bg-background/80
          p-1.5
          shadow-lg
          backdrop-blur-xl
          lg:hidden
        "
      >
        {navItems.map(({ key, sectionId, icon: Icon }) => (
          <button
            key={key}
            onClick={() => scrollToSection(sectionId)}
            aria-label={t(key)}
            className={cn(
              `
                flex h-10 w-10
                items-center justify-center
                rounded-full
                transition-all
              `,
              activeSection === sectionId
                ? `
                    border border-border
                    bg-muted
                    text-foreground
                  `
                : `
                    text-muted-foreground
                    hover:bg-muted
                    hover:text-foreground
                  `
            )}
          >
            <Icon className="h-4 w-4" />
          </button>
        ))}
      </nav>
    </>
  );
}
import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  defaultLocale: 'id',
  locales: ['en', 'id'],
});

export const { Link, redirect, useRouter, usePathname } = createNavigation(routing);
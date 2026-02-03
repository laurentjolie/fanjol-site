'use client';

import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { routing } from '@/i18n/routing';

type Locale = (typeof routing.locales)[number];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  const getLocalizedPath = (newLocale: Locale) => {
    const segments = pathname.split('/');
    const hasLocalePrefix = routing.locales.includes(segments[1] as Locale);

    if (newLocale === routing.defaultLocale) {
      // Switching to default locale: remove prefix if present
      if (hasLocalePrefix) {
        segments.splice(1, 1);
      }
      // If no prefix (already on default locale), return as-is
      return segments.join('/') || '/';
    }

    // Switching to non-default locale
    if (hasLocalePrefix) {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }

    return segments.join('/') || '/';
  };

  return (
    <nav className="flex items-center text-sm">
      {routing.locales.map((loc, index) => (
        <span key={loc}>
          {index > 0 && <span className="text-gray-300 mx-2">|</span>}
          <Link
            href={getLocalizedPath(loc)}
            className={
              locale === loc
                ? 'font-medium text-gray-900'
                : 'text-gray-400 hover:text-gray-700'
            }
          >
            {loc.toUpperCase()}
          </Link>
        </span>
      ))}
    </nav>
  );
}

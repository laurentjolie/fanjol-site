'use client';

import {useLocale} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/routing';
import {routing} from '@/i18n/routing';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (newLocale: string) => {
    router.replace(pathname, {locale: newLocale});
  };

  return (
    <div style={{display: 'flex', gap: '0.5rem'}}>
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => handleChange(loc)}
          aria-current={locale === loc ? 'true' : undefined}
          style={{
            background: 'none',
            border: 'none',
            padding: '0.25rem 0.5rem',
            cursor: 'pointer',
            fontSize: '0.875rem',
            fontWeight: locale === loc ? 600 : 400,
            color: locale === loc ? '#000' : '#6b7280',
            transition: 'color 0.15s ease'
          }}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

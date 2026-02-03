'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const pathname = usePathname();

  const navLinks = [
    { key: 'works', href: `/${locale}` },
    { key: 'shop', href: `/${locale}/shop` },
    { key: 'about', href: `/${locale}/about` },
  ];

  const isActive = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === `/${locale}` || pathname === `/${locale}/`;
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-100">
      {/* Logo à gauche */}
      <div className="flex-1">
        <Link href={`/${locale}`} className="text-xl font-semibold tracking-wide text-gray-900 hover:text-gray-700">
          Fanjol
        </Link>
      </div>

      {/* Navigation au centre */}
      <nav className="flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            className={`text-sm tracking-wide transition-colors ${
              isActive(link.href)
                ? 'text-gray-900 font-medium'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            {t(link.key)}
          </Link>
        ))}
      </nav>

      {/* LanguageSwitcher à droite */}
      <div className="flex-1 flex justify-end">
        <LanguageSwitcher />
      </div>
    </header>
  );
}

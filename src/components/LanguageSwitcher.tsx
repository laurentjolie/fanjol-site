'use client';

import {useState, useRef, useEffect} from 'react';
import {useLocale} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/routing';
import {locales} from '@/i18n/routing';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = (newLocale: string) => {
    router.replace(pathname, {locale: newLocale});
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 bg-transparent border-none px-2 py-1 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
      >
        {locale.toUpperCase()}
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={() => handleChange(loc)}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                locale === loc ? 'font-semibold text-gray-900' : 'text-gray-600'
              }`}
            >
              {loc.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

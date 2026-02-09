import { getTranslations, setRequestLocale } from 'next-intl/server';
import { shopSculptures } from '@/data/shop-sculptures';
import SculptureCard from '@/components/SculptureCard';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ShopPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('shop');
  const b = await getTranslations('book');

  return (
    <main className="min-h-screen bg-white px-6 py-16 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-light text-center mb-4 tracking-wide">
          {t('title')}
        </h1>
        <p className="text-center text-gray-500 mb-12">
          {t('subtitle')}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {shopSculptures.map((sculpture) => (
            <SculptureCard key={sculpture.id} sculpture={sculpture} material={t('material')} />
          ))}
        </div>

        <section className="mt-24 pt-16 border-t border-gray-200 max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-light mb-8 tracking-wide">{b('sectionTitle')}</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="/book-cover.jpg"
              alt={b('title')}
              className="w-48 shadow-lg"
            />
            <div className="text-left">
              <h3 className="text-xl font-medium italic mb-2">{b('title')}</h3>
              <p className="text-gray-600 mb-2">{b('type')}</p>
              <p className="text-gray-500 mb-4">{b('description')}</p>
              <a
                href="https://www.amazon.fr/dp/B0GC661SCZ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-black underline"
              >
                {b('linkText')} →
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

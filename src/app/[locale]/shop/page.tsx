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
      </div>
    </main>
  );
}

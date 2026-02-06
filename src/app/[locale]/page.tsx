import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { sculptures } from '@/data/sculptures';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('home');

  return (
    <main className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-light text-center mb-12 tracking-wide">
        {t('title')}
      </h1>
      <p className="text-center">{t('subtitle')}</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {sculptures.map((sculpture) => (
          <div key={sculpture.id} className="group">
            <div className="aspect-[9/16] relative overflow-hidden">
              <Image
                src={sculpture.image}
                alt={sculpture.title}
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="mt-3 text-sm text-gray-700 text-center font-light">
              {sculpture.title}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}

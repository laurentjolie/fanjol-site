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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {sculptures.map((sculpture) => (
          <div key={sculpture.id} className="group">
            <div className="aspect-square relative overflow-hidden bg-gray-50">
              <Image
                src={sculpture.image}
                alt={sculpture.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
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

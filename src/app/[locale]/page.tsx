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
      <div className="flex flex-col">
        {sculptures.map((sculpture, index) => (
          <div
            key={sculpture.id}
            className={`flex items-center gap-8 max-w-4xl mx-auto mb-12 ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}
          >
            <div className="w-2/3 h-96 relative overflow-hidden">
              <Image
                src={sculpture.image}
                alt={sculpture.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="w-1/3 flex items-center justify-center">
              <p className="text-xl font-light text-gray-800 text-center">
                {sculpture.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

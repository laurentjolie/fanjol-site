import { getTranslations, setRequestLocale } from 'next-intl/server';
import { sculptures } from '@/data/sculptures';
import SculptureCard from '@/components/SculptureCard';

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
          <SculptureCard key={sculpture.id} sculpture={sculpture} />
        ))}
      </div>
    </main>
  );
}

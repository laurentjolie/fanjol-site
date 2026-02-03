import { getTranslations, setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('about');

  return (
    <main className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-light text-center mb-12 tracking-wide">
        {t('title')}
      </h1>
      <p className="text-center text-gray-600">
        {t('artistStatement')}
      </p>
    </main>
  );
}

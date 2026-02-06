import { getTranslations, setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('about');

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-light text-center mb-12">
          {t('title')}
        </h1>
        <div className="prose prose-lg prose-gray">
          {(t('bio') as string).split('\n\n').map((paragraph, i) => (
            <p key={i} className="mb-6 text-gray-700">
              {paragraph}
            </p>
          ))}
        </div>
        <p className="mt-12 text-gray-600">
          {t('contact')} <a href="mailto:claudejolie@orange.fr" className="underline hover:text-gray-800">claudejolie@orange.fr</a>
        </p>
      </div>
    </main>
  );
}

import { t, buildAlternates } from '../../../metadata';
import IgaloSpaTradition from '@/src/components/pages/blog/IgaloSpaTradition';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'blogIgalo.title') + ' | Herceg Novi Car Hire',
    description: t(lang, 'blogIgalo.description'),
    alternates: buildAlternates('blog/igalo-spa-tradition'),
  };
}

export default function LangIgaloSpaTraditionRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogIgalo.title'),
    "description": t('en', 'blogIgalo.description'),
    "image": "https://www.hercegnovicarhire.com/img/blog-igalo-spa-tradition.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Herceg Novi Car Hire", "url": "https://www.hercegnovicarhire.com" },
    "publisher": { "@type": "Organization", "name": "Herceg Novi Car Hire", "url": "https://www.hercegnovicarhire.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <IgaloSpaTradition />
    </>
  );
}

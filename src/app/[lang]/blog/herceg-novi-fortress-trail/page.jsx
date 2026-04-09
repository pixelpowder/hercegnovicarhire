import { t, buildAlternates } from '../../../metadata';
import HercegNoviFortressTrail from '@/src/components/pages/blog/HercegNoviFortressTrail';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'blogFortress.title') + ' | Herceg Novi Car Hire',
    description: t(lang, 'blogFortress.description'),
    alternates: buildAlternates('blog/herceg-novi-fortress-trail'),
  };
}

export default function LangHercegNoviFortressTrailRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogFortress.title'),
    "description": t('en', 'blogFortress.description'),
    "image": "https://www.hercegnovicarhire.com/img/blog-herceg-novi-fortress-trail.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Herceg Novi Car Hire", "url": "https://www.hercegnovicarhire.com" },
    "publisher": { "@type": "Organization", "name": "Herceg Novi Car Hire", "url": "https://www.hercegnovicarhire.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <HercegNoviFortressTrail />
    </>
  );
}

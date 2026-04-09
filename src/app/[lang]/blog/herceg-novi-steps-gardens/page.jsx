import { t, buildAlternates } from '../../../metadata';
import HercegNoviStepsGardens from '@/src/components/pages/blog/HercegNoviStepsGardens';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'blogSteps.title') + ' | Herceg Novi Car Hire',
    description: t(lang, 'blogSteps.description'),
    alternates: buildAlternates('blog/herceg-novi-steps-gardens'),
  };
}

export default function LangHercegNoviStepsGardensRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogSteps.title'),
    "description": t('en', 'blogSteps.description'),
    "image": "https://www.hercegnovicarhire.com/img/blog-herceg-novi-steps-gardens.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Herceg Novi Car Hire", "url": "https://www.hercegnovicarhire.com" },
    "publisher": { "@type": "Organization", "name": "Herceg Novi Car Hire", "url": "https://www.hercegnovicarhire.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <HercegNoviStepsGardens />
    </>
  );
}

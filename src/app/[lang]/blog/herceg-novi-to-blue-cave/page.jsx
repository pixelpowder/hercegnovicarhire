import { t, buildAlternates } from '../../../metadata';
import HercegNoviToBlueCave from '@/src/components/pages/blog/HercegNoviToBlueCave';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'blogBlueCave.title') + ' | Herceg Novi Car Hire',
    description: t(lang, 'blogBlueCave.description'),
    alternates: buildAlternates('blog/herceg-novi-to-blue-cave'),
  };
}

export default function LangHercegNoviToBlueCaveRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogBlueCave.title'),
    "description": t('en', 'blogBlueCave.description'),
    "image": "https://www.hercegnovicarhire.com/img/blog-herceg-novi-to-blue-cave.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Herceg Novi Car Hire", "url": "https://www.hercegnovicarhire.com" },
    "publisher": { "@type": "Organization", "name": "Herceg Novi Car Hire", "url": "https://www.hercegnovicarhire.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <HercegNoviToBlueCave />
    </>
  );
}

import { t, buildAlternates } from '../../../metadata';
import HercegNoviOliveGroves from '@/src/components/pages/blog/HercegNoviOliveGroves';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'blogOlive.title') + ' | Herceg Novi Car Hire',
    description: t(lang, 'blogOlive.description'),
    alternates: buildAlternates('blog/herceg-novi-olive-groves'),
  };
}

export default function LangHercegNoviOliveGrovesRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogOlive.title'),
    "description": t('en', 'blogOlive.description'),
    "image": "https://www.hercegnovicarhire.com/img/blog-herceg-novi-olive-groves.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Herceg Novi Car Hire", "url": "https://www.hercegnovicarhire.com" },
    "publisher": { "@type": "Organization", "name": "Herceg Novi Car Hire", "url": "https://www.hercegnovicarhire.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <HercegNoviOliveGroves />
    </>
  );
}

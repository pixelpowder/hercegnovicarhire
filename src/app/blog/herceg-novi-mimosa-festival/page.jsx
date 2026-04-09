import { t, buildAlternates } from '../../metadata';
import HercegNoviMimosaFestival from '@/src/components/pages/blog/HercegNoviMimosaFestival';

export async function generateMetadata() {
  return {
    title: t('en', 'blogMimosa.title') + ' | Herceg Novi Car Hire',
    description: t('en', 'blogMimosa.description'),
    alternates: buildAlternates('blog/herceg-novi-mimosa-festival'),
  };
}

export default function HercegNoviMimosaFestivalRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogMimosa.title'),
    "description": t('en', 'blogMimosa.description'),
    "image": "https://www.hercegnovicarhire.com/img/blog-herceg-novi-mimosa-festival.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Herceg Novi Car Hire", "url": "https://www.hercegnovicarhire.com" },
    "publisher": { "@type": "Organization", "name": "Herceg Novi Car Hire", "url": "https://www.hercegnovicarhire.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <HercegNoviMimosaFestival />
    </>
  );
}

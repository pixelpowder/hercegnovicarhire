import { t, buildAlternates } from '../../../metadata';
import PrevlakaPeninsulaDrive from '@/src/components/pages/blog/PrevlakaPeninsulaDrive';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'blogPrevlaka.title') + ' | Herceg Novi Car Hire',
    description: t(lang, 'blogPrevlaka.description'),
    alternates: buildAlternates('blog/prevlaka-peninsula-drive'),
  };
}

export default function LangPrevlakaPeninsulaDriveRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogPrevlaka.title'),
    "description": t('en', 'blogPrevlaka.description'),
    "image": "https://www.hercegnovicarhire.com/img/blog-prevlaka-peninsula-drive.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Herceg Novi Car Hire", "url": "https://www.hercegnovicarhire.com" },
    "publisher": { "@type": "Organization", "name": "Herceg Novi Car Hire", "url": "https://www.hercegnovicarhire.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <PrevlakaPeninsulaDrive />
    </>
  );
}

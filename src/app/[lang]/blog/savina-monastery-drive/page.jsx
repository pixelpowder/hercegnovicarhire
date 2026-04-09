import { t, buildAlternates } from '../../../metadata';
import SavinaMonasteryDrive from '@/src/components/pages/blog/SavinaMonasteryDrive';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'blogSavina.title') + ' | Herceg Novi Car Hire',
    description: t(lang, 'blogSavina.description'),
    alternates: buildAlternates('blog/savina-monastery-drive'),
  };
}

export default function LangSavinaMonasteryDriveRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogSavina.title'),
    "description": t('en', 'blogSavina.description'),
    "image": "https://www.hercegnovicarhire.com/img/blog-savina-monastery-drive.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Herceg Novi Car Hire", "url": "https://www.hercegnovicarhire.com" },
    "publisher": { "@type": "Organization", "name": "Herceg Novi Car Hire", "url": "https://www.hercegnovicarhire.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <SavinaMonasteryDrive />
    </>
  );
}

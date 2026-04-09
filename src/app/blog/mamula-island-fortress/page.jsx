import { t, buildAlternates } from '../../metadata';
import MamulaIslandFortress from '@/src/components/pages/blog/MamulaIslandFortress';

export async function generateMetadata() {
  return {
    title: t('en', 'blogMamula.title') + ' | Herceg Novi Car Hire',
    description: t('en', 'blogMamula.description'),
    alternates: buildAlternates('blog/mamula-island-fortress'),
  };
}

export default function MamulaIslandFortressRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogMamula.title'),
    "description": t('en', 'blogMamula.description'),
    "image": "https://www.hercegnovicarhire.com/img/blog-mamula-island-fortress.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Herceg Novi Car Hire", "url": "https://www.hercegnovicarhire.com" },
    "publisher": { "@type": "Organization", "name": "Herceg Novi Car Hire", "url": "https://www.hercegnovicarhire.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <MamulaIslandFortress />
    </>
  );
}

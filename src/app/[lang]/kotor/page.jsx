import { t, buildAlternates } from '../../metadata';
import Kotor from '@/src/components/pages/Kotor';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'kotor.title') + ' | Herceg Novi Car Hire',
    description: t(lang, 'kotor.seoDesc'),
    alternates: buildAlternates('kotor'),
  };
}

export default function LangKotorRoute() {
  return <Kotor />;
}

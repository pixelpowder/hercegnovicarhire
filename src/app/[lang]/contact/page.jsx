import Contact from '@/src/components/pages/Contact';
import { t, buildAlternates } from '@/src/app/metadata';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: 'Contact Us | Herceg Novi Car Hire',
    description: 'Get in touch with Herceg Novi Car Hire.',
    alternates: buildAlternates('contact'),
  };
}

export default function ContactPage() {
  return <Contact />;
}

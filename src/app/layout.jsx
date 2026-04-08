import '@/src/index.css';
import '@/src/App.css';
import '@/src/ContentPage.css';
import '@/src/BookPage.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import CookieBanner from '@/src/CookieBanner';
import { LanguageContext } from '@/src/i18n/LanguageContext';
import { DEFAULT_LANG } from '@/src/i18n/languages';

export const metadata = {
  title: 'Herceg Novi Car Hire — Bay Entrance, Croatia Border',
  description:
    'Where Croatia meets Montenegro. Pick up in Herceg Novi or Tivat Airport from \u20AC13/day. Dubrovnik is 30 km away, Kotor 45 min through the bay. Cross-border cars ready.',
  metadataBase: new URL('https://www.hercegnovicarhire.com'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/hero-video.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/hero-bg.webp" as="image" type="image/webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRental",
              name: "Herceg Novi Car Hire",
              url: "https://www.hercegnovicarhire.com",
              description:
                "Rent a car in Herceg Novi from trusted local providers with free cancellation, full insurance, and delivery to your hotel or Tivat Airport pickup.",
              email: "info@hercegnovicarhire.com",
              image: "https://www.hercegnovicarhire.com/img/schema-car.jpg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Tabacina BB",
                addressLocality: "Herceg Novi",
                postalCode: "85340",
                addressCountry: "ME",
              },
              areaServed: [
                { "@type": "City", name: "Herceg Novi" },
                { "@type": "City", name: "Igalo" },
                { "@type": "City", name: "Tivat" },
                { "@type": "City", name: "Kotor" },
                { "@type": "City", name: "Dubrovnik" },
              ],
              priceRange: "€25–€120",
              currenciesAccepted: "EUR",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "17:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday", "Sunday"],
                  opens: "00:00",
                  closes: "23:59",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "3",
                bestRating: "5",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What documents do I need?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Bring a valid driving licence showing Latin-script details, your passport, and a physical credit card in the main driver\u2019s name. If your licence was issued outside the EU or EEA, an International Driving Permit is recommended. Electronic copies and photocopies are not accepted by rental agents.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I drive to Croatia or Albania?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes \u2014 and from Herceg Novi it is remarkably easy. Dubrovnik is only 30 km away via the Debeli Brijeg border crossing. Let us know at booking and we will ensure the Green Card and cross-border documentation are ready before you collect the car.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is there a minimum age?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The minimum age to rent is 21, and drivers must hold a full licence for at least two years. Drivers aged 21\u201324 pay a young driver supplement, and the exact amount varies by vehicle class \u2014 it is shown clearly in the search results before you confirm.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What\u2019s included in the price?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "All vehicles include Third Party Liability insurance and most include CDW in the base price. VAT, a mandatory equipment kit (first-aid box, warning triangle, reflective vest), and a transparent fuel policy are also included. Mileage terms vary by vehicle \u2014 check the listing details. Extended zero-excess cover is available as an add-on.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does pickup work?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We offer delivery to Herceg Novi town centre, the Igalo spa quarter, or a meet-and-greet at Tivat Airport arrivals \u2014 35 km along the bay road, roughly 40 minutes. Choose your preferred location during booking and the agent will confirm the exact meeting point.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I drop off at a different location?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes \u2014 one-way rentals are available across 28 locations throughout Montenegro. You can return the car in Podgorica, Kotor, Budva, or even Tivat Airport. Select separate pickup and drop-off points when booking.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I cancel my booking?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Standard vehicles offer free cancellation up to 7 days before the rental start. Luxury cars and convertibles require 30 days\u2019 notice for a free cancellation. A 6% payment processing fee applies to all cancellations regardless of timing.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is a deposit required?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A security deposit is held on a physical credit card \u2014 the amount ranges from \u20AC50 to \u20AC300 depending on the vehicle category. Some economy cars are available without a deposit. The hold is released within a few working days after you return the car in its original condition.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What happens if I exceed the mileage limit?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Vehicles with a mileage cap charge a per-kilometre fee for any distance driven above the agreed limit. The rate is shown in the vehicle details before you book. Many vehicles on our platform offer unlimited mileage.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Are there hidden costs?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "None. The price displayed at search includes all taxes, mandatory fees, and any cross-border charges for Croatia that apply to your booking. What you see is exactly what you pay.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How much is the down payment?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Confirming your booking requires a down payment of 15\u201320% of the total rental cost. The remaining balance is settled directly with the rental agent when you collect the vehicle.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I rent without a credit card?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A small number of vehicles are available for renters who do not have a credit card. These are clearly marked in the search results. For most cars, a physical credit card in the driver\u2019s name is required for the security deposit hold.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <LanguageContext value={DEFAULT_LANG}>
          {children}
          <CookieBanner />
          <Analytics />
          <SpeedInsights />
        </LanguageContext>
      </body>
    </html>
  );
}

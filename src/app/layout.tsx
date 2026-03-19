import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Dog Walking in Potomac MD | Potomac Dog Walking",
    template: "%s | Potomac Dog Walking",
  },
  description:
    "Professional dog walking and canine enrichment in Potomac, MD. Insured, bonded, GPS-tracked solo walks. Trusted since 2009. Call (301) 265-3647.",
  openGraph: {
    title: "Professional Dog Walking in Potomac, MD | Potomac Dog Walking",
    description:
      "Professional dog walking and canine enrichment services in Potomac, MD. Locally owned, insured, and trusted since 2009.",
    type: "website",
    url: "https://www.potomacdogwalking.com/",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.potomacdogwalking.com/#business",
              name: "Potomac Dog Walking",
              description:
                "Professional dog walking, canine enrichment, and pet care services for homeowners in Potomac, Maryland. Locally owned, insured, bonded, and vet-recommended.",
              url: "https://www.potomacdogwalking.com",
              foundingDate: "2009",
              founder: { "@type": "Person", name: "Dave Peterson" },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Potomac",
                addressRegion: "MD",
                postalCode: "20854",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "39.0181",
                longitude: "-77.2085",
              },
              areaServed: {
                "@type": "City",
                name: "Potomac",
                containedInPlace: {
                  "@type": "AdministrativeArea",
                  name: "Montgomery County, Maryland",
                },
              },
              priceRange: "$$",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "07:00",
                  closes: "19:00",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

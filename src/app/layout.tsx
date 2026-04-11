import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.potomacdogwalking.com"),
  title: {
    default: "Dog Walking in Potomac MD | Potomac Dog Walking",
    template: "%s | Potomac Dog Walking",
  },
  description:
    "Professional dog walking and canine enrichment in Potomac, MD. Insured, bonded, GPS-tracked solo walks. Trusted since 2009. Call (301) 265-3647.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Professional Dog Walking in Potomac, MD | Potomac Dog Walking",
    description:
      "Professional dog walking and canine enrichment services in Potomac, MD. Locally owned, insured, and trusted since 2009.",
    type: "website",
    url: "https://www.potomacdogwalking.com/",
    siteName: "Potomac Dog Walking",
    locale: "en_US",
    images: [
      {
        url: "/images/professional-dog-walker-potomac-md.jpg",
        width: 1200,
        height: 630,
        alt: "Professional dog walker with a dog in Potomac, MD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Dog Walking in Potomac, MD",
    description:
      "Insured, GPS-tracked solo dog walks in Potomac, MD. Trusted since 2009.",
    images: ["/images/professional-dog-walker-potomac-md.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
              telephone: "(301) 265-3647",
              email: "info@potomacdogwalking.com",
              sameAs: [],
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
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Dog Walking Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Relief Walk",
                      description:
                        "15-minute solo dog walk for puppies, senior dogs, or quick midday bathroom breaks in Potomac, MD.",
                      areaServed: {
                        "@type": "City",
                        name: "Potomac, MD",
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Signature Walk",
                      description:
                        "30-minute solo dog walk with GPS tracking and post-visit report. Most popular service in Potomac, MD.",
                      areaServed: {
                        "@type": "City",
                        name: "Potomac, MD",
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Fitness Walk",
                      description:
                        "45-minute solo dog walk for high-energy breeds. Sustained exercise on Potomac's trails and neighborhoods.",
                      areaServed: {
                        "@type": "City",
                        name: "Potomac, MD",
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Adventure Walk",
                      description:
                        "60-minute solo dog walk with trail access and transportation. Visits C&O Canal, Cabin John Park, and Potomac trails.",
                      areaServed: {
                        "@type": "City",
                        name: "Potomac, MD",
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Canine Enrichment",
                      description:
                        "Mental stimulation activities including scent work and engagement exercises for dogs in Potomac, MD.",
                      areaServed: {
                        "@type": "City",
                        name: "Potomac, MD",
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Medication Administration",
                      description:
                        "Reliable administration of prescribed medications during scheduled dog walking visits in Potomac, MD.",
                      areaServed: {
                        "@type": "City",
                        name: "Potomac, MD",
                      },
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen pb-[64px] lg:pb-0">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyMobileCTA />
        <Analytics />
      </body>
    </html>
  );
}

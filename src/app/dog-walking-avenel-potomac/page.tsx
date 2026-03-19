import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dog Walking in Avenel, Potomac MD | Local Dog Walkers",
  description:
    "Professional dog walking in Avenel, Potomac MD. Solo walks on Avenel's tree-lined streets near TPC Potomac. Insured, GPS-tracked. Call (301) 265-3647.",
};

const faqs = [
  {
    question: "Do you serve all of the Avenel community?",
    answer:
      "Yes. We serve homeowners throughout Avenel, including properties along Avenel Farm Drive, Oaklyn Drive, Tournament Drive, and all interior streets. Our walkers are familiar with Avenel's gated sections, HOA paths, and the walking routes near TPC Potomac.",
  },
  {
    question: "Are walks in Avenel safe given the proximity to TPC Potomac?",
    answer:
      "Absolutely. Avenel's residential streets are low-traffic and lined with mature trees. The golf course perimeter provides scenic walking routes with open views and minimal vehicle traffic. Our walkers avoid active golf areas and stick to residential roads and community paths.",
  },
  {
    question: "What makes Avenel a good area for dog walking?",
    answer:
      "Avenel combines wide, quiet streets with mature landscaping, gentle terrain, and proximity to the C&O Canal towpath. The neighborhood's layout — with cul-de-sacs and internal loops — creates naturally low-traffic walking environments. It is one of the most pleasant and safe neighborhoods in Potomac for daily dog walks.",
  },
  {
    question: "Can you walk my dog to the C&O Canal from Avenel?",
    answer:
      "Avenel's location makes the C&O Canal towpath accessible for longer walks. During a standard Signature Walk, your walker uses Avenel's streets and nearby paths. For Fitness and Adventure Walks, we can extend the route to include sections of the towpath, giving your dog access to river views, wildlife sightings, and varied terrain.",
  },
];

export default function DogWalkingAvenelPage() {
  return (
    <>
      <Hero
        title="Dog Walking in Avenel, Potomac MD"
        subtitle="Professional solo walks on Avenel's tree-lined streets near TPC Potomac. Background-checked, certified walkers who know your neighborhood."
      />

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Dog Walking Services in Avenel
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Avenel is one of Potomac&apos;s most prestigious communities — luxury homes on tree-lined streets surrounding TPC Potomac at Avenel, with easy access to the C&amp;O Canal towpath and Falls Road corridor. The neighborhood&apos;s wide, quiet streets, cul-de-sac layout, and mature landscaping create one of the best environments in Montgomery County for daily dog walks.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Potomac Dog Walking has served Avenel homeowners since 2009. Our walkers know the community&apos;s internal loop roads, the best shade routes during summer, and how to build walks that give your dog maximum engagement without leaving the neighborhood. Every walk is a solo walk with GPS tracking, photos, and a detailed post-visit report.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We offer walks from 15 to 60 minutes and can include{" "}
            <Link href="/services/canine-enrichment" className="text-green-800 underline hover:text-green-600">canine enrichment</Link> activities during any visit. View our{" "}
            <Link href="/services" className="text-green-800 underline hover:text-green-600">plans and pricing</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-green-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Walking Routes in Avenel
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Avenel&apos;s layout offers several natural walking circuits that our walkers use regularly:
          </p>
          <ul className="space-y-3 text-gray-600 mb-4">
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              <strong>Tournament Drive Loop</strong> — Scenic route along the golf course perimeter with open views, mature trees, and minimal vehicle traffic
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              <strong>Avenel Farm Drive Circuit</strong> — Tree-lined residential road connecting the community&apos;s main sections with consistent sidewalks
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              <strong>Oaklyn Drive and Cul-de-Sacs</strong> — Quiet interior streets ideal for dogs who prefer calm, predictable environments
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              <strong>C&amp;O Canal Towpath Access</strong> — For Fitness and Adventure Walks, we extend routes to the historic canal towpath for river views and natural terrain
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            See more in our{" "}
            <Link href="/best-dog-walking-routes-potomac" className="text-green-800 underline hover:text-green-600">guide to the best dog walking routes in Potomac</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Who We Serve in Avenel
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Avenel residents include senior government officials, attorneys, executives, and diplomats — professionals with demanding schedules who need reliable, high-quality care for their dogs. Many of our Avenel clients travel frequently or work long hours in DC and Bethesda, making consistent{" "}
            <Link href="/midday-dog-walking-potomac" className="text-green-800 underline hover:text-green-600">midday dog walking</Link> essential.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We also work with families who want their dogs exercised during the school day and retirees who need help during medical appointments or travel. Whatever your situation, we match the right walker to your dog and maintain consistency across every visit.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-warm-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Nearby Areas We Serve
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              <Link href="/dog-walking-potomac-md" className="text-green-800 underline hover:text-green-600">Dog Walking in Potomac, MD</Link> — Our core service area
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              <Link href="/dog-walking-north-potomac" className="text-green-800 underline hover:text-green-600">Dog Walking in North Potomac</Link>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              <Link href="/dog-walking-travilah" className="text-green-800 underline hover:text-green-600">Dog Walking in Travilah</Link>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              <Link href="/dog-walking-near-great-falls-park" className="text-green-800 underline hover:text-green-600">Dog Walking Near Great Falls Park</Link>
            </li>
          </ul>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <ContactSection />
    </>
  );
}

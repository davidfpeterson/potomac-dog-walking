import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Link from "next/link";

import Breadcrumbs from "@/components/Breadcrumbs";
export const metadata: Metadata = {
  title: "Dog Walking 20854 | Potomac MD Dog Walkers",
  description:
    "Professional dog walking in the 20854 zip code — Potomac, MD. Serving all neighborhoods in 20854 including Avenel, River Falls, Cabin John, and Park Potomac. Call (301) 265-3647.",
  alternates: { canonical: "/dog-walking-20854" },
};

const neighborhoods = [
  "Avenel",
  "River Falls",
  "Potomac Falls",
  "Potomac Village",
  "Bradley Farms",
  "Cabin John",
  "Carderock Springs",
  "Copenhaver",
  "Falconhurst",
  "Glen Hills",
  "Great Falls Estates",
  "Kentsdale Estates",
  "Lake Potomac",
  "Park Potomac",
  "Potomac Crest",
  "Potomac Hills",
  "Saddle Ridge",
  "Seven Locks",
  "Winterset",
];

const faqs = [
  {
    question: "Do you serve the entire 20854 zip code?",
    answer:
      "Yes. Potomac Dog Walking serves homeowners throughout the 20854 zip code, which covers Potomac, MD and its surrounding neighborhoods. This includes Avenel, River Falls, Potomac Falls, Cabin John, Carderock Springs, Bradley Farms, Park Potomac, Seven Locks, and all communities within the 20854 area.",
  },
  {
    question: "What dog walking services are available in 20854?",
    answer:
      "We offer four walk options: Relief Walk (~15 min), Signature Walk (~30 min), Fitness Walk (~45 min), and Adventure Walk (~60 min). We also offer canine enrichment, medication administration, and backyard clean-up. All walks are solo walks with GPS tracking and post-visit reports.",
  },
  {
    question: "How much does dog walking cost in the 20854 area?",
    answer:
      "Dog walking rates in 20854 depend on walk duration and frequency. Recurring daily or weekly clients receive better per-walk rates than occasional bookings. We publish transparent pricing with no hidden fees, no surge pricing, and no long-term contracts. Visit our services page or call us for specific rates.",
  },
  {
    question: "How do I find a reliable dog walker in 20854?",
    answer:
      "Look for a dog walker who is insured, bonded, and background-checked. Ask about their experience, whether walks are solo or group, and whether they provide GPS tracking and post-visit reports. Potomac Dog Walking meets all of these criteria and has been serving the 20854 area since 2009.",
  },
];

export default function DogWalking20854Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Service Area", href: "/service-area" }, { name: "20854", href: "/dog-walking-20854" }]} />
      <Hero
        title="Dog Walking in 20854 — Potomac, MD"
        subtitle="Professional solo walks for every neighborhood in the 20854 zip code. Insured, background-checked walkers with GPS tracking and post-visit reports."
      />

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Professional Dog Walking Throughout 20854
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            The 20854 zip code covers Potomac, Maryland — one of the most desirable residential communities in the Washington, DC metropolitan area. With large homes, tree-lined streets, and proximity to the Potomac River, C&amp;O Canal, and miles of trails, 20854 is an exceptional area for dog walking.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Potomac Dog Walking has served the 20854 community since 2009, completing over twenty thousand visits per year across all of the zip code&apos;s neighborhoods. Our team knows which streets are best for walking, where the trail access points are, and how to build safe, stimulating routes for every breed and energy level.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Every walk is a solo walk — one dog, one walker, one hundred percent attention. We provide GPS tracking, timestamped visit reports, photos, and written summaries after every visit. Our walkers are background-checked, Pet First Aid and CPR certified, and fully insured and bonded.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            20854 Neighborhoods We Serve
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {neighborhoods.map((name) => (
              <div key={name} className="bg-white rounded-lg border border-gray-200 p-3 text-center">
                <span className="font-semibold text-gray-900 text-sm">{name}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-600 mt-6 text-center">
            <Link href="/service-area" className="text-green-800 underline hover:text-green-600">
              View detailed neighborhood descriptions &rarr;
            </Link>
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Services Available in 20854
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-600 pl-4">
              <h3 className="font-bold text-gray-900">Dog Walking</h3>
              <p className="text-gray-600 text-sm">Solo walks from 15 to 60 minutes, customized to your dog&apos;s fitness and energy level. <Link href="/services/dog-walking" className="text-green-800 underline hover:text-green-600">Learn more</Link></p>
            </div>
            <div className="border-l-4 border-green-600 pl-4">
              <h3 className="font-bold text-gray-900">Canine Enrichment</h3>
              <p className="text-gray-600 text-sm">Mental stimulation activities including scent work, exploration, and engagement exercises. <Link href="/services/canine-enrichment" className="text-green-800 underline hover:text-green-600">Learn more</Link></p>
            </div>
            <div className="border-l-4 border-green-600 pl-4">
              <h3 className="font-bold text-gray-900">Medication Administration</h3>
              <p className="text-gray-600 text-sm">Reliable administration of prescribed medications during scheduled visits. <Link href="/services/medication-administration" className="text-green-800 underline hover:text-green-600">Learn more</Link></p>
            </div>
            <div className="border-l-4 border-green-600 pl-4">
              <h3 className="font-bold text-gray-900">Backyard Clean-up</h3>
              <p className="text-gray-600 text-sm">Waste removal to keep your yard clean and safe. <Link href="/services/backyard-cleanup" className="text-green-800 underline hover:text-green-600">Learn more</Link></p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-amber-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Living in 20854 with a Dog
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Potomac&apos;s 20854 zip code is home to commuters who work in DC, Bethesda, and Northern Virginia — professionals who leave early and come home late. Dogs in these households often spend 8 to 10 hours alone during the workday. Without structured exercise and mental stimulation, many develop behavioral issues like anxiety, destructive chewing, and excessive barking.
          </p>
          <p className="text-gray-600 leading-relaxed">
            A consistent{" "}
            <Link href="/midday-dog-walking-potomac" className="text-green-800 underline hover:text-green-600">midday walk</Link> solves this problem. Your dog gets exercise, bathroom breaks, fresh air, and human interaction at the point in the day when they need it most. Whether you need daily walks or a few days per week, we build a schedule around your routine. Check our{" "}
            <Link href="/dog-walking-prices-potomac-md" className="text-green-800 underline hover:text-green-600">pricing page</Link> for current rates.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Explore Dog Walking by Neighborhood
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              <Link href="/dog-walking-avenel-potomac" className="text-green-800 underline hover:text-green-600">Dog Walking in Avenel, Potomac</Link>
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

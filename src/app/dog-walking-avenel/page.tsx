import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Link from "next/link";
import Image from "next/image";

import Breadcrumbs from "@/components/Breadcrumbs";
export const metadata: Metadata = {
  title: "Dog Walking in Avenel, Potomac MD",
  description:
    "Professional dog walking in the Avenel community of Potomac, MD. Solo walks near TPC golf course, insured and GPS-tracked. Call (301) 265-3647.",
  alternates: { canonical: "/dog-walking-avenel" },
};

const faqs = [
  {
    question: "Do you serve all of the Avenel community?",
    answer:
      "Yes. We walk dogs throughout Avenel, including homes along Avenel Farm Drive, Brickyard Road, and the streets surrounding the TPC golf course. Our walkers are familiar with the community's layout, gates, and walking paths.",
  },
  {
    question: "Are there good walking routes within Avenel?",
    answer:
      "Avenel offers excellent walking. The community's internal roads are well-maintained and see minimal through-traffic. The perimeter paths near the golf course provide scenic, open views, and the nearby Watts Branch trail adds a natural element for dogs who enjoy off-pavement walks.",
  },
  {
    question: "How do your walkers access gated or secured homes?",
    answer:
      "During the meet and greet, we coordinate access details including gate codes, lockboxes, or key exchanges. Our walkers are trained in secure home entry and always lock up when they leave. Access information is stored securely in our scheduling platform.",
  },
  {
    question: "What makes your service different from app-based dog walkers?",
    answer:
      "We assign a dedicated primary walker to your dog rather than sending a different person each day. Every walker is background-checked, insured, bonded, and certified in Pet First Aid and CPR. Walks are always solo — your dog never shares their outing with unfamiliar dogs. We have served Potomac since 2009 and complete over 20,000 walks per year.",
  },
];

export default function DogWalkingAvenelPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Service Area", href: "/service-area" }, { name: "Avenel", href: "/dog-walking-avenel" }]} />
      <Hero
        title="Dog Walking in Avenel"
        subtitle="Dedicated, one-on-one dog walks in the Avenel community. Background-checked walkers who know the neighborhood's paths, golf course perimeter, and nearby trails."
      />

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Image
            src="/images/dog-walking-avenel.jpg"
            alt="Dog walker with a golden doodle on a tree-lined street in the Avenel community"
            width={800}
            height={533}
            className="w-full h-auto rounded-xl mb-8"
          />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Professional Dog Walking for Avenel Residents
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Avenel is one of Potomac&apos;s most sought-after communities — a
            planned neighborhood anchored by the TPC Potomac golf course,
            surrounded by mature landscaping and winding residential streets.
            The community&apos;s quiet roads and proximity to Watts Branch
            make it an outstanding environment for dog walking.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our walkers provide solo walks exclusively. Your dog receives
            focused, one-on-one attention from a familiar handler who
            understands your dog&apos;s preferences, pace, and personality.
            Every walk is GPS-tracked, and you receive photos and a written
            report when it is complete.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We have been walking dogs in Potomac since 2009 and serve Avenel
            residents on a daily basis.{" "}
            <Link
              href="/services"
              className="text-green-800 underline hover:text-green-600"
            >
              See our full list of services
            </Link>{" "}
            or call{" "}
            <a
              href="tel:3012653647"
              className="text-green-800 underline hover:text-green-600"
            >
              (301) 265-3647
            </a>{" "}
            to get started.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-green-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Walking in and Around Avenel
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Avenel&apos;s location gives dogs access to diverse walking
            environments without leaving the immediate area:
          </p>
          <ul className="space-y-3 text-gray-600">
            <li className="flex gap-3 items-start">
              <span className="text-green-700 text-xl leading-none">
                &#8226;
              </span>
              <span>
                <strong>Community interior roads</strong> — Low-speed, low-traffic
                streets with wide shoulders and consistent sidewalks throughout
                the neighborhood
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-700 text-xl leading-none">
                &#8226;
              </span>
              <span>
                <strong>Golf course perimeter paths</strong> — Open, scenic
                walking along the edge of TPC Potomac with expansive views and
                fresh air
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-700 text-xl leading-none">
                &#8226;
              </span>
              <span>
                <strong>Watts Branch Stream Valley</strong> — A natural trail
                nearby that offers shade, creek views, and a change of scenery
                from paved surfaces
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-700 text-xl leading-none">
                &#8226;
              </span>
              <span>
                <strong>Brickyard Road connections</strong> — Linking Avenel to
                surrounding Potomac neighborhoods and additional trail systems
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Designed for Busy Avenel Families
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Avenel homeowners lead active lives. Many commute to DC, Bethesda,
            or Rockville and rely on consistent{" "}
            <Link
              href="/midday-dog-walking-potomac"
              className="text-green-800 underline hover:text-green-600"
            >
              midday walks
            </Link>{" "}
            to keep their dogs exercised and content during the workday. Others
            need afternoon walks timed around school pickups, travel schedules,
            or other commitments.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our scheduling is flexible — daily, weekday-only, or custom
            frequencies. If plans change unexpectedly, we often have{" "}
            <Link
              href="/same-day-dog-walking-potomac"
              className="text-green-800 underline hover:text-green-600"
            >
              same-day availability
            </Link>
            . Adjust your plan anytime through our scheduling platform with no
            long-term contracts required.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-green-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Our Qualifications
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Every walker on our team meets the same high standard:
          </p>
          <ul className="space-y-3 text-gray-600">
            <li className="flex gap-3 items-start">
              <span className="text-green-700 text-xl leading-none">
                &#8226;
              </span>
              <span>Background-checked, fully insured, and bonded</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-700 text-xl leading-none">
                &#8226;
              </span>
              <span>Certified in Pet First Aid and CPR</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-700 text-xl leading-none">
                &#8226;
              </span>
              <span>GPS tracking on every walk via our scheduling platform</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-700 text-xl leading-none">
                &#8226;
              </span>
              <span>
                Members of Pet Sitters International with 20,000+ walks per year
                since 2009
              </span>
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-6">
            <Link
              href="/dog-walking-potomac-village"
              className="text-green-800 underline hover:text-green-600"
            >
              Potomac Village
            </Link>{" "}
            |{" "}
            <Link
              href="/dog-walking-falconhurst"
              className="text-green-800 underline hover:text-green-600"
            >
              Falconhurst
            </Link>{" "}
            |{" "}
            <Link
              href="/dog-walking-glen-road"
              className="text-green-800 underline hover:text-green-600"
            >
              Glen Road
            </Link>{" "}
            |{" "}
            <Link
              href="/service-area"
              className="text-green-800 underline hover:text-green-600"
            >
              Full Service Area
            </Link>
          </p>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <ContactSection />
    </>
  );
}

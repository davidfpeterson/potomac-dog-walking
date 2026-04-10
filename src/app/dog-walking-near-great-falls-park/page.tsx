import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Link from "next/link";

import Breadcrumbs from "@/components/Breadcrumbs";
export const metadata: Metadata = {
  title: "Dog Walking Near Great Falls Park | Potomac MD",
  description:
    "Professional dog walking near Great Falls Park in Potomac, MD. Trail walks along the C&O Canal, Falls Road, and Great Falls Estates. Call (301) 265-3647.",
  alternates: { canonical: "/dog-walking-near-great-falls-park" },
};

const trails = [
  {
    name: "C&O Canal Towpath (Great Falls Section)",
    description:
      "Flat, well-maintained crushed gravel path along the Potomac River. Dogs must be on-leash. The Great Falls section offers dramatic river views, lock ruins, and wildlife sightings. Ideal for Fitness and Adventure Walks.",
  },
  {
    name: "Billy Goat Trail (Sections B & C)",
    description:
      "Rocky, moderately challenging terrain with waterfalls, rapids, and forest canopy. Leashed dogs permitted on Sections B and C. Best for athletic, trail-experienced dogs on Adventure Walk plans.",
  },
  {
    name: "Falls Road Trail Corridor",
    description:
      "Residential roads and shoulder paths along Falls Road with access to local trailheads. Used for standard neighborhood walks near homes along the Falls Road corridor.",
  },
  {
    name: "Great Falls Overlook Trails",
    description:
      "Short, scenic trails leading to overlooks of the Potomac River rapids. Good for a quick, enriching detour during longer walks — dogs enjoy the sounds, mist, and varied terrain.",
  },
];

const faqs = [
  {
    question: "Can my dog walk at Great Falls Park?",
    answer:
      "Yes. Dogs are welcome at Great Falls Park on-leash. The C&O Canal towpath and Billy Goat Trail Sections B and C are all accessible to leashed dogs. We include Great Falls Park trail access as part of our Adventure Walk plan, which includes transportation if needed.",
  },
  {
    question: "Do you pick up dogs near Great Falls for trail walks?",
    answer:
      "Yes. If you live near Great Falls Park — in Great Falls Estates, along Falls Road, or in nearby Potomac neighborhoods — we can incorporate trail walks as part of a Fitness or Adventure Walk. For homes farther from the park, our Adventure Walk plan includes transportation to and from the trailhead.",
  },
  {
    question: "Is the C&O Canal towpath safe for dogs?",
    answer:
      "The towpath is one of the safest trail environments in the area for dogs. It is flat, wide, well-maintained, and separated from vehicle traffic. Dogs must be on-leash. Our walkers carry water, watch for wildlife, and adjust pace based on weather conditions. The towpath is suitable for dogs of all fitness levels.",
  },
  {
    question: "What neighborhoods near Great Falls Park do you serve?",
    answer:
      "We serve Great Falls Estates, Potomac Falls, River Falls, Avenel, Cabin John, Carderock Springs, and all Potomac neighborhoods with access to the Falls Road corridor and the C&O Canal. If you live near Great Falls Park and want trail-focused walks, we are the right fit.",
  },
];

export default function DogWalkingGreatFallsParkPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Service Area", href: "/service-area" }, { name: "Near Great Falls Park", href: "/dog-walking-near-great-falls-park" }]} />
      <Hero
        title="Dog Walking Near Great Falls Park — Potomac, MD"
        subtitle="Professional dog walks along the C&O Canal towpath, Billy Goat Trail, and the neighborhoods surrounding Great Falls Park. Solo walks with GPS tracking."
      />

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Dog Walking Along the Potomac River and Great Falls
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Great Falls Park and the C&amp;O Canal towpath offer some of the best dog walking terrain in the Washington, DC area. Dramatic river views, historic canal locks, rocky trails, and forest canopy provide an unmatched environment for dogs who thrive on exploration and varied terrain.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Potomac Dog Walking provides professional dog walking for homeowners near Great Falls Park — including Great Falls Estates, River Falls, Potomac Falls, and neighborhoods along the Falls Road corridor. Whether your dog needs a standard neighborhood walk or a trail adventure along the C&amp;O Canal, our walkers deliver consistent, high-quality care with GPS tracking and detailed post-visit reports.
          </p>
          <p className="text-gray-600 leading-relaxed">
            All walks are solo walks. Your dog gets one-on-one attention from a background-checked, Pet First Aid-certified walker who tailors the route and pace to your dog&apos;s breed, age, and energy level.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Trails and Walking Routes Near Great Falls
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {trails.map((t) => (
              <div key={t.name} className="bg-white rounded-lg border border-green-100 p-5">
                <h3 className="font-bold text-gray-900 mb-1">{t.name}</h3>
                <p className="text-gray-600 text-sm">{t.description}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 mt-6 text-center">
            Explore all options in our{" "}
            <Link href="/best-dog-walking-routes-potomac" className="text-green-800 underline hover:text-green-600">
              guide to the best dog walking routes in Potomac &rarr;
            </Link>
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Who Benefits from Trail Walking Near Great Falls
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Trail walks near Great Falls are especially valuable for:
          </p>
          <ul className="space-y-3 text-gray-600 mb-4">
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              <strong>High-energy breeds</strong> — Labradors, Golden Retrievers, German Shepherds, and other active breeds that need more than a neighborhood stroll
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              <strong>Dogs who need mental stimulation</strong> — The varied terrain, wildlife scents, and changing environments of trail walks provide natural enrichment
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              <strong>Reactive dogs</strong> who do better in open, natural environments with fewer triggers than neighborhood sidewalks. Read more about our{" "}
              <Link href="/dog-walking-reactive-dogs-potomac" className="text-green-800 underline hover:text-green-600">reactive dog walking service</Link>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              <strong>Dogs recovering from behavioral issues</strong> — Structured trail walks with a consistent walker help build confidence and reduce anxiety
            </li>
          </ul>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-amber-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Neighborhoods Near Great Falls Park We Serve
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {["Great Falls Estates", "River Falls", "Potomac Falls", "Avenel", "Cabin John", "Carderock Springs", "Potomac Hills", "Glen Hills"].map((name) => (
              <div key={name} className="bg-white rounded-lg border border-gray-200 p-3">
                <span className="font-semibold text-gray-900 text-sm">{name}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-600 mt-6">
            We also provide dog walking throughout the broader Potomac area:
          </p>
          <ul className="space-y-2 text-gray-600 mt-3">
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              <Link href="/dog-walking-potomac-md" className="text-green-800 underline hover:text-green-600">Dog Walking in Potomac, MD</Link>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              <Link href="/dog-walking-north-potomac" className="text-green-800 underline hover:text-green-600">Dog Walking in North Potomac</Link>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              <Link href="/dog-walking-avenel-potomac" className="text-green-800 underline hover:text-green-600">Dog Walking in Avenel</Link>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              <Link href="/dog-walking-travilah" className="text-green-800 underline hover:text-green-600">Dog Walking in Travilah</Link>
            </li>
          </ul>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <ContactSection />
    </>
  );
}

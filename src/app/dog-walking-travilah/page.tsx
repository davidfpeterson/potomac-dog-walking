import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dog Walking in Travilah MD | Local Dog Walkers",
  description:
    "Professional dog walking in Travilah, MD. Serving Travilah estates, Piney Meetinghouse Rd, and Travilah Rd communities. Insured, GPS-tracked solo walks. Call (301) 265-3647.",
};

const neighborhoods = [
  {
    name: "Travilah Estates",
    description:
      "Large-lot custom homes along Travilah Road with private driveways and wooded buffers. Walks follow low-traffic neighborhood roads with mature tree cover and ample shade year-round.",
  },
  {
    name: "Piney Meetinghouse Road Area",
    description:
      "Quiet rural-feel roads with horse farms and open fields. Our walkers use the wide shoulders and connecting lanes for extended, scenic routes away from busy corridors.",
  },
  {
    name: "Glen Road Corridor",
    description:
      "Established properties along Glen Road with access to Travilah community trails. Dogs enjoy the varied terrain and seasonal changes that make this area ideal for enriching walks.",
  },
  {
    name: "Dufief and Surrounds",
    description:
      "Neighborhoods near Dufief Elementary with sidewalks, community green spaces, and easy access to the stream valley trails that connect to Muddy Branch Greenway.",
  },
];

const faqs = [
  {
    question: "Is Travilah within your service area?",
    answer:
      "Yes. Travilah is one of our core service areas. We serve homeowners along Travilah Road, Piney Meetinghouse Road, Glen Road, and throughout the surrounding communities. Travilah's proximity to central Potomac means our walkers can serve the area efficiently throughout the day.",
  },
  {
    question: "Are Travilah's roads safe for dog walking?",
    answer:
      "Travilah has a mix of low-traffic neighborhood roads and busier corridors like Travilah Road itself. Our walkers are trained to select the safest routes based on your home's location — favoring quiet side streets, community paths, and the stream valley trails that connect many Travilah neighborhoods. All walks are on-leash for safety.",
  },
  {
    question: "Can my dog walk on the trails near Travilah?",
    answer:
      "Absolutely. Travilah has excellent access to natural surface trails along the stream valleys and connecting paths to the Muddy Branch Greenway. For standard walks, your walker uses neighborhood roads and paths near your home. For Adventure Walks, we can include trail sections or transport your dog to the C&O Canal towpath or Seneca Creek State Park.",
  },
  {
    question: "What walk lengths do you offer in Travilah?",
    answer:
      "We offer the same four walk options in Travilah as throughout our service area: Relief Walk (~15 min), Signature Walk (~30 min), Fitness Walk (~45 min), and Adventure Walk (~60 min). Most Travilah clients choose Signature or Fitness Walks due to the excellent walking infrastructure in the area.",
  },
];

export default function DogWalkingTravilahPage() {
  return (
    <>
      <Hero
        title="Dog Walking in Travilah, MD"
        subtitle="Professional solo walks for dogs in Travilah estates, Piney Meetinghouse Road, and surrounding communities. Insured, background-checked walkers who know Travilah's roads and trails."
      />

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Professional Dog Walking for Travilah Homeowners
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Travilah sits in the northern part of the Potomac area, known for its spacious properties, quiet country roads, and proximity to natural areas. It is one of the most scenic parts of Montgomery County for dog walking — and one of the most underserved by on-demand platforms that focus on denser urban areas.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Potomac Dog Walking has served Travilah homeowners since 2009. Our walkers know which roads have safe shoulders, where the connector trails are, and how to build routes that give your dog maximum stimulation without unnecessary exposure to traffic. Every walk is a solo walk with GPS tracking, timestamped reports, photos, and a written summary.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We offer walks from 15 to 60 minutes, plus{" "}
            <Link href="/services/canine-enrichment" className="text-green-800 underline hover:text-green-600">canine enrichment</Link> and{" "}
            <Link href="/services/medication-administration" className="text-green-800 underline hover:text-green-600">medication administration</Link> add-ons. View our{" "}
            <Link href="/services" className="text-green-800 underline hover:text-green-600">full list of services and pricing</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Travilah Neighborhoods We Serve
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {neighborhoods.map((n) => (
              <div key={n.name} className="bg-white rounded-lg border border-gray-200 p-5">
                <h3 className="font-bold text-gray-900 mb-1">{n.name}</h3>
                <p className="text-gray-600 text-sm">{n.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Why Travilah Dogs Benefit from Professional Walking
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Travilah properties are often large with fenced yards — but a yard alone does not replace a structured walk. Dogs need changing scenery, new scents, and sustained movement to stay mentally healthy and physically fit. Many Travilah homeowners are professionals who commute to DC, Bethesda, or Northern Virginia, leaving their dogs home for extended periods during the workday.
          </p>
          <p className="text-gray-600 leading-relaxed">
            A consistent{" "}
            <Link href="/midday-dog-walking-potomac" className="text-green-800 underline hover:text-green-600">midday walk</Link> breaks up the day, reduces anxiety, and gives your dog structured exercise and socialization. Our walkers build a relationship with your dog over time, providing familiar, reliable care that your dog looks forward to every day.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-amber-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Local Parks and Trails Near Travilah
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Travilah has excellent access to natural areas that make walks more enriching:
          </p>
          <ul className="space-y-3 text-gray-600">
            <li className="flex gap-3 items-start">
              <span className="text-amber-600 text-xl leading-none">&#8226;</span>
              <strong>Muddy Branch Greenway</strong> — Paved multi-use trail connecting North Potomac neighborhoods to parks and open space
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-amber-600 text-xl leading-none">&#8226;</span>
              <strong>Seneca Creek State Park</strong> — Over 6,300 acres with 50 miles of hiking trails, a short drive from Travilah
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-amber-600 text-xl leading-none">&#8226;</span>
              <strong>C&amp;O Canal Towpath</strong> — Historic trail along the Potomac River with flat terrain and river views
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-amber-600 text-xl leading-none">&#8226;</span>
              <strong>Stream Valley Trails</strong> — Natural surface trails along Muddy Branch and its tributaries
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-4">
            Explore more in our{" "}
            <Link href="/best-dog-walking-routes-potomac" className="text-green-800 underline hover:text-green-600">guide to the best dog walking routes in Potomac</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
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
              <Link href="/dog-walking-avenel-potomac" className="text-green-800 underline hover:text-green-600">Dog Walking in Avenel, Potomac</Link>
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

import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Link from "next/link";

import Breadcrumbs from "@/components/Breadcrumbs";
export const metadata: Metadata = {
  title: "Dog Walking in North Potomac MD | Local Dog Walkers",
  description:
    "Professional dog walking in North Potomac, MD. Serving Fallsreach, Kentlands-adjacent, Travilah Rd corridors, and Darnestown Rd communities. Call (301) 265-3647.",
  alternates: { canonical: "/dog-walking-north-potomac" },
};

const neighborhoods = [
  {
    name: "Fallsreach",
    description:
      "Newer townhome and single-family community off Darnestown Road with sidewalk-lined streets and pocket parks. Our walkers use the loop trails and green spaces between clusters for consistent, low-traffic routes.",
  },
  {
    name: "North Potomac Village",
    description:
      "Walkable community near Shop House Road with access to local shops. Dog walks start from your door and loop through the mixed-use paths connecting residential blocks to retail areas.",
  },
  {
    name: "Travilah Road Corridor",
    description:
      "Established homes on generous lots along Travilah Road. Walks follow quiet neighborhood feeder roads with mature tree canopy and minimal through-traffic — ideal for dogs who need calm environments.",
  },
  {
    name: "Darnestown Road Communities",
    description:
      "Subdivisions between Darnestown Road and Muddy Branch Road with cul-de-sacs and green buffer zones. Our walkers know the cut-throughs and connector paths that make these neighborhoods efficient walking routes.",
  },
  {
    name: "Quince Orchard Valley",
    description:
      "Family-oriented neighborhood with wide sidewalks, community playgrounds, and a network of paved paths that link to the Muddy Branch Greenway — a favorite extended route for high-energy dogs.",
  },
];

const faqs = [
  {
    question: "Do you serve all of North Potomac?",
    answer:
      "Yes. We serve homeowners throughout North Potomac, including Fallsreach, Quince Orchard Valley, communities along Travilah Road and Darnestown Road, and adjacent neighborhoods. If you are unsure whether your address is within our service area, give us a call and we will confirm.",
  },
  {
    question: "How is North Potomac different from Potomac for dog walking?",
    answer:
      "North Potomac tends to have newer construction with more sidewalks, community paths, and HOA-maintained green spaces. This means more paved, accessible walking routes compared to the larger estate lots in central Potomac. Our walkers adapt routes based on the specific infrastructure of your neighborhood.",
  },
  {
    question: "What parks are accessible from North Potomac?",
    answer:
      "North Potomac has excellent access to Muddy Branch Greenway, South Germantown Recreational Park, and the network of stream valley trails along Muddy Branch. For Adventure Walks, we can transport your dog to the C&O Canal towpath or Seneca Creek State Park, both within a short drive.",
  },
  {
    question: "Do you offer midday walks for people who commute to DC?",
    answer:
      "Absolutely. Many of our North Potomac clients are federal workers and professionals who commute to DC, Bethesda, or Rockville. Midday walks between 10 AM and 2 PM are our most popular time slot. We guarantee your dog gets consistent exercise and bathroom breaks while you are at work.",
  },
];

export default function DogWalkingNorthPotomacPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Service Area", href: "/service-area" }, { name: "North Potomac", href: "/dog-walking-north-potomac" }]} />
      <Hero
        title="Dog Walking in North Potomac, MD"
        subtitle="Professional solo walks for dogs in Fallsreach, Quince Orchard Valley, and North Potomac neighborhoods. Background-checked, insured walkers who know your streets."
      />

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Professional Dog Walking for North Potomac Homeowners
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            North Potomac sits between Darnestown Road and the Muddy Branch corridor, with newer communities, sidewalk networks, and green spaces that make it one of the best areas in Montgomery County for dog walking. Whether you live in Fallsreach, along the Travilah Road corridor, or near Quince Orchard Valley, our walkers know the safest and most engaging routes for your dog.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Most of our North Potomac clients are working professionals who commute to DC, Bethesda, or Rockville and need reliable midday care for their dogs. We provide consistent, GPS-tracked solo walks with detailed post-visit reports so you always know your dog was exercised, stimulated, and cared for while you were at work.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Every walk is a solo walk — your dog gets one-on-one attention from a dedicated, background-checked walker. We offer walks from 15 to 60 minutes and can add{" "}
            <Link href="/services/canine-enrichment" className="text-green-800 underline hover:text-green-600">canine enrichment</Link> or{" "}
            <Link href="/services/medication-administration" className="text-green-800 underline hover:text-green-600">medication administration</Link> to any visit.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            North Potomac Neighborhoods We Serve
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
            Walking Routes and Trails Near North Potomac
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            North Potomac offers excellent walking infrastructure. The Muddy Branch Greenway provides a paved multi-use trail that runs through the heart of the area, connecting residential neighborhoods to parks and open space. Our walkers frequently use this trail for Fitness and Adventure Walks.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            For standard neighborhood walks, most North Potomac communities have internal sidewalk loops, HOA paths, and small community parks that provide variety without requiring transportation. High-energy dogs benefit from the stream valley trails along Muddy Branch, which offer natural terrain and changing scenery.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Want to explore all the walking options in the area? Check out our{" "}
            <Link href="/best-dog-walking-routes-potomac" className="text-green-800 underline hover:text-green-600">guide to the best dog walking routes in Potomac</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-amber-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Typical North Potomac Clients
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            North Potomac is home to many dual-income households and federal workers who leave early and return late. Dogs in these homes spend 8 to 10 hours alone — far too long without exercise, stimulation, or a bathroom break. A consistent midday walk solves this problem and gives your dog something to look forward to.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We also serve retirees who want their dogs walked while they travel or attend appointments, and families with young children who need help managing an active dog during busy weeks. Whatever your situation, we tailor the walk to your dog and your schedule. See our{" "}
            <Link href="/services" className="text-green-800 underline hover:text-green-600">plans and pricing</Link> or learn{" "}
            <Link href="/how-to-choose-dog-walker-potomac" className="text-green-800 underline hover:text-green-600">how to choose the right dog walker</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Nearby Areas We Serve
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            In addition to North Potomac, we provide dog walking throughout the surrounding area:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              <Link href="/dog-walking-potomac-md" className="text-green-800 underline hover:text-green-600">Dog Walking in Potomac, MD</Link> — Our core service area
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              <Link href="/dog-walking-travilah" className="text-green-800 underline hover:text-green-600">Dog Walking in Travilah, MD</Link>
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

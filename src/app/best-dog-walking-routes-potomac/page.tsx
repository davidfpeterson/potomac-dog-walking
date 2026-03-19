import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Dog Walking Routes in Potomac MD | Local Guide",
  description:
    "Local guide to the best dog walking routes in Potomac, MD. C&O Canal towpath, Cabin John trails, neighborhood loops, and more. By Potomac Dog Walking.",
};

const routes = [
  {
    name: "C&O Canal Towpath — Great Falls to Swains Lock",
    difficulty: "Easy",
    surface: "Crushed gravel",
    length: "Variable (1–10+ miles)",
    dogs: "On-leash required",
    description:
      "The towpath is Potomac's signature walking route. Flat terrain, river views, historic canal locks, and shaded sections make it suitable for dogs of all fitness levels. The Great Falls section is the most scenic, with overlooks of the Potomac rapids. Parking available at Great Falls Tavern Visitor Center. Our walkers frequently use this route for Adventure and Fitness Walks.",
  },
  {
    name: "Cabin John Regional Park — Dog Park & Trails",
    difficulty: "Easy to Moderate",
    surface: "Paved + natural surface",
    length: "3+ miles of trails",
    dogs: "On-leash on trails, off-leash in dog park",
    description:
      "Cabin John offers a dedicated fenced dog park with separate areas for large and small dogs, plus wooded trails and open fields. The Cabin John Trail connects to the Capital Crescent Trail. Great for dogs who need variety — start with a trail walk and finish with off-leash time in the fenced area.",
  },
  {
    name: "Billy Goat Trail — Sections B & C",
    difficulty: "Moderate to Challenging",
    surface: "Rocky, natural terrain",
    length: "Section B: 1.4 mi, Section C: 1.6 mi",
    dogs: "On-leash, Sections B & C only",
    description:
      "Rocky terrain with river views, waterfalls, and forest canopy. Challenging enough for athletic dogs who need more than a flat walk. Not suitable for puppies, seniors, or dogs with joint issues. Our walkers recommend this for high-energy breeds on Adventure Walk plans.",
  },
  {
    name: "Muddy Branch Greenway",
    difficulty: "Easy",
    surface: "Paved",
    length: "4+ miles",
    dogs: "On-leash required",
    description:
      "Paved multi-use trail running through North Potomac, connecting residential neighborhoods to parks and open space. Flat terrain, good shade, and minimal road crossings. Excellent for standard walks from homes in North Potomac and Travilah. Used frequently for Signature and Fitness Walks.",
  },
  {
    name: "Seneca Creek State Park",
    difficulty: "Easy to Moderate",
    surface: "Natural surface + paved sections",
    length: "50+ miles of trails",
    dogs: "On-leash required",
    description:
      "Massive park northwest of Potomac with diverse terrain — meadows, forests, stream crossings, and lake views. A short drive from most Potomac neighborhoods. Ideal for Adventure Walks when you want to give your dog a completely new environment.",
  },
  {
    name: "Falls Road Neighborhood Loops",
    difficulty: "Easy",
    surface: "Sidewalk + road shoulder",
    length: "Variable",
    dogs: "On-leash",
    description:
      "Residential walking routes along and off Falls Road, connecting neighborhoods like Potomac Village, Bradley Farms, and Glen Hills. Mature trees, low traffic on side streets, and convenient access from most central Potomac homes. This is where most daily Signature Walks happen.",
  },
  {
    name: "Avenel Golf Course Perimeter",
    difficulty: "Easy",
    surface: "Sidewalk + road",
    length: "~2 miles loop",
    dogs: "On-leash",
    description:
      "A scenic loop around TPC Potomac at Avenel on quiet residential roads. Open views of the golf course, mature trees, and minimal vehicle traffic. One of the most pleasant neighborhood walks in all of Potomac.",
  },
  {
    name: "Rock Creek Regional Park — Lake Needwood",
    difficulty: "Easy",
    surface: "Paved + natural surface",
    length: "3+ miles of trails",
    dogs: "On-leash required",
    description:
      "Lake Needwood offers paved lakeside paths and natural surface trails through wooded areas. Scenic views, bird watching opportunities, and a peaceful environment. A good alternative for dogs who have been to the towpath many times and need a change of scenery.",
  },
];

const faqs = [
  {
    question: "Can my walker take my dog to these trails during a regular walk?",
    answer:
      "Trail visits are typically part of our Adventure Walk (~60 min) or Fitness Walk (~45 min) plans. Standard Signature Walks use neighborhood routes near your home. If you live near a trail access point, your walker may incorporate a trail section into a Signature Walk when the route allows it.",
  },
  {
    question: "Are dogs allowed off-leash on Potomac trails?",
    answer:
      "Most trails in the Potomac area require dogs to be on-leash. The exception is the fenced dog park area at Cabin John Regional Park, where dogs can be off-leash within the designated enclosure. Potomac Dog Walking always walks dogs on-leash for safety, regardless of local regulations.",
  },
  {
    question: "Which routes are best for reactive dogs?",
    answer:
      "The C&O Canal towpath during off-peak hours (weekday mornings and midday), stream valley trails, and cul-de-sac neighborhood routes offer the widest sight lines and fewest surprise encounters. Our walkers select routes specifically based on your dog's triggers and threshold distances.",
  },
  {
    question: "Do you provide transportation to trailheads?",
    answer:
      "Yes. Adventure Walk plans include transportation to and from trailheads. If your home is close to a trail access point, transportation may not be necessary for Fitness Walks. We discuss the best approach during your consultation.",
  },
];

export default function BestDogWalkingRoutesPage() {
  return (
    <>
      <Hero
        title="Best Dog Walking Routes in Potomac, MD"
        subtitle="A local guide to Potomac's top trails, parks, and neighborhood walking routes — from the C&O Canal towpath to quiet cul-de-sac loops. Written by walkers who use them every day."
      />

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Potomac&apos;s Best Walking Routes for Dogs
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Potomac, Maryland sits at the intersection of suburban neighborhoods and natural areas, making it one of the best places in the DC metro for dog walking. From the historic C&amp;O Canal towpath to quiet cul-de-sac neighborhoods, there is a route for every breed, energy level, and temperament.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our team has walked thousands of routes across Potomac since 2009. This guide shares the trails, parks, and neighborhood loops we use most frequently — and which dogs benefit from each one. Whether you walk your own dog or use a{" "}
            <Link href="/services/dog-walking" className="text-green-800 underline hover:text-green-600">professional dog walking service</Link>, these routes will help you give your dog the best possible outing.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Top Dog Walking Routes
          </h2>
          <div className="space-y-6">
            {routes.map((route) => (
              <div key={route.name} className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{route.name}</h3>
                <div className="flex flex-wrap gap-3 mb-3">
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">{route.difficulty}</span>
                  <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full font-medium">{route.surface}</span>
                  <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full font-medium">{route.length}</span>
                  <span className="inline-block bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full font-medium">{route.dogs}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{route.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Choosing the Right Route for Your Dog
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-600 pl-4">
              <h3 className="font-bold text-gray-900">Puppies and Senior Dogs</h3>
              <p className="text-gray-600 text-sm">Flat, paved routes with shade. The Muddy Branch Greenway, neighborhood loops, and the C&amp;O Canal towpath are ideal. Avoid rocky terrain like Billy Goat Trail.</p>
            </div>
            <div className="border-l-4 border-green-600 pl-4">
              <h3 className="font-bold text-gray-900">High-Energy Breeds</h3>
              <p className="text-gray-600 text-sm">Longer routes with varied terrain. Billy Goat Trail Sections B &amp; C, Seneca Creek State Park, and extended C&amp;O Canal towpath walks provide the distance and stimulation these dogs need.</p>
            </div>
            <div className="border-l-4 border-green-600 pl-4">
              <h3 className="font-bold text-gray-900">Reactive Dogs</h3>
              <p className="text-gray-600 text-sm">
                Wide sight lines and low foot traffic. Off-peak C&amp;O Canal towpath, stream valley trails, and quiet cul-de-sac neighborhoods. Learn more about our{" "}
                <Link href="/dog-walking-reactive-dogs-potomac" className="text-green-800 underline hover:text-green-600">reactive dog walking approach</Link>.
              </p>
            </div>
            <div className="border-l-4 border-green-600 pl-4">
              <h3 className="font-bold text-gray-900">Dogs Who Love Water</h3>
              <p className="text-gray-600 text-sm">The C&amp;O Canal towpath and Rock Creek&apos;s Lake Needwood offer water access. Dogs can wade (on-leash) in shallow creek crossings along the Seneca Creek trails.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-warm-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Let Us Walk These Routes for You
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Potomac Dog Walking uses these routes every day. Our walkers select the best route for your dog based on their breed, energy level, temperament, and the season. Whether you need a{" "}
            <Link href="/midday-dog-walking-potomac" className="text-green-800 underline hover:text-green-600">midday walk while you are at work</Link> or a{" "}
            <Link href="/same-day-dog-walking-potomac" className="text-green-800 underline hover:text-green-600">same-day walk for an unexpected schedule change</Link>, we deliver consistent, professional care on the routes that suit your dog best.
          </p>
          <p className="text-gray-600 leading-relaxed">
            <Link href="/services" className="text-green-800 underline hover:text-green-600">View our walking plans</Link> |{" "}
            <Link href="/dog-walking-prices-potomac-md" className="text-green-800 underline hover:text-green-600">See pricing</Link> |{" "}
            <Link href="/get-started-dog-walker-potomac" className="text-green-800 underline hover:text-green-600">Get started</Link>
          </p>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <ContactSection />
    </>
  );
}

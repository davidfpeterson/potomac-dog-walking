import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Service Area | Dog Walking in Potomac MD",
  description:
    "Dog walking service area in Potomac, MD. Serving Avenel, River Falls, Cabin John, Park Potomac, Bradley Farms, and surrounding neighborhoods.",
};

const neighborhoods = [
  { name: "Avenel", description: "Luxury homes near TPC Potomac with tree-lined streets ideal for quiet, focused walks." },
  { name: "River Falls", description: "~500 homes along wide streets near the C&O Canal and Potomac River." },
  { name: "Potomac Falls", description: "260+ luxury homes on spacious two-acre-plus lots with private roads." },
  { name: "Potomac Village", description: "Central hub with walkable residential streets surrounding shops and restaurants." },
  { name: "Bradley Farms", description: "Well-established neighborhood with mature trees and sidewalks year-round." },
  { name: "Cabin John", description: "Tight-knit community near Cabin John Regional Park and dog park." },
  { name: "Carderock Springs", description: "Mid-century modern homes in a wooded setting near the Cabin John Trail." },
  { name: "Copenhaver", description: "Family-friendly with quiet streets and proximity to parks and recreation." },
  { name: "Falconhurst", description: "Large lots and a peaceful setting for relaxed, scenic walks." },
  { name: "Glen Hills", description: "Spacious properties surrounded by mature trees with shaded walking routes." },
  { name: "Great Falls Estates", description: "Large estate properties near Great Falls Park with scenic trails." },
  { name: "Kentsdale Estates", description: "Quiet, established neighborhood with generous lots and low-traffic streets." },
  { name: "Lake Potomac", description: "Community centered around a private lake with natural beauty." },
  { name: "Park Potomac", description: "Newer, walkable community with sidewalks, green spaces, and shops." },
  { name: "Potomac Crest", description: "Upscale residential area near Potomac's main corridors and parks." },
  { name: "Potomac Hills", description: "Varied home styles with good access to local trails and walking paths." },
  { name: "Saddle Ridge", description: "Country-like character with large lots and low traffic." },
  { name: "Seven Locks", description: "Spacious southwest Potomac neighborhood with grassy lots." },
  { name: "Winterset", description: "Well-maintained community with mature landscaping and walkable streets." },
];

const parks = [
  { name: "C&O Canal Towpath", description: "Historic multi-use trail along the Potomac River — flat terrain, river views, miles of walking. Dogs welcome on-leash." },
  { name: "Cabin John Regional Park", description: "Dedicated dog park with separate areas for large and small dogs, plus wooded trails and open fields." },
  { name: "Great Falls Park", description: "Scenic trails along the Potomac River with challenging terrain and stunning views. Dogs welcome on-leash." },
  { name: "Seneca Creek State Park", description: "Over 6,300 acres with 50 miles of hiking trails. Leashed dogs welcome throughout." },
  { name: "Billy Goat Trail (B & C)", description: "Waterfalls, rapids, and rocky terrain for adventurous outings. Leashed dogs permitted." },
  { name: "Rock Creek Regional Park", description: "Lake Needwood with trails, open spaces, and scenic views. Dogs welcome on-leash." },
];

const resources = [
  { name: "Potomac Animal Hospital", detail: "Full-service veterinary and surgical facility at 10020 River Rd." },
  { name: "Healthy Hound Playground", detail: "Dog daycare, boarding, and grooming in the Potomac area." },
  { name: "Potomac Furbabies", detail: "Grooming salon at 10100 Falls Road with cage-free environment." },
  { name: "Elysiem Salon", detail: "Appointment-only pet grooming at 12500 Park Potomac Ave." },
];

const faqs = [
  {
    question: "Do you serve areas outside of Potomac?",
    answer:
      "Our primary service area is Potomac, MD. Depending on location, we may also serve adjacent areas of Montgomery County. Contact us to confirm whether your address falls within our service range.",
  },
  {
    question: "How do your walkers know the best routes in my neighborhood?",
    answer:
      "Our walkers live in and around Potomac and are familiar with the area's streets, sidewalks, trails, and parks. During your free meet and greet, we discuss the best walking routes near your home based on your dog's needs, traffic patterns, and available green space.",
  },
  {
    question: "Can my dog go to the trails and parks during a regular walk?",
    answer:
      "Trail visits are typically part of our Adventure Walk plan, which includes transportation. During standard walks, your walker uses the streets, sidewalks, and green spaces near your home. If you live near a trail or park entrance, your walker may incorporate it into a Signature or Fitness Walk.",
  },
];

export default function ServiceAreaPage() {
  return (
    <>
      <Hero
        title="Service Area — Dog Walking in Potomac, MD"
        subtitle="Professional dog walking and pet care throughout Potomac's established neighborhoods. We know the area's best walking routes, trails, and green spaces."
      />

      {/* Neighborhoods */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Image
            src="/images/dog-walking-wooded-trail-potomac.jpg"
            alt="Dog walker and Labrador on a shaded wooded trail near Potomac MD"
            width={800}
            height={533}
            className="w-full h-auto rounded-xl mb-8"
          />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Potomac Neighborhoods We Serve
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {neighborhoods.map((n) => (
              <div key={n.name} className="bg-white rounded-lg border border-gray-200 p-4">
                <h3 className="font-bold text-gray-900 mb-1">{n.name}</h3>
                <p className="text-gray-600 text-sm">{n.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parks */}
      <section className="py-16 sm:py-20 bg-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Dog-Friendly Parks and Trails Near Potomac
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {parks.map((p) => (
              <div key={p.name} className="bg-white rounded-lg border border-green-100 p-5">
                <h3 className="font-bold text-gray-900 mb-1">{p.name}</h3>
                <p className="text-gray-600 text-sm">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Resources */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Dog-Friendly Resources in Potomac
          </h2>
          <p className="text-gray-600 mb-6">
            We recommend the following local businesses for additional pet care needs:
          </p>
          <div className="space-y-4">
            {resources.map((r) => (
              <div key={r.name} className="flex gap-3 items-start">
                <span className="text-green-600 text-xl leading-none">&#8226;</span>
                <div>
                  <span className="font-semibold text-gray-900">{r.name}</span>
                  <span className="text-gray-600"> — {r.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <ContactSection />
    </>
  );
}

import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Link from "next/link";

const services = [
  {
    title: "Dog Walking",
    description:
      "Solo walks from 15 to 60 minutes, customized to your dog's fitness and energy level.",
    href: "/services/dog-walking",
    icon: "🦮",
  },
  {
    title: "Canine Enrichment",
    description:
      "Mental stimulation activities including scent work, exploration, and socialization exercises.",
    href: "/services/canine-enrichment",
    icon: "🧠",
  },
  {
    title: "Medication Administration",
    description:
      "Reliable administration of prescribed medications during scheduled visits.",
    href: "/services/medication-administration",
    icon: "💊",
  },
  {
    title: "Backyard Clean-up",
    description:
      "Waste removal to keep your yard clean and safe for your family and pets.",
    href: "/services/backyard-cleanup",
    icon: "🌿",
  },
];

const faqs = [
  {
    question: "How do I get started with Potomac Dog Walking?",
    answer:
      "Schedule a free meet and greet so we can learn about your dog's needs, temperament, and routine. During the visit, we discuss service options, answer your questions, and make sure our team is the right fit for your family. There is no obligation, and we encourage you to ask us anything.",
  },
  {
    question: "Are your dog walkers insured and background-checked?",
    answer:
      "Yes. Every member of our team undergoes a criminal background check and is certified in Pet First Aid and CPR. Potomac Dog Walking is fully insured and bonded. We are active members of Pet Sitters International and follow industry best practices for pet safety and care.",
  },
  {
    question: "What areas of Potomac do you serve?",
    answer:
      "We serve homeowners throughout Potomac, MD, including neighborhoods like Avenel, River Falls, Potomac Falls, Cabin John, Carderock Springs, Bradley Farms, Park Potomac, Seven Locks, and surrounding communities in Montgomery County.",
  },
  {
    question: "Do you send updates during or after each walk?",
    answer:
      "Yes. After every visit, you receive a detailed report through our scheduling platform. Reports include GPS tracking of the walk route, timestamped arrival and departure, a written summary, photos, and videos. You always know where your dog went and how they did.",
  },
  {
    question: "Do you offer a satisfaction guarantee?",
    answer:
      "Yes. We offer a money-back guarantee during your first four weeks. If you or your dog are not completely satisfied, we refund the amount you paid. We are confident in the quality of our care and want you to be too.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        title="Professional Dog Walking in Potomac, MD"
        subtitle="Personalized solo walks, canine enrichment, and pet care from background-checked, certified professionals. Trusted by Potomac's most discerning dog owners since 2009."
      />

      {/* Trust Bar */}
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-center text-sm text-gray-600">
            <div>
              <span className="block text-2xl font-bold text-green-800">Since 2009</span>
              Locally Owned
            </div>
            <div>
              <span className="block text-2xl font-bold text-green-800">20,000+</span>
              Visits Per Year
            </div>
            <div>
              <span className="block text-2xl font-bold text-green-800">7x Winner</span>
              Best of Bethesda
            </div>
            <div>
              <span className="block text-2xl font-bold text-green-800">100%</span>
              Insured &amp; Bonded
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Dog Walking and Enrichment Services in Potomac
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We offer a full range of professional dog walking services designed around your dog&apos;s
            individual needs. Every walk is a solo walk — your dog receives one-on-one attention from
            a dedicated walker. Whether your dog needs a quick relief walk or an extended adventure
            along the C&amp;O Canal towpath, our team provides consistent, high-quality care.
          </p>
          <p className="text-gray-600 leading-relaxed">
            All visits include GPS tracking, timestamped arrival and departure, written summaries,
            photos, and video updates through our scheduling platform.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-20 bg-warm-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            Services We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.href} {...s} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/services"
              className="text-green-800 font-semibold hover:underline"
            >
              View all services &amp; pricing &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            What Makes Potomac Dog Walking Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                ✅
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Certified &amp; Insured</h3>
              <p className="text-gray-600 text-sm">
                Background-checked, Pet First Aid &amp; CPR certified, insured, bonded,
                and members of Pet Sitters International.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                📍
              </div>
              <h3 className="font-bold text-gray-900 mb-2">GPS-Tracked Walks</h3>
              <p className="text-gray-600 text-sm">
                Real-time GPS tracking, timestamped visits, photos, videos, and
                written summaries after every walk via Time to Pet.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                🤝
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Consistent &amp; Reliable</h3>
              <p className="text-gray-600 text-sm">
                Dedicated primary walker, trained backups, guaranteed time slots, and a
                money-back guarantee during your first four weeks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-16 sm:py-20 bg-green-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Serving Potomac&apos;s Finest Neighborhoods
          </h2>
          <p className="text-gray-600 mb-6">
            Avenel, River Falls, Potomac Falls, Potomac Village, Bradley Farms, Cabin John,
            Carderock Springs, Copenhaver, Falconhurst, Glen Hills, Great Falls Estates,
            Kentsdale Estates, Lake Potomac, Park Potomac, Potomac Crest, Potomac Hills,
            Saddle Ridge, Seven Locks, and Winterset.
          </p>
          <Link
            href="/service-area"
            className="text-green-800 font-semibold hover:underline"
          >
            View our full service area &rarr;
          </Link>
        </div>
      </section>

      {/* Reliability */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Reliability You Can Count On
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Potomac Dog Walking is built for consistency. If your regular walker is sick or on
            vacation, a trained backup who knows your dog and your routine steps in — and we
            notify you in advance.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We accept credit card payments through our secure scheduling platform, and recurring
            clients are billed automatically. Our team serves Potomac full-time, and we maintain
            enough capacity to guarantee your time slot even during holidays and peak seasons.
            If you ever have a concern, our owner Dave Peterson is personally reachable and responsive.
          </p>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <ContactSection />
    </>
  );
}

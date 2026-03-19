import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Image from "next/image";
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
      "Give us a call at (301) 265-3647 so we can learn about your dog's needs, temperament, and routine. We'll discuss service options, answer your questions, and make sure our team is the right fit for your family. There is no obligation, and we encourage you to ask us anything.",
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
              <span className="block text-2xl font-bold text-green-800">PSI Member</span>
              Pet Sitters International
            </div>
            <div>
              <span className="block text-2xl font-bold text-green-800">100%</span>
              Insured &amp; Bonded
            </div>
          </div>
        </div>
      </section>

      {/* Intro — First Paragraph Rule: service, location, who, outcome */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Image
            src="/images/dog-walking-potomac-trail.jpg"
            alt="Professional dog walker with black Labrador on a nature trail in Potomac MD"
            width={800}
            height={533}
            className="w-full h-auto rounded-xl mb-8"
            priority
          />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Dog Walking and Enrichment Services in Potomac
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Potomac Dog Walking provides professional dog walking, canine enrichment, medication administration, and backyard clean-up services for homeowners throughout Potomac, Maryland. Every walk is a solo walk, meaning your dog receives one-on-one attention from a dedicated, background-checked walker rather than sharing time with dogs from other households. Whether your dog needs a quick fifteen-minute relief walk or an extended sixty-minute adventure along the C&amp;O Canal towpath, our team delivers consistent, high-quality care that keeps your dog healthy, stimulated, and happy.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            All visits include GPS tracking, timestamped arrival and departure, written summaries, photos, and video updates delivered through our scheduling platform. You always know exactly where your dog went, how long the walk lasted, and how your dog behaved during the visit. Our walkers are certified in Pet First Aid and CPR, fully insured, bonded, and members of{" "}
            <a href="https://www.petsit.com/" target="_blank" rel="noopener noreferrer" className="text-green-800 underline hover:text-green-600">Pet Sitters International</a>.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Potomac Dog Walking has served the Potomac community since 2009, completing over twenty thousand visits per year across neighborhoods including Avenel, River Falls, Cabin John, Park Potomac, Bradley Farms, and Seven Locks. We are one of the most trusted and longest-running pet care providers in Montgomery County.
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

      {/* Why Your Dog Needs a Professional Walker — standalone section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Why Your Dog Needs a Professional Walker in Potomac
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Dogs who spend the workday home alone often develop behavioral issues caused by insufficient exercise and mental stimulation. Restlessness, excessive barking, destructive chewing, weight gain, and separation anxiety are common signs that a dog needs a structured midday walk. A fenced yard provides space to relieve themselves, but it does not deliver the changing scenery, new scents, and sustained movement that a walk through Potomac&apos;s neighborhoods and trails provides.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Professional dog walking addresses these problems at their root. A consistent daily walk burns excess energy, provides socialization opportunities, strengthens the bond between your dog and their walker, and gives your dog something to look forward to each day. Potomac&apos;s location near the{" "}
            <a href="https://www.nps.gov/choh/index.htm" target="_blank" rel="noopener noreferrer" className="text-green-800 underline hover:text-green-600">C&amp;O Canal towpath</a> and{" "}
            <a href="https://www.montgomeryparks.org/parks-and-trails/cabin-john-regional-park/" target="_blank" rel="noopener noreferrer" className="text-green-800 underline hover:text-green-600">Cabin John Regional Park</a> means your dog has access to varied terrain and environments that keep walks interesting throughout the year.
          </p>
        </div>
      </section>

      {/* What Affects the Cost — required by course framework */}
      <section className="py-16 sm:py-20 bg-green-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            What Affects the Cost of Dog Walking in Potomac
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Dog walking rates in Potomac depend on several factors. Walk duration is the primary driver — a fifteen-minute relief walk costs less than a sixty-minute adventure walk. The number of visits per week also affects pricing, with recurring clients receiving better per-walk rates than occasional bookings. If your dog requires medication administration, special handling for behavioral issues, or walks during early morning or evening hours, those factors may also influence the overall cost.
          </p>
          <p className="text-gray-600 leading-relaxed">
            At Potomac Dog Walking, we publish transparent pricing on our{" "}
            <Link href="/services" className="text-green-800 underline hover:text-green-600">services page</Link> so you always know what to expect. There are no hidden fees, no surge pricing, and no long-term contracts. You can adjust your walking plan at any time based on your schedule and your dog&apos;s needs.
          </p>
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
                Every walker is background-checked, Pet First Aid and CPR certified, insured, bonded,
                and a member of Pet Sitters International. We carry commercial liability insurance so your home and your dog are always protected.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                📍
              </div>
              <h3 className="font-bold text-gray-900 mb-2">GPS-Tracked Walks</h3>
              <p className="text-gray-600 text-sm">
                Real-time GPS tracking, timestamped visits, photos, videos, and
                written summaries after every walk delivered through our scheduling platform. You always know where your dog went and how they did.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                🤝
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Consistent &amp; Reliable</h3>
              <p className="text-gray-600 text-sm">
                Dedicated primary walker, trained backups who already know your dog, guaranteed time slots, and a
                money-back guarantee during your first four weeks. We serve Potomac full-time and maintain capacity for holidays and peak seasons.
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
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
            <Link href="/dog-walking-north-potomac" className="text-green-800 font-semibold hover:underline text-sm">
              North Potomac
            </Link>
            <Link href="/dog-walking-travilah" className="text-green-800 font-semibold hover:underline text-sm">
              Travilah
            </Link>
            <Link href="/dog-walking-avenel-potomac" className="text-green-800 font-semibold hover:underline text-sm">
              Avenel
            </Link>
            <Link href="/dog-walking-near-great-falls-park" className="text-green-800 font-semibold hover:underline text-sm">
              Near Great Falls Park
            </Link>
            <Link href="/dog-walking-20854" className="text-green-800 font-semibold hover:underline text-sm">
              20854 Zip Code
            </Link>
          </div>
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
            notify you in advance. We never cancel on you without providing a qualified replacement.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            We accept credit card payments through our secure scheduling platform, and recurring
            clients are billed automatically. Our team serves Potomac full-time, and we maintain
            enough capacity to guarantee your time slot even during holidays and peak seasons.
          </p>
          <p className="text-gray-600 leading-relaxed">
            <strong>Ready to get started?</strong>{" "}
            <a href="tel:3012653647" className="text-green-800 underline hover:text-green-600 font-semibold">Call us at (301) 265-3647</a> to get started. There is no obligation — we want to make sure we are the right fit for your family before you commit.
          </p>
        </div>
      </section>

      {/* Helpful Resources */}
      <section className="py-16 sm:py-20 bg-warm-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            Helpful Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/dog-walking-prices-potomac-md" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md hover:border-green-200 transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Dog Walking Prices in Potomac</h3>
              <p className="text-gray-600 text-sm">Transparent pricing guide with walk options and what&apos;s included.</p>
            </Link>
            <Link href="/best-dog-walking-routes-potomac" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md hover:border-green-200 transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Best Dog Walking Routes</h3>
              <p className="text-gray-600 text-sm">Local guide to Potomac&apos;s top trails, parks, and neighborhood loops.</p>
            </Link>
            <Link href="/how-to-choose-dog-walker-potomac" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md hover:border-green-200 transition-all">
              <h3 className="font-bold text-gray-900 mb-1">How to Choose a Dog Walker</h3>
              <p className="text-gray-600 text-sm">What to look for, what to ask, and red flags to avoid.</p>
            </Link>
            <Link href="/midday-dog-walking-potomac" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md hover:border-green-200 transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Midday Dog Walking</h3>
              <p className="text-gray-600 text-sm">Consistent walks between 10 AM and 2 PM for busy professionals.</p>
            </Link>
            <Link href="/dog-walking-reactive-dogs-potomac" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md hover:border-green-200 transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Walking Reactive Dogs</h3>
              <p className="text-gray-600 text-sm">Solo walks with consistent walkers on low-trigger routes.</p>
            </Link>
            <Link href="/is-dog-walking-worth-it" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md hover:border-green-200 transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Is Dog Walking Worth It?</h3>
              <p className="text-gray-600 text-sm">Benefits, costs, and what to expect for busy dog owners.</p>
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <ContactSection />
    </>
  );
}

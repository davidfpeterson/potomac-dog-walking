import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dog Walking Plans & Pricing | Potomac MD",
  description:
    "Dog walking plans in Potomac, MD. Relief, Signature, Fitness, and Adventure walks. Solo walks with GPS tracking. No contracts.",
};

const plans = [
  {
    name: "Relief Walk",
    duration: "~15 Minutes",
    description:
      "A brief visit to make sure your dog gets outside when they need it most. Ideal for puppies who cannot hold it through the workday, senior dogs who need more frequent breaks, and busy days when you need peace of mind.",
  },
  {
    name: "Signature Walk",
    duration: "~30 Minutes",
    highlight: true,
    description:
      "Our most popular service. Gives your dog enough time for steady movement, thorough sniffing, and interaction with the outdoor environment. Owners consistently report calmer, better-behaved dogs on Signature Walk days.",
  },
  {
    name: "Fitness Walk",
    duration: "~45 Minutes",
    description:
      "Designed for dogs who thrive on activity and need more than a standard walk. Sustained exercise to burn energy, build endurance, and stay at a healthy weight. Great for athletic breeds and younger dogs.",
  },
  {
    name: "Adventure Walk",
    duration: "~60 Minutes",
    description:
      "An extended outing full of exploration and variety. Often visits Potomac's trails, parks, and green spaces. Transportation included. Your dog returns home exercised, stimulated, and ready to rest.",
  },
];

const additionalServices = [
  {
    name: "Canine Enrichment",
    description:
      "Mental stimulation and engagement activities added to your dog's walk or visit.",
    href: "/services/canine-enrichment",
  },
  {
    name: "Medication Administration",
    description:
      "Prescribed medications administered during scheduled visits for dogs on ongoing treatment.",
    href: "/services/medication-administration",
  },
  {
    name: "Backyard Clean-up",
    description:
      "Keeps your yard free of waste so it stays clean and safe for your family.",
    href: "/services/backyard-cleanup",
  },
];

const faqs = [
  {
    question: "How are walks scheduled?",
    answer:
      "All services are booked in 15-minute increments with a two-hour arrival window. You choose the time range that works for your household, and your walker arrives within that window. Recurring clients receive priority scheduling and guaranteed time slots.",
  },
  {
    question: "Is each walk a solo walk?",
    answer:
      "Yes. Every walk is one-on-one. Your dog receives the full, undivided attention of their walker. We do not combine dogs from different households on the same walk.",
  },
  {
    question: "What if I need to cancel or change a walk?",
    answer:
      "We understand that schedules change. Our scheduling platform makes it easy to adjust, cancel, or add visits. Recurring clients enjoy flexible scheduling with guaranteed slots, so changes are simple to manage.",
  },
  {
    question: "Do you offer a money-back guarantee?",
    answer:
      "Yes. We are confident that you and your dog will be delighted with our service. If you are not satisfied within the first four weeks, we will refund the amount you paid.",
  },
  {
    question: "Can I start with one plan and switch to another later?",
    answer:
      "Absolutely. Many clients start with a Signature Walk and move to a Fitness or Adventure Walk as they see how their dog responds. We work with you to find the right fit and adjust as your dog's needs change.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Dog Walking Plans for Potomac's Most Discerning Dog Owners"
        subtitle="Flexible, personalized walking plans with solo walks, GPS tracking, and detailed post-visit reports. Every walk tailored to your dog's breed, age, and energy level."
      />

      {/* Intro */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Image
            src="/images/potomac-dog-walking-service.jpg"
            alt="Professional dog walker with leashed dog on a Potomac neighborhood sidewalk"
            width={800}
            height={600}
            className="w-full h-auto rounded-xl mb-8"
            priority
          />
          <p className="text-gray-600 leading-relaxed">
            Potomac Dog Walking offers flexible, personalized dog walking plans for homeowners in
            Potomac, Maryland. Every walk is a solo walk, meaning your dog receives one-on-one
            attention from a dedicated, background-checked professional. Our plans range from quick
            relief walks to extended adventure outings, and all services are booked in 15-minute
            increments with a two-hour arrival window.
          </p>
        </div>
      </section>

      {/* Walking Plans */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">
            Our Walking Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-xl p-6 border-2 ${
                  plan.highlight
                    ? "border-green-600 bg-green-50 shadow-md"
                    : "border-gray-200 bg-white"
                }`}
              >
                {plan.highlight && (
                  <span className="inline-block bg-green-800 text-white text-xs px-2 py-1 rounded-full font-semibold mb-3">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                <p className="text-green-800 font-semibold text-sm mb-3">{plan.duration}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{plan.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Recurring */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Image
            src="/images/happy-dog-potomac-md.jpg"
            alt="Happy dog enjoying a walk through a Potomac Maryland neighborhood"
            width={800}
            height={600}
            className="w-full h-auto rounded-xl mb-8"
          />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Benefits of Recurring Service
          </h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">+</span>
              Three complimentary walks applied to your first invoice as a welcome credit
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">+</span>
              Priority scheduling with guaranteed preferred time slots
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">+</span>
              Same familiar walkers at the door, building trust and comfort over time
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">+</span>
              Progress reports tracking behavior, energy, and habits across visits
            </li>
          </ul>
        </div>
      </section>

      {/* What Every Visit Includes */}
      <section className="py-16 sm:py-20 bg-green-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            What Every Visit Includes
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Every visit from Potomac Dog Walking includes a detailed post-visit report delivered
            through our scheduling platform. Reports include a timestamp of arrival and departure,
            a written overview of the walk, relevant highlights about your dog&apos;s behavior and
            energy, photos and videos from the outing, and a GPS map showing the exact route your
            walker took.
          </p>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Image
            src="/images/dog-enrichment-potomac-md.jpg"
            alt="Dog exploring during an enrichment walk near trails in Potomac MD"
            width={800}
            height={600}
            className="w-full h-auto rounded-xl mb-8 mx-auto max-w-3xl"
          />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            Additional Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalServices.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="block bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md hover:border-green-200 transition-all"
              >
                <h3 className="font-bold text-gray-900 mb-2">{s.name}</h3>
                <p className="text-gray-600 text-sm">{s.description}</p>
                <span className="inline-block mt-3 text-green-800 text-sm font-semibold">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-16 sm:py-20 bg-warm-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            More About Dog Walking in Potomac
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              <Link href="/dog-walking-prices-potomac-md" className="text-green-800 underline hover:text-green-600">Dog Walking Prices in Potomac MD</Link> — Detailed pricing breakdown
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              <Link href="/midday-dog-walking-potomac" className="text-green-800 underline hover:text-green-600">Midday Dog Walking for Busy Professionals</Link>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              <Link href="/dog-walking-reactive-dogs-potomac" className="text-green-800 underline hover:text-green-600">Dog Walking for Reactive Dogs</Link>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              <Link href="/same-day-dog-walking-potomac" className="text-green-800 underline hover:text-green-600">Same-Day Dog Walking in Potomac</Link>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              <Link href="/how-to-choose-dog-walker-potomac" className="text-green-800 underline hover:text-green-600">How to Choose a Dog Walker in Potomac</Link>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              <Link href="/get-started-dog-walker-potomac" className="text-green-800 underline hover:text-green-600">How to Get Started</Link>
            </li>
          </ul>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <ContactSection />
    </>
  );
}

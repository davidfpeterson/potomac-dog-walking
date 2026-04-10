import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Link from "next/link";

import Breadcrumbs from "@/components/Breadcrumbs";
export const metadata: Metadata = {
  title: "Midday Dog Walking for Busy Professionals | Potomac MD",
  description:
    "Midday dog walking in Potomac, MD for working professionals. Consistent 10 AM–2 PM walks while you're at work. GPS-tracked, insured. Call (301) 265-3647.",
  alternates: { canonical: "/midday-dog-walking-potomac" },
};

const faqs = [
  {
    question: "What time do midday walks happen?",
    answer:
      "Midday walks are scheduled between 10 AM and 2 PM. You choose a two-hour arrival window that works for your household, and your walker arrives within that window. Most of our Potomac clients prefer the 11 AM–1 PM range, which falls roughly halfway through a standard workday.",
  },
  {
    question: "Will the same walker come every day?",
    answer:
      "Yes. Recurring midday clients are assigned a primary walker who comes at the same time each day. Your dog builds a relationship with their walker and knows what to expect. If your primary walker is unavailable, a trained backup who already knows your dog and routine steps in.",
  },
  {
    question: "How do I manage scheduling if my work schedule changes?",
    answer:
      "Our scheduling platform makes it easy to add, cancel, or adjust walks. If you work from home one day and do not need a walk, you can cancel through the platform. If you need an extra walk, you can request one. Recurring clients have priority scheduling so your preferred time slot is always reserved.",
  },
  {
    question: "What if my dog needs a bathroom break before the midday walk?",
    answer:
      "If your dog cannot hold it from morning until midday, we can schedule an early relief walk in addition to the main midday walk. Many clients with puppies or senior dogs use a Relief Walk (~15 min) at 9 or 10 AM followed by a Signature Walk (~30 min) around noon.",
  },
  {
    question: "Do you provide home access?",
    answer:
      "Most clients provide a spare key, garage code, or smart lock access. Your walker secures your home after every visit. Post-visit reports include timestamps for arrival and departure so you always know when your walker was in your home.",
  },
];

export default function MiddayDogWalkingPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Midday Dog Walking", href: "/midday-dog-walking-potomac" }]} />
      <Hero
        title="Midday Dog Walking for Busy Professionals — Potomac, MD"
        subtitle="Consistent midday walks between 10 AM and 2 PM while you're at work. Your dog gets exercise, bathroom breaks, and human interaction at the point in the day when they need it most."
      />

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Why Midday Walking Matters for Working Dog Owners
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            If you commute to DC, Bethesda, or Northern Virginia, your dog may spend 8 to 10 hours alone during the workday. That is too long without exercise, mental stimulation, or a bathroom break. Dogs left alone this long frequently develop behavioral problems — restlessness, anxiety, destructive chewing, excessive barking, and weight gain.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            A consistent midday walk solves these problems at their root. Your dog gets structured exercise, fresh air, new scents, and interaction with a familiar, trusted walker. They burn off pent-up energy and get a bathroom break, so when you come home they are calm, happy, and ready to relax with you instead of bouncing off the walls.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Potomac Dog Walking has provided midday walks for working professionals in Potomac since 2009. We serve federal workers, attorneys, consultants, healthcare professionals, and anyone whose schedule keeps them away from home during the day. View our{" "}
            <Link href="/services" className="text-green-800 underline hover:text-green-600">walk plans and pricing</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-green-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            How Midday Walks Work
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-green-800 text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Choose Your Schedule</h3>
                <p className="text-gray-600 text-sm">
                  Select the days you need walks and your preferred two-hour arrival window between 10 AM and 2 PM. Most clients book Monday through Friday with an 11 AM–1 PM window.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-green-800 text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Your Walker Arrives</h3>
                <p className="text-gray-600 text-sm">
                  Your assigned walker enters your home using the access method you provide, leashes your dog, and heads out on a route tailored to your dog&apos;s needs and energy level.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-green-800 text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Walk and Care</h3>
                <p className="text-gray-600 text-sm">
                  Your dog gets a solo walk — 15 to 60 minutes depending on your plan. The walk includes exercise, bathroom breaks, sniffing and exploration, and fresh water. Your walker can also administer{" "}
                  <Link href="/services/medication-administration" className="text-green-800 underline hover:text-green-600">medications</Link> if needed.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-green-800 text-white rounded-full flex items-center justify-center font-bold shrink-0">4</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Post-Visit Report</h3>
                <p className="text-gray-600 text-sm">
                  After the walk, your walker secures your home, refreshes water bowls, and submits a report with GPS tracking, timestamps, photos, and a written summary. You can check it during your lunch break.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Who Uses Midday Dog Walking in Potomac
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Potomac is home to thousands of professionals who commute to DC and surrounding employment centers. The typical midday walking client is someone who:
          </p>
          <ul className="space-y-3 text-gray-600 mb-4">
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              Works in DC, Bethesda, Rockville, or Northern Virginia and is away from home 8+ hours
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              Wants their dog exercised and stimulated during the workday, not just let out into the yard
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              Values consistency — the same walker, the same time, the same quality of care every day
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              Wants GPS-tracked, documented visits with photos and reports — not just trust that someone showed up
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            We serve midday clients throughout all Potomac neighborhoods including{" "}
            <Link href="/dog-walking-avenel-potomac" className="text-green-800 underline hover:text-green-600">Avenel</Link>,{" "}
            <Link href="/dog-walking-north-potomac" className="text-green-800 underline hover:text-green-600">North Potomac</Link>,{" "}
            <Link href="/dog-walking-travilah" className="text-green-800 underline hover:text-green-600">Travilah</Link>, and the{" "}
            <Link href="/dog-walking-20854" className="text-green-800 underline hover:text-green-600">entire 20854 zip code</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-amber-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Midday Walk Pricing
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Midday walk pricing depends on walk duration and frequency. Recurring daily clients receive the best per-walk rates. We offer four walk lengths:
          </p>
          <ul className="space-y-2 text-gray-600 mb-4">
            <li className="flex gap-3 items-start">
              <span className="text-amber-600 text-xl leading-none">&#8226;</span>
              <strong>Relief Walk</strong> (~15 min) — Quick bathroom break and short outing
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-amber-600 text-xl leading-none">&#8226;</span>
              <strong>Signature Walk</strong> (~30 min) — Our most popular option for midday walks
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-amber-600 text-xl leading-none">&#8226;</span>
              <strong>Fitness Walk</strong> (~45 min) — Extended exercise for high-energy breeds
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-amber-600 text-xl leading-none">&#8226;</span>
              <strong>Adventure Walk</strong> (~60 min) — Full exploration including trails and parks
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            See full pricing details on our{" "}
            <Link href="/dog-walking-prices-potomac-md" className="text-green-800 underline hover:text-green-600">pricing page</Link> or{" "}
            <Link href="/services" className="text-green-800 underline hover:text-green-600">services overview</Link>. No hidden fees, no surge pricing, no long-term contracts.
          </p>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <ContactSection />
    </>
  );
}

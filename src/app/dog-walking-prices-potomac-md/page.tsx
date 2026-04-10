import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Link from "next/link";

import Breadcrumbs from "@/components/Breadcrumbs";
export const metadata: Metadata = {
  title: "Dog Walking Prices in Potomac MD | Cost Guide",
  description:
    "How much does dog walking cost in Potomac, MD? Pricing for solo walks from 15–60 min. No hidden fees, no contracts. Call (301) 265-3647 for rates.",
  alternates: { canonical: "/dog-walking-prices-potomac-md" },
};

const faqs = [
  {
    question: "How much does dog walking cost in Potomac, MD?",
    answer:
      "Dog walking rates in Potomac depend on walk duration and frequency. A 15-minute Relief Walk is the most affordable option, while a 60-minute Adventure Walk costs more due to extended time and potential transportation to trails. Recurring daily or weekly clients receive better per-walk rates than occasional bookings. Call us at (301) 265-3647 for current pricing.",
  },
  {
    question: "Is there a contract or minimum commitment?",
    answer:
      "No. Potomac Dog Walking does not require long-term contracts. You can adjust your walking schedule, change your plan, or pause service at any time. Recurring clients receive priority scheduling and better rates, but there is no penalty for making changes.",
  },
  {
    question: "Are there hidden fees or surge pricing?",
    answer:
      "No. We publish transparent pricing with no hidden fees, no surge pricing, and no cancellation penalties beyond our standard cancellation policy. The price you see is the price you pay. Additional services like medication administration or canine enrichment are priced separately and clearly communicated before booking.",
  },
  {
    question: "Do you charge extra for holidays or weekends?",
    answer:
      "Our standard pricing applies Monday through Saturday. Holiday availability may be limited, and we communicate any scheduling changes well in advance. Recurring clients receive priority for holiday scheduling.",
  },
  {
    question: "Is dog walking in Potomac more expensive than other areas?",
    answer:
      "Dog walking rates in Potomac reflect the professional quality of service, including solo walks, GPS tracking, insured and background-checked walkers, and detailed post-visit reports. Compared to app-based services that offer group walks with rotating walkers and no reporting, professional solo walking provides significantly more value for your investment.",
  },
  {
    question: "Do recurring clients get a discount?",
    answer:
      "Yes. Recurring clients receive better per-walk rates than occasional bookings, plus three complimentary walks applied as a welcome credit to your first invoice. Recurring clients also benefit from guaranteed time slots, consistent walker assignment, and priority scheduling.",
  },
];

export default function DogWalkingPricesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Pricing", href: "/dog-walking-prices-potomac-md" }]} />
      <Hero
        title="Dog Walking Prices in Potomac, MD"
        subtitle="Transparent pricing for professional solo walks. No hidden fees, no contracts, no surge pricing. Flexible plans that fit your schedule and budget."
      />

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            How Much Does Dog Walking Cost in Potomac?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Dog walking pricing in Potomac, MD varies based on two main factors: walk duration and booking frequency. Professional dog walking with solo walks, GPS tracking, and post-visit reports costs more than app-based group walks — but the quality, safety, and reliability are not comparable.
          </p>
          <p className="text-gray-600 leading-relaxed">
            At Potomac Dog Walking, we keep pricing simple and transparent. You choose the walk length that fits your dog&apos;s needs, and you pay per walk with no hidden fees. Recurring clients who book daily or weekly walks receive the best per-walk rates.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            Walk Options and What&apos;s Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 border-2 border-gray-200 bg-white">
              <h3 className="text-xl font-bold text-gray-900">Relief Walk</h3>
              <p className="text-green-800 font-semibold text-sm mb-3">~15 Minutes</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Quick bathroom break and short outing. Ideal for puppies, senior dogs, or supplementing a longer walk on busy days.
              </p>
              <p className="text-gray-500 text-xs">Includes: solo walk, GPS tracking, timestamps, post-visit report</p>
            </div>
            <div className="rounded-xl p-6 border-2 border-green-600 bg-green-50 shadow-md">
              <span className="inline-block bg-green-800 text-white text-xs px-2 py-1 rounded-full font-semibold mb-3">
                Most Popular
              </span>
              <h3 className="text-xl font-bold text-gray-900">Signature Walk</h3>
              <p className="text-green-800 font-semibold text-sm mb-3">~30 Minutes</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Balanced exercise and stimulation. The right fit for most dogs and the choice of most Potomac working professionals.
              </p>
              <p className="text-gray-500 text-xs">Includes: solo walk, GPS tracking, timestamps, photos, written summary</p>
            </div>
            <div className="rounded-xl p-6 border-2 border-gray-200 bg-white">
              <h3 className="text-xl font-bold text-gray-900">Fitness Walk</h3>
              <p className="text-green-800 font-semibold text-sm mb-3">~45 Minutes</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Extended exercise for athletic or high-energy breeds. Sustained movement to burn energy and maintain healthy weight.
              </p>
              <p className="text-gray-500 text-xs">Includes: solo walk, GPS tracking, timestamps, photos, written summary</p>
            </div>
            <div className="rounded-xl p-6 border-2 border-gray-200 bg-white">
              <h3 className="text-xl font-bold text-gray-900">Adventure Walk</h3>
              <p className="text-green-800 font-semibold text-sm mb-3">~60 Minutes</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Full exploration including Potomac&apos;s trails, parks, and green spaces. Transportation to trailheads included.
              </p>
              <p className="text-gray-500 text-xs">Includes: solo walk, GPS tracking, timestamps, photos, videos, written summary, transportation</p>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-6">
            <a href="tel:3012653647" className="text-green-800 font-semibold underline hover:text-green-600">Call (301) 265-3647</a> for current per-walk rates.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            What Affects Dog Walking Costs
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-600 pl-4">
              <h3 className="font-bold text-gray-900">Walk Duration</h3>
              <p className="text-gray-600 text-sm">The primary factor. Longer walks cost more per visit. Most Potomac clients choose the 30-minute Signature Walk for daily service.</p>
            </div>
            <div className="border-l-4 border-green-600 pl-4">
              <h3 className="font-bold text-gray-900">Booking Frequency</h3>
              <p className="text-gray-600 text-sm">Recurring daily or weekly clients receive better per-walk rates than occasional or one-time bookings. Consistency is rewarded.</p>
            </div>
            <div className="border-l-4 border-green-600 pl-4">
              <h3 className="font-bold text-gray-900">Additional Services</h3>
              <p className="text-gray-600 text-sm">
                <Link href="/services/medication-administration" className="text-green-800 underline hover:text-green-600">Medication administration</Link>,{" "}
                <Link href="/services/canine-enrichment" className="text-green-800 underline hover:text-green-600">canine enrichment</Link>, and{" "}
                <Link href="/services/backyard-cleanup" className="text-green-800 underline hover:text-green-600">backyard clean-up</Link> are priced separately and can be added to any walk.
              </p>
            </div>
            <div className="border-l-4 border-green-600 pl-4">
              <h3 className="font-bold text-gray-900">Special Requirements</h3>
              <p className="text-gray-600 text-sm">Dogs with specific handling needs (reactive behavior, mobility issues, etc.) may require adjusted pricing to account for additional training and route planning.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-green-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Recurring Client Benefits
          </h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">+</span>
              Three complimentary walks applied as a welcome credit to your first invoice
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">+</span>
              Better per-walk rates compared to occasional bookings
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">+</span>
              Priority scheduling with guaranteed preferred time slots
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">+</span>
              Consistent walker assignment — your dog builds trust over time
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">+</span>
              Progress reports tracking behavior and habits across visits
            </li>
          </ul>
          <p className="text-gray-600 mt-6">
            Ready to start?{" "}
            <Link href="/get-started-dog-walker-potomac" className="text-green-800 underline hover:text-green-600">Learn how to get started with a dog walker in Potomac</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Professional Dog Walking vs. App-Based Services
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            App-based dog walking services may appear cheaper per walk, but they typically offer group walks with rotating walkers, no GPS tracking, limited reporting, and minimal vetting of walkers. When you compare what you actually receive, professional solo walking from a local provider offers significantly more value:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-3 font-semibold text-gray-900">Feature</th>
                  <th className="text-center p-3 font-semibold text-gray-900">Potomac Dog Walking</th>
                  <th className="text-center p-3 font-semibold text-gray-900">Typical App Service</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-t border-gray-200">
                  <td className="p-3">Solo walks</td>
                  <td className="p-3 text-center text-green-700 font-semibold">Always</td>
                  <td className="p-3 text-center">Often group</td>
                </tr>
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="p-3">GPS tracking</td>
                  <td className="p-3 text-center text-green-700 font-semibold">Every walk</td>
                  <td className="p-3 text-center">Varies</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="p-3">Consistent walker</td>
                  <td className="p-3 text-center text-green-700 font-semibold">Dedicated assignment</td>
                  <td className="p-3 text-center">Rotating</td>
                </tr>
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="p-3">Background check</td>
                  <td className="p-3 text-center text-green-700 font-semibold">Criminal + references</td>
                  <td className="p-3 text-center">Basic</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="p-3">Insurance &amp; bonding</td>
                  <td className="p-3 text-center text-green-700 font-semibold">Full commercial</td>
                  <td className="p-3 text-center">Limited</td>
                </tr>
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="p-3">Post-visit reports</td>
                  <td className="p-3 text-center text-green-700 font-semibold">GPS + photos + summary</td>
                  <td className="p-3 text-center">Photo only</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="p-3">Pet First Aid certified</td>
                  <td className="p-3 text-center text-green-700 font-semibold">All walkers</td>
                  <td className="p-3 text-center">Rarely</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 mt-4">
            Not sure if professional walking is right for you?{" "}
            <Link href="/is-dog-walking-worth-it" className="text-green-800 underline hover:text-green-600">Read our guide on whether dog walking is worth it</Link>.
          </p>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <ContactSection />
    </>
  );
}

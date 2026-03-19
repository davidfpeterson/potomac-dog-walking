import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Same-Day Dog Walking in Potomac MD | Last-Minute Walks",
  description:
    "Same-day and last-minute dog walking in Potomac, MD. Call by 10 AM for same-day availability. Insured, GPS-tracked solo walks. Call (301) 265-3647.",
};

const faqs = [
  {
    question: "How do I book a same-day walk?",
    answer:
      "Call us at (301) 265-3647 as early as possible — ideally by 10 AM. We check our walkers' availability in your area and confirm your booking. Same-day availability depends on our schedule, but we make every effort to accommodate requests, especially from existing clients.",
  },
  {
    question: "Is same-day walking more expensive?",
    answer:
      "Same-day walks are priced at the same per-walk rate as scheduled walks. There is no surge pricing or rush fee. However, recurring clients with scheduled walks always receive priority booking and the best per-walk rates.",
  },
  {
    question: "Can I book a same-day walk online?",
    answer:
      "For same-day requests, we recommend calling us directly at (301) 265-3647 rather than using the online scheduler. A phone call allows us to confirm availability in real time and dispatch a walker to your area quickly.",
  },
  {
    question: "What if no walkers are available for a same-day request?",
    answer:
      "If our schedule is fully booked, we will let you know immediately so you can make other arrangements. This rarely happens, but during holidays and peak seasons, same-day availability may be limited. The best way to guarantee daily coverage is to set up a recurring schedule.",
  },
  {
    question: "Do I need to be a recurring client to book same-day walks?",
    answer:
      "No. Same-day walks are available to both new and existing clients. However, existing clients with an active profile receive priority because we already have their home access information, dog details, and walker assignment on file, which allows us to dispatch faster.",
  },
];

export default function SameDayDogWalkingPage() {
  return (
    <>
      <Hero
        title="Same-Day Dog Walking in Potomac, MD"
        subtitle="Need a dog walker today? Call by 10 AM for same-day availability. Professional solo walks with the same quality, GPS tracking, and post-visit reports as our scheduled service."
      />

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Last-Minute Dog Walking When You Need It
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Unexpected meeting. Flight delay. Doctor&apos;s appointment that ran long. Sometimes you need a dog walker today — not next week. Potomac Dog Walking offers same-day availability for homeowners throughout Potomac, MD when our schedule permits.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Same-day walks are the same professional, GPS-tracked solo walks we provide to all clients. Your dog gets one-on-one attention from a background-checked, insured walker who follows the same quality standards as our recurring service. The only difference is the booking timeline.
          </p>
          <p className="text-gray-600 leading-relaxed">
            <strong>For the best same-day availability, call us at{" "}
            <a href="tel:3012653647" className="text-green-800 underline hover:text-green-600">(301) 265-3647</a>{" "}
            by 10 AM.</strong> Earlier is better — it gives us more time to route a walker to your neighborhood.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-green-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            When People Need Same-Day Dog Walking
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900 mb-1">Work Emergencies</h3>
              <p className="text-gray-600 text-sm">
                Unexpected meetings, last-minute travel, or a day that started as work-from-home but turned into a full day at the office. Your dog should not suffer because your schedule changed.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900 mb-1">Medical Appointments</h3>
              <p className="text-gray-600 text-sm">
                A procedure that takes longer than expected or a follow-up visit that keeps you away from home during your dog&apos;s usual walk time.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900 mb-1">Family Obligations</h3>
              <p className="text-gray-600 text-sm">
                School events, family emergencies, or helping a relative — situations where your attention is needed elsewhere and your dog still needs their walk.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900 mb-1">Weather Recovery</h3>
              <p className="text-gray-600 text-sm">
                After a day of severe weather that kept everyone indoors, your dog may need an extra walk to burn off pent-up energy. Same-day booking lets you add a walk when needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Same-Day vs. Recurring Walks
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Same-day walks are a great option for occasional needs, but dogs do best with a consistent schedule. If you find yourself booking same-day walks frequently, consider setting up a{" "}
            <Link href="/midday-dog-walking-potomac" className="text-green-800 underline hover:text-green-600">recurring midday walking schedule</Link>. Recurring clients benefit from:
          </p>
          <ul className="space-y-2 text-gray-600 mb-4">
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              Guaranteed time slots — your walk is never subject to availability
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              Consistent walker assignment — your dog builds a relationship over time
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              Better per-walk rates on recurring schedules
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              Three complimentary walks as a welcome credit on your first invoice
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            View our{" "}
            <Link href="/services" className="text-green-800 underline hover:text-green-600">plans and pricing</Link> or learn{" "}
            <Link href="/get-started-dog-walker-potomac" className="text-green-800 underline hover:text-green-600">how to get started</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-warm-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Areas We Cover for Same-Day Walks
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Same-day dog walking is available throughout the{" "}
            <Link href="/dog-walking-20854" className="text-green-800 underline hover:text-green-600">20854 zip code</Link>, including:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              <Link href="/dog-walking-avenel-potomac" className="text-green-800 underline hover:text-green-600">Avenel</Link>, River Falls, Potomac Falls, and Potomac Village
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              <Link href="/dog-walking-north-potomac" className="text-green-800 underline hover:text-green-600">North Potomac</Link>, Fallsreach, and Quince Orchard Valley
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              <Link href="/dog-walking-travilah" className="text-green-800 underline hover:text-green-600">Travilah</Link> and Piney Meetinghouse Road area
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              Cabin John, Bradley Farms, Park Potomac, Seven Locks, and all other Potomac neighborhoods
            </li>
          </ul>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <ContactSection />
    </>
  );
}

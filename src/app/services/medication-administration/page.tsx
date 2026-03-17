import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Dog Medication Administration | Potomac MD",
  description:
    "Dog medication administration in Potomac, MD. Trained walkers give prescribed meds on schedule during visits. Never miss a dose. Call (301) 265-3647.",
};

const faqs = [
  {
    question: "Can you administer insulin injections?",
    answer:
      "We can discuss injectable medication administration on a case-by-case basis. Some of our team members have experience with insulin and other injections. Contact us to discuss your dog's specific needs and we will let you know if we can accommodate the request.",
  },
  {
    question: "What if my dog is difficult to medicate?",
    answer:
      "Our walkers are experienced with dogs who resist medication. We use calm, patient techniques and work with treats and positive reinforcement to make the process as stress-free as possible. If your dog has a history of being difficult to medicate, let us know during your consultation so we can prepare.",
  },
  {
    question: "Do I need to provide the medication?",
    answer:
      "Yes. You provide all medications and clear written instructions, including the medication name, dosage, and timing. We follow your veterinarian's directions exactly and document each dose in your post-visit report.",
  },
  {
    question: "Can medication administration be added to a regular walk?",
    answer:
      "Yes. Medication administration is commonly combined with a scheduled walk. Your walker administers medication during the visit and takes your dog out for their walk as part of the same appointment. This is the most common way our clients use this service.",
  },
];

export default function MedicationAdministrationPage() {
  return (
    <>
      <Hero
        title="Medication Administration for Dogs in Potomac, MD"
        subtitle="Reliable administration of prescribed medications during scheduled visits. Pet First Aid-certified walkers ensure your dog never misses a dose."
      />

      {/* Intro */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            What Medication Administration Involves
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            During a scheduled visit, your walker administers your dog&apos;s prescribed medication
            according to the instructions you and your veterinarian provide. This includes oral
            medications such as pills, capsules, and liquid doses, as well as topical treatments
            like ear drops, eye drops, and skin ointments.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Your walker confirms the correct medication, dosage, and timing before each
            administration. After the visit, your post-visit report documents that the medication
            was given, the time it was administered, and any observations about your dog&apos;s
            response or behavior.
          </p>
        </div>
      </section>

      {/* When Needed */}
      <section className="py-16 sm:py-20 bg-green-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            When Your Dog Needs Medication Visits
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Many dogs require medication that must be given at specific times during the day.
            Common situations include:
          </p>
          <ul className="space-y-3 text-gray-600">
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              Daily medications for allergies, thyroid conditions, joint pain, or seizure disorders
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              Post-surgery recovery requiring pain medication or antibiotics
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              Puppies and seniors on supplements or preventive medications
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              Any medication routine that doesn&apos;t align with your daily schedule
            </li>
          </ul>
        </div>
      </section>

      {/* Why Timing Matters */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Why Consistent Medication Timing Matters
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Veterinary medications are prescribed at specific intervals for a reason. Antibiotics
            need consistent blood levels to fight infection effectively. Pain medications lose their
            effectiveness when doses are late. Seizure medications require steady levels to prevent
            breakthrough episodes. Skipping or delaying a dose can set back recovery, reduce the
            effectiveness of treatment, or cause unnecessary discomfort. Professional medication
            administration removes the guesswork and ensures your dog&apos;s treatment plan stays on track.
          </p>
        </div>
      </section>

      {/* How It Fits Into Your Plan */}
      <section className="py-16 sm:py-20 bg-amber-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            How Medication Visits Fit Into Your Dog&apos;s Walking Plan
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Most Potomac clients pair medication administration with a scheduled walk. Your walker
            arrives during the agreed-upon time window, administers the medication, and then takes
            your dog out for their regular walk. This approach keeps your dog on a consistent
            routine and eliminates the need for a separate visit solely for medication.
          </p>
          <p className="text-gray-600 leading-relaxed">
            If your dog needs medication at a time that does not align with their walk schedule, we
            can arrange a dedicated medication-only visit. These shorter visits are booked in the
            same 15-minute increments with a two-hour arrival window, giving you flexibility while
            maintaining the precision your dog&apos;s treatment plan requires.
          </p>
        </div>
      </section>

      {/* What Affects Cost */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            What Affects the Cost of Medication Administration in Potomac
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The cost of medication administration depends on whether it is combined with a walk or
            booked as a standalone visit. When added to a walking plan, medication administration is
            incorporated into the visit at no additional charge for standard oral and topical
            medications. Standalone medication visits are priced based on visit duration.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Recurring clients receive three complimentary walks as a welcome credit, priority
            scheduling with guaranteed time slots, and detailed progress reports across visits.
            There are no long-term contracts. To see our full range of walking plans and service
            options, visit our{" "}
            <a href="/services" className="text-green-800 underline font-medium">
              services and pricing page
            </a>.
          </p>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <ContactSection />
    </>
  );
}

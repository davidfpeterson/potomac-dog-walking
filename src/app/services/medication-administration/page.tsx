import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Dog Medication Administration in Potomac MD | Pet Med Visits",
  description:
    "Reliable medication administration for dogs in Potomac, MD. Our trained, Pet First Aid-certified walkers administer prescribed medications during scheduled visits. Never miss a dose.",
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

      <FAQSection faqs={faqs} />
      <ContactSection />
    </>
  );
}

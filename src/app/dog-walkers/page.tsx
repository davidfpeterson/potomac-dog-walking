import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

import Breadcrumbs from "@/components/Breadcrumbs";
export const metadata: Metadata = {
  title: "Meet Our Dog Walkers | Potomac MD",
  description:
    "Professional dog walkers in Potomac, MD. Background-checked, Pet First Aid-certified, trained in canine behavior. Meet our team today.",
  alternates: { canonical: "/dog-walkers" },
};

const faqs = [
  {
    question: "Can I request a specific walker?",
    answer:
      "Yes. During your meet and greet, we introduce you to the walker we plan to assign to your dog. If you prefer a different walker for any reason, we will work with you to find the best match. Recurring clients have a dedicated primary walker assigned to their dog.",
  },
  {
    question: "What happens if my regular walker is sick or on vacation?",
    answer:
      "We maintain a trained backup system. If your primary walker is unavailable, a team member who has been briefed on your dog's preferences, routine, and any special instructions steps in. We notify you in advance whenever a substitute walker is scheduled.",
  },
  {
    question: "Do your walkers have experience with reactive or anxious dogs?",
    answer:
      "Yes. Our team is trained in reading canine body language and managing dogs with anxiety, reactivity, or fear-based behaviors. If your dog has specific behavioral needs, we discuss them during your consultation and match your dog with a walker who has the right experience and temperament.",
  },
  {
    question: "Are your walkers employees or independent contractors?",
    answer:
      "Our walkers operate as part of the Potomac Dog Walking team. They follow our training standards, safety protocols, and communication procedures. They are not random gig workers — they are professionals who are accountable to our company and to you.",
  },
];

const qualities = [
  "Genuine compassion for animals",
  "Reliability under all conditions",
  "Strong communication skills",
  "Physical fitness for walking multiple times per day in all weather",
  "Maturity to handle unexpected situations calmly",
];

export default function DogWalkersPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Our Walkers", href: "/dog-walkers" }]} />
      <Hero
        title="Meet Our Dog Walkers"
        subtitle="Trained, trustworthy, and reliable professionals who are background-checked, certified in Pet First Aid and CPR, and experienced with dogs of every breed, age, and temperament."
        showCTA={false}
      />

      {/* Intro */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Image
            src="/images/dog-walker-team-potomac.jpg"
            alt="Professional dog walker team member with a dog in Potomac MD"
            width={800}
            height={600}
            className="w-full h-auto rounded-xl mb-8"
            priority
          />
          <p className="text-gray-600 leading-relaxed">
            Professional dog walking in Potomac, Maryland, depends on the people who show up at
            your door. Whether your dog is a puppy, a senior, an athletic breed, or a laid-back
            companion who needs gentle encouragement, our walkers deliver personalized care that
            keeps your dog happy, healthy, and safe. Potomac homeowners trust our team because we
            invest in hiring, training, and retaining the right people — not just filling shifts.
          </p>
        </div>
      </section>

      {/* Hiring Standards */}
      <section className="py-16 sm:py-20 bg-green-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Our Hiring and Training Standards
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We do not hire casually. Every team member goes through a thorough hiring process that
            includes a criminal background check, reference verification, and an in-person interview.
            Once hired, new walkers complete Pet First Aid and CPR certification and begin hands-on
            training before they walk their first client dog.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Training covers leash handling, breed-specific behavior, reading canine body language,
            safety protocols for weather extremes, and proper home security procedures. We also
            provide ongoing education through regular team meetings. Our walkers are not gig
            workers — they are professionals who build relationships with your dog over time.
          </p>
        </div>
      </section>

      {/* Consistency */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Image
            src="/images/potomac-dog-walking-team-member.jpg"
            alt="Potomac Dog Walking team member on a solo walk with a dog"
            width={800}
            height={600}
            className="w-full h-auto rounded-xl mb-8"
          />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Consistency and Familiarity
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Dogs thrive on routine and familiar faces. When you become a recurring client, we assign
            a primary walker to your dog. Your dog sees the same person at the door, builds trust
            over time, and develops a comfortable routine. If your primary walker is unavailable, a
            trained backup who is already familiar with your dog and your home steps in. We brief
            every backup walker on your dog&apos;s preferences, behavioral notes, and any special
            instructions so the transition is seamless.
          </p>
        </div>
      </section>

      {/* Communication */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Image
            src="/images/professional-dog-walking-potomac.jpg"
            alt="Professional dog walking visit with GPS tracking in Potomac"
            width={800}
            height={600}
            className="w-full h-auto rounded-xl mb-8"
          />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            How Our Walkers Communicate With You
          </h2>
          <p className="text-gray-600 leading-relaxed">
            After every visit, your walker submits a detailed post-visit report through our Time to
            Pet scheduling platform. Reports include the exact time of arrival and departure, a
            written summary of the walk, observations about your dog&apos;s energy and behavior,
            photos and videos, and a GPS map of the walking route. If your walker notices anything
            that needs your attention — a change in behavior, a limp, unusual lethargy, or a skin
            issue — they flag it in the report and follow up with you directly.
          </p>
        </div>
      </section>

      {/* Qualities */}
      <section className="py-16 sm:py-20 bg-amber-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            The Qualities We Look For
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Not everyone is a good fit for professional dog walking. We are selective because your
            dog deserves someone who takes this work seriously. We look for:
          </p>
          <ul className="space-y-3 text-gray-600">
            {qualities.map((q, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="text-green-600 text-xl leading-none">&#8226;</span>
                {q}
              </li>
            ))}
          </ul>
          <p className="text-gray-600 leading-relaxed mt-6">
            Many of our team members have backgrounds in veterinary care, animal behavior, fitness,
            or education — fields that translate directly to the skills needed for professional
            dog walking.
          </p>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <ContactSection />
    </>
  );
}

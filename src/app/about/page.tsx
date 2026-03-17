import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "About Potomac Dog Walking | Potomac MD",
  description:
    "Locally owned dog walking company in Potomac, MD. Insured, bonded, vet-recommended since 2009. Led by Dave Peterson. Schedule a free meet and greet.",
};

const faqs = [
  {
    question: "What makes Potomac Dog Walking different from other dog walkers?",
    answer:
      "Potomac Dog Walking is a locally owned, full-time pet care company — not a side gig or gig-worker app. Every walk is a solo walk with a dedicated, background-checked walker. We are insured, bonded, certified in Pet First Aid and CPR, and members of Pet Sitters International. We have served the Potomac community since 2009 and complete over twenty thousand visits per year.",
  },
  {
    question: "How long has Dave Peterson been in the pet care industry?",
    answer:
      "Dave has been in professional pet care since 2004, when he started working as a dog walker the summer after graduating from Walt Whitman High School. He has spent over two decades in the industry and brings hands-on experience to every aspect of the business.",
  },
  {
    question: "Are you insured?",
    answer:
      "Yes. Potomac Dog Walking is fully insured and bonded. We carry liability coverage that protects your pet and your property during all services, including walking, medication administration, and backyard clean-up.",
  },
  {
    question: "How do I schedule a consultation?",
    answer:
      "Contact us to schedule a free meet and greet. During the visit, we meet your dog, learn about their needs and routine, discuss service options, and answer all of your questions. There is no obligation, and we encourage you to take the time you need to decide if we are the right fit.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About Potomac Dog Walking"
        subtitle="Locally owned and operated since 2009. Over twenty thousand visits per year across Potomac's neighborhoods. Insured, bonded, and vet-recommended."
        showCTA={false}
      />

      {/* Our Story */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Potomac Dog Walking is led by Dave Peterson, who has been part of the professional pet
            care industry since 2004. Dave grew up in Montgomery County and graduated from Walt Whitman High
            School in 2003. He began working in professional dog walking the following summer and
            spent years learning the business from the ground up.
          </p>
          <p className="text-gray-600 leading-relaxed">
            When the opportunity came to lead the operation, Dave stepped in and built on the
            foundation established by the company&apos;s original founders, Jackie Fahr and Nancy
            Grunley, who started the business in 2009. Under Dave&apos;s leadership, the team
            manages over twenty thousand visits per year and has become one of the most trusted
            pet care providers in the Potomac area.
          </p>
        </div>
      </section>

      {/* Why Potomac */}
      <section className="py-16 sm:py-20 bg-green-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Why We Serve Potomac
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Potomac is home to some of Montgomery County&apos;s most dedicated dog owners. The
            community&apos;s large properties, quiet streets, and proximity to trails along the
            C&amp;O Canal, Cabin John Regional Park, and Seneca Creek State Park make it an ideal
            place for dogs and their owners. But Potomac&apos;s professional households often mean
            long workdays and demanding schedules. Our team fills the gap by providing consistent,
            reliable care that matches the high standards Potomac families expect. Dave Peterson is
            raising his family in the area and is personally invested in serving the community he
            calls home.
          </p>
        </div>
      </section>

      {/* Standards */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Standards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="text-2xl mb-2">🔒</div>
              <h3 className="font-bold text-gray-900 mb-1">Background Checked</h3>
              <p className="text-gray-600 text-sm">
                Criminal background checks for every team member before their first walk.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="text-2xl mb-2">🏥</div>
              <h3 className="font-bold text-gray-900 mb-1">First Aid Certified</h3>
              <p className="text-gray-600 text-sm">
                Pet First Aid and CPR certification with ongoing education.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="text-2xl mb-2">🛡️</div>
              <h3 className="font-bold text-gray-900 mb-1">Insured &amp; Bonded</h3>
              <p className="text-gray-600 text-sm">
                Full liability coverage protecting your pet and property.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="text-2xl mb-2">📋</div>
              <h3 className="font-bold text-gray-900 mb-1">PSI Members</h3>
              <p className="text-gray-600 text-sm">
                Active members of Pet Sitters International following professional guidelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Technology and Communication
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We use Time to Pet, an industry-leading scheduling and communication platform designed
            specifically for pet care professionals. Through Time to Pet, we manage visit schedules,
            track walker GPS location in real time, and deliver detailed post-visit reports after
            every walk. Reports include timestamped arrival and departure, a written summary, photos,
            videos, and a GPS map of the walking route. You always know where your dog went and how
            they did.
          </p>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 sm:py-20 bg-amber-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Guarantee</h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            We are confident that you and your dog will be happy with our service. That is why we
            offer a money-back guarantee during your first four weeks. If you are not satisfied for
            any reason, we refund the amount you paid. We believe that earning your trust starts
            with backing our promises.
          </p>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <ContactSection />
    </>
  );
}

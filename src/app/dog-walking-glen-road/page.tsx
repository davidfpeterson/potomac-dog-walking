import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Link from "next/link";
import Image from "next/image";

import Breadcrumbs from "@/components/Breadcrumbs";
export const metadata: Metadata = {
  title: "Dog Walking on Glen Road, Potomac MD",
  description:
    "Dog walking along the Glen Road corridor in Potomac MD. Solo walks on estate-lined streets with trail access. Insured walkers. Call (301) 265-3647.",
  alternates: { canonical: "/dog-walking-glen-road" },
};

const faqs = [
  {
    question: "Do you walk dogs on the large properties along Glen Road?",
    answer:
      "Yes. Many Glen Road properties have long driveways and expansive grounds. Our walkers are comfortable navigating large estates and can incorporate your property's grounds into the walk or head out onto Glen Road's quieter stretches and nearby trails.",
  },
  {
    question: "How do you handle homes with acreage and gated entries?",
    answer:
      "During our meet and greet, we coordinate gate codes, key access, and any property-specific details. Our walkers are experienced with estate properties and know how to enter and secure your home properly. Access details are stored securely in our scheduling platform.",
  },
  {
    question: "Can walks include off-property trails near Glen Road?",
    answer:
      "Absolutely. Glen Road provides access to several trail systems including paths toward Cabin John Regional Park and connections to the C&O Canal towpath. For longer walks, we can extend the route beyond your property into these natural areas.",
  },
  {
    question: "What size dogs do you walk?",
    answer:
      "We walk dogs of all sizes and breeds, from small companions to large working breeds. Because every walk is solo, your dog receives handling tailored to their size, strength, and energy level. Our walkers are experienced with all breeds common in the Potomac area.",
  },
];

export default function DogWalkingGlenRoadPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Service Area", href: "/service-area" }, { name: "Glen Road", href: "/dog-walking-glen-road" }]} />
      <Hero
        title="Dog Walking on Glen Road"
        subtitle="Solo walks along Potomac's most scenic corridor. From estate properties to woodland trails, our insured walkers provide attentive care for your dog."
      />

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Image
            src="/images/dog-walking-glen-road.jpg"
            alt="Dog walker with a German shepherd on a wooded road near Glen Road estates in Potomac"
            width={800}
            height={533}
            className="w-full h-auto rounded-xl mb-8"
          />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Dog Walking Along the Glen Road Corridor
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Glen Road cuts through some of Potomac&apos;s most beautiful
            terrain — rolling hills, wooded lots, and large estate properties
            set back from the road behind mature trees. The corridor is quieter
            than Potomac&apos;s main arteries, with long stretches of open road
            and natural surroundings that make it a premier location for walking
            dogs.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our team provides solo walks for Glen Road residents, meaning your
            dog walks alone with a dedicated handler. Whether your property has
            extensive grounds or you prefer off-property routes along nearby
            trails, we tailor each walk to your dog&apos;s needs. GPS tracking,
            photos, and detailed reports accompany every visit.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We have served Potomac homeowners since 2009, averaging over 20,000
            walks per year.{" "}
            <Link
              href="/services"
              className="text-green-800 underline hover:text-green-600"
            >
              View services and pricing
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-green-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Why Glen Road Is Ideal for Dog Walking
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Glen Road area offers conditions that most neighborhoods
            cannot match:
          </p>
          <ul className="space-y-3 text-gray-600">
            <li className="flex gap-3 items-start">
              <span className="text-green-700 text-xl leading-none">
                &#8226;
              </span>
              <span>
                <strong>Low traffic density</strong> — Fewer cars than River
                Road or Falls Road, allowing for calmer, safer walks along the
                roadside and surrounding lanes
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-700 text-xl leading-none">
                &#8226;
              </span>
              <span>
                <strong>Natural terrain variety</strong> — Wooded sections,
                open meadow views, and gentle elevation changes keep walks
                engaging for dogs of all energy levels
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-700 text-xl leading-none">
                &#8226;
              </span>
              <span>
                <strong>Trail access</strong> — Connections to Cabin John
                Regional Park and the C&amp;O Canal towpath are nearby, giving
                dogs access to miles of natural paths
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-700 text-xl leading-none">
                &#8226;
              </span>
              <span>
                <strong>Privacy and space</strong> — Large lots mean fewer
                unexpected encounters with other dogs, which is especially
                valuable for{" "}
                <Link
                  href="/dog-walking-reactive-dogs-potomac"
                  className="text-green-800 underline hover:text-green-600"
                >
                  reactive dogs
                </Link>
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Service Tailored to Estate Properties
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Glen Road homeowners often have unique requirements. Properties
            may include long driveways, multi-acre lots, or specific access
            procedures. Our walkers adapt to these settings seamlessly, whether
            that means walking your dog on your own grounds, combining property
            and road walks, or driving to a nearby trailhead for an extended
            outing.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We also accommodate households with multiple dogs. Each dog receives
            a solo walk, and we can schedule visits back-to-back or at separate
            times depending on your dogs&apos; needs and temperaments.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-green-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Connect With Nearby Neighborhoods
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Glen Road connects to several other Potomac neighborhoods we serve:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex gap-3 items-start">
              <span className="text-green-700 text-xl leading-none">
                &#8226;
              </span>
              <Link
                href="/dog-walking-potomac-village"
                className="text-green-800 underline hover:text-green-600"
              >
                Dog Walking in Potomac Village
              </Link>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-700 text-xl leading-none">
                &#8226;
              </span>
              <Link
                href="/dog-walking-falconhurst"
                className="text-green-800 underline hover:text-green-600"
              >
                Dog Walking in Falconhurst
              </Link>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-700 text-xl leading-none">
                &#8226;
              </span>
              <Link
                href="/dog-walking-avenel"
                className="text-green-800 underline hover:text-green-600"
              >
                Dog Walking in Avenel
              </Link>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-700 text-xl leading-none">
                &#8226;
              </span>
              <Link
                href="/service-area"
                className="text-green-800 underline hover:text-green-600"
              >
                Full Potomac Service Area
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <ContactSection />
    </>
  );
}

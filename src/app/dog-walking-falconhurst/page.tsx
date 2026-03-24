import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Dog Walking in Falconhurst, Potomac MD",
  description:
    "Dog walking services in Falconhurst, Potomac MD. Solo walks on quiet residential streets, GPS-tracked, fully insured. Call (301) 265-3647 today.",
};

const faqs = [
  {
    question: "How often do you walk dogs in the Falconhurst area?",
    answer:
      "We walk dogs in Falconhurst and surrounding Potomac neighborhoods every day of the week. Most Falconhurst clients schedule recurring weekday walks, but we also accommodate weekend visits and one-time bookings.",
  },
  {
    question: "Is there a minimum commitment or contract?",
    answer:
      "No. We do not require long-term contracts. You can schedule walks on a recurring basis or book them as needed. Adjust your frequency, skip days, or pause service anytime through our scheduling platform.",
  },
  {
    question: "What happens during the first visit?",
    answer:
      "Before the first walk, we schedule a free meet and greet at your home. We meet your dog, learn about their temperament, discuss your goals, and coordinate home access. The first walk is scheduled after the meet and greet so your dog has already met their walker.",
  },
  {
    question: "Do you walk dogs in bad weather?",
    answer:
      "We walk in most weather conditions including rain and cold. In cases of severe weather such as thunderstorms, extreme heat, or ice, we communicate with you to either shorten the walk, adjust timing, or provide an indoor visit. Your dog's safety always comes first.",
  },
];

export default function DogWalkingFalconhurstPage() {
  return (
    <>
      <Hero
        title="Dog Walking in Falconhurst"
        subtitle="Personalized solo walks in one of Potomac's most peaceful neighborhoods. Insured, certified walkers who treat your dog like their own."
      />

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Image
            src="/images/dog-walking-falconhurst.jpg"
            alt="Professional dog walker with a beagle on a quiet Falconhurst residential street"
            width={800}
            height={533}
            className="w-full h-auto rounded-xl mb-8"
          />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Reliable Dog Walking in Falconhurst
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Falconhurst is a quiet, established neighborhood in Potomac
            characterized by spacious lots, mature trees, and winding roads
            that make for ideal dog-walking conditions. The low traffic volume
            and generous green space give our walkers room to provide your dog
            with a relaxed, enjoyable experience on every outing.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Each walk is one-on-one — your dog is the only dog on the walk.
            Our walkers carry GPS-enabled devices so you can track the route
            in real time, and you receive photos along with a written summary
            after each visit. We have walked dogs throughout Potomac since 2009,
            completing over 20,000 visits annually.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Ready to see how it works?{" "}
            <Link
              href="/get-started-dog-walker-potomac"
              className="text-green-800 underline hover:text-green-600"
            >
              Learn how to get started
            </Link>{" "}
            or call{" "}
            <a
              href="tel:3012653647"
              className="text-green-800 underline hover:text-green-600"
            >
              (301) 265-3647
            </a>
            .
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-green-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            What a Walk in Falconhurst Looks Like
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A typical walk in Falconhurst follows this pattern:
          </p>
          <ul className="space-y-3 text-gray-600">
            <li className="flex gap-3 items-start">
              <span className="text-green-700 text-xl leading-none">
                &#8226;
              </span>
              <span>
                <strong>Arrival and check-in</strong> — Your walker arrives
                within the scheduled window, enters your home securely, and
                greets your dog
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-700 text-xl leading-none">
                &#8226;
              </span>
              <span>
                <strong>Leash up and head out</strong> — The walk follows a
                route tailored to your dog&apos;s energy level, using
                Falconhurst&apos;s residential lanes and nearby green spaces
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-700 text-xl leading-none">
                &#8226;
              </span>
              <span>
                <strong>Exercise and enrichment</strong> — Sniffing, exploring,
                and steady movement keep your dog mentally and physically
                engaged throughout
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-700 text-xl leading-none">
                &#8226;
              </span>
              <span>
                <strong>Return and report</strong> — Your walker brings your dog
                home, refreshes water, and sends you photos and a walk summary
                through the app
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Nearby Trails and Green Spaces
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Falconhurst&apos;s position within Potomac provides access to
            several nearby trail systems for longer or more adventurous walks.
            Our walkers can incorporate portions of{" "}
            <Link
              href="/best-dog-walking-routes-potomac"
              className="text-green-800 underline hover:text-green-600"
            >
              Cabin John Regional Park trails, the C&amp;O Canal towpath, and
              Watts Branch
            </Link>{" "}
            depending on walk length and your dog&apos;s fitness level.
          </p>
          <p className="text-gray-600 leading-relaxed">
            For dogs that prefer familiar surroundings, Falconhurst&apos;s own
            streets offer more than enough variety for a satisfying daily walk.
            Our walkers rotate routes to keep things interesting and prevent
            monotony.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-green-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Explore Other Potomac Neighborhoods
          </h2>
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
                href="/dog-walking-glen-road"
                className="text-green-800 underline hover:text-green-600"
              >
                Dog Walking on Glen Road
              </Link>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-700 text-xl leading-none">
                &#8226;
              </span>
              <Link
                href="/dog-walking-20854"
                className="text-green-800 underline hover:text-green-600"
              >
                Dog Walking in Potomac 20854
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

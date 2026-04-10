import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

import Breadcrumbs from "@/components/Breadcrumbs";
export const metadata: Metadata = {
  title: "Backyard Clean-up | Dog Waste Removal Potomac MD",
  description:
    "Professional dog waste backyard clean-up in Potomac, MD. Keeps your yard safe and clean. Standalone or added to any walk. Call (301) 265-3647.",
  alternates: { canonical: "/services/backyard-cleanup" },
};

const faqs = [
  {
    question: "How often should I schedule backyard clean-up?",
    answer:
      "For most households with one or two dogs, a weekly clean-up keeps the yard in good condition. Homes with three or more dogs or smaller yards may benefit from twice-weekly service. We help you determine the right frequency based on your situation during your consultation.",
  },
  {
    question: "Can clean-up be added to my dog's regular walk?",
    answer:
      "Yes. Many clients add backyard clean-up to a scheduled walk. Your walker handles the clean-up during the same visit, making it convenient and efficient. It can also be booked as a standalone service if you prefer.",
  },
  {
    question: "Do you bring your own supplies?",
    answer:
      "Yes. Our walkers bring all necessary supplies, including waste bags and gloves. You do not need to provide anything for the clean-up. We handle everything and leave your yard clean.",
  },
  {
    question: "What areas of the yard do you clean?",
    answer:
      "We clean all areas your dog has access to, including the main lawn, side yards, garden beds, patios, and any fenced sections. If there are specific areas you would like us to focus on or avoid, let us know and we will adjust accordingly.",
  },
];

export default function BackyardCleanupPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Services", href: "/services" }, { name: "Backyard Clean-up", href: "/services/backyard-cleanup" }]} />
      <Hero
        title="Backyard Clean-up in Potomac, MD"
        subtitle="Professional dog waste removal to keep your yard safe, clean, and enjoyable for your family and pets. Available as a standalone service or added to any walk."
      />

      {/* Intro */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Image
            src="/images/backyard-cleanup-potomac.jpg"
            alt="Clean backyard in Potomac MD after professional dog waste removal service"
            width={800}
            height={600}
            className="w-full h-auto rounded-xl mb-8"
            priority
          />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            What Backyard Clean-up Involves
          </h2>
          <p className="text-gray-600 leading-relaxed">
            During a backyard clean-up visit, your walker thoroughly scans and clears your yard of
            all dog waste. We cover the full area your dog uses, including lawns, garden beds,
            patios, side yards, and any fenced areas. Waste is bagged and disposed of properly.
            Your walker notes the condition of your yard in your post-visit report, including any
            observations that may need extra attention.
          </p>
        </div>
      </section>

      {/* When You Need It */}
      <section className="py-16 sm:py-20 bg-green-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            When You Need Backyard Clean-up
          </h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              Busy families with multiple dogs where waste accumulates faster than you can manage
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              Preparing for outdoor gatherings, landscaping work, or real estate showings
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              Mobility challenges that make bending and scooping difficult
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              Potomac&apos;s wet spring and fall seasons when waste breaks down slowly
            </li>
          </ul>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Image
            src="/images/potomac-dog-walking-neighborhood.jpg"
            alt="Dog in a well-maintained Potomac backyard"
            width={800}
            height={600}
            className="w-full h-auto rounded-xl mb-8"
          />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Why Regular Yard Maintenance Matters
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Dog waste is more than an inconvenience. Left in the yard, it introduces bacteria and
            parasites into the soil that can affect both your pets and your family. Roundworm,
            hookworm, and giardia are commonly transmitted through contact with contaminated ground.
            Children who play in the yard are particularly at risk.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Dog waste also damages grass over time — the high nitrogen content burns patches and
            creates dead spots. In Potomac&apos;s clay-heavy soil, waste accumulation combined
            with poor drainage can create persistent odor and sanitation problems. Regular
            professional clean-up protects your family&apos;s health and preserves the condition
            of your lawn.
          </p>
        </div>
      </section>

      {/* How It Fits Into Your Plan */}
      <section className="py-16 sm:py-20 bg-amber-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            How Backyard Clean-up Fits Into Your Dog&apos;s Walking Plan
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Most Potomac clients add backyard clean-up to their dog&apos;s regular walking
            schedule. Your walker handles the yard during the same visit, which means one
            appointment covers both exercise and clean-up. This is especially convenient for
            families with busy schedules who want a tidy yard without coordinating a separate
            service provider.
          </p>
          <p className="text-gray-600 leading-relaxed">
            If you prefer a standalone clean-up without a walk, we offer dedicated visits booked
            in the same flexible 15-minute increments with a two-hour arrival window. Standalone
            clean-ups work well for homeowners who walk their own dog but want professional help
            keeping the yard maintained.
          </p>
        </div>
      </section>

      {/* What Affects Cost */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            What Affects the Cost of Backyard Clean-up in Potomac
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Backyard clean-up pricing depends on yard size, the number of dogs in your household,
            and visit frequency. Weekly service is the most common choice for homes with one or two
            dogs. Larger properties or multi-dog households may benefit from twice-weekly visits to
            keep the yard consistently clean.
          </p>
          <p className="text-gray-600 leading-relaxed">
            When combined with a walking plan, clean-up is added to your existing visit at a
            bundled rate. Recurring clients receive three complimentary walks as a welcome credit,
            priority scheduling, and detailed post-visit reports. There are no contracts, and you
            can adjust frequency at any time. Visit our{" "}
            <a href="/services" className="text-green-800 underline font-medium">
              services and pricing page
            </a>{" "}
            for a full overview of plans and options.
          </p>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <ContactSection />
    </>
  );
}

import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Link from "next/link";

import Breadcrumbs from "@/components/Breadcrumbs";
export const metadata: Metadata = {
  title: "How to Get Started with a Dog Walker in Potomac MD",
  description:
    "Get started with professional dog walking in Potomac, MD. Free consultation, no obligation. Call (301) 265-3647 to discuss your dog's needs.",
  alternates: { canonical: "/get-started-dog-walker-potomac" },
};

const faqs = [
  {
    question: "Is there an obligation when I call for a consultation?",
    answer:
      "No. The initial phone consultation is free and there is no obligation. We want to understand your dog's needs and make sure our service is a good fit before you commit to anything. Many people call just to ask questions — that is completely fine.",
  },
  {
    question: "How quickly can walks start after the meet and greet?",
    answer:
      "Most clients start within a few days of the meet and greet. Once we confirm your dog's needs, assign a walker, and set up your scheduling profile, walks can begin as soon as the next business day.",
  },
  {
    question: "What if my dog doesn't like the walker?",
    answer:
      "It rarely happens, but if your dog does not connect with their assigned walker, we will reassign a different team member. The meet and greet is designed to catch compatibility issues before walks begin. We also offer a money-back guarantee during your first four weeks.",
  },
  {
    question: "Do I need to provide a key?",
    answer:
      "Most clients provide a spare key, garage code, or smart lock access. We can also accommodate lockboxes. Your walker secures your home after every visit, and post-visit reports include timestamps confirming arrival and departure.",
  },
  {
    question: "Can I change my walking schedule after starting?",
    answer:
      "Yes. You can adjust your schedule, change walk duration, add or remove days, and pause service at any time through our scheduling platform. There are no long-term contracts or penalties for changes.",
  },
];

export default function GetStartedPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Get Started", href: "/get-started-dog-walker-potomac" }]} />
      <Hero
        title="How to Get Started with a Dog Walker in Potomac"
        subtitle="Three simple steps from your first call to your dog's first walk. Free consultation, no obligation, and a money-back guarantee during your first four weeks."
      />

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Getting Started Is Simple
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We have made the process as easy as possible. No lengthy forms, no app downloads, no waiting for matches. You call us, we learn about your dog, and we start walking. Most clients go from first call to first walk within a week.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-green-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Three Steps to Your Dog&apos;s First Walk
          </h2>
          <div className="space-y-8">
            <div className="flex gap-5 items-start">
              <div className="w-12 h-12 bg-green-800 text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">1</div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us for a Free Consultation</h3>
                <p className="text-gray-600 leading-relaxed mb-2">
                  Call <a href="tel:3012653647" className="text-green-800 underline hover:text-green-600 font-semibold">(301) 265-3647</a> to speak with us directly. We will ask about:
                </p>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li className="flex gap-2 items-start">
                    <span className="text-green-600">&#8226;</span>
                    Your dog&apos;s breed, age, and energy level
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-green-600">&#8226;</span>
                    Any behavioral considerations (reactivity, anxiety, medical needs)
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-green-600">&#8226;</span>
                    Your work schedule and preferred walking times
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-green-600">&#8226;</span>
                    Your neighborhood and home access logistics
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-green-600">&#8226;</span>
                    Which walk plan seems like the best fit
                  </li>
                </ul>
                <p className="text-gray-600 text-sm mt-2">
                  This call is free and there is no obligation. We want to make sure we are the right fit before you commit.
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="w-12 h-12 bg-green-800 text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">2</div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Schedule a Meet and Greet</h3>
                <p className="text-gray-600 leading-relaxed mb-2">
                  We schedule a visit to your home so your assigned walker can meet your dog in their own environment. During the meet and greet:
                </p>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li className="flex gap-2 items-start">
                    <span className="text-green-600">&#8226;</span>
                    Your walker meets your dog and begins building rapport
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-green-600">&#8226;</span>
                    We review home access, leash/harness preferences, and routines
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-green-600">&#8226;</span>
                    We discuss the best walking routes near your home
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-green-600">&#8226;</span>
                    You can ask questions and see our reporting platform
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-green-600">&#8226;</span>
                    We finalize your walking schedule and walk plan
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="w-12 h-12 bg-green-800 text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">3</div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Walks Begin</h3>
                <p className="text-gray-600 leading-relaxed mb-2">
                  Your walker starts coming on the schedule you set. After every visit you receive:
                </p>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li className="flex gap-2 items-start">
                    <span className="text-green-600">&#8226;</span>
                    GPS map of the walking route
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-green-600">&#8226;</span>
                    Timestamped arrival and departure
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-green-600">&#8226;</span>
                    Photos and videos of your dog on the walk
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-green-600">&#8226;</span>
                    Written summary of the visit
                  </li>
                </ul>
                <p className="text-gray-600 text-sm mt-2">
                  You also receive three complimentary walks as a welcome credit on your first invoice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Our Guarantee
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We offer a money-back guarantee during your first four weeks. If you or your dog are not completely satisfied with our service, we refund the amount you paid. No questions, no hassle.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We are confident in the quality of our care. We have served Potomac since 2009 and complete over twenty thousand visits per year. But we understand that every dog is different, and we want you to feel comfortable before making a long-term commitment.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-warm-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Choose Your Walk Plan
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Not sure which plan is right? Here is a quick guide:
          </p>
          <div className="space-y-3">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900 text-sm">Relief Walk (~15 min)</h3>
              <p className="text-gray-600 text-xs">Best for: puppies, senior dogs, supplemental walks</p>
            </div>
            <div className="bg-white rounded-lg border-2 border-green-600 p-4 shadow-sm">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-gray-900 text-sm">Signature Walk (~30 min)</h3>
                <span className="text-xs bg-green-800 text-white px-2 py-0.5 rounded-full font-semibold">Most Popular</span>
              </div>
              <p className="text-gray-600 text-xs">Best for: most dogs, daily midday walks</p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900 text-sm">Fitness Walk (~45 min)</h3>
              <p className="text-gray-600 text-xs">Best for: high-energy breeds, athletic dogs</p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900 text-sm">Adventure Walk (~60 min)</h3>
              <p className="text-gray-600 text-xs">Best for: dogs who love trails, parks, and exploration</p>
            </div>
          </div>
          <p className="text-gray-600 mt-4">
            <Link href="/services" className="text-green-800 underline hover:text-green-600">View full plan details</Link> |{" "}
            <Link href="/dog-walking-prices-potomac-md" className="text-green-800 underline hover:text-green-600">See pricing</Link>
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Areas We Serve
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We serve homeowners throughout the Potomac, MD area:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              <Link href="/dog-walking-potomac-md" className="text-green-800 underline hover:text-green-600">Potomac, MD</Link> — Avenel, River Falls, Cabin John, Bradley Farms, Park Potomac, and all neighborhoods
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              <Link href="/dog-walking-north-potomac" className="text-green-800 underline hover:text-green-600">North Potomac</Link> — Fallsreach, Quince Orchard Valley, and surrounding communities
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              <Link href="/dog-walking-travilah" className="text-green-800 underline hover:text-green-600">Travilah</Link> — Travilah Estates, Piney Meetinghouse Road, Glen Road corridor
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              <Link href="/dog-walking-20854" className="text-green-800 underline hover:text-green-600">All of 20854</Link> — The entire Potomac zip code
            </li>
          </ul>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <ContactSection />
    </>
  );
}

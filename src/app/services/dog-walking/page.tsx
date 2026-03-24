import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dog Walking in Potomac MD | Solo Walks",
  description:
    "Solo dog walks from 15 to 60 minutes in Potomac, MD. GPS-tracked, certified walkers, post-visit reports. Call (301) 265-3647.",
};

const walkOptions = [
  {
    name: "Relief Walk",
    duration: "~15 min",
    description:
      "Appropriate for puppies who need frequent bathroom breaks, senior dogs with limited mobility, or days when your dog simply needs a quick outing.",
  },
  {
    name: "Signature Walk",
    duration: "~30 min",
    description:
      "Suits most dogs and provides a solid balance of exercise and stimulation.",
  },
  {
    name: "Fitness Walk",
    duration: "~45 min",
    description:
      "Designed for athletic or high-energy breeds that need sustained movement to stay calm and focused.",
  },
  {
    name: "Adventure Walk",
    duration: "~60 min",
    description:
      "Best for dogs who thrive on extended exploration and benefit from visiting parks, trails, and new environments.",
  },
];

const faqs = [
  {
    question: "How long should my dog's walk be?",
    answer:
      "Walk length depends on your dog's breed, age, and energy level. Most dogs do well with a 30-minute Signature Walk for daily exercise and mental stimulation. High-energy breeds or younger dogs may benefit from a 45- or 60-minute walk. Puppies and seniors often need shorter, more frequent Relief Walks. We help you find the right fit during your free consultation.",
  },
  {
    question: "Will the same walker come every day?",
    answer:
      "We prioritize consistency. Recurring clients are assigned a primary walker, and your dog builds a relationship with that person over time. If your primary walker is unavailable, a trained team member who is familiar with your dog's routine and preferences steps in.",
  },
  {
    question: "What happens if the weather is bad?",
    answer:
      "We walk in all weather conditions with appropriate precautions. In extreme heat, we schedule walks during cooler parts of the day and carry water. In winter, we watch for ice, salt, and cold pavement. We communicate with you if conditions require a modified walk and always prioritize your dog's safety.",
  },
  {
    question: "Do you walk dogs off-leash?",
    answer:
      "No. All walks are conducted on-leash for your dog's safety. Potomac has traffic, wildlife, and other dogs, and on-leash walking ensures your dog stays secure at all times. We use properly fitted harnesses or collars based on your dog's needs.",
  },
  {
    question: "How do I know my home is secure after the walk?",
    answer:
      "Your walker locks all doors and secures your home after every visit. Our post-visit report includes timestamps for arrival and departure, confirming when your walker was in your home and when they left. Many clients also use smart locks or cameras for added peace of mind.",
  },
];

export default function DogWalkingPage() {
  return (
    <>
      <Hero
        title="Dog Walking in Potomac, MD"
        subtitle="Professional solo walks from 15 to 60 minutes, delivered by background-checked, Pet First Aid-certified walkers who tailor each outing to your dog's breed, age, and energy level."
      />

      {/* Intro */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Image
            src="/images/dog-walker-potomac-trail-summer.jpg"
            alt="Dog walker with leashed dog on a tree-lined trail near Potomac Maryland"
            width={800}
            height={533}
            className="w-full h-auto rounded-xl mb-8"
          />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            What Professional Dog Walking Involves
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A professional dog walk from Potomac Dog Walking is more than a trip around the block.
            Your walker arrives within a scheduled two-hour window, leashes your dog, and takes them
            on a route suited to their fitness level and temperament. Walks include steady movement,
            opportunities to sniff and explore, bathroom breaks, and fresh water as needed.
          </p>
          <p className="text-gray-600 leading-relaxed">
            After the walk, your walker secures your home, refreshes water bowls, and submits a
            detailed post-visit report with GPS tracking, timestamps, photos, and a written summary.
            Every walk is a solo walk — your dog never shares their time with dogs from another household.
          </p>
        </div>
      </section>

      {/* Signs Your Dog Needs a Walker */}
      <section className="py-16 sm:py-20 bg-amber-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Signs Your Dog Needs a Professional Dog Walker
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Dogs communicate their need for more activity through behavior changes. If your dog
            shows any of these signs, a consistent midday walk can address the root cause:
          </p>
          <ul className="space-y-3 text-gray-600">
            <li className="flex gap-3 items-start">
              <span className="text-amber-600 text-xl leading-none">&#8226;</span>
              Restless or pacing when you return home
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-amber-600 text-xl leading-none">&#8226;</span>
              Barking excessively during the day
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-amber-600 text-xl leading-none">&#8226;</span>
              Chewing furniture or shoes
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-amber-600 text-xl leading-none">&#8226;</span>
              Gaining weight from lack of exercise
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-amber-600 text-xl leading-none">&#8226;</span>
              Anxiety signs like whining or following you from room to room
            </li>
          </ul>
        </div>
      </section>

      {/* Why Daily Walks */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Image
            src="/images/dog-walker-cabin-john-trail.jpg"
            alt="Dog walker with dog on a trail near Cabin John Regional Park in Potomac"
            width={800}
            height={600}
            className="w-full h-auto rounded-xl mb-8"
          />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Why Dogs in Potomac Benefit from Daily Walks
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Even dogs with access to a fenced yard benefit from structured walks. A yard gives a
            dog space to relieve themselves, but it does not provide the changing scenery, new scents,
            and sustained movement that walking delivers. Potomac&apos;s proximity to the C&amp;O Canal
            towpath, Cabin John Regional Park, and neighborhood trails means your dog has access to
            varied terrain and environments that keep walks interesting and enriching throughout the year.
          </p>
        </div>
      </section>

      {/* Walk Length Guide */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            Choosing the Right Walk Length
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {walkOptions.map((opt) => (
              <div
                key={opt.name}
                className="bg-green-50 rounded-xl p-5 border border-green-100"
              >
                <h3 className="font-bold text-gray-900">{opt.name}</h3>
                <p className="text-green-800 text-sm font-semibold mb-2">{opt.duration}</p>
                <p className="text-gray-600 text-sm">{opt.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Affects Cost */}
      <section className="py-16 sm:py-20 bg-green-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Image
            src="/images/midday-dog-walk-potomac.jpg"
            alt="Midday dog walk through a tree-lined Potomac neighborhood"
            width={800}
            height={600}
            className="w-full h-auto rounded-xl mb-8"
          />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            What Affects Dog Walking Costs in Potomac
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The cost of professional dog walking in Potomac depends primarily on walk duration. A fifteen-minute relief walk is the most affordable option, while a sixty-minute adventure walk costs more due to the extended time and distance involved. Clients who book recurring daily or weekly walks receive better per-walk rates than one-time or occasional bookings.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Additional factors that may influence pricing include medication administration during the visit, special handling requirements for reactive or anxious dogs, and walks scheduled during early morning or evening hours. We publish transparent pricing on our{" "}
            <a href="/services" className="text-green-800 underline hover:text-green-600">services page</a> with no hidden fees, no surge pricing, and no long-term contracts.
          </p>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-16 sm:py-20 bg-warm-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Learn More About Dog Walking in Potomac
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              <Link href="/dog-walking-prices-potomac-md" className="text-green-800 underline hover:text-green-600">Dog Walking Prices in Potomac</Link> — Transparent pricing and what affects cost
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              <Link href="/midday-dog-walking-potomac" className="text-green-800 underline hover:text-green-600">Midday Dog Walking for Busy Professionals</Link> — Walks between 10 AM and 2 PM
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              <Link href="/dog-walking-reactive-dogs-potomac" className="text-green-800 underline hover:text-green-600">Dog Walking for Reactive Dogs</Link> — Solo walks on low-trigger routes
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              <Link href="/same-day-dog-walking-potomac" className="text-green-800 underline hover:text-green-600">Same-Day Dog Walking</Link> — Last-minute availability
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 text-xl leading-none">&#8226;</span>
              <Link href="/best-dog-walking-routes-potomac" className="text-green-800 underline hover:text-green-600">Best Dog Walking Routes in Potomac</Link> — Local trail and route guide
            </li>
          </ul>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <ContactSection />
    </>
  );
}

import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Is Dog Walking Worth It for Busy Owners? | Potomac MD",
  description:
    "Is hiring a professional dog walker worth it? Benefits, costs, and what to expect for busy dog owners in Potomac, MD. Honest guide from Potomac Dog Walking.",
};

const faqs = [
  {
    question: "How much does professional dog walking cost?",
    answer:
      "Dog walking rates in Potomac depend on walk duration (15–60 minutes) and booking frequency. Recurring daily clients receive the best per-walk rates. There are no hidden fees, no contracts, and no surge pricing. Visit our pricing page for detailed information.",
  },
  {
    question: "Can I just let my dog out in the yard instead?",
    answer:
      "A yard gives your dog space to relieve themselves, but it does not replace a structured walk. Dogs need changing scenery, new scents, sustained movement, and interaction with a handler to stay mentally healthy and physically fit. A fenced yard is a supplement to walking, not a substitute.",
  },
  {
    question: "Will my dog bond with the walker instead of me?",
    answer:
      "No. Dogs have enormous capacity for multiple trusted relationships. Your dog will look forward to their walker's visits while still being fully bonded to you. In fact, the exercise and stimulation from walks often makes dogs calmer and more affectionate during the time you are home together.",
  },
  {
    question: "How do I know the walker actually came?",
    answer:
      "Professional services provide GPS tracking, timestamped arrival and departure, photos, and written summaries after every visit. You can verify exactly when your walker arrived, where they went, and how long the walk lasted. This level of documentation is standard for quality services.",
  },
  {
    question: "Is dog walking worth it if I work from home some days?",
    answer:
      "Many clients who work from home still book walks because they know their dog benefits from structured exercise with a dedicated walker, even when they are home. Work-from-home days often mean back-to-back meetings where you cannot give your dog the walk they need. You can always cancel walks on flexible days.",
  },
];

export default function IsDogWalkingWorthItPage() {
  return (
    <>
      <Hero
        title="Is Dog Walking Worth It for Busy Owners?"
        subtitle="An honest look at the benefits, costs, and real-world impact of hiring a professional dog walker — for dog owners in Potomac, MD who are weighing the decision."
      />

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            The Short Answer: Yes — If You Value Your Dog&apos;s Health
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            If your dog spends 8 or more hours alone during the workday, professional dog walking is not a luxury — it is a baseline need. Dogs who do not get adequate exercise and stimulation during the day develop behavioral problems, gain weight, and experience chronic stress. A midday walk addresses all three.
          </p>
          <p className="text-gray-600 leading-relaxed">
            But we understand the hesitation. You are giving someone access to your home and trusting them with your dog. You want to know the money is well spent. This page breaks down the real benefits, common concerns, and how to decide if professional walking is right for your household.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-green-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Benefits of Professional Dog Walking
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Physical Health</h3>
              <p className="text-gray-600 text-sm">
                Regular walking prevents obesity, maintains cardiovascular health, supports joint mobility, and builds muscle tone. Dogs who walk daily live longer, healthier lives than sedentary dogs. This is especially important in Potomac, where many dogs have large yards that create the illusion of adequate exercise.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Mental Health</h3>
              <p className="text-gray-600 text-sm">
                Walking provides mental stimulation that no amount of indoor toys can replicate. New scents, changing environments, and the challenge of navigating the world keep your dog&apos;s mind engaged. Dogs who walk regularly show fewer signs of anxiety, boredom, and depression.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Behavioral Improvement</h3>
              <p className="text-gray-600 text-sm">
                Most behavioral problems — destructive chewing, excessive barking, restlessness, counter-surfing — are caused by insufficient exercise. A midday walk burns off the pent-up energy that drives these behaviors. Clients consistently report calmer, better-behaved dogs within weeks of starting regular walks.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Bathroom Relief</h3>
              <p className="text-gray-600 text-sm">
                Dogs should not be expected to hold it for 8–10 hours. A midday walk provides a necessary bathroom break that keeps your dog comfortable and prevents accidents in the house. This is critical for puppies, senior dogs, and dogs on certain medications.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Your Peace of Mind</h3>
              <p className="text-gray-600 text-sm">
                Knowing your dog is cared for during the workday lets you focus on your job without guilt. GPS tracking and post-visit reports confirm that your dog was walked, exercised, and returned safely. You can check your report during your lunch break and see exactly how your dog did.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Common Concerns (And Honest Answers)
          </h2>
          <div className="space-y-6">
            <div className="bg-warm-50 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-1">&ldquo;It&apos;s expensive.&rdquo;</h3>
              <p className="text-gray-600 text-sm">
                Professional dog walking is an investment, but consider the alternative costs: veterinary bills for obesity-related issues, property damage from destructive behavior, and the hidden cost of a stressed, unhappy dog. Many clients find that a daily walk reduces vet visits and eliminates behavioral problems that were costing them in other ways. See our{" "}
                <Link href="/dog-walking-prices-potomac-md" className="text-green-800 underline hover:text-green-600">pricing page</Link> for transparent rates.
              </p>
            </div>
            <div className="bg-warm-50 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-1">&ldquo;I have a yard.&rdquo;</h3>
              <p className="text-gray-600 text-sm">
                A yard is valuable, but most dogs do not exercise themselves. Left alone in a yard, dogs typically lie down, sit at the door, or pace the fence line. They need a handler to provide structure, pace, and direction. Walking delivers changing scenery and sustained movement that a yard cannot replicate.
              </p>
            </div>
            <div className="bg-warm-50 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-1">&ldquo;I don&apos;t want strangers in my home.&rdquo;</h3>
              <p className="text-gray-600 text-sm">
                Understandable. That is why{" "}
                <Link href="/how-to-choose-dog-walker-potomac" className="text-green-800 underline hover:text-green-600">choosing the right walker</Link> matters so much. Look for services with background-checked walkers, commercial insurance, and GPS-tracked visits with timestamps. After a few weeks with a consistent walker, they become a trusted part of your household routine.
              </p>
            </div>
            <div className="bg-warm-50 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-1">&ldquo;My dog is difficult.&rdquo;</h3>
              <p className="text-gray-600 text-sm">
                Reactive, anxious, and fearful dogs benefit the most from professional walking — but they need the right approach. Solo walks with a consistent, trained walker on{" "}
                <Link href="/dog-walking-reactive-dogs-potomac" className="text-green-800 underline hover:text-green-600">low-trigger routes</Link> can transform a dog&apos;s quality of life. Difficulty is not a disqualifier; it is a reason to get professional help.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-amber-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Who Gets the Most Value from Dog Walking
          </h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex gap-3 items-start">
              <span className="text-amber-600 text-xl leading-none">&#8226;</span>
              <strong>Commuters</strong> who are away from home 8+ hours — especially those commuting to DC, Bethesda, or Northern Virginia
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-amber-600 text-xl leading-none">&#8226;</span>
              <strong>Owners of high-energy breeds</strong> — Labradors, Golden Retrievers, German Shepherds, and other breeds that need significant daily exercise
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-amber-600 text-xl leading-none">&#8226;</span>
              <strong>Puppy owners</strong> who need frequent bathroom breaks and socialization during the critical developmental period
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-amber-600 text-xl leading-none">&#8226;</span>
              <strong>Senior dog owners</strong> whose dogs need gentle, consistent movement to maintain joint health and mobility
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-amber-600 text-xl leading-none">&#8226;</span>
              <strong>Owners dealing with behavioral issues</strong> — daily walking is often the first recommendation from trainers and veterinary behaviorists
            </li>
          </ul>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Ready to Try It?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Potomac Dog Walking offers a money-back guarantee during your first four weeks. If you or your dog are not satisfied, we refund what you paid. There is no risk in trying.
          </p>
          <p className="text-gray-600 leading-relaxed">
            <Link href="/get-started-dog-walker-potomac" className="text-green-800 underline hover:text-green-600">Learn how to get started</Link> |{" "}
            <Link href="/dog-walking-prices-potomac-md" className="text-green-800 underline hover:text-green-600">View pricing</Link> |{" "}
            <Link href="/services" className="text-green-800 underline hover:text-green-600">See all services</Link>
          </p>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <ContactSection />
    </>
  );
}

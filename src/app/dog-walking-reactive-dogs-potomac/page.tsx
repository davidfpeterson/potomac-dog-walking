import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dog Walking for Reactive Dogs in Potomac MD",
  description:
    "Professional dog walking for reactive, anxious, and fearful dogs in Potomac, MD. Solo walks only, low-trigger routes, consistent walkers. Call (301) 265-3647.",
};

const faqs = [
  {
    question: "What does 'reactive' mean in the context of dog walking?",
    answer:
      "A reactive dog overreacts to certain stimuli — other dogs, strangers, bicycles, loud noises, or unfamiliar environments. Reactions can include lunging, barking, growling, or attempting to flee. Reactivity is not aggression — it is usually rooted in fear, frustration, or over-excitement. With the right handling, reactive dogs can enjoy safe, structured walks.",
  },
  {
    question: "Will you walk my dog if they are aggressive toward other dogs?",
    answer:
      "We work with dogs who are reactive, anxious, or fearful. During your free consultation, we discuss your dog's specific triggers, history, and behavior patterns. If your dog has a bite history or requires handling beyond our scope, we will be honest about that and may recommend a veterinary behaviorist before starting walks.",
  },
  {
    question: "How do you handle encounters with other dogs during walks?",
    answer:
      "Our walkers are trained to create distance when they see other dogs, cyclists, or other triggers. We use techniques like u-turns, increasing distance, and redirecting attention. Because every walk is a solo walk, your dog never has to share space with unfamiliar dogs. We choose routes specifically to minimize surprise encounters.",
  },
  {
    question: "Can trail walks help my reactive dog?",
    answer:
      "Often yes. Natural environments like the C&O Canal towpath and Potomac's stream valley trails offer wider sight lines, fewer surprise encounters, and calming natural stimuli. Many reactive dogs do significantly better on trail walks than on neighborhood sidewalks. We can incorporate trails into Fitness and Adventure Walk plans.",
  },
  {
    question: "Do you work with my dog's trainer or behaviorist?",
    answer:
      "Absolutely. If your dog is working with a trainer or veterinary behaviorist, we coordinate with them to ensure our walking approach reinforces the training plan. Consistency across handlers is critical for reactive dogs, and we follow the specific protocols your trainer has established.",
  },
];

export default function DogWalkingReactiveDogsPage() {
  return (
    <>
      <Hero
        title="Dog Walking for Reactive Dogs in Potomac, MD"
        subtitle="Solo walks with consistent, trained walkers on low-trigger routes. We help reactive, anxious, and fearful dogs get the exercise they need safely."
      />

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Professional Walking for Reactive and Anxious Dogs
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            If your dog lunges at other dogs, barks at strangers, or panics at certain sights and sounds, finding a dog walker can feel impossible. Most walking services use group walks or rotating walkers — both of which make reactivity worse. Your dog needs the opposite: a consistent, calm walker who knows their triggers and walks them on routes designed to minimize encounters.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Potomac Dog Walking specializes in solo walks — every dog walks alone with their dedicated walker. For reactive dogs, this is not a premium upgrade. It is the only approach that works. Your walker builds a relationship with your dog over time, learns their threshold distances, recognizes their body language, and adjusts routes and pace accordingly.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We serve reactive dogs throughout Potomac, MD, including{" "}
            <Link href="/dog-walking-avenel-potomac" className="text-green-800 underline hover:text-green-600">Avenel</Link>,{" "}
            <Link href="/dog-walking-north-potomac" className="text-green-800 underline hover:text-green-600">North Potomac</Link>,{" "}
            <Link href="/dog-walking-travilah" className="text-green-800 underline hover:text-green-600">Travilah</Link>, and neighborhoods{" "}
            <Link href="/dog-walking-near-great-falls-park" className="text-green-800 underline hover:text-green-600">near Great Falls Park</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-green-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            How We Walk Reactive Dogs Differently
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Consistent Walker Assignment</h3>
              <p className="text-gray-600 text-sm">
                Your dog walks with the same primary walker every visit. Reactive dogs need predictability — a familiar person who knows their routine, their triggers, and their comfort zone. We do not rotate walkers for reactive dogs unless absolutely necessary, and any backup walker is briefed on your dog&apos;s specific needs.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Custom Route Planning</h3>
              <p className="text-gray-600 text-sm">
                We plan routes based on your dog&apos;s triggers. If your dog reacts to other dogs, we choose streets and times with minimal dog traffic. If they react to bicycles, we avoid multi-use paths. Potomac&apos;s cul-de-sac neighborhoods, quiet side streets, and trail access points give us many options for building low-trigger routes.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Distance Management</h3>
              <p className="text-gray-600 text-sm">
                Our walkers maintain safe distances from known triggers. We use u-turns, side-street detours, and visual barriers to prevent your dog from reaching threshold. The goal is to give your dog a positive walking experience — not to push them past their limits.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Detailed Behavior Reporting</h3>
              <p className="text-gray-600 text-sm">
                Post-visit reports for reactive dogs include specific notes on trigger encounters, your dog&apos;s response, and how your walker managed the situation. Over time, this creates a behavior log that helps you, your walker, and your trainer track progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Why Reactive Dogs Still Need Walks
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Many owners of reactive dogs reduce or eliminate walks because they find them stressful. This is understandable — but it makes the problem worse. Dogs who do not get regular exercise become more anxious, more reactive, and more difficult to handle. The less they walk, the more intense their reactions become when they do encounter triggers.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            A well-managed daily walk breaks this cycle. Your dog gets physical exercise, mental stimulation from new scents and environments, and the confidence that comes from navigating the world with a calm, consistent handler. Many of our reactive dog clients report significant improvement in their dog&apos;s behavior within weeks of starting regular walks.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Not sure if professional walking is right for your reactive dog?{" "}
            <Link href="/is-dog-walking-worth-it" className="text-green-800 underline hover:text-green-600">Read our guide on whether dog walking is worth it</Link> or{" "}
            <Link href="/how-to-choose-dog-walker-potomac" className="text-green-800 underline hover:text-green-600">learn how to choose the right walker</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-amber-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Best Walking Environments for Reactive Dogs in Potomac
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Potomac&apos;s geography provides excellent options for reactive dogs:
          </p>
          <ul className="space-y-3 text-gray-600">
            <li className="flex gap-3 items-start">
              <span className="text-amber-600 text-xl leading-none">&#8226;</span>
              <strong>Cul-de-sac neighborhoods</strong> — Avenel, Great Falls Estates, and Saddle Ridge have quiet dead-end streets with minimal through-traffic and few surprise encounters
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-amber-600 text-xl leading-none">&#8226;</span>
              <strong>C&amp;O Canal towpath (off-peak hours)</strong> — Wide, open sight lines allow your walker to see triggers from a distance and create space. Early morning and midday weekdays are the quietest times
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-amber-600 text-xl leading-none">&#8226;</span>
              <strong>Stream valley trails</strong> — Natural surface paths along Muddy Branch and other tributaries offer secluded walking with minimal foot traffic
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-amber-600 text-xl leading-none">&#8226;</span>
              <strong>Large-lot neighborhoods</strong> — Travilah, Falconhurst, and Seven Locks have wide spacing between homes and natural buffers that reduce trigger exposure
            </li>
          </ul>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <ContactSection />
    </>
  );
}

import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Link from "next/link";

import Breadcrumbs from "@/components/Breadcrumbs";
export const metadata: Metadata = {
  title: "How to Choose a Dog Walker in Potomac MD | Guide",
  description:
    "What to look for when hiring a dog walker in Potomac, MD. Insurance, background checks, solo vs. group walks, GPS tracking, and red flags to avoid.",
  alternates: { canonical: "/how-to-choose-dog-walker-potomac" },
};

const faqs = [
  {
    question: "What is the most important thing to look for in a dog walker?",
    answer:
      "Insurance and bonding. If something goes wrong — your dog gets injured, your home is damaged, or there is an accident — you need to know the walker carries commercial liability insurance. Ask for proof of insurance before hiring anyone. This is the single most important qualifier.",
  },
  {
    question: "Should I choose a solo walking service or a group walk?",
    answer:
      "Solo walks are safer and more effective. Your dog gets one-on-one attention, which means better exercise, more attentive care, and zero risk of negative interactions with unfamiliar dogs. Group walks are cheaper, but your dog shares attention with 3–6 other dogs and has no say in who they walk with.",
  },
  {
    question: "How do I verify a dog walker's credentials?",
    answer:
      "Ask for proof of commercial liability insurance, bonding, and background check documentation. Check whether they are members of a professional organization like Pet Sitters International (PSI). Ask if their walkers are certified in Pet First Aid and CPR. Reputable services will provide all of this willingly.",
  },
  {
    question: "What should I expect during a meet and greet?",
    answer:
      "A good dog walker will want to meet your dog before the first walk. During the meet and greet, they should ask about your dog's temperament, triggers, medical needs, and routine. They should also explain their safety protocols, show you how their reporting platform works, and discuss key logistics. If a service skips the meet and greet, that is a red flag.",
  },
  {
    question: "How much should I pay for dog walking in Potomac?",
    answer:
      "Professional solo dog walking in Potomac costs more than app-based group walking, but the quality difference is significant. Expect to pay based on walk duration — 15 to 60 minutes — with recurring clients receiving better rates. Be wary of prices that seem too low, as they often indicate group walks, minimal vetting, or lack of insurance.",
  },
];

export default function HowToChooseDogWalkerPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "How to Choose a Walker", href: "/how-to-choose-dog-walker-potomac" }]} />
      <Hero
        title="How to Choose a Dog Walker in Potomac, MD"
        subtitle="What to look for, what to ask, and what red flags to avoid when hiring a professional dog walker for your home in Potomac."
      />

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Finding the Right Dog Walker for Your Household
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Hiring a dog walker means giving someone access to your home and trusting them with a member of your family. In Potomac, where homes are often high-value and dogs are cherished, the stakes are high. You need someone who is professionally qualified, properly insured, and genuinely skilled with dogs — not just someone with a car and an app account.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This guide covers the criteria that matter most, the questions to ask, and the warning signs that should make you keep looking.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-green-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            What to Look For
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-1">1. Commercial Liability Insurance and Bonding</h3>
              <p className="text-gray-600 text-sm">
                This is non-negotiable. A walker without insurance puts you at financial risk if your dog is injured, your home is damaged, or a third party is harmed during the walk. Ask for proof of commercial liability insurance — not personal renters insurance. Bonding protects you against theft.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">2. Criminal Background Checks</h3>
              <p className="text-gray-600 text-sm">
                Your walker will have keys to your home and be alone with your possessions. Reputable services run criminal background checks on every walker and can provide documentation upon request.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">3. Pet First Aid and CPR Certification</h3>
              <p className="text-gray-600 text-sm">
                Dogs can experience medical emergencies during walks — heatstroke, choking, allergic reactions, or injuries. A certified walker knows how to respond. Ask whether the certification is current and from a recognized provider.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">4. Solo Walks (Not Group)</h3>
              <p className="text-gray-600 text-sm">
                Group walks mean your dog shares attention with other dogs. Solo walks mean your dog gets one-on-one care for the entire visit. Solo is safer, more effective, and more accountable. This is especially important for{" "}
                <Link href="/dog-walking-reactive-dogs-potomac" className="text-green-800 underline hover:text-green-600">reactive or anxious dogs</Link>.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">5. GPS Tracking and Post-Visit Reports</h3>
              <p className="text-gray-600 text-sm">
                You should know exactly where your dog went, how long the walk lasted, and how your dog behaved. GPS tracking, timestamps, photos, and written summaries are the standard for professional services. If a walker cannot provide this, they are behind the industry.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">6. Consistent Walker Assignment</h3>
              <p className="text-gray-600 text-sm">
                Dogs thrive on consistency. Your walker should be the same person every visit, not a rotating cast from an app. Consistent walkers know your dog&apos;s routine, preferences, and behavioral cues — and your dog trusts them.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">7. Professional Organization Membership</h3>
              <p className="text-gray-600 text-sm">
                Membership in organizations like Pet Sitters International (PSI) or the National Association of Professional Pet Sitters (NAPPS) indicates a commitment to industry standards and continuing education.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Red Flags to Watch For
          </h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex gap-3 items-start">
              <span className="text-red-500 text-xl leading-none">&#8226;</span>
              <strong>No proof of insurance</strong> — If they cannot show you a certificate of insurance, walk away
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-red-500 text-xl leading-none">&#8226;</span>
              <strong>Skips the meet and greet</strong> — A responsible walker always wants to meet your dog first
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-red-500 text-xl leading-none">&#8226;</span>
              <strong>No GPS tracking or reports</strong> — Without documentation, you have no way to verify the walk happened as described
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-red-500 text-xl leading-none">&#8226;</span>
              <strong>Group walks presented as standard</strong> — If the default is putting your dog with strangers, the focus is on volume, not quality
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-red-500 text-xl leading-none">&#8226;</span>
              <strong>Rotating walkers with no consistency</strong> — Your dog deserves a relationship with their walker, not a stranger each visit
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-red-500 text-xl leading-none">&#8226;</span>
              <strong>Vague or hidden pricing</strong> — Professional services publish transparent pricing with no surprise fees
            </li>
          </ul>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-amber-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Questions to Ask Before Hiring
          </h2>
          <ol className="space-y-3 text-gray-600 list-decimal list-inside">
            <li>Do you carry commercial liability insurance? Can I see proof?</li>
            <li>Are your walkers background-checked? How recently?</li>
            <li>Are walks solo or group?</li>
            <li>What certifications do your walkers hold?</li>
            <li>Do you provide GPS tracking and post-visit reports?</li>
            <li>Will my dog have a consistent walker, or does it rotate?</li>
            <li>What happens if my regular walker is sick?</li>
            <li>What is your cancellation policy?</li>
            <li>How long have you been operating in Potomac?</li>
            <li>Can I speak with current clients for references?</li>
          </ol>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            How Potomac Dog Walking Meets These Standards
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We built our service around the criteria above because we believe Potomac homeowners deserve the best. Every walk is a solo walk. Every walker is background-checked, Pet First Aid certified, insured, and bonded. Every visit includes GPS tracking, timestamps, photos, and a written summary. We have served Potomac since 2009 and are active members of Pet Sitters International.
          </p>
          <p className="text-gray-600 leading-relaxed">
            <Link href="/dog-walking-prices-potomac-md" className="text-green-800 underline hover:text-green-600">View our pricing</Link> |{" "}
            <Link href="/services" className="text-green-800 underline hover:text-green-600">See all services</Link> |{" "}
            <Link href="/get-started-dog-walker-potomac" className="text-green-800 underline hover:text-green-600">Get started today</Link>
          </p>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <ContactSection />
    </>
  );
}

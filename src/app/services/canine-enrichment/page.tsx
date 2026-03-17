import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Canine Enrichment in Potomac MD | Scent Work",
  description:
    "Canine enrichment in Potomac, MD. Scent work, exploration, and mental stimulation tailored to your dog. Call (301) 265-3647.",
};

const faqs = [
  {
    question: "Is canine enrichment the same as dog training?",
    answer:
      "No. Enrichment is not obedience training. It is about providing your dog with mental stimulation and sensory engagement through activities that fulfill their natural instincts. Enrichment makes your dog calmer and more satisfied, which often improves behavior, but it is not a substitute for formal training when training is needed.",
  },
  {
    question: "Does enrichment cost extra?",
    answer:
      "Enrichment is incorporated into our standard walking plans. We tailor the level of enrichment to your dog's needs as part of their regular walk. If your dog benefits from more structured enrichment activities, we discuss options during your consultation so you know exactly what to expect.",
  },
  {
    question: "What breeds benefit most from enrichment?",
    answer:
      "All dogs benefit from mental stimulation, but working breeds, herding breeds, and high-intelligence breeds like Border Collies, Australian Shepherds, Poodles, and Labrador Retrievers often show the most dramatic improvement. Dogs that were bred for a specific job need mental challenges to stay balanced when that job is not part of their daily life.",
  },
  {
    question: "How do I know if enrichment is helping my dog?",
    answer:
      "Owners typically notice results within the first few weeks. Common improvements include a calmer demeanor at home, less destructive behavior, reduced anxiety when left alone, and a dog that settles more easily in the evening. Our post-visit reports track your dog's energy and behavior over time so you can see patterns and progress.",
  },
];

export default function CanineEnrichmentPage() {
  return (
    <>
      <Hero
        title="Canine Enrichment in Potomac, MD"
        subtitle="Structured mental stimulation and sensory engagement that goes beyond a standard walk. Scent work, exploration, and problem-solving exercises tailored to your dog."
      />

      {/* Intro */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Image
            src="/images/canine-enrichment-creek-potomac.jpg"
            alt="Dog exploring a creek during a canine enrichment walk in Potomac Maryland"
            width={800}
            height={533}
            className="w-full h-auto rounded-xl mb-8"
          />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            What Canine Enrichment Involves
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Canine enrichment is any activity that engages your dog&apos;s natural instincts and
            provides mental stimulation beyond physical exercise. During enrichment-focused visits,
            your walker introduces activities like scent-based exploration along varied routes,
            where your dog is encouraged to investigate new smells, textures, and environments at
            their own pace.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Walks may include trail navigation through Potomac&apos;s parks and green spaces,
            decompression walks in quieter areas, and structured activities that challenge your
            dog&apos;s problem-solving abilities. Enrichment is personalized — a young herding
            breed receives different stimulation than a senior retriever.
          </p>
        </div>
      </section>

      {/* Signs */}
      <section className="py-16 sm:py-20 bg-amber-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Signs Your Dog Needs More Mental Stimulation
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Dogs that receive adequate physical exercise but still display restless or destructive
            behavior are often under-stimulated mentally. Common signs include:
          </p>
          <ul className="space-y-3 text-gray-600">
            <li className="flex gap-3 items-start">
              <span className="text-amber-600 text-xl leading-none">&#8226;</span>
              Excessive barking or whining when left alone
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-amber-600 text-xl leading-none">&#8226;</span>
              Chewing or destroying items around the house
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-amber-600 text-xl leading-none">&#8226;</span>
              Pacing or inability to settle
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-amber-600 text-xl leading-none">&#8226;</span>
              Obsessive behaviors like tail chasing or licking
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-amber-600 text-xl leading-none">&#8226;</span>
              Lack of interest in toys or activities that previously engaged them
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-6">
            These behaviors don&apos;t mean your dog is badly behaved — they mean your dog&apos;s
            brain needs more to do.
          </p>
        </div>
      </section>

      {/* Why Enrichment in Potomac */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Why Enrichment Matters for Dogs in Potomac
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Potomac&apos;s residential setting means many dogs spend significant portions of their
            day in a predictable home environment. Even with a large yard, the same sights, sounds,
            and smells become routine. Dogs are naturally curious and driven to explore, and without
            new stimuli, they become bored and restless.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Potomac&apos;s location near the C&amp;O Canal, Cabin John Regional Park, Seneca Creek
            State Park, and miles of neighborhood trails provides an ideal setting for enrichment
            walks. Varied terrain, wildlife scents, water features, and changing seasonal conditions
            give dogs the sensory variety their brains crave.
          </p>
        </div>
      </section>

      {/* How It Fits */}
      <section className="py-16 sm:py-20 bg-green-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            How Enrichment Fits Into Your Dog&apos;s Walking Plan
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Enrichment is not a separate visit — it is built into how we walk your dog. Every
            Potomac Dog Walking outing includes elements of enrichment, from route variety to
            allowing your dog time to investigate their environment. For dogs that need more
            structured mental stimulation, we design enrichment-focused walks that emphasize
            scent work, exploration of new areas, and activities that engage your dog&apos;s
            problem-solving instincts. Enrichment pairs naturally with our Signature, Fitness,
            and Adventure Walk plans.
          </p>
        </div>
      </section>

      {/* What Affects Cost */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            What Affects the Cost of Canine Enrichment in Potomac
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Enrichment is included as part of your dog&apos;s walking plan, so the cost depends on the
            walk duration and frequency you choose. Longer walks like Fitness and Adventure plans
            naturally allow more time for structured enrichment activities such as extended scent work,
            trail exploration, and decompression walks in varied environments.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Recurring clients benefit from three complimentary walks applied as a welcome credit on
            their first invoice, priority scheduling, and progress reports that track enrichment
            outcomes over time. There are no contracts, and you can adjust your plan as your dog&apos;s
            needs change. To learn more about walk durations and plan options, visit our{" "}
            <a href="/services" className="text-green-800 underline font-medium">
              services and pricing page
            </a>.
          </p>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <ContactSection />
    </>
  );
}

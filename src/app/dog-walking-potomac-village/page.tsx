import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Dog Walking in Potomac Village MD",
  description:
    "Professional dog walking in Potomac Village near River Road and Falls Road. Solo walks, GPS-tracked, insured and bonded. Call (301) 265-3647.",
};

const faqs = [
  {
    question: "Which streets in Potomac Village do you cover?",
    answer:
      "We walk dogs throughout Potomac Village, including along River Road, Falls Road, Persimmon Tree Road, and the surrounding residential streets. Our walkers are familiar with the village shops, the post office area, and the quieter lanes that branch off the main corridors.",
  },
  {
    question: "Can my dog walk near the shops and restaurants in the village?",
    answer:
      "Our walkers know which sections of Potomac Village have heavier foot traffic and which side streets offer a calmer environment. For dogs that enjoy busier settings, we can include the village center. For dogs that prefer quiet, we stick to the residential roads nearby.",
  },
  {
    question: "How quickly can you start service in Potomac Village?",
    answer:
      "Most new clients in Potomac Village begin within a few days of their initial call. We schedule a free meet and greet at your home so we can learn about your dog, discuss your preferred schedule, and coordinate home access. Call (301) 265-3647 to set up your visit.",
  },
  {
    question: "What safety measures do your walkers follow?",
    answer:
      "Every walk is a solo walk with one dedicated walker and one dog. All walkers are background-checked, insured, bonded, and certified in Pet First Aid and CPR. Walks are GPS-tracked through our scheduling platform, and you receive photos and a detailed report after each visit.",
  },
];

export default function DogWalkingPotomacVillagePage() {
  return (
    <>
      <Hero
        title="Dog Walking in Potomac Village"
        subtitle="One-on-one walks for your dog through the heart of Potomac. Trusted, insured walkers who know River Road, Falls Road, and every quiet street in the village."
      />

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Image
            src="/images/dog-walking-potomac-village.jpg"
            alt="Dog walker with a retriever near the shops in Potomac Village"
            width={800}
            height={533}
            className="w-full h-auto rounded-xl mb-8"
          />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Your Dog Deserves Potomac Village&apos;s Best Walks
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Potomac Village sits at the crossroads of River Road and Falls Road,
            surrounded by mature trees, well-maintained sidewalks, and a mix of
            local shops and quiet residential streets. It is one of the most
            pleasant places in Montgomery County to take a dog for a walk, and
            our team has been doing exactly that since 2009.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            We provide solo walks only — your dog gets undivided attention from
            a single, dedicated walker on every outing. Each walk is GPS-tracked,
            and you receive real-time updates, photos, and a written report
            through our scheduling platform. Our team completes more than 20,000
            walks per year across the Potomac area.
          </p>
          <p className="text-gray-600 leading-relaxed">
            From quick relief outings to extended fitness walks along nearby
            trails,{" "}
            <Link
              href="/services"
              className="text-green-800 underline hover:text-green-600"
            >
              explore our services and pricing
            </Link>{" "}
            to find what works best for your dog.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-green-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Popular Walking Routes Near the Village
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Potomac Village&apos;s central location provides easy access to a
            variety of walking environments:
          </p>
          <ul className="space-y-3 text-gray-600 mb-4">
            <li className="flex gap-3 items-start">
              <span className="text-green-700 text-xl leading-none">
                &#8226;
              </span>
              <span>
                <strong>River Road Residential Streets</strong> — Quiet,
                tree-canopied lanes branching south off River Road with generous
                setbacks and low traffic
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-700 text-xl leading-none">
                &#8226;
              </span>
              <span>
                <strong>Falls Road Corridor</strong> — A scenic stretch heading
                north from the village toward agricultural reserves and open
                fields
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-700 text-xl leading-none">
                &#8226;
              </span>
              <span>
                <strong>Watts Branch Stream Valley</strong> — A nearby stream
                valley trail offering natural terrain, shade, and a change of
                pace from sidewalk walks
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-700 text-xl leading-none">
                &#8226;
              </span>
              <span>
                <strong>C&amp;O Canal Towpath Access</strong> — For longer walks,
                our team can extend routes to the historic C&amp;O Canal towpath,
                just a short drive from the village
              </span>
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            Discover more options in our{" "}
            <Link
              href="/best-dog-walking-routes-potomac"
              className="text-green-800 underline hover:text-green-600"
            >
              guide to the best dog walking routes in Potomac
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Trusted by Potomac Village Dog Owners
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Many of our Potomac Village clients are professionals who commute
            into DC or Bethesda and need reliable{" "}
            <Link
              href="/midday-dog-walking-potomac"
              className="text-green-800 underline hover:text-green-600"
            >
              midday dog walking
            </Link>{" "}
            while they are away. Others are families looking for consistent
            afternoon exercise for their dogs, or retirees who want a helping
            hand on days when they cannot walk themselves.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whatever your situation, our walkers are insured, bonded,
            background-checked, and certified in Pet First Aid and CPR. We are
            members of Pet Sitters International and have served Potomac since
            2009. Call{" "}
            <a
              href="tel:3012653647"
              className="text-green-800 underline hover:text-green-600"
            >
              (301) 265-3647
            </a>{" "}
            to schedule a free meet and greet.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-green-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Neighborhoods Near Potomac Village
          </h2>
          <ul className="space-y-2 text-gray-600">
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
                href="/dog-walking-glen-road"
                className="text-green-800 underline hover:text-green-600"
              >
                Dog Walking on Glen Road
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

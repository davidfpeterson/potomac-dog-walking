"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
}

function FAQItem({ faq, defaultOpen = true }: { faq: FAQ; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-200" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
      <button
        className="w-full text-left py-4 flex justify-between items-start gap-4"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-900" itemProp="name">{faq.question}</span>
        <svg
          className={`w-5 h-5 text-gray-500 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-4" : "max-h-0"}`}
        itemScope
        itemProp="acceptedAnswer"
        itemType="https://schema.org/Answer"
      >
        <div className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</div>
      </div>
      {/* Hidden text for SEO — always in DOM even when visually collapsed */}
      {!open && (
        <div className="sr-only" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
          <span itemProp="text">{faq.answer}</span>
        </div>
      )}
    </div>
  );
}

export default function FAQSection({ faqs, title = "Frequently Asked Questions" }: FAQSectionProps) {
  return (
    <section className="py-16 sm:py-20" itemScope itemType="https://schema.org/FAQPage">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">{title}</h2>
        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} defaultOpen={true} />
          ))}
        </div>
      </div>
    </section>
  );
}

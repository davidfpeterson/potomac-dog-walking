export default function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-green-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          Ready to Get Started?
        </h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Give us a call to discuss your dog&apos;s needs and set up your first walk.
          No obligation — we want to make sure we are the right fit for your family.
        </p>
        <a
          href="tel:3012653647"
          className="inline-block bg-green-800 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-green-700 transition-colors"
        >
          Call Now: (301) 265-3647
        </a>
      </div>
    </section>
  );
}

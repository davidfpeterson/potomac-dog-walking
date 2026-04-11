export default function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-green-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-8 sm:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-3">
                Start with a free meet &amp; greet
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                No obligation. No pressure.
              </h2>
              <p className="text-gray-600 mb-5">
                We&apos;ll come to your home, meet your dog, and make sure we&apos;re the right fit for
                your family. If we&apos;re not, we&apos;ll say so — and it costs you nothing.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <svg className="w-5 h-5 text-green-700 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Free in-home consultation
                </li>
                <li className="flex gap-2">
                  <svg className="w-5 h-5 text-green-700 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  No contracts or commitments
                </li>
                <li className="flex gap-2">
                  <svg className="w-5 h-5 text-green-700 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Money-back guarantee for 4 weeks
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="tel:3012653647"
                className="bg-green-800 hover:bg-green-700 text-white rounded-xl px-6 py-5 text-center transition-colors inline-flex items-center justify-center gap-3 shadow-md"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="flex flex-col items-start leading-tight">
                  <span className="text-lg font-bold">Call (301) 265-3647</span>
                  <span className="text-xs font-normal text-green-100">Answered 7 days a week</span>
                </span>
              </a>
              <a
                href="sms:3012653647"
                className="bg-amber-500 hover:bg-amber-400 text-green-950 rounded-xl px-6 py-5 text-center transition-colors inline-flex items-center justify-center gap-3 shadow-md"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span className="flex flex-col items-start leading-tight">
                  <span className="text-lg font-bold">Text (301) 265-3647</span>
                  <span className="text-xs font-normal text-green-950/70">Quick reply during business hours</span>
                </span>
              </a>
              <p className="text-xs text-gray-500 text-center mt-1">
                Mon–Sun 7am–7pm · Emergency line 24/7 for existing clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

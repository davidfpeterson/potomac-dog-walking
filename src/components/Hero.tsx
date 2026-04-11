interface HeroProps {
  title: string;
  subtitle: string;
  showCTA?: boolean;
  /** When true, shows the homepage-style CTAs (Free Meet & Greet + Text). Defaults to false for subpages. */
  primaryCTA?: boolean;
}

export default function Hero({ title, subtitle, showCTA = true, primaryCTA = false }: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-green-800 via-green-900 to-green-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-green-100 leading-relaxed mb-6">
            {subtitle}
          </p>

          {/* Trust chips — works on every page */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 mb-7 text-sm text-green-100">
            <span className="inline-flex items-center gap-1.5">
              <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Free meet &amp; greet
            </span>
            <span className="inline-flex items-center gap-1.5">
              <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No contracts
            </span>
            <span className="inline-flex items-center gap-1.5">
              <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              4-week money-back guarantee
            </span>
          </div>

          {showCTA && (
            <>
              {primaryCTA ? (
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:3012653647"
                    className="group bg-amber-500 text-green-950 px-6 py-4 rounded-lg font-bold text-center hover:bg-amber-400 transition-colors shadow-lg inline-flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="flex flex-col items-start leading-tight">
                      <span>Book a Free Meet &amp; Greet</span>
                      <span className="text-xs font-normal opacity-75">Call (301) 265-3647 · No obligation</span>
                    </span>
                  </a>
                  <a
                    href="sms:3012653647"
                    className="border-2 border-green-300 text-green-50 px-6 py-4 rounded-lg font-semibold text-center hover:bg-green-800 transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Text us instead
                  </a>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:3012653647"
                    className="bg-amber-500 text-green-950 px-6 py-3 rounded-lg font-bold text-center hover:bg-amber-400 transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call (301) 265-3647
                  </a>
                  <a
                    href="sms:3012653647"
                    className="border-2 border-green-300 text-green-50 px-6 py-3 rounded-lg font-semibold text-center hover:bg-green-800 transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Text us
                  </a>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

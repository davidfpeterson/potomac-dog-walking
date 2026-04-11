const promises = [
  {
    title: "Free meet & greet",
    body: "We come to your home, meet your dog, and answer every question. You decide if we're the right fit — no pressure, no cost.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "No contracts, ever",
    body: "Month-to-month with no cancellation fees and no commitment. Adjust, pause, or stop your schedule anytime.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "4-week money-back guarantee",
    body: "If you or your dog aren't completely satisfied during the first four weeks, we refund what you paid. Simple as that.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function NoRiskPromise() {
  return (
    <section className="py-16 sm:py-20 bg-green-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block bg-amber-400 text-green-950 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-3">
            Our promise to you
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Trying us out is risk-free
          </h2>
          <p className="text-green-100">
            You&apos;re trusting someone with your dog and the key to your home.
            We don&apos;t take that lightly, and we back it up three ways.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promises.map((p) => (
            <div
              key={p.title}
              className="bg-green-900/50 border border-green-700 rounded-xl p-6"
            >
              <div className="w-12 h-12 rounded-full bg-amber-400 text-green-950 flex items-center justify-center mb-4">
                {p.icon}
              </div>
              <h3 className="font-bold text-white text-lg mb-2">{p.title}</h3>
              <p className="text-green-100 text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

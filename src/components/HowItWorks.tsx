const steps = [
  {
    num: "1",
    title: "Call or text",
    body: "Tell us about your dog — breed, age, temperament, and what you're looking for. No pressure, no sales pitch.",
  },
  {
    num: "2",
    title: "Free meet & greet",
    body: "We come to your home, meet your dog in their own space, and walk through the plan. You decide if we're a fit.",
  },
  {
    num: "3",
    title: "Your first walk",
    body: "A background-checked, Pet First Aid-certified walker starts your recurring schedule on your terms.",
  },
  {
    num: "4",
    title: "GPS reports after every walk",
    body: "Photos, videos, a written summary, and a map of where your dog went — delivered to your phone every time.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block bg-green-100 text-green-900 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-3">
            How it works
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            From first call to first walk in a few days
          </h2>
          <p className="text-gray-600">
            Getting started is simple. Here&apos;s exactly what happens after you reach out.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div
              key={s.num}
              className="relative bg-green-50 border border-green-100 rounded-xl p-6"
            >
              <div className="w-10 h-10 rounded-full bg-green-800 text-white font-bold flex items-center justify-center mb-4">
                {s.num}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

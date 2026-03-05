import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle: string;
  showCTA?: boolean;
}

export default function Hero({ title, subtitle, showCTA = true }: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-green-800 via-green-900 to-green-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-green-100 leading-relaxed mb-8">
            {subtitle}
          </p>
          {showCTA && (
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="#contact"
                className="bg-amber-500 text-green-950 px-6 py-3 rounded-lg font-bold text-center hover:bg-amber-400 transition-colors"
              >
                Schedule a Free Meet &amp; Greet
              </Link>
              <Link
                href="/services"
                className="border-2 border-green-400 text-green-100 px-6 py-3 rounded-lg font-semibold text-center hover:bg-green-800 transition-colors"
              >
                View Our Services
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

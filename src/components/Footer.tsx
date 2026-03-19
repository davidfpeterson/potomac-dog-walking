import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green-950 text-green-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand + NAP */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🐾</span>
              <span className="text-xl font-bold text-white">Potomac Dog Walking</span>
            </div>
            <p className="text-green-300 text-sm leading-relaxed mb-3">
              Professional dog walking and canine enrichment services for homeowners in Potomac, Maryland.
              Locally owned, insured, bonded, and vet-recommended since 2009.
            </p>
            <address className="text-green-300 text-sm not-italic leading-relaxed">
              <span className="block">Potomac Dog Walking</span>
              <span className="block">Potomac, MD 20854</span>
              <a href="tel:3012653647" className="block text-white font-semibold hover:text-green-200 transition-colors">
                (301) 265-3647
              </a>
              <a href="mailto:info@potomacdogwalking.com" className="block hover:text-white transition-colors">
                info@potomacdogwalking.com
              </a>
            </address>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-white transition-colors">All Services &amp; Pricing</Link></li>
              <li><Link href="/services/dog-walking" className="hover:text-white transition-colors">Dog Walking</Link></li>
              <li><Link href="/services/canine-enrichment" className="hover:text-white transition-colors">Canine Enrichment</Link></li>
              <li><Link href="/services/medication-administration" className="hover:text-white transition-colors">Medication Administration</Link></li>
              <li><Link href="/services/backyard-cleanup" className="hover:text-white transition-colors">Backyard Clean-up</Link></li>
              <li><Link href="/dog-walking-prices-potomac-md" className="hover:text-white transition-colors">Pricing Guide</Link></li>
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-white font-semibold mb-3">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/service-area" className="hover:text-white transition-colors">Potomac, MD</Link></li>
              <li><Link href="/dog-walking-north-potomac" className="hover:text-white transition-colors">North Potomac</Link></li>
              <li><Link href="/dog-walking-travilah" className="hover:text-white transition-colors">Travilah</Link></li>
              <li><Link href="/dog-walking-avenel-potomac" className="hover:text-white transition-colors">Avenel</Link></li>
              <li><Link href="/dog-walking-near-great-falls-park" className="hover:text-white transition-colors">Near Great Falls Park</Link></li>
              <li><Link href="/dog-walking-20854" className="hover:text-white transition-colors">20854 Zip Code</Link></li>
            </ul>
          </div>

          {/* Resources + Contact */}
          <div>
            <h3 className="text-white font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm mb-6">
              <li><Link href="/best-dog-walking-routes-potomac" className="hover:text-white transition-colors">Best Walking Routes</Link></li>
              <li><Link href="/how-to-choose-dog-walker-potomac" className="hover:text-white transition-colors">How to Choose a Walker</Link></li>
              <li><Link href="/is-dog-walking-worth-it" className="hover:text-white transition-colors">Is Dog Walking Worth It?</Link></li>
              <li><Link href="/midday-dog-walking-potomac" className="hover:text-white transition-colors">Midday Dog Walking</Link></li>
              <li><Link href="/dog-walking-reactive-dogs-potomac" className="hover:text-white transition-colors">Reactive Dog Walking</Link></li>
              <li><Link href="/same-day-dog-walking-potomac" className="hover:text-white transition-colors">Same-Day Walking</Link></li>
              <li><Link href="/get-started-dog-walker-potomac" className="hover:text-white transition-colors">Get Started</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/dog-walkers" className="hover:text-white transition-colors">Our Team</Link></li>
            </ul>
            <a
              href="tel:3012653647"
              className="inline-block bg-green-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-green-600 transition-colors"
            >
              Call (301) 265-3647
            </a>
          </div>
        </div>

        <div className="border-t border-green-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-green-400">
          <p>&copy; {new Date().getFullYear()} Potomac Dog Walking. All rights reserved.</p>
          <p>Potomac, MD 20854 &bull; Montgomery County &bull; <a href="tel:3012653647" className="hover:text-white">(301) 265-3647</a></p>
        </div>
      </div>
    </footer>
  );
}

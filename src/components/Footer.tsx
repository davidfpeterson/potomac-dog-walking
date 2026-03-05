import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green-950 text-green-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🐾</span>
              <span className="text-xl font-bold text-white">Potomac Dog Walking</span>
            </div>
            <p className="text-green-300 text-sm leading-relaxed">
              Professional dog walking and canine enrichment services for homeowners in Potomac, Maryland.
              Locally owned, insured, bonded, and vet-recommended since 2009.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/services/dog-walking" className="hover:text-white transition-colors">Dog Walking</Link></li>
              <li><Link href="/services/canine-enrichment" className="hover:text-white transition-colors">Canine Enrichment</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/service-area" className="hover:text-white transition-colors">Service Area</Link></li>
              <li><Link href="/dog-walkers" className="hover:text-white transition-colors">Our Team</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-3">Serving Potomac, MD</h3>
            <p className="text-green-300 text-sm mb-4">
              Avenel, River Falls, Potomac Falls, Cabin John, Park Potomac, Bradley Farms, Seven Locks, and
              surrounding neighborhoods.
            </p>
            <Link
              href="#contact"
              className="inline-block bg-green-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-green-600 transition-colors"
            >
              Schedule a Free Meet &amp; Greet
            </Link>
          </div>
        </div>

        <div className="border-t border-green-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-green-400">
          <p>&copy; {new Date().getFullYear()} Potomac Dog Walking. All rights reserved.</p>
          <p>Potomac, MD &bull; Montgomery County</p>
        </div>
      </div>
    </footer>
  );
}

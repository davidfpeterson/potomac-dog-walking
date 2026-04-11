"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  const services = [
    { name: "Dog Walking", href: "/services/dog-walking" },
    { name: "Canine Enrichment", href: "/services/canine-enrichment" },
    { name: "Medication Administration", href: "/services/medication-administration" },
    { name: "Backyard Clean-up", href: "/services/backyard-cleanup" },
  ];

  const areas = [
    { name: "Potomac, MD", href: "/service-area" },
    { name: "North Potomac", href: "/dog-walking-north-potomac" },
    { name: "Travilah", href: "/dog-walking-travilah" },
    { name: "Avenel", href: "/dog-walking-avenel-potomac" },
    { name: "Near Great Falls Park", href: "/dog-walking-near-great-falls-park" },
    { name: "20854 Zip Code", href: "/dog-walking-20854" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🐾</span>
            <div>
              <span className="text-lg sm:text-xl font-bold text-green-800">
                Potomac Dog Walking
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-green-800">
              Home
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/services"
                className="text-sm font-medium text-gray-700 hover:text-green-800 flex items-center gap-1"
              >
                Services
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-0 w-56 bg-white rounded-lg shadow-lg border py-2">
                  <Link
                    href="/services"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-800 font-medium"
                  >
                    All Services &amp; Pricing
                  </Link>
                  <div className="border-t my-1" />
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-800"
                    >
                      {s.name}
                    </Link>
                  ))}
                  <div className="border-t my-1" />
                  <Link
                    href="/dog-walking-prices-potomac-md"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-800"
                  >
                    Pricing Guide
                  </Link>
                </div>
              )}
            </div>
            <div
              className="relative"
              onMouseEnter={() => setAreasOpen(true)}
              onMouseLeave={() => setAreasOpen(false)}
            >
              <Link
                href="/service-area"
                className="text-sm font-medium text-gray-700 hover:text-green-800 flex items-center gap-1"
              >
                Areas
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {areasOpen && (
                <div className="absolute top-full left-0 mt-0 w-56 bg-white rounded-lg shadow-lg border py-2">
                  {areas.map((a) => (
                    <Link
                      key={a.href}
                      href={a.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-800"
                    >
                      {a.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-green-800">
              About
            </Link>
            <Link href="/dog-walkers" className="text-sm font-medium text-gray-700 hover:text-green-800">
              Our Team
            </Link>
            <a
              href="sms:3012653647"
              className="text-sm font-medium text-green-800 hover:text-green-700"
              aria-label="Text (301) 265-3647"
            >
              Text us
            </a>
            <a
              href="tel:3012653647"
              className="bg-green-800 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors inline-flex items-center gap-1.5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (301) 265-3647
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="lg:hidden py-4 border-t">
            <Link href="/" className="block py-2 text-gray-700 font-medium" onClick={() => setMobileOpen(false)}>
              Home
            </Link>
            <Link href="/services" className="block py-2 text-gray-700 font-medium" onClick={() => setMobileOpen(false)}>
              Services
            </Link>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="block py-2 pl-4 text-gray-600 text-sm"
                onClick={() => setMobileOpen(false)}
              >
                {s.name}
              </Link>
            ))}
            <Link href="/dog-walking-prices-potomac-md" className="block py-2 pl-4 text-gray-600 text-sm" onClick={() => setMobileOpen(false)}>
              Pricing Guide
            </Link>
            <Link href="/service-area" className="block py-2 text-gray-700 font-medium" onClick={() => setMobileOpen(false)}>
              Service Areas
            </Link>
            {areas.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="block py-2 pl-4 text-gray-600 text-sm"
                onClick={() => setMobileOpen(false)}
              >
                {a.name}
              </Link>
            ))}
            <Link href="/about" className="block py-2 text-gray-700 font-medium" onClick={() => setMobileOpen(false)}>
              About
            </Link>
            <Link href="/dog-walkers" className="block py-2 text-gray-700 font-medium" onClick={() => setMobileOpen(false)}>
              Our Team
            </Link>
            <a
              href="tel:3012653647"
              className="block mt-3 bg-green-800 text-white text-center px-4 py-2.5 rounded-lg font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              Call (301) 265-3647
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

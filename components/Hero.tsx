'use client'

import Link from 'next/link'

// Unsplash: calculator on tax form / paperwork + calculator (royalty-free)
const HERO_IMAGE =
  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1973&q=80'

export default function Hero() {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[65vh] lg:min-h-[75vh] flex items-center justify-center overflow-hidden">
      {/* Full-bleed background image (cover, centered) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />
      {/* Dark navy overlay for high-contrast text */}
      <div className="absolute inset-0 bg-navy opacity-90" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 py-8 sm:py-10 text-center text-white">
        {/* Headline – exact copy + hierarchy */}
        <h1 className="font-bold leading-tight mb-6 sm:mb-8">
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
            We&apos;ll lower your property taxes
          </span>
          <span className="block text-sm sm:text-base md:text-lg font-normal text-gray-300 mt-2 mb-1">
            or
          </span>
          <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gold mt-1">
            your money back. Guaranteed.
          </span>
        </h1>

        {/* CTAs – above the fold on desktop, stacked on mobile */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8">
          <Link
            href="/contact"
            className="w-full sm:w-auto bg-gold text-white font-bold px-6 py-3 sm:px-8 sm:py-3.5 rounded-lg hover:bg-gold-light transition-colors text-center text-base sm:text-lg"
          >
            Get Started Today
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto border-2 border-gold text-white font-bold px-6 py-3 sm:px-8 sm:py-3.5 rounded-lg bg-transparent hover:bg-gold hover:text-navy transition-colors text-center text-base sm:text-lg"
          >
            Learn More
          </Link>
        </div>

        {/* Proof points – closer to CTAs, reduced gaps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 sm:gap-2.5">
            <span className="text-gold text-lg sm:text-xl font-bold">✓</span>
            <span className="text-sm sm:text-base">100% Money-Back Guarantee</span>
          </div>
          <div className="flex items-center justify-center gap-2 sm:gap-2.5">
            <span className="text-gold text-lg sm:text-xl font-bold">✓</span>
            <span className="text-sm sm:text-base">One-Time Fee: $299</span>
          </div>
          <div className="flex items-center justify-center gap-2 sm:gap-2.5">
            <span className="text-gold text-lg sm:text-xl font-bold">✓</span>
            <span className="text-sm sm:text-base">Florida Experts</span>
          </div>
        </div>
      </div>
    </section>
  )
}

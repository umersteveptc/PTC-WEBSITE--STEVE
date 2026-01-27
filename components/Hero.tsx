export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row">
      {/* Left Navy Panel - 1/3 width, full height */}
      <div className="bg-navy text-white lg:w-1/3 flex flex-col justify-between p-8 lg:p-12 relative min-h-[600px] lg:min-h-screen">
        {/* Top gold accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gold"></div>
        
        <div className="flex flex-col space-y-6 mt-8 lg:mt-0">
          {/* Main Title */}
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
              <span className="text-white">PROPERTY TAX</span>{' '}
              <span className="text-gold">CUTTERS</span>
            </h1>
            <p className="text-gray-300 italic mt-2 text-sm lg:text-base">
              Professional Tax Mitigation Services
            </p>
          </div>

          {/* Big Headline */}
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
            We will lower your property tax — or your money back. Guaranteed.
          </h2>

          {/* Supporting Text */}
          <p className="text-gray-200 text-base lg:text-lg">
            Florida homeowners save thousands every year. We make sure you&apos;re one of them.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-8">
          <button className="w-full lg:w-auto bg-gold text-white font-bold py-4 px-8 rounded-lg hover:bg-gold-light transition-colors text-center cursor-pointer">
            <span className="block">100% Money-Back</span>
            <span className="block">Guarantee</span>
          </button>
        </div>
      </div>

      {/* Right Content Blocks - 2/3 width, white background */}
      <div className="bg-white lg:w-2/3 p-8 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* What This Is */}
          <div>
            <h3 className="text-navy font-bold text-xl mb-2 pb-2 border-b-2 border-gold">
              What This Is
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Florida homeowners may qualify for valuable property tax exemptions, but many miss them due to paperwork errors or missed deadlines. Property Tax Cutters files your Homestead Exemption accurately and on time.
            </p>
          </div>

          {/* Why It Matters */}
          <div>
            <h3 className="text-navy font-bold text-xl mb-2 pb-2 border-b-2 border-gold">
              Why It Matters
            </h3>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li className="flex items-start">
                <span className="text-gold font-bold text-xl mr-2">✓</span>
                <span>Reduces your assessed property value</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold font-bold text-xl mr-2">✓</span>
                <span>Protects against future tax increases</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold font-bold text-xl mr-2">✓</span>
                <span>One-time filing with ongoing benefit</span>
              </li>
            </ul>
          </div>

          {/* Our Promise */}
          <div className="lg:col-span-2">
            <h3 className="text-navy font-bold text-xl mb-2 pb-2 border-b-2 border-gold">
              Our Promise
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-2">
              We handle everything — from paperwork to county filing — so you can focus on settling into your new home.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed font-bold">
              If we don&apos;t successfully file an applicable exemption, you don&apos;t pay.
            </p>
          </div>

          {/* How It Works Card */}
          <div className="border-2 border-gold rounded-lg p-6 bg-white">
            <h3 className="text-navy font-bold text-xl mb-4 pb-2 border-b-2 border-gold">
              How It Works
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-navy flex items-center justify-center mr-3">
                  <span className="text-gold font-bold">1</span>
                </div>
                <p className="text-gray-700 text-sm pt-1">Complete a short online questionnaire</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-navy flex items-center justify-center mr-3">
                  <span className="text-gold font-bold">2</span>
                </div>
                <p className="text-gray-700 text-sm pt-1">Upload documents by phone or computer</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-navy flex items-center justify-center mr-3">
                  <span className="text-gold font-bold">3</span>
                </div>
                <p className="text-gray-700 text-sm pt-1">We file directly with the county</p>
              </div>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="bg-navy text-white border-2 border-gold rounded-lg p-6 flex flex-col items-center justify-center">
            <p className="text-white text-sm uppercase mb-2">ONE-TIME FEE</p>
            <p className="text-gold text-5xl font-bold mb-4">$299</p>
            <p className="text-white text-xs text-center">
              If no applicable exemption is successfully filed, you pay nothing.
            </p>
          </div>

          {/* Learn More Box */}
          <div className="lg:col-span-2 border-2 border-gold rounded-lg p-6 bg-white">
            <p className="text-navy font-bold text-sm mb-2">Learn more or get started:</p>
            <p className="text-gold text-2xl font-bold text-center mb-2">
              www.PropertyTaxCutters.com
            </p>
            <p className="text-gray-600 text-xs text-center">
              Guarantee applies to successful filing of applicable exemptions under county rules.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

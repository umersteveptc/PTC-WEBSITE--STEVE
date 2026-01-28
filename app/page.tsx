import Hero from '@/components/Hero'

export default function Home() {
  return (
    <div>
      <Hero />
      
      {/* Content Sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* What This Is */}
            <div>
              <h3 className="text-navy font-bold text-xl mb-2 pb-2 border-b-2 border-gold">
                What This Is
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Florida homeowners may qualify for valuable property tax exemptions, but many miss them due to paperwork errors or missed deadlines. Property Tax Cutters files your Homestead Exemption accurately and on time.
              </p>
            </div>

            {/* Why It Matters */}
            <div>
              <h3 className="text-navy font-bold text-xl mb-2 pb-2 border-b-2 border-gold">
                Why It Matters
              </h3>
              <ul className="space-y-3 text-gray-700">
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
              <p className="text-gray-700 leading-relaxed mb-2">
                We handle everything — from paperwork to county filing — so you can focus on settling into your new home.
              </p>
              <p className="text-gray-700 leading-relaxed font-bold">
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
                  <p className="text-gray-700 pt-1">Complete a short online questionnaire</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-navy flex items-center justify-center mr-3">
                    <span className="text-gold font-bold">2</span>
                  </div>
                  <p className="text-gray-700 pt-1">Upload documents by phone or computer</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-navy flex items-center justify-center mr-3">
                    <span className="text-gold font-bold">3</span>
                  </div>
                  <p className="text-gray-700 pt-1">We file directly with the county</p>
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
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Trusted by Florida Homeowners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gold mb-2">100%</div>
              <p className="text-gray-700">Money-Back Guarantee</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold mb-2">$299</div>
              <p className="text-gray-700">One-Time Fee</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold mb-2">FL</div>
              <p className="text-gray-700">Florida Focused</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

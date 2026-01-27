export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-navy text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gold">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Professional property tax exemption filing for Florida homeowners
          </p>
        </div>
      </section>

      {/* Main Service */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-6 pb-2 border-b-2 border-gold">
              Homestead Exemption Filing
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              The Homestead Exemption is one of the most valuable property tax benefits available to Florida homeowners. It can significantly reduce your assessed property value, protecting you from tax increases and saving you thousands of dollars each year.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              However, filing for this exemption requires precise paperwork, strict adherence to deadlines, and a thorough understanding of county-specific requirements. One mistake can mean missing out on this valuable benefit entirely.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12 pb-2 border-b-2 border-gold inline-block">
            Our Process
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border-2 border-gold">
              <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center mb-4 mx-auto">
                <span className="text-gold font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3 text-center">Complete Questionnaire</h3>
              <p className="text-gray-700 text-center">
                Answer a few simple questions about your property and eligibility. The process takes just minutes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-gold">
              <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center mb-4 mx-auto">
                <span className="text-gold font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3 text-center">Upload Documents</h3>
              <p className="text-gray-700 text-center">
                Securely upload required documents through our platform or by phone. We&apos;ll guide you through exactly what&apos;s needed.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-gold">
              <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center mb-4 mx-auto">
                <span className="text-gold font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3 text-center">We File for You</h3>
              <p className="text-gray-700 text-center">
                We handle all communication with your county, ensure accurate filing, and confirm your exemption is processed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-6 pb-2 border-b-2 border-gold">
              Benefits of Homestead Exemption
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-gold font-bold text-2xl mr-3">✓</span>
                <div>
                  <h3 className="font-bold text-navy mb-1">Reduced Assessed Value</h3>
                  <p className="text-gray-700">Up to $50,000 reduction in assessed value for tax purposes</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-gold font-bold text-2xl mr-3">✓</span>
                <div>
                  <h3 className="font-bold text-navy mb-1">Save-Our-Homes Protection</h3>
                  <p className="text-gray-700">Annual assessment increases are capped at 3% or the change in the Consumer Price Index, whichever is lower</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-gold font-bold text-2xl mr-3">✓</span>
                <div>
                  <h3 className="font-bold text-navy mb-1">Ongoing Savings</h3>
                  <p className="text-gray-700">Once filed, the exemption continues year after year, providing ongoing tax savings</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-gold font-bold text-2xl mr-3">✓</span>
                <div>
                  <h3 className="font-bold text-navy mb-1">Protection from Creditors</h3>
                  <p className="text-gray-700">Homestead property is protected from most creditors under Florida law</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-navy mb-6 pb-2 border-b-2 border-gold inline-block">
              Service Areas
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              We serve homeowners throughout the state of Florida, working with all 67 counties to ensure your Homestead Exemption is filed correctly and on time.
            </p>
            <p className="text-gray-700">
              Whether you&apos;re in Miami-Dade, Broward, Orange, Hillsborough, or any other Florida county, we have the expertise to navigate your specific county&apos;s requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">One-time fee of $299 with 100% money-back guarantee</p>
          <a
            href="/contact"
            className="inline-block bg-gold text-white font-bold py-4 px-8 rounded-lg hover:bg-gold-light transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  )
}

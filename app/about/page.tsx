export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-navy text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">About</span>{' '}
            <span className="text-gold">Property Tax Cutters</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Your trusted partner in property tax mitigation
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-6 pb-2 border-b-2 border-gold">
              Our Mission
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              At Property Tax Cutters, we believe that every Florida homeowner deserves to pay only what they owe in property taxes. Too many homeowners miss out on valuable exemptions simply because the process is complex, time-consuming, and easy to get wrong.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our mission is simple: to ensure that every eligible homeowner receives the property tax exemptions they&apos;re entitled to, without the hassle and stress of navigating complex county filing requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12 pb-2 border-b-2 border-gold inline-block mx-auto">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
            <div className="bg-white p-6 rounded-lg border-2 border-gold">
              <h3 className="text-xl font-bold text-navy mb-3">Integrity</h3>
              <p className="text-gray-700">
                We operate with complete transparency and honesty. Our money-back guarantee isn&apos;t just a promise—it&apos;s our commitment to you.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-gold">
              <h3 className="text-xl font-bold text-navy mb-3">Expertise</h3>
              <p className="text-gray-700">
                We understand Florida&apos;s property tax exemption system inside and out, ensuring accurate and timely filing with your county.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-gold">
              <h3 className="text-xl font-bold text-navy mb-3">Service</h3>
              <p className="text-gray-700">
                We handle all the paperwork and filing so you can focus on what matters most—settling into your new home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-6 pb-2 border-b-2 border-gold">
              Why Choose Property Tax Cutters?
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-gold font-bold text-2xl mr-3">✓</span>
                <span className="text-lg">We specialize exclusively in Florida property tax exemptions</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold font-bold text-2xl mr-3">✓</span>
                <span className="text-lg">100% money-back guarantee if we don&apos;t successfully file your exemption</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold font-bold text-2xl mr-3">✓</span>
                <span className="text-lg">Simple, streamlined process—no complicated paperwork on your end</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold font-bold text-2xl mr-3">✓</span>
                <span className="text-lg">One-time fee with ongoing benefits year after year</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold font-bold text-2xl mr-3">✓</span>
                <span className="text-lg">Direct filing with your county—we handle all communication</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

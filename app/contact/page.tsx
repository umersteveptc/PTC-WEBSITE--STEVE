import ContactForm from '@/components/ContactForm'

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-navy text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Contact</span>{' '}
            <span className="text-gold">Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Get in touch to learn more or get started with your property tax exemption
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6 pb-2 border-b-2 border-gold">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6 pb-2 border-b-2 border-gold">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-navy mb-2">Website</h3>
                  <a
                    href="https://www.PropertyTaxCutters.com"
                    className="text-gold hover:text-gold-dark text-lg font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.PropertyTaxCutters.com
                  </a>
                </div>

                <div>
                  <h3 className="font-bold text-navy mb-2">Service Area</h3>
                  <p className="text-gray-700">Florida, USA</p>
                  <p className="text-gray-600 text-sm mt-1">
                    Serving all 67 Florida counties
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-2 border-gold">
                  <h3 className="font-bold text-navy mb-3">Business Hours</h3>
                  <p className="text-gray-700 mb-2">
                    <span className="font-medium">Monday - Friday:</span> 9:00 AM - 6:00 PM EST
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Saturday:</span> 10:00 AM - 4:00 PM EST
                  </p>
                  <p className="text-gray-600 text-sm mt-2">
                    We typically respond within 24 hours
                  </p>
                </div>

                <div className="bg-navy text-white p-6 rounded-lg">
                  <h3 className="font-bold mb-3">100% Money-Back Guarantee</h3>
                  <p className="text-sm">
                    If we don&apos;t successfully file an applicable exemption, you don&apos;t pay. That&apos;s our promise to you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

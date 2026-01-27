import Hero from '@/components/Hero'

export default function Home() {
  return (
    <div>
      <Hero />
      
      {/* Additional sections below hero */}
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

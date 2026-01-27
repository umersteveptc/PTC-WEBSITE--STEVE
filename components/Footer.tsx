import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-white">PROPERTY TAX</span>{' '}
              <span className="text-gold">CUTTERS</span>
            </h3>
            <p className="text-gray-300 text-sm">
              Professional Tax Mitigation Services
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-gold transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>www.PropertyTaxCutters.com</li>
              <li>Florida, USA</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Property Tax Cutters. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

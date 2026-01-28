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
            <ul className="space-y-3 text-sm">
              <li>
                <a 
                  href="tel:614-365-0895" 
                  className="text-gray-300 hover:text-gold transition-colors"
                >
                  614-365-0895
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@propertytaxcutters.com" 
                  className="text-gray-300 hover:text-gold transition-colors break-all"
                >
                  info@propertytaxcutters.com
                </a>
              </li>
              <li className="text-gray-300 pt-2">
                <span className="block">1121 S Military Trail</span>
                <span className="block">Suite 25B</span>
                <span className="block">Deerfield Beach, FL 33442</span>
              </li>
              <li className="text-gray-300 pt-2">
                <span className="font-semibold text-gold">Hours:</span>
                <span className="block">8am to 8pm (Mon–Fri)</span>
              </li>
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

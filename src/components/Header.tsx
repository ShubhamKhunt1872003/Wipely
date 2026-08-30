import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ChevronRight, Sparkles, Phone, ArrowRight } from 'lucide-react';

interface NavLink {
  name: string;
  href: string;
}

interface DropdownItem extends NavLink {
  subDropdown?: NavLink[];
}

interface NavItem extends NavLink {
  dropdown?: DropdownItem[];
  viewAllHref?: string;
}

const navigation: NavItem[] = [
  { name: 'Home', href: '/' },
  {
    name: 'Services',
    href: '/services',
    dropdown: [
      { name: 'Regular House Cleaning', href: '/services/regular-cleaning' },
      { name: 'End of Lease Cleaning', href: '/services/end-of-lease' },
      { name: 'Hourly Spring Cleaning', href: '/services/spring-cleaning' },
      {
        name: 'Custom Cleaning',
        href: '/services/custom-cleaning',
        subDropdown: [
          { name: 'Carpet Cleaning', href: '/services/carpet-cleaning' },
          { name: 'Upholstery Cleaning', href: '/services/upholstery-cleaning' },
          { name: 'Oven Cleaning', href: '/services/oven-cleaning' },
          { name: 'BBQ Cleaning', href: '/services/bbq-cleaning' },
          { name: 'Staircase Cleaning', href: '/services/staircase-cleaning' },
          { name: 'Commercial Cleaning', href: '/services/commercial-cleaning' },
        ],
      },
    ],
    viewAllHref: '/services',
  },
  { name: 'About', href: '/about' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Contact', href: '/contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCustomServicesOpen, setIsCustomServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileCustomOpen, setIsMobileCustomOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    if (!isMenuOpen) {
      setIsMobileServicesOpen(false);
      setIsMobileCustomOpen(false);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-shadow duration-300 bg-white/95 backdrop-blur-sm border-b border-gray-100 ${
        isScrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Sparkles className="w-7 h-7 text-emerald-600" />
            <span className="font-display font-bold !text-xl text-gray-900">Wipely</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navigation.map((item) =>
              item.dropdown ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => {
                    setIsServicesOpen(false);
                    setIsCustomServicesOpen(false);
                  }}
                >
                  <Link
                    to={item.href}
                    className="flex items-center gap-1 px-4 py-2 !text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors duration-200"
                  >
                    {item.name}
                    <ChevronDown className="w-4 h-4" />
                  </Link>

                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-60 bg-white rounded-xl shadow-lg border border-gray-100 py-2"
                      >
                        {item.dropdown.map((sub) =>
                          sub.subDropdown ? (
                            <div
                              key={sub.name}
                              className="relative"
                              onMouseEnter={() => setIsCustomServicesOpen(true)}
                              onMouseLeave={() => setIsCustomServicesOpen(false)}
                            >
                              <Link
                                to={sub.href}
                                className="flex items-center justify-between px-4 py-2.5 !text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-200"
                              >
                                {sub.name}
                                <ChevronRight className="w-3.5 h-3.5" />
                              </Link>

                              <AnimatePresence>
                                {isCustomServicesOpen && (
                                  <motion.div
                                    initial={{ opacity: 0, x: -8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -8 }}
                                    transition={{ duration: 0.15 }}
                                    className="absolute top-0 left-full w-64 bg-white rounded-xl shadow-lg border border-gray-100 py-2"
                                  >
                                    {sub.subDropdown.map((nested) => (
                                      <Link
                                        key={nested.name}
                                        to={nested.href}
                                        className="block px-4 py-2.5 !text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-200"
                                      >
                                        {nested.name}
                                      </Link>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          ) : (
                            <Link
                              key={sub.name}
                              to={sub.href}
                              className="block px-4 py-2.5 !text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-200"
                            >
                              {sub.name}
                            </Link>
                          )
                        )}
                        {item.viewAllHref && (
                          <>
                            <div className="my-1 border-t border-gray-100" />
                            <Link
                              to={item.viewAllHref}
                              className="flex items-center gap-1 px-4 py-2.5 !text-sm font-semibold text-emerald-600 hover:bg-emerald-50 transition-colors duration-200"
                            >
                              View All Services
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 !text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.href ? 'text-emerald-600' : 'text-gray-700 hover:text-emerald-600'
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* Phone + CTA */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="tel:+61435137936"
              className="flex items-center gap-2 !text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors duration-200"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              +61 435 137 936
            </a>
            <Link
              to="/book"
              className="bg-emerald-600 hover:bg-emerald-700 text-white !text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-300 shadow-sm hover:shadow-md"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-emerald-600"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t border-gray-100 fixed top-16 left-0 right-0 z-40 overflow-y-auto max-h-[calc(100vh-4rem)]"
          >
            <div className="px-4 py-6 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        aria-expanded={isMobileServicesOpen}
                        className="w-full flex items-center justify-between px-3 py-3 !text-base font-medium text-gray-700 rounded-lg hover:bg-emerald-50 hover:text-emerald-600"
                      >
                        {item.name}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isMobileServicesOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {isMobileServicesOpen && (
                        <div className="ml-4 space-y-1 mt-1 mb-2">
                          {item.dropdown.map((sub) =>
                            sub.subDropdown ? (
                              <div key={sub.name}>
                                <button
                                  type="button"
                                  onClick={() => setIsMobileCustomOpen(!isMobileCustomOpen)}
                                  aria-expanded={isMobileCustomOpen}
                                  className="w-full flex items-center justify-between px-3 py-2 !text-sm text-gray-600 rounded-lg hover:bg-emerald-50 hover:text-emerald-600"
                                >
                                  {sub.name}
                                  <ChevronDown
                                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                                      isMobileCustomOpen ? 'rotate-180' : ''
                                    }`}
                                  />
                                </button>
                                {isMobileCustomOpen && (
                                  <div className="ml-4 space-y-1 mt-1 mb-1">
                                    {sub.subDropdown.map((nested) => (
                                      <Link
                                        key={nested.name}
                                        to={nested.href}
                                        className="block px-3 py-2 !text-sm text-gray-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg"
                                        onClick={() => setIsMenuOpen(false)}
                                      >
                                        {nested.name}
                                      </Link>
                                    ))}
                                    <Link
                                      to={sub.href}
                                      className="block px-3 py-2 !text-sm font-semibold text-emerald-600 hover:bg-emerald-50 rounded-lg"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      View All Custom Services
                                    </Link>
                                  </div>
                                )}
                              </div>
                            ) : (
                              <Link
                                key={sub.name}
                                to={sub.href}
                                className="block px-3 py-2 !text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {sub.name}
                              </Link>
                            )
                          )}
                          {item.viewAllHref && (
                            <Link
                              to={item.viewAllHref}
                              className="block px-3 py-2 !text-sm font-semibold text-emerald-600 hover:bg-emerald-50 rounded-lg"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              View All Services
                            </Link>
                          )}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block px-3 py-3 !text-base font-medium rounded-lg ${
                        location.pathname === item.href
                          ? 'text-emerald-600'
                          : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-6 space-y-3">
                <a
                  href="tel:+61435137936"
                  className="flex items-center justify-center gap-2 w-full border-2 border-emerald-600 text-emerald-600 font-semibold py-3 rounded-full"
                >
                  <Phone className="w-4 h-4" />
                  Call Us
                </a>
                <Link to="/book" onClick={() => setIsMenuOpen(false)}>
                  <button className="w-full bg-emerald-600 text-white font-semibold py-3 rounded-full">
                    Get a Free Quote
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

import { Link } from 'react-router-dom';
import { Sparkles, Phone, Mail, MapPin, Clock } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Our Services', href: '/services' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Blog', href: '/blog' },
  { name: 'About Us', href: '/about' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

const services = [
  { name: 'Regular House Cleaning', href: '/services/regular-cleaning' },
  { name: 'End of Lease Cleaning', href: '/services/end-of-lease' },
  { name: 'Hourly Spring Cleaning', href: '/services/spring-cleaning' },
  { name: 'Custom Cleaning', href: '/services/custom-cleaning' },
  { name: 'Carpet Cleaning', href: '/services/carpet-cleaning' },
  { name: 'Upholstery Cleaning', href: '/services/upholstery-cleaning' },
  { name: 'Oven Cleaning', href: '/services/oven-cleaning' },
  { name: 'BBQ Cleaning', href: '/services/bbq-cleaning' },
  { name: 'Staircase Cleaning', href: '/services/staircase-cleaning' },
  { name: 'Commercial Cleaning', href: '/services/commercial-cleaning' },
];

const Footer: React.FC = () => {
  // Layout renders a fixed mobile "Get a Quote / Call" bar on every page, so
  // the footer needs extra bottom padding on small screens to avoid the bar
  // covering the copyright line.
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-24 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-7 h-7 text-emerald-400" />
            <span className="font-display font-bold !text-xl text-white">Wipely</span>
          </div>
          <p className="!text-sm leading-relaxed text-gray-400">
            Melbourne's trusted cleaning experts. We deliver spotless homes, offices, and peace of mind every time.
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold !text-base mb-3">Quick Links</h4>
          <div className="w-10 h-0.5 bg-emerald-500 mb-4" />
          <ul className="space-y-2.5 !text-sm text-gray-400">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.href} className="hover:text-white transition-colors duration-200">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold !text-base mb-3">Our Services</h4>
          <div className="w-10 h-0.5 bg-emerald-500 mb-4" />
          <ul className="space-y-2.5 !text-sm text-gray-400">
            {services.map((service) => (
              <li key={service.name}>
                <Link to={service.href} className="hover:text-white transition-colors duration-200">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold !text-base mb-3">Contact Us</h4>
          <div className="w-10 h-0.5 bg-emerald-500 mb-4" />
          <ul className="space-y-3 !text-sm text-gray-400">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-emerald-400" />
              Melbourne, VIC, Australia
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 flex-shrink-0 text-emerald-400" />
              <a href="tel:+61435137936" className="hover:text-white transition-colors duration-200">
                +61 435 137 936
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 flex-shrink-0 text-emerald-400" />
              <a href="mailto:info@wipely.au" className="hover:text-white transition-colors duration-200">
                info@wipely.au
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="w-4 h-4 flex-shrink-0 text-emerald-400" />
              Mon - Sat: 8am - 6pm
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="my-8 border-t border-gray-800" />
        <div className="text-center !text-sm text-gray-500">
          © {new Date().getFullYear()} Wipely. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

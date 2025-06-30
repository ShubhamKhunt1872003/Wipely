import * as React from 'react'; 
import { Link } from 'react-router-dom';
import { Sparkles, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="w-8 h-8 text-emerald-400" />
              <span className="text-2xl font-bold">Wipely</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Making homes shine across Melbourne with professional, eco-friendly cleaning services. 
              Your trusted cleaning partner for a spotless, healthy home.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-emerald-400 transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-emerald-400 transition-colors">Services</Link></li>
              <li><Link to="/book" className="text-gray-300 hover:text-emerald-400 transition-colors">Book Now</Link></li>
              <li><Link to="/reviews" className="text-gray-300 hover:text-emerald-400 transition-colors">Reviews</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-emerald-400 transition-colors">Blog</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-emerald-400 transition-colors">About</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-emerald-400 transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-emerald-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-300">1300 947 359</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-300">hello@wipely.au</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400 mt-1" />
                <div className="text-gray-300">
                  <p>Level 4, 567 Collins St</p>
                  <p>Melbourne VIC 3000</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Wipely. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import * as React from 'react'; 
import { Link } from 'react-router-dom';
import { Sparkles, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    // <Sparkles className="w-8 h-8 text-emerald-400" />
    //           <span className="text-2xl font-bold">Wipely</span>
    <footer className="bg-gray-900 text-white py-12">
  <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

    {/* Logo and Description */}
   <div>
  <div className="flex items-center gap-2 mb-4">
    <Sparkles className="w-8 h-8 text-emerald-400" />
    <span className="text-2xl font-bold text-white">Wipely</span>
  </div>
  <p className="text-sm leading-relaxed text-gray-300">
    Melbourne’s trusted cleaning experts. We deliver spotless homes, offices, and peace of mind every time.
  </p>
</div>
    {/* Quick Links */}
   <div>
  <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
  <div className="w-12 h-1 bg-emerald-500 mb-3"></div>

  <ul className="space-y-2 text-sm text-gray-300">
    <li><Link to="/" className="hover:text-white">Home</Link></li>
    <li><Link to="/services" className="hover:text-white">Our Services</Link></li>
    <li><Link to="/reviews" className="hover:text-white">Reviews</Link></li>
    <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
    <li><Link to="/about" className="hover:text-white">About Us</Link></li>
    <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
    <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
  </ul>
</div>

    {/* Services */}
   <div>
  <h4 className="text-lg font-semibold mb-3">Our Services</h4>
  <div className="w-12 h-1 bg-emerald-500 mb-3"></div>

  <ul className="space-y-2 text-sm text-gray-300">
    <li>🏠 <Link to="/services/regular-cleaning" className="hover:text-white">Regular House Cleaning</Link></li>
    <li>🚪 <Link to="/services/end-of-lease" className="hover:text-white">End of Lease Cleaning</Link></li>
    <li>✨ <Link to="/services/spring-cleaning" className="hover:text-white">One-off Spring Cleaning</Link></li>
    <li>🛠️ <Link to="/services/custom-cleaning" className="hover:text-white">Custom Cleaning</Link></li>
    <li>🧽 <Link to="/services/carpet-cleaning" className="hover:text-white">Carpet Steam Cleaning</Link></li>
    <li>🛋️ <Link to="/services/upholstery-cleaning" className="hover:text-white">Upholstery Cleaning</Link></li>
    <li>🔥 <Link to="/services/oven-cleaning" className="hover:text-white">Oven Cleaning</Link></li>
    <li>🍖 <Link to="/services/bbq-cleaning" className="hover:text-white">BBQ Cleaning</Link></li>
    <li>🏢 <Link to="/services/commercial-cleaning" className="hover:text-white">Commercial Spaces</Link></li>
  </ul>
</div>

    {/* Contact Info */}
    <div>
      <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
<div className="w-12 h-1 bg-emerald-500 mb-3"></div>

      <ul className="space-y-2 text-sm text-gray-300">
        <li>📍 Melbourne, VIC, Australia</li>
        <li>📞 <a href="tel:+61435137936" className="hover:text-white">+61 435 137 936</a></li>
        <li>✉️ <a href="mailto:hello@wipely.au" className="hover:text-white">info@wipely.au</a></li>
        <li>🕒 Mon - Sat: 8am - 6pm</li>
      </ul>
    </div>
  </div>

 <hr className="my-8 border-t border-gray-700" />

{/* Bottom Bar */}
<div className="text-center text-sm text-gray-500 px-4">
  © {new Date().getFullYear()} Wipely. All rights reserved.
</div>
</footer>

  );
};

export default Footer;
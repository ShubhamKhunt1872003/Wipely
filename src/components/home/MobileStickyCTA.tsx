import { Link } from 'react-router-dom';
import { Phone, Sparkles } from 'lucide-react';

const MobileStickyCTA: React.FC = () => (
  <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] px-3 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] flex gap-3">
    <a
      href="tel:+61435137936"
      className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-emerald-600 text-emerald-600 font-semibold py-2.5 rounded-full"
    >
      <Phone className="w-4 h-4" />
      Call Now
    </a>
    <Link
      to="/book"
      className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 text-white font-semibold py-2.5 rounded-full"
    >
      <Sparkles className="w-4 h-4" />
      Get a Quote
    </Link>
  </div>
);

export default MobileStickyCTA;

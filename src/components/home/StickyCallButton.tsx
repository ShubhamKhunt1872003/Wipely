import { Phone } from 'lucide-react';

// Real, verified Wipely number (used consistently across Header/Footer/hero/JSON-LD).
const PHONE_NUMBER = '+61 435 137 936';
const PHONE_HREF = 'tel:+61435137936';

const StickyCallButton: React.FC = () => (
  <a
    href={PHONE_HREF}
    aria-label={`Call Wipely on ${PHONE_NUMBER}`}
    className="hidden md:flex fixed right-5 top-1/2 -translate-y-1/2 z-40 items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold !text-sm pl-4 pr-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
  >
    <Phone className="w-4 h-4" />
    Call Now
  </a>
);

export default StickyCallButton;

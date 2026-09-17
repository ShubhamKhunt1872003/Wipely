// Site-wide floating WhatsApp button, rendered once from Layout so every page that uses
// the shared header/footer chrome gets it for free - no per-page duplication needed.
//
// Positioning: fixed bottom-right everywhere. On mobile it sits above the existing
// MobileStickyCTA bar (Call Now / Get a Quote) using the same env(safe-area-inset-bottom)
// technique that bar already uses, so the gap stays consistent on notched phones. On desktop
// it moves to the bottom-right corner, clear of StickyCallButton (which is vertically
// centered on the right edge instead).
const WHATSAPP_NUMBER = "61435137936"; // +61 435 137 936, wa.me format: country code + number, no +, no leading 0, no spaces
const WHATSAPP_MESSAGE = "Hi Wipely, I need help with a cleaning enquiry/booking.";
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const WhatsAppButton: React.FC = () => (
  <a
    href={WHATSAPP_HREF}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with Wipely on WhatsApp"
    title="WhatsApp"
    className="group fixed right-4 md:right-6 bottom-[calc(5.5rem+env(safe-area-inset-bottom))] md:bottom-6 z-40 flex items-center"
  >
    <span
      className="hidden md:flex items-center mr-3 px-3 py-1.5 rounded-lg bg-gray-900 text-white !text-sm font-medium whitespace-nowrap opacity-0 translate-x-1 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
      aria-hidden="true"
    >
      WhatsApp
    </span>
    <span className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105">
      <svg
        viewBox="0 0 24 24"
        className="w-7 h-7"
        fill="white"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12.001 2C6.478 2 2 6.477 2 12c0 1.986.579 3.836 1.578 5.392L2 22l4.735-1.548A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.524 2 12.001 2zm0 18.18a8.16 8.16 0 01-4.256-1.192l-.305-.181-3.155 1.032 1.05-3.075-.199-.316A8.176 8.176 0 013.82 12c0-4.517 3.664-8.18 8.181-8.18 4.516 0 8.18 3.663 8.18 8.18 0 4.516-3.664 8.18-8.18 8.18z" />
      </svg>
    </span>
  </a>
);

export default WhatsAppButton;

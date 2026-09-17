import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { getAttribution } from "../lib/utm";
import { buildWhatsAppHref } from "../lib/whatsapp";

// Proactive nudge for ad traffic that's browsing but hasn't booked yet - not the always-
// visible floating WhatsAppButton, which stays regardless of source/time-on-site.
const POPUP_DELAY_MS = 75_000;
const SESSION_KEY = "wipely_whatsapp_popup_shown";
const WHATSAPP_HREF = buildWhatsAppHref();

// Restricts the popup to visitors first-touch-attributed (via the existing utm.ts capture,
// read only - not modified here) to a Meta/Facebook/Instagram ad click. fbclid is Meta's own
// auto-appended click id and the most reliable signal regardless of whether UTMs were also
// set manually; utm_source is checked as a fallback for manually tagged links.
function cameFromMetaAd(): boolean {
  const attribution = getAttribution();
  if (attribution.fbclid) return true;
  const source = (attribution.utm_source || "").toLowerCase();
  return ["facebook", "instagram", "meta", "fb", "ig"].includes(source);
}

// Book.tsx keeps its step/submitted state as local component state with nothing exposed
// externally (no context, no route param, no storage flag), and the brief is explicit that
// this popup must not rewrite the booking flow to add one. This reads the same two headings
// Book.tsx already renders for its Review step and its post-submit success screen as a
// light, one-off proxy for "the visitor is finishing or has finished a booking" - checked a
// single time, only at the moment the popup would otherwise appear, not a continuous watch.
function isAtBookingReviewOrDone(): boolean {
  const heading = document.querySelector("h2")?.textContent ?? "";
  return (
    heading.includes("Review & Confirm") ||
    heading.includes("Booking Request Received")
  );
}

const WhatsAppPopup: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    if (!cameFromMetaAd()) return;

    const timer = window.setTimeout(() => {
      if (isAtBookingReviewOrDone()) return;
      setVisible(true);
      sessionStorage.setItem(SESSION_KEY, "true");
    }, POPUP_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.96 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          role="dialog"
          aria-label="WhatsApp chat invitation"
          className="fixed right-4 md:right-6 bottom-[calc(10rem+env(safe-area-inset-bottom))] md:bottom-24 z-40 w-[280px] max-w-[calc(100vw-2rem)]"
        >
          {/* Separate inner element for the card's own visuals + relative positioning
              context (for the absolute-positioned close button) - "relative" cannot live on
              the same element as "fixed" above, since they're mutually exclusive CSS
              position values on one element and would silently override each other. */}
          <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 p-4">
            <button
              type="button"
              onClick={() => setVisible(false)}
              aria-label="Close WhatsApp popup"
              className="absolute top-2.5 right-2.5 w-6 h-6 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors duration-200"
            >
              <X className="w-4 h-4" />
            </button>

            <p className="font-semibold text-gray-900 pr-6">
              &#128075; Hi! How can we help?
            </p>
            <p className="!text-sm text-gray-600 mt-1.5 mb-3">
              Looking for a cleaning service or need help with your booking?
            </p>

            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Wipely on WhatsApp"
              className="flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white !text-sm font-semibold py-2.5 rounded-full transition-colors duration-200"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 flex-shrink-0"
                fill="white"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12.001 2C6.478 2 2 6.477 2 12c0 1.986.579 3.836 1.578 5.392L2 22l4.735-1.548A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.524 2 12.001 2zm0 18.18a8.16 8.16 0 01-4.256-1.192l-.305-.181-3.155 1.032 1.05-3.075-.199-.316A8.176 8.176 0 013.82 12c0-4.517 3.664-8.18 8.181-8.18 4.516 0 8.18 3.663 8.18 8.18 0 4.516-3.664 8.18-8.18 8.18z" />
              </svg>
              Chat with us on WhatsApp
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppPopup;

// Shared WhatsApp click-to-chat configuration, so new WhatsApp UI (e.g. the proactive
// popup) reuses the same number/message rather than duplicating these values again.
//
// The existing floating WhatsApp button (components/WhatsAppButton.tsx) predates this
// module and keeps its own inline copy of the same values - deliberately left untouched
// here rather than refactored to import from this file, since it's an explicitly
// off-limits file for this change.
export const WHATSAPP_NUMBER = "61435137936"; // +61 435 137 936, wa.me format: country code + number, no +, no leading 0, no spaces
export const WHATSAPP_DEFAULT_MESSAGE =
  "Hi Wipely, I need help with a cleaning enquiry/booking.";

export function buildWhatsAppHref(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

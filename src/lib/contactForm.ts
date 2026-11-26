// Delivers Contact page messages to the business inbox via Web3Forms (https://web3forms.com),
// a free form-to-email service. The access key is tied to the receiving email address and is
// designed to be public (it can only send to that inbox), so a VITE_ variable is fine here.
//
// Setup: create a key at web3forms.com using info@wipely.au, then set
// VITE_WEB3FORMS_ACCESS_KEY in Vercel (Project → Settings → Environment Variables) and redeploy.
//
// Without a key, or if delivery fails for any reason, sendContactMessage() throws, so the page
// shows an error with phone/WhatsApp alternatives instead of a fake "message sent".

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;
const ENDPOINT = 'https://api.web3forms.com/submit';

export interface ContactMessage {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  /** Honeypot: hidden from people, so if it's ticked the sender is a bot and Web3Forms drops it. */
  botcheck?: boolean;
}

export const isContactFormConfigured = Boolean(ACCESS_KEY);

export async function sendContactMessage(data: ContactMessage): Promise<void> {
  if (!ACCESS_KEY) {
    throw new Error('Contact form is not configured (VITE_WEB3FORMS_ACCESS_KEY is missing).');
  }

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: ACCESS_KEY,
      subject: `Wipely website enquiry: ${data.subject}`,
      from_name: 'Wipely website',
      replyto: data.email,
      name: data.name,
      email: data.email,
      phone: data.phone || 'Not provided',
      topic: data.subject,
      message: data.message,
      botcheck: data.botcheck ?? false,
    }),
  });

  const body = (await res.json().catch(() => null)) as { success?: boolean; message?: string } | null;
  if (!res.ok || !body?.success) {
    throw new Error(body?.message || `Contact form delivery failed (HTTP ${res.status}).`);
  }
}

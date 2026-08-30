// Vercel Edge Function: GET /api/google-reviews
//
// Server-side proxy to the Google Places API (New) "Place Details" endpoint. This exists
// so the browser never sees GOOGLE_PLACES_API_KEY — the key only ever lives in Vercel's
// server-side environment variables (never a VITE_-prefixed var, which Vite would inline
// into the client bundle).
//
// SETUP REQUIRED (nothing works until both are set in Vercel → Project → Settings →
// Environment Variables):
//   GOOGLE_PLACES_API_KEY  — Google Cloud API key with "Places API (New)" enabled
//   GOOGLE_PLACE_ID        — the ChIJ...-format Place ID for "Wipely Cleaning Services"
//                            (find via https://developers.google.com/maps/documentation/places/web-service/place-id)
//
// KNOWN GOOGLE LIMITATION: Places API returns at most 5 reviews, chosen by Google's own
// "most relevant" ranking — not the full review history and not configurable. If you need
// every review, the Google Business Profile API is the only official option, but Google
// gates access to it (application/approval) and requires OAuth as the verified profile
// owner rather than a simple API key. This function does not attempt that.
//
// CACHING: response is cached at Vercel's edge for 6 hours, serving stale data for up to a
// further 24 hours while revalidating in the background if Google is briefly unavailable —
// comfortably inside Google's Places API caching allowance (historically 30 days).
//
// I don't have a real API key to test this end-to-end — it's written defensively (optional
// chaining, try/catch, never throws) so a missing config or an unexpected Google response
// shape degrades to an empty `reviews` array rather than a broken endpoint. Verify the
// response field names against Google's current Places API (New) docs once a real key is
// wired in, and check Vercel's function logs (console.error below) if reviews don't appear.

export const config = { runtime: 'edge' };

interface PlacesApiReview {
  rating?: number;
  text?: { text?: string };
  authorAttribution?: { displayName?: string; photoUri?: string; uri?: string };
  publishTime?: string;
  relativePublishTimeDescription?: string;
  googleMapsUri?: string;
}

interface PlacesApiResponse {
  reviews?: PlacesApiReview[];
  rating?: number;
  userRatingCount?: number;
}

const emptyResponse = (message: string) =>
  new Response(JSON.stringify({ reviews: [], rating: null, userRatingCount: null, error: message }), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });

export default async function handler(): Promise<Response> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return emptyResponse('Google Places integration is not configured (missing GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID).');
  }

  try {
    const url = `https://places.googleapis.com/v1/places/${placeId}?fields=reviews,rating,userRatingCount,googleMapsUri`;
    const googleRes = await fetch(url, {
      headers: { 'X-Goog-Api-Key': apiKey },
    });

    if (!googleRes.ok) {
      console.error(`Places API request failed: ${googleRes.status} ${await googleRes.text()}`);
      return emptyResponse('Google Places API request failed.');
    }

    const data: PlacesApiResponse = await googleRes.json();

    const reviews = (data.reviews ?? [])
      .map((review, index) => ({
        id: `google-${index}-${review.publishTime ?? index}`,
        name: review.authorAttribution?.displayName ?? 'Google user',
        rating: review.rating ?? 0,
        text: review.text?.text ?? '',
        date: review.relativePublishTimeDescription,
        photoUrl: review.authorAttribution?.photoUri,
        reviewUrl: review.googleMapsUri,
      }))
      .filter((review) => review.text.length > 0);

    return new Response(
      JSON.stringify({
        reviews,
        rating: typeof data.rating === 'number' ? data.rating : null,
        userRatingCount: typeof data.userRatingCount === 'number' ? data.userRatingCount : null,
        fetchedAt: new Date().toISOString(),
      }),
      {
        status: 200,
        headers: {
          'content-type': 'application/json',
          'Cache-Control': 'public, s-maxage=21600, stale-while-revalidate=86400',
        },
      }
    );
  } catch (error) {
    console.error('Failed to fetch Google reviews:', error);
    return emptyResponse('Unexpected error fetching Google reviews.');
  }
}

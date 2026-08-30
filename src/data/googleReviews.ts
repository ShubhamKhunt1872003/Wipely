export interface GoogleReview {
  id: string;
  name: string;
  rating: number;
  text: string;
  /** Human-readable or ISO date string, only set when the real review date is known — never invented. */
  date?: string;
  photoUrl?: string;
  reviewUrl?: string;
}

// Genuine Wipely Google Reviews, approved verbatim — do not edit wording, names, or ratings.
//
// This file is the FALLBACK data source for <GoogleReviews>, used:
//   - immediately on page load, before the live fetch to /api/google-reviews resolves
//   - whenever that live fetch fails or isn't configured yet (see src/hooks/useGoogleReviews.ts)
//
// Once GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID are configured (see api/google-reviews.ts),
// the homepage automatically shows live reviews fetched from Google instead — no code change
// needed here or in the carousel component itself. This file just needs to keep at least one
// genuine, approved review as a safety net for when the live API is unreachable.
export const googleReviews: GoogleReview[] = [
  {
    id: 'urvisha-shingala',
    name: 'Urvisha Shingala',
    rating: 5,
    text: "Had a really good experience with Wipely’s hourly cleaning service in Malvern East. The cleaner was friendly, hardworking, and did a great job. Everything was neat and fresh when the job was finished. Would happily recommend Wipely!",
  },
  {
    id: 'ratibhai-rakholiya',
    name: 'Ratibhai rakholiya',
    rating: 5,
    text: "I recently used Wipely for a house cleaning service in Bentleigh East and was really impressed with the result. The team was friendly, professional, and very thorough. They paid attention to the small details and left my home looking fresh, clean, and well presented. The whole experience was smooth and hassle-free. I’m very happy with the quality of the cleaning and would definitely recommend Wipely to anyone looking for a trustworthy house cleaning service. Great job!",
  },
  {
    id: 'fitness-lifestyle',
    name: 'fitness lifestyle',
    rating: 5,
    text: 'Excellent end-of-lease cleaning service! The team was punctual, professional, and left the property spotless. My landlord was very happy with the condition. Highly recommend Wipely',
  },
];

export const GOOGLE_REVIEWS_PROFILE_URL = 'https://maps.app.goo.gl/wbByJatEbA7PVjSHA';

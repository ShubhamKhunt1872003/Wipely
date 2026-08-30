import { useEffect, useState } from 'react';
import { googleReviews as fallbackReviews, type GoogleReview } from '../data/googleReviews';

interface UseGoogleReviewsResult {
  reviews: GoogleReview[];
  rating: number | null;
  userRatingCount: number | null;
  /** true once real data has come back from /api/google-reviews (vs. still showing fallback data) */
  isLive: boolean;
}

interface ApiResponse {
  reviews?: GoogleReview[];
  rating?: number | null;
  userRatingCount?: number | null;
}

// Note: `vite dev` does not serve /api routes (that's Vercel's job), so this fetch will
// 404 locally unless you run `vercel dev` or test against a real deployment — either way
// it fails closed to the approved fallback reviews below, never an empty section.
export function useGoogleReviews(): UseGoogleReviewsResult {
  const [result, setResult] = useState<UseGoogleReviewsResult>({
    reviews: fallbackReviews,
    rating: null,
    userRatingCount: null,
    isLive: false,
  });

  useEffect(() => {
    let cancelled = false;

    fetch('/api/google-reviews')
      .then((res) => (res.ok ? (res.json() as Promise<ApiResponse>) : Promise.reject(new Error(`HTTP ${res.status}`))))
      .then((data) => {
        if (cancelled || !Array.isArray(data.reviews) || data.reviews.length === 0) {
          return;
        }
        setResult({
          reviews: data.reviews,
          rating: typeof data.rating === 'number' ? data.rating : null,
          userRatingCount: typeof data.userRatingCount === 'number' ? data.userRatingCount : null,
          isLive: true,
        });
      })
      .catch(() => {
        // Not configured yet, offline, or Google's API is temporarily down —
        // keep showing the manually-approved fallback reviews already in state.
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return result;
}

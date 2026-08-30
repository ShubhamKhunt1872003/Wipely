import { Star } from 'lucide-react';
import SectionHeading from './SectionHeading';
import GoogleReviewsCarousel from './GoogleReviewsCarousel';
import { GOOGLE_REVIEWS_PROFILE_URL } from '../../data/googleReviews';
import { useGoogleReviews } from '../../hooks/useGoogleReviews';

const GoogleReviews: React.FC = () => {
  const { reviews, rating, userRatingCount, isLive } = useGoogleReviews();

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading
          title="What Our Customers Say"
          description="Real feedback from our customers."
          className="mb-6"
        />

        <div className="inline-flex items-center gap-2 bg-white rounded-full shadow-sm border border-gray-100 px-5 py-2.5 mb-10">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
            ))}
          </div>
          <span className="!text-sm font-semibold text-gray-800">
            {/* Rating/count only ever shown when it genuinely came back from the live
                Google Places fetch — never hardcoded, never shown while on fallback data. */}
            {isLive && rating !== null
              ? `${rating.toFixed(1)} · Google Reviews${userRatingCount ? ` (${userRatingCount})` : ''}`
              : 'Google Reviews'}
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <GoogleReviewsCarousel reviews={reviews} profileUrl={GOOGLE_REVIEWS_PROFILE_URL} />
      </div>
    </section>
  );
};

export default GoogleReviews;

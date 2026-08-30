import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Keyboard, A11y } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper/types';
import { Star, Quote, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import type { GoogleReview } from '../../data/googleReviews';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface GoogleReviewsCarouselProps {
  reviews: GoogleReview[];
  profileUrl: string;
}

const READ_MORE_THRESHOLD = 220;

const ReviewCard: React.FC<{ review: GoogleReview }> = ({ review }) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > READ_MORE_THRESHOLD;

  return (
    <div className="group relative h-full flex flex-col bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1">
      <Quote className="absolute top-5 right-5 w-9 h-9 text-emerald-50 fill-emerald-50" strokeWidth={1} />

      <div className="flex mb-4">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
        ))}
      </div>

      <p
        className={`relative !text-[15px] text-gray-700 leading-relaxed mb-4 flex-1 ${
          isLong && !expanded ? 'line-clamp-6' : ''
        }`}
      >
        "{review.text}"
      </p>

      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="!text-sm font-semibold text-emerald-600 hover:text-emerald-700 text-left mb-4 focus:outline-none focus-visible:underline"
        >
          {expanded ? 'Show less' : 'Read more'}
        </button>
      )}

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center gap-3">
          {review.photoUrl ? (
            <img
              src={review.photoUrl}
              alt=""
              referrerPolicy="no-referrer"
              className="w-9 h-9 rounded-full object-cover flex-shrink-0"
            />
          ) : (
            <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-700 font-semibold !text-sm flex items-center justify-center flex-shrink-0">
              {review.name.trim().charAt(0).toUpperCase()}
            </div>
          )}
          <div>
            <div className="font-semibold text-gray-900">{review.name}</div>
            {review.date && <div className="!text-xs text-gray-400">{review.date}</div>}
          </div>
        </div>
        <span className="!text-xs font-medium text-gray-400 flex-shrink-0">via Google</span>
      </div>
    </div>
  );
};

const GoogleReviewsCarousel: React.FC<GoogleReviewsCarouselProps> = ({ reviews, profileUrl }) => {
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const canLoop = reviews.length > 3;

  return (
    <div>
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, Keyboard, A11y]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          navigation={{ prevEl, nextEl }}
          pagination={{ clickable: true }}
          keyboard={{ enabled: true, onlyInViewport: true }}
          loop={canLoop}
          autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          speed={550}
          centeredSlides
          spaceBetween={20}
          slidesPerView={1.08}
          breakpoints={{
            768: { slidesPerView: 2.15, spaceBetween: 20 },
            1024: { slidesPerView: 3.15, spaceBetween: 24 },
          }}
          a11y={{ prevSlideMessage: 'Previous review', nextSlideMessage: 'Next review' }}
          className="!pb-12 !px-1"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id} className="h-auto py-1">
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>

        {reviews.length > 1 && (
          <>
            <button
              type="button"
              ref={setPrevEl}
              aria-label="Previous review"
              className="hidden sm:flex absolute left-0 sm:-left-4 top-[42%] -translate-y-1/2 z-10 w-11 h-11 items-center justify-center rounded-full bg-white text-gray-700 shadow-md border border-gray-100 hover:bg-emerald-600 hover:text-white transition-colors duration-300 disabled:opacity-30 disabled:pointer-events-none"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              ref={setNextEl}
              aria-label="Next review"
              className="hidden sm:flex absolute right-0 sm:-right-4 top-[42%] -translate-y-1/2 z-10 w-11 h-11 items-center justify-center rounded-full bg-white text-gray-700 shadow-md border border-gray-100 hover:bg-emerald-600 hover:text-white transition-colors duration-300 disabled:opacity-30 disabled:pointer-events-none"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      <div className="text-center mt-2">
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white font-semibold !text-sm px-6 py-3 rounded-full transition-colors duration-300"
        >
          View All Google Reviews
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default GoogleReviewsCarousel;

import { Camera } from 'lucide-react';
import SectionHeading from './home/SectionHeading';
import type { JobPhoto } from '../data/jobPhotos';

interface RecentJobsProps {
  photos: JobPhoto[];
  eyebrow?: string;
  title?: string;
  description?: string;
  /** Section background, e.g. "bg-white" or "bg-gray-50", to fit the page's alternating sections. */
  background?: string;
}

// Gallery of real photos from recent Wipely jobs (see src/data/jobPhotos.ts).
// Plain CSS only (no framer-motion opacity:0 entrance), so the photos are visible in the
// prerendered HTML and without JavaScript.
const RecentJobs: React.FC<RecentJobsProps> = ({
  photos,
  eyebrow = 'Our Work',
  title = 'Recent Jobs Around Melbourne',
  description = 'Real photos taken by our cleaners on the job, not stock images.',
  background = 'bg-white',
}) => (
  <section className={`py-14 sm:py-16 ${background}`}>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} animated={false} />

      <ul className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
        {photos.map((photo) => (
          <li key={photo.src} className="group relative overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
            <img
              src={photo.src}
              alt={photo.alt}
              width={900}
              height={1200}
              loading="lazy"
              decoding="async"
              className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 pb-3 pt-10">
              <span className="text-white font-semibold !text-sm sm:!text-base">{photo.caption}</span>
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-6 flex items-center justify-center gap-2 !text-sm text-gray-500">
        <Camera className="w-4 h-4" aria-hidden="true" />
        Photos from real Wipely cleans in Melbourne
      </p>
    </div>
  </section>
);

export default RecentJobs;

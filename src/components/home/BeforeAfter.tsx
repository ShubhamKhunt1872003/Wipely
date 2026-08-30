import SectionHeading from './SectionHeading';
import BeforeAfterSlider from './BeforeAfterSlider';
import BeforeAfterCard from './BeforeAfterCard';
import kitchenBeforeImg from '../../images/kitchenBefore.jpg';
import kitchenAfterImg from '../../images/kitchenAfter.jpg';

// Only Kitchen has a verified, matching before/after pair in the current asset
// library (same room, genuinely before vs. after). Bathroom/Upholstery filenames
// that looked like pairs turned out to be unrelated stock photos of different
// rooms, so — per "never use fake transformation images" — these ship as
// clearly labelled placeholders until real matched photos are supplied.
const placeholderCategories = ['Bathroom', 'End of Lease'];

const BeforeAfter: React.FC = () => (
  <section className="py-16 sm:py-20 bg-gray-50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Real Results" title="See the Difference" className="mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <BeforeAfterSlider
          before={kitchenBeforeImg}
          after={kitchenAfterImg}
          beforeAlt="Kitchen before a Wipely clean"
          afterAlt="Kitchen after a Wipely clean"
          label="Kitchen"
        />
        {placeholderCategories.map((title, index) => (
          <BeforeAfterCard key={title} title={title} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default BeforeAfter;

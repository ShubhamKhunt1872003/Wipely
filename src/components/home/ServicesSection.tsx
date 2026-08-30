import { Link } from 'react-router-dom';
import { ArrowRight, Home as HomeIcon, CheckCircle, Sparkles, Settings } from 'lucide-react';
import SectionHeading from './SectionHeading';
import ServiceCard from './ServiceCard';
import regularHouseImg from '../../images/regularHouseImg.jpg';
import endOfLeaseImg from '../../images/endOfLeaseImg.jpg';
import oneOfSpringImg from '../../images/oneOfSpringImg.jpg';
import customCleaningImg from '../../images/customCleaning.jpg';

// Names must match the existing service pages/footer exactly — see each
// page's own <h1> (with the generic "Professional"/"Services" wrapper words
// stripped, matching how the site already refers to them in its nav/footer).
const services = [
  {
    title: 'Regular House Cleaning',
    description: 'Weekly or bi-weekly cleaning to keep your home spotless.',
    icon: HomeIcon,
    image: regularHouseImg,
    href: '/services/regular-cleaning',
  },
  {
    title: 'End of Lease Cleaning',
    description: 'Inspection-ready cleaning for a smooth move-out.',
    icon: CheckCircle,
    image: endOfLeaseImg,
    href: '/services/end-of-lease',
  },
  {
    title: 'Hourly Spring Cleaning',
    description: 'A detailed, top-to-bottom seasonal clean.',
    icon: Sparkles,
    image: oneOfSpringImg,
    href: '/services/spring-cleaning',
  },
  {
    title: 'Custom Service',
    description: 'Specialised cleaning for carpets, upholstery, ovens, BBQs and more.',
    icon: Settings,
    image: customCleaningImg,
    href: '/services/custom-cleaning',
  },
];

const ServicesSection: React.FC = () => (
  <section className="py-16 sm:py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Services"
        title="Cleaning Services That Fit Your Needs"
        className="mb-12"
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-300"
        >
          View All Services
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default ServicesSection;

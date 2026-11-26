import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Star,
  ArrowRight,
  Users,
  Home as HomeIcon,
  Award,
  Clock,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import GoogleReviewsCarousel from '../components/home/GoogleReviewsCarousel';
import { GOOGLE_REVIEWS_PROFILE_URL } from '../data/googleReviews';
import { useGoogleReviews } from '../hooks/useGoogleReviews';
import RecentJobs from '../components/RecentJobs';
import { JOB_PHOTOS } from '../data/jobPhotos';

const Reviews: React.FC = () => {
  const { reviews, rating, userRatingCount, isLive } = useGoogleReviews();

  const cleaningJourney = [
    {
      step: 1,
      title: "Assessment",
      description: "We assess your space and discuss your specific needs",
      icon: CheckCircle,
      duration: "15 mins"
    },
    {
      step: 2,
      title: "Arrival",
      description: "Our team arrives with all professional equipment and supplies",
      icon: Users,
      duration: "On time"
    },
    {
      step: 3,
      title: "Cleaning in Action",
      description: "Systematic cleaning using proven methods and eco-friendly products",
      icon: Sparkles,
      duration: "2-4 hours"
    },
    {
      step: 4,
      title: "Spotless Home",
      description: "Final walkthrough, plus a free re-clean if you tell us within 24 hours",
      icon: Award,
      duration: "Complete"
    }
  ];

  const stats = [
    { number: "2,500+", label: "Homes Cleaned", icon: HomeIcon },
    { number: "4.9", label: "Star Rating", icon: Star },
    { number: "1,200+", label: "Happy Clients", icon: Users },
    { number: "24hr", label: "Response Time", icon: Clock }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              From Messy to
              <span className="block text-emerald-600">Marvelous</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Real Results from Real Homes Across Melbourne
            </p>
            <Link to="/book">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary px-8 py-4"
              >
                Book Now
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-6 h-6 text-emerald-400 opacity-60"
          >
            <Sparkles className="w-full h-full animate-float" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-32 right-20 w-4 h-4 text-blue-400 opacity-60"
          >
            <Sparkles className="w-full h-full animate-float" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -25, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-32 left-1/4 w-5 h-5 text-emerald-300 opacity-60"
          >
            <Sparkles className="w-full h-full animate-float" />
          </motion.div>
        </div>
      </section>

      {/* Real job photos (replaces stock before/after carousel) */}
      <RecentJobs
        eyebrow="Our Work"
        title="See the Results"
        description="Real photos taken by our cleaners on recent jobs around Melbourne, not stock images."
        photos={[
          JOB_PHOTOS.kitchen,
          JOB_PHOTOS.shower,
          JOB_PHOTOS.livingRoom,
          JOB_PHOTOS.ensuiteVanity,
          JOB_PHOTOS.kitchenOvens,
          JOB_PHOTOS.wardrobe,
        ]}
      />

      {/* Cleaning Journey Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Cleaning Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From first contact to sparkling results ,  here's what you can expect
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-emerald-200 transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {cleaningJourney.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative text-center"
                >
                  <div className="relative z-10 bg-white rounded-xl p-6 shadow-lg card-hover">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-emerald-600" />
                    </div>
                    <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-3">{step.description}</p>
                    <span className="inline-block bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted by Melbourne Families
            </h2>
            <p className="text-xl text-emerald-100">
              Numbers that speak for themselves
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-emerald-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Genuine Customer Reviews */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Genuine Google reviews from real customers across Melbourne
            </p>
            <div className="inline-flex items-center gap-2 bg-gray-50 rounded-full shadow-sm border border-gray-100 px-5 py-2.5">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="!text-sm font-semibold text-gray-800">
                {isLive && rating !== null
                  ? `${rating.toFixed(1)} · Google Reviews${userRatingCount ? ` (${userRatingCount})` : ''}`
                  : 'Google Reviews'}
              </span>
            </div>
          </motion.div>

          <GoogleReviewsCarousel reviews={reviews} profileUrl={GOOGLE_REVIEWS_PROFILE_URL} />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Want to See Your Home Here Next?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-emerald-100">
              Get a free cleaning quote ,  no payment required, response within 24 hours
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg text-base"
                >
                  Get Free Quote
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300 text-base"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
            
            <div className="mt-8 flex items-center justify-center space-x-6 text-emerald-100">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Free inspection</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>24hr response</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5" />
                <span>Free 24-hour re-clean</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
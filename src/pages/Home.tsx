import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Home as HomeIcon, 
  Clock,
  Shield,
  Heart,
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import postalCodes from '../data/postalcode.json';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [postalCode, setPostalCode] = useState('');
  const [availabilityMessage, setAvailabilityMessage] = useState('');

  const heroSlides = [
    {
      image: "https://images.pexels.com/photos/6197119/pexels-photo-6197119.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Making Homes Shine",
      subtitle: "One Clean at a Time"
    },
    {
      image: "https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Professional Cleaners",
      subtitle: "You Can Trust"
    },
    {
      image: "https://images.pexels.com/photos/6197260/pexels-photo-6197260.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Eco-Friendly Solutions",
      subtitle: "For a Healthier Home"
    }
  ];

  const services = [
    {
      title: "Regular House Cleaning",
      description: "Weekly or bi-weekly cleaning to keep your home spotless",
      icon: HomeIcon,
      href: "/services/regular-cleaning"
    },
    {
      title: "End of Lease Cleaning", 
      description: "Bond-back guarantee cleaning for peace of mind",
      icon: CheckCircle,
      href: "/services/end-of-lease"
    },
    {
      title: "One-off Spring Cleaning",
      description: "Deep seasonal clean to refresh your entire home",
      icon: Sparkles,
      href: "/services/spring-cleaning"
    },
    {
      title: "Custom Cleaning",
      description: "Carpet, upholstery, oven, and commercial cleaning",
      icon: Shield,
      href: "/services/custom-cleaning"
    }
  ];

  const stats = [
    { number: "4.9", label: "Star Rating", icon: Star },
    { number: "2500+", label: "Homes Cleaned", icon: HomeIcon },
    { number: "1200+", label: "Happy Customers", icon: Users },
    { number: "24hr", label: "Response Time", icon: Clock }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "South Yarra",
      rating: 5,
      text: "Wipely transformed my home! The team was professional, thorough, and left everything spotless. I'll definitely book them again."
    },
    {
      name: "Michael Chen",
      location: "Richmond",
      rating: 5,
      text: "Outstanding end of lease cleaning service. Got my full bond back thanks to their meticulous attention to detail."
    },
    {
      name: "Emma Thompson",
      location: "Carlton",
      rating: 5,
      text: "Regular cleaning service has been a game-changer for our busy family. Reliable, thorough, and reasonably priced."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleAvailabilityCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (postalCodes.includes(postalCode)) {
      setAvailabilityMessage("Great news! Wipely services your area. Let's get you booked!");
      setTimeout(() => {
        window.location.href = '/services';
      }, 1500);
    } else {
      setAvailabilityMessage("Sorry, Wipely isn't available in your area yet! We're expanding soon.");
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: currentSlide === index ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={slide.image}
              alt="Clean home"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        ))}
        
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div className="max-w-4xl mx-auto px-4">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              {heroSlides[currentSlide].title}
              <br />
              <span className="text-emerald-400">{heroSlides[currentSlide].subtitle}</span>
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-xl md:text-2xl mb-8 text-gray-200"
            >
              Your trusted cleaning partner across Melbourne
            </motion.p>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <Link to="/services">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl">
                  Book Your Clean Now
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentSlide === index ? 'bg-emerald-400' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Availability Checker */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Check if We Service Your Area
            </h2>
            <form onSubmit={handleAvailabilityCheck} className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Enter your postcode"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300"
                >
                  Check
                </button>
              </div>
            </form>
            {availabilityMessage && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 text-lg font-medium ${
                  availabilityMessage.includes('Great news') ? 'text-emerald-600' : 'text-orange-600'
                }`}
              >
                {availabilityMessage}
              </motion.p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Expert Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From regular maintenance to deep cleaning, we've got all your cleaning needs covered
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Link to={service.href}>
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-emerald-200">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors duration-300">
                      <service.icon className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <div className="flex items-center text-emerald-600 font-medium group-hover:text-emerald-700 transition-colors duration-300">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Customers Love Us
            </h2>
            <p className="text-xl text-gray-300">
              Trusted by Melbourne families for exceptional cleaning services
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
                <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-emerald-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
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
              See the Transformation
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real homes across Melbourne
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                before: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=400",
                after: "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=400",
                title: "Kitchen Deep Clean"
              },
              {
                before: "https://images.pexels.com/photos/6436308/pexels-photo-6436308.jpeg?auto=compress&cs=tinysrgb&w=400",
                after: "https://images.pexels.com/photos/6436309/pexels-photo-6436309.jpeg?auto=compress&cs=tinysrgb&w=400",
                title: "Bathroom Restoration"
              },
              {
                before: "https://images.pexels.com/photos/4239037/pexels-photo-4239037.jpeg?auto=compress&cs=tinysrgb&w=400",
                after: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400",
                title: "Living Room Refresh"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="grid grid-cols-2 gap-0">
                  <div className="relative">
                    <img src={item.before} alt="Before" className="w-full h-48 object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-red-600 text-white text-center py-2 text-sm font-medium">
                      Before
                    </div>
                  </div>
                  <div className="relative">
                    <img src={item.after} alt="After" className="w-full h-48 object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-emerald-600 text-white text-center py-2 text-sm font-medium">
                      After
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Real reviews from satisfied Melbourne residents
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "What areas do you service?",
                answer: "We proudly serve Melbourne and surrounding suburbs. Check your postcode above to confirm availability."
              },
              {
                question: "Do I need to provide cleaning products?",
                answer: "Not at all! We bring our own professional-grade supplies. However, if you prefer we use yours, just let us know."
              },
              {
                question: "Are your cleaners insured and background-checked?",
                answer: "Yes, every cleaner is fully insured and has passed a detailed background check before joining the Wipely team."
              }
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/faq">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300">
                View All FAQs
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Star, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight,
  Users,
  Home as HomeIcon,
  Award,
  Clock,
  CheckCircle,
  PlayCircle,
  Sparkles
} from 'lucide-react';

const Reviews: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const beforeAfterImages = [
    {
      before: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600",
      after: "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Kitchen Deep Clean",
      location: "South Yarra"
    },
    {
      before: "https://images.pexels.com/photos/6436308/pexels-photo-6436308.jpeg?auto=compress&cs=tinysrgb&w=600",
      after: "https://images.pexels.com/photos/6436309/pexels-photo-6436309.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Bathroom Restoration",
      location: "Richmond"
    },
    {
      before: "https://images.pexels.com/photos/4239037/pexels-photo-4239037.jpeg?auto=compress&cs=tinysrgb&w=600",
      after: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Living Room Refresh",
      location: "Carlton"
    },
    {
      before: "https://images.pexels.com/photos/6197119/pexels-photo-6197119.jpeg?auto=compress&cs=tinysrgb&w=600",
      after: "https://images.pexels.com/photos/6197260/pexels-photo-6197260.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "End of Lease Clean",
      location: "Fitzroy"
    }
  ];

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
      description: "Final inspection and your satisfaction guaranteed",
      icon: Award,
      duration: "Complete"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "South Yarra",
      rating: 5,
      text: "Wipely transformed my home! The team was professional, thorough, and left everything spotless. I'll definitely book them again.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      service: "Regular Cleaning",
      date: "2 weeks ago"
    },
    {
      name: "Michael Chen",
      location: "Richmond",
      rating: 5,
      text: "Outstanding end of lease cleaning service. Got my full bond back thanks to their meticulous attention to detail.",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      service: "End of Lease",
      date: "1 month ago"
    },
    {
      name: "Emma Thompson",
      location: "Carlton",
      rating: 5,
      text: "Regular cleaning service has been a game-changer for our busy family. Reliable, thorough, and reasonably priced.",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      service: "Regular Cleaning",
      date: "3 weeks ago"
    },
    {
      name: "James Wilson",
      location: "Fitzroy",
      rating: 5,
      text: "The spring cleaning service exceeded all expectations. Every corner was spotless and the team was incredibly professional.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      service: "Spring Cleaning",
      date: "2 months ago"
    },
    {
      name: "Lisa Rodriguez",
      location: "Collingwood",
      rating: 5,
      text: "Amazing carpet cleaning service! Stains I thought were permanent are completely gone. Highly recommend!",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      service: "Custom Cleaning",
      date: "1 week ago"
    },
    {
      name: "David Park",
      location: "Windsor",
      rating: 5,
      text: "Excellent service from start to finish. Punctual, professional, and delivered exactly what they promised.",
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      service: "One-off Clean",
      date: "3 weeks ago"
    }
  ];

  const stats = [
    { number: "2,500+", label: "Homes Cleaned", icon: HomeIcon },
    { number: "4.9", label: "Star Rating", icon: Star },
    { number: "1,200+", label: "Happy Clients", icon: Users },
    { number: "24hr", label: "Response Time", icon: Clock }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % beforeAfterImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % beforeAfterImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + beforeAfterImages.length) % beforeAfterImages.length);
  };

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

      {/* Before & After Section */}
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
              See the Transformation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real before and after photos from our recent cleaning projects across Melbourne
            </p>
          </motion.div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-0">
                  <div className="relative">
                    <img
                      src={beforeAfterImages[currentSlide].before}
                      alt="Before cleaning"
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-red-600 text-white text-center py-4">
                      <span className="text-lg font-semibold">Before</span>
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={beforeAfterImages[currentSlide].after}
                      alt="After cleaning"
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-emerald-600 text-white text-center py-4">
                      <span className="text-lg font-semibold">After</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                  <h3 className="font-semibold text-gray-900">{beforeAfterImages[currentSlide].title}</h3>
                  <p className="text-sm text-gray-600">{beforeAfterImages[currentSlide].location}</p>
                </div>
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {beforeAfterImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    currentSlide === index ? 'bg-emerald-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

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

      {/* Testimonials Carousel */}
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real reviews from real customers across Melbourne
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 card-hover"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded">
                    {testimonial.service}
                  </span>
                  <span>{testimonial.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
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
                <span>Satisfaction guaranteed</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
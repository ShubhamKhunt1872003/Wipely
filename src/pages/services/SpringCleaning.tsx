import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  RefreshCw, 
  Clock, 
  ArrowRight,
  Home as HomeIcon,
  Sparkles,
  Users,
  Heart,
  Sun,
  Calendar,
  Gift,
  Baby
} from 'lucide-react';

const SpringCleaning: React.FC = () => {
  const includedServices = [
    { task: "Deep Kitchen Clean", description: "Sinks, splashbacks, stovetops, cupboards inside and out" },
    { task: "Bathroom Refresh", description: "Tile scrubbing, toilet sanitation, mirrors, and fixtures" },
    { task: "Top-to-Bottom Dusting", description: "Skirting boards, light fixtures, fans, and ceiling corners" },
    { task: "Floor Deep Clean", description: "Mopping, vacuuming, and detailed cleaning of all floor types" },
    { task: "Window Polishing", description: "Internal windows cleaned and polished to sparkle" },
    { task: "Hard-to-Reach Areas", description: "Behind furniture, corners, and neglected spaces" }
  ];

  const optionalExtras = [
    { name: "Oven Deep Clean", price: "$70", icon: "🔥" },
    { name: "Carpet Steam Clean", price: "$80", icon: "🧽" },
    { name: "Upholstery Care", price: "$60", icon: "🛋️" },
    { name: "Mattress Sanitization", price: "$50", icon: "🛏️" },
    { name: "Curtain Cleaning", price: "$45", icon: "🪟" },
    { name: "Appliance Deep Clean", price: "$40", icon: "📺" }
  ];

  const whenToBook = [
    {
      icon: Sun,
      title: "Spring Cleaning",
      description: "Traditional seasonal refresh to welcome warmer weather"
    },
    {
      icon: Users,
      title: "Hosting Guests",
      description: "Impress visitors with a spotless, welcoming home"
    },
    {
      icon: HomeIcon,
      title: "Moving In/Out",
      description: "Start fresh in your new space or prepare for handover"
    },
    {
      icon: RefreshCw,
      title: "After Renovations",
      description: "Remove construction dust and debris completely"
    },
    {
      icon: Baby,
      title: "Pre-Baby Prep",
      description: "Create a clean, safe environment for your new arrival"
    },
    {
      icon: Gift,
      title: "Pre-Sale Preparation",
      description: "Showcase your property at its absolute best"
    }
  ];

  const whyOneOff = [
    {
      icon: Calendar,
      title: "No Commitments",
      description: "One-time service with no recurring bookings or contracts required."
    },
    {
      icon: Clock,
      title: "Fast Scheduling",
      description: "Same-day availability in some areas with flexible time slots."
    },
    {
      icon: Sparkles,
      title: "Complete Supplies",
      description: "All professional products and equipment provided by our team."
    },
    {
      icon: Heart,
      title: "Respectful Service",
      description: "Trained professionals who treat your home with care and respect."
    }
  ];

  const beforeAfterImages = [
    {
      before: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=400",
      after: "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Kitchen Deep Clean"
    },
    {
      before: "https://images.pexels.com/photos/6436308/pexels-photo-6436308.jpeg?auto=compress&cs=tinysrgb&w=400", 
      after: "https://images.pexels.com/photos/6436309/pexels-photo-6436309.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Bathroom Refresh"
    },
    {
      before: "https://images.pexels.com/photos/4239037/pexels-photo-4239037.jpeg?auto=compress&cs=tinysrgb&w=400",
      after: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Living Room Transformation"
    }
  ];

  const faqs = [
    {
      question: "How long does a one-off spring clean take?",
      answer: "Typically 3-6 hours depending on the size of your home and level of cleaning required. We'll provide an accurate estimate when you book."
    },
    {
      question: "Do I need to provide cleaning products?",
      answer: "Not at all! We bring all professional-grade supplies and equipment. However, if you prefer we use specific products, just let us know."
    },
    {
      question: "What's the difference between spring cleaning and regular cleaning?",
      answer: "Spring cleaning is more comprehensive, targeting areas often overlooked in regular cleaning like behind furniture, deep scrubbing, and detailed work on fixtures and fittings."
    },
    {
      question: "Can I book same-day spring cleaning?",
      answer: "We offer same-day availability in some areas, subject to our team's schedule. Contact us to check availability for your preferred date and time."
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] w-full">
        <img
          src="https://images.pexels.com/photos/6197119/pexels-photo-6197119.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="One-off Spring Cleaning"
          className="w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <h1 className="text-white text-3xl md:text-5xl font-bold mb-2">
              One-Off Spring Cleaning
            </h1>
            <p className="text-white text-base md:text-lg max-w-2xl">
              Revive your home with a comprehensive deep clean — no contracts, just a fresh start.
            </p>
          </div>
        </div>
      </section>

      {/* What is One-Off Spring Clean */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What is a One-Off Spring Clean?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Perfect for post-party cleanups, seasonal refreshes, guests arriving, or just because. 
                Our deep cleaning service gives your space the attention it deserves in one powerful session.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Unlike regular cleaning, our spring clean targets areas that are often overlooked, 
                providing a comprehensive refresh that makes your home feel brand new again.
              </p>
              
              <div className="bg-emerald-50 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Sparkles className="w-6 h-6 text-emerald-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Customer Testimonial</h3>
                </div>
                <blockquote className="text-gray-700 italic text-lg">
                  "Our home felt brand new after one visit from Wipely! They reached places we'd forgotten existed and the transformation was incredible."
                </blockquote>
                <cite className="text-emerald-600 font-medium mt-2 block">— Sarah M., Carlton</cite>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional cleaner doing deep cleaning"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Included Services */}
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
              Included in This Deep Clean
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every corner, surface, and detail receives our professional attention
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {includedServices.map((item, index) => (
              <motion.div
                key={item.task}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.task}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Transformation Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Spring Clean Transformations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the dramatic difference our deep cleaning service makes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beforeAfterImages.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
              >
                <div className="grid grid-cols-2 gap-0">
                  <div className="relative">
                    <img src={item.before} alt="Before cleaning" className="w-full h-48 object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-red-600 text-white text-center py-2 text-sm font-medium">
                      Before
                    </div>
                  </div>
                  <div className="relative">
                    <img src={item.after} alt="After cleaning" className="w-full h-48 object-cover" />
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

      {/* Optional Extras */}
      <section className="py-20 bg-gradient-to-r from-yellow-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Optional Extras Available
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Customize your clean at checkout to suit your space perfectly
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {optionalExtras.map((extra, index) => (
              <motion.div
                key={extra.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 hover:bg-emerald-50 transition-colors duration-300 card-hover"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{extra.icon}</span>
                    <h3 className="font-semibold text-gray-900">{extra.name}</h3>
                  </div>
                  <span className="text-emerald-600 font-bold">{extra.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Book One-Off */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
              <Sparkles className="w-8 h-8 text-emerald-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Book a One-Off with Wipely?
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the life-changing benefits of professional deep cleaning that transforms your home
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {whyOneOff.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-lg relative overflow-hidden">
                  {/* Decorative background element */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-50 rounded-full -translate-y-10 translate-x-10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-200 group-hover:scale-110 transition-all duration-300">
                      <item.icon className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Additional Benefits Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 border border-gray-100"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">More Reasons to Love One-Off Cleaning</h3>
              <p className="text-gray-600">Additional benefits that make spring cleaning the smart choice</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: "💰",
                  title: "Great Value",
                  description: "Deep clean results without ongoing commitments"
                },
                {
                  icon: "🏠",
                  title: "Perfect Timing",
                  description: "Book when you need it most - before events or seasons"
                },
                {
                  icon: "😌",
                  title: "Stress Relief",
                  description: "Let professionals handle the deep cleaning tasks"
                }
              ].map((benefit, index) => (
                <div key={benefit.title} className="text-center">
                  <div className="text-3xl mb-3">{benefit.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* When to Book */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              When to Book This Service
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Perfect for these special occasions and life events
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whenToBook.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 card-hover"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="bg-emerald-50 py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-[5px]">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-emerald-500 rounded mt-[5px] mb-6"></div>

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 bg-white rounded-md p-4 mb-4 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center text-lg font-medium text-gray-800"
              >
                {faq.question}
                <span className="ml-4 text-emerald-500 text-2xl">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <p className="mt-3 text-gray-600 text-base leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to love your home again?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-emerald-100">
              Book your one-off spring clean today and experience the transformation
            </p>
            <Link to="/book">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg text-base"
              >
                Book Now
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SpringCleaning;
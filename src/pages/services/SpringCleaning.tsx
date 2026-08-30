import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  RefreshCw,
  Clock,
  ArrowRight,
  Sparkles,
  Users,
  Heart,
  Sun,
  Calendar,
  Gift,
  Baby,
  Star
} from 'lucide-react';
import oneOfSpringCleaningImg from "../../images/oneOfSpringImg.jpg";
import oneOfSpringCLImg from "../../images/oneOfSpringCLImg.jpg";
import bathroomBeforeImg from "../../images/bathroomBefore.jpeg";
import bathroomAfterImg from "../../images/bathroomAfter.jpeg";

const SpringCleaning: React.FC = () => {
  const includedServices = [
    { task: "Full Kitchen Wipe Down", description: "Sinks, splashbacks, stovetops, cupboards" },
    { task: "Bathroom Refresh", description: "Tile scrubbing, toilet sanitation, mirrors, and fixtures" },
    { task: "Top-to-Bottom Dusting", description: "Skirting boards, light fixtures, fans, and ceiling corners" },
    { task: "Floor Deep Clean", description: "Mopping, vacuuming, and detailed cleaning of all floor types" },
    { task: "Exterior Appliance Cleaning", description: "Wipe fridge, oven, washing machine, dryer, and more" },
    { task: "Laundry Cleaning", description: "Wipe, clean, and sanitize all laundry surfaces and appliances" }
  ];

  const optionalExtras = [
    { name: "Oven Deep Clean", icon: "🔥" },
    { name: "Carpet Steam Clean", icon: "🧽" },
    { name: "Upholstery Care", icon: "🛋️" },
    { name: "Mattress Cleaning", icon: "🛏️" },
    { name: "Window Cleaning", icon: "🪟" },
    { name: "Inside Fridge Clean", icon: "📺" },
    { name: "Gas Stove Tops & Rangehoods", icon: "🔥" },
    { name: "Blinds Cleaning", icon: "🪟" },
    { name: "Wall Spot Cleaning", icon: "🧽" }
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
      before: bathroomBeforeImg,
      after: bathroomAfterImg,
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
      question: "How long does a Hourly spring clean take?",
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
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <span className="inline-block bg-emerald-100 text-emerald-700 !text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                One-Off Deep Clean
              </span>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Hourly Spring Cleaning
              </h1>
              <p className="text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
                Revive your home with a comprehensive, hourly-rate deep clean — no contracts,
                just a fresh start whenever you need one.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src={oneOfSpringCleaningImg}
                alt="Hourly spring cleaning service in a Melbourne home"
                className="rounded-2xl shadow-xl w-full h-72 sm:h-96 object-cover"
              />
            </motion.div>
          </div>
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
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-emerald-600 font-semibold !text-sm uppercase tracking-wide">
                Service Overview
              </span>
              <h2 className="font-display text-4xl font-bold text-gray-900 mt-3 mb-6">
                What is a Hourly Spring Clean?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Perfect for post-party cleanups, seasonal refreshes or getting ready for guests, our
                hourly deep clean tackles the details a regular clean skips — behind furniture,
                fixtures and fittings. Charged by the hour, you choose the time you need and can add
                extras like appliance wipe-downs or window cleaning as required.
              </p>

              <Link
                to="/reviews"
                className="inline-flex items-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-semibold px-6 py-3 rounded-xl transition-colors duration-300"
              >
                <Star className="w-5 h-5 fill-current" />
                Read Customer Reviews
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={oneOfSpringCLImg}
                alt="Professional cleaner doing a deep clean"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Included Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What's Included
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every corner, surface, and detail receives our professional attention
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {includedServices.map((item, index) => (
              <motion.div
                key={item.task}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full"
              >
                <div className="h-full flex flex-col bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-display text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{item.task}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Optional Extras */}
      <section className="py-16 bg-gradient-to-r from-yellow-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
              Optional Extras Available
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Customize your clean at checkout to suit your space perfectly
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {optionalExtras.map((extra, index) => (
              <motion.div
                key={extra.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full"
              >
                <div className="h-full bg-white rounded-lg p-6 hover:bg-emerald-50 transition-colors duration-300 card-hover border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{extra.icon}</span>
                    <h3 className="font-semibold text-gray-900 line-clamp-2">{extra.name}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Transformation Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
              Spring Clean Transformations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The kind of difference our deep clean makes, room by room
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {beforeAfterImages.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full"
              >
                <div className="h-full flex flex-col bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-100">
                  <div className="grid grid-cols-2 gap-0">
                    <div className="relative">
                      <img src={item.before} alt={`Before cleaning: ${item.title}`} className="w-full h-48 object-cover" />
                      <div className="absolute bottom-0 left-0 right-0 bg-red-600 text-white text-center py-2 text-sm font-medium">
                        Before
                      </div>
                    </div>
                    <div className="relative">
                      <img src={item.after} alt={`After cleaning: ${item.title}`} className="w-full h-48 object-cover" />
                      <div className="absolute bottom-0 left-0 right-0 bg-emerald-600 text-white text-center py-2 text-sm font-medium">
                        After
                      </div>
                    </div>
                  </div>
                  <div className="p-4 flex-1 flex items-center">
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Book One-Off */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
              <Sparkles className="w-8 h-8 text-emerald-600" />
            </div>
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
              Why Book a Hourly Clean with Wipely?
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {whyOneOff.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group h-full"
              >
                <div className="h-full bg-white rounded-2xl p-8 border border-gray-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-lg relative overflow-hidden">
                  {/* Decorative background element */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-50 rounded-full -translate-y-10 translate-x-10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-200 group-hover:scale-110 transition-all duration-300">
                      <item.icon className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
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
        </div>
      </section>

      {/* When to Book */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
              When to Book This Service
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Perfect for these special occasions and life events
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {whenToBook.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full"
              >
                <div className="h-full bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 card-hover border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-emerald-50 rounded-2xl p-8 md:p-10 border border-emerald-100 text-center"
          >
            <Clock className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
              Simple, Transparent Hourly Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              Charged by the hour with optional extras at checkout — no lock-in contracts, no
              hidden fees. Get an instant, accurate quote for your home in the booking form.
            </p>
            <Link to="/book?service=hourly-spring-cleaning">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg text-base"
              >
                Get My Instant Quote
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-emerald-50 py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-[5px]">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-emerald-500 rounded mt-[5px] mb-6"></div>

          {faqs.map((faq, index) => (
            <div
              key={faq.question}
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
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Ready to love your home again?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-emerald-100">
              Book your Hourly spring clean today and experience the transformation
            </p>
            <Link to="/book?service=hourly-spring-cleaning">
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

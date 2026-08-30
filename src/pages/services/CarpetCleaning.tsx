import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  Shield,
  ArrowRight,
  Sparkles,
  Users,
  Award,
  Droplets,
  Wind,
  Zap,
  Star,
  Heart
} from 'lucide-react';
import carpetCleaningSecImg from "../../images/carpetCleaningSecImg.jpg";

const CarpetCleaning: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const carpetServices = [
    {
      title: "Steam Cleaning",
      description: "Deep hot water extraction removes embedded dirt, allergens, and bacteria from carpet fibers",
      icon: "🔥",
      features: ["Hot water extraction", "Deep sanitization", "Fast drying", "Eco-friendly products"]
    },
    {
      title: "Stain Removal",
      description: "Specialized treatment for tough stains including wine, coffee, pet accidents, and more",
      icon: "🧽",
      features: ["Pre-treatment", "Spot cleaning", "Odor elimination", "Color protection"]
    },
    {
      title: "Pet Odor Treatment",
      description: "Complete elimination of pet odors and stains with enzyme-based cleaning solutions",
      icon: "🐕",
      features: ["Enzyme treatment", "Odor neutralization", "Bacteria elimination", "Safe for pets"]
    },
    {
      title: "Commercial Carpet Cleaning",
      description: "Professional carpet maintenance for offices, retail spaces, and commercial properties",
      icon: "🏢",
      features: ["Flexible scheduling", "Minimal disruption", "High-traffic areas", "Maintenance plans"]
    }
  ];

  const cleaningProcess = [
    {
      step: "1",
      title: "Pre-Inspection",
      description: "We assess your carpets and identify problem areas, stains, and high-traffic zones",
      icon: CheckCircle
    },
    {
      step: "2", 
      title: "Pre-Treatment",
      description: "Stains and heavily soiled areas receive specialized pre-treatment solutions",
      icon: Droplets
    },
    {
      step: "3",
      title: "Deep Steam Cleaning",
      description: "Hot water extraction removes dirt, allergens, and cleaning solutions from deep within fibers",
      icon: Zap
    },
    {
      step: "4",
      title: "Final Inspection",
      description: "We ensure your complete satisfaction and provide care instructions for your clean carpets",
      icon: Award
    }
  ];

  const whyChooseWipely = [
    {
      title: "Advanced Equipment",
      description: "Commercial-grade steam extraction outperforms rental machines.",
      icon: Zap
    },
    {
      title: "Eco-Friendly & Safe",
      description: "Non-toxic solutions that are safe for children and pets.",
      icon: Shield
    },
    {
      title: "Fast Drying",
      description: "Carpets dry in just 2-4 hours after cleaning.",
      icon: Wind
    },
    {
      title: "Satisfaction Guarantee",
      description: "100% guarantee — if you're not happy, we'll make it right.",
      icon: Heart
    },
    {
      title: "Extends Carpet Life",
      description: "Regular cleaning prevents premature wear and replacement.",
      icon: Award
    },
    {
      title: "Healthier Home",
      description: "Removes allergens, bacteria, and dust mites for cleaner air.",
      icon: Users
    }
  ];

  const beforeAfterImages = [
    {
      before: "https://images.pexels.com/photos/4239037/pexels-photo-4239037.jpeg?auto=compress&cs=tinysrgb&w=400",
      after: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Living Room Carpet"
    },
    {
      before: "https://images.pexels.com/photos/6197119/pexels-photo-6197119.jpeg?auto=compress&cs=tinysrgb&w=400",
      after: "https://images.pexels.com/photos/6197121/pexels-photo-6197121.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Office Carpet"
    },
    {
      before: "https://images.pexels.com/photos/4107286/pexels-photo-4107286.jpeg?auto=compress&cs=tinysrgb&w=400",
      after: "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Bedroom Carpet"
    }
  ];

  const faqs = [
    {
      question: "How often should I have my carpets professionally cleaned?",
      answer: "We recommend professional carpet cleaning every 12-18 months for average households, or every 6-12 months for homes with pets, children, or high foot traffic."
    },
    {
      question: "How long does it take for carpets to dry after cleaning?",
      answer: "With our advanced extraction equipment, carpets typically dry within 2-4 hours. Factors like humidity, airflow, and carpet thickness can affect drying time."
    },
    {
      question: "Can you remove all types of stains?",
      answer: "While we can remove most stains, some permanent stains may not be completely removable. We'll assess each stain and provide honest expectations during our pre-inspection."
    },
    {
      question: "Is carpet cleaning safe for pets and children?",
      answer: "Yes! We use eco-friendly, non-toxic cleaning solutions that are safe for your family and pets. Your carpets will be safe to walk on once dry."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-emerald-50 to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Professional Carpet Care
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-display">
              Carpet <span className="text-emerald-600">Cleaning</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Deep steam cleaning that removes dirt, stains, and allergens, leaving your carpets fresh, clean, and healthy.
            </p>
            <Link to="/book?service=carpet-cleaning">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-colors duration-300"
              >
                Book Now
                <ArrowRight className="w-5 h-5" />
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

      {/* What is Professional Carpet Cleaning */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Professional Carpet Cleaning?
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Extends carpet life, improves indoor air quality, and creates a healthier home.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative">
                <img
                  src={carpetCleaningSecImg}
                  alt="Professional carpet cleaning in action"
                  className="rounded-2xl shadow-2xl w-full"
                />
                
                <div className="absolute -bottom-6 -right-6 bg-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 text-emerald-600 fill-current" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">4.9 Google Rating</div>
                    <div className="text-gray-600 text-xs">From real Wipely customers</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-1 lg:order-2"
            >
              <div className="bg-white rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-100 rounded-full -translate-y-10 translate-x-10 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-100 rounded-full translate-y-8 -translate-x-8 opacity-50"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                      <Droplets className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">The Wipely Difference</h3>
                  </div>
                  
                  <div className="mb-8">
                    <p className="text-gray-700 leading-relaxed">
                      Our <strong>commercial-grade hot water extraction</strong> removes deep-seated dirt, allergens, and bacteria that regular vacuuming and DIY methods can't reach.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {[
                      { icon: Shield, text: "Safe & Non-Toxic" },
                      { icon: Wind, text: "Fast Drying" },
                      { icon: Award, text: "Guaranteed Results" },
                      { icon: Users, text: "Trained Experts" }
                    ].map((benefit) => (
                      <div key={benefit.text} className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                          <benefit.icon className="w-4 h-4 text-emerald-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">{benefit.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Carpet Services */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Carpet Cleaning Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive carpet care for homes and businesses across Melbourne
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {carpetServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 h-full flex flex-col"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 min-h-[3.5rem]">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mt-auto">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cleaning Process */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Carpet Cleaning Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach for the best possible results
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-emerald-200 transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {cleaningProcess.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative text-center"
                >
                  <div className="relative z-10 bg-white rounded-xl p-6 shadow-lg">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-emerald-600" />
                    </div>
                    <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-[5px]">
              Carpet Cleaning Results
            </h2>
            <div className="w-20 h-1 bg-emerald-500 rounded mt-[5px] mb-6 mx-auto"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
              See the dramatic difference our professional carpet cleaning makes to homes and offices across Melbourne
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beforeAfterImages.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="grid grid-cols-2">
                  <div className="relative overflow-hidden group">
                    <img
                      src={item.before}
                      alt="Before"
                      className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-red-600 text-white text-xs font-semibold text-center py-1">
                      Before
                    </div>
                  </div>
                  <div className="relative overflow-hidden group">
                    <img
                      src={item.after}
                      alt="After"
                      className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-emerald-600 text-white text-xs font-semibold text-center py-1">
                      After
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Wipely */}
      <section className="py-14 bg-gradient-to-br from-emerald-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
              <Award className="w-8 h-8 text-emerald-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Wipely for Carpet Cleaning?
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professional equipment, expert techniques, and guaranteed satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyChooseWipely.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-lg h-full">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-100 rounded-full mb-4">
              <Star className="w-7 h-7 text-emerald-600 fill-current" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Loved by Homes &amp; Businesses Across Melbourne
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              See genuine feedback from customers who've booked with us.
            </p>
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-300"
            >
              Read Customer Reviews
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
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
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Ready for Cleaner, Healthier Carpets?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Professional carpet cleaning that removes dirt, stains, and allergens — book your service today!
          </p>
          <Link to="/book?service=carpet-cleaning">
            <button className="inline-block bg-white text-emerald-600 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-100 transition duration-300">
              Book Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CarpetCleaning;
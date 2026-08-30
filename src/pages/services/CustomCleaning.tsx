import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Settings,
  Clock,
  Shield,
  Star,
  Sparkles,
  Award,
  ArrowRight
} from 'lucide-react';
import customCleaningImg from "../../images/customCleaningImg.jpg";
import carpetSteamCleaning from "../../images/carpetSteamCleaning.jpg";
import upholsteryImg from "../../images/upholsteryImg.jpg";
import ovenImg from "../../images/ovenImg.jpg";
import bbqImg from "../../images/bbqImg.jpg";
import staircaseImg from "../../images/staircaseImg.jpg";
import commercialImg from "../../images/commercialImg.jpg";

const CustomCleaning: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const specialisedServices = [
    {
      title: "Carpet Cleaning",
      description: "Deep steam cleaning and stain removal that leaves carpets fresh and hygienic.",
      image: carpetSteamCleaning,
      href: "/services/carpet-cleaning"
    },
    {
      title: "Upholstery Cleaning",
      description: "Professional fabric and furniture cleaning to lift dirt, odours and stains.",
      image: upholsteryImg,
      href: "/services/upholstery-cleaning"
    },
    {
      title: "Oven Cleaning",
      description: "Full oven, rangehood and cooktop degreasing for a like-new finish.",
      image: ovenImg,
      href: "/services/oven-cleaning"
    },
    {
      title: "BBQ Cleaning",
      description: "Complete BBQ restoration — grills, plates and hoods degreased and sanitised.",
      image: bbqImg,
      href: "/services/bbq-cleaning"
    },
    {
      title: "Staircase Cleaning",
      description: "Detailed cleaning for carpeted or hard-surface staircases, step by step.",
      image: staircaseImg,
      href: "/services/staircase-cleaning"
    },
    {
      title: "Commercial Cleaning",
      description: "Reliable, after-hours friendly cleaning for offices and small businesses.",
      image: commercialImg,
      href: "/services/commercial-cleaning"
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Tell Us Your Needs",
      description: "Describe your specific cleaning requirements and preferences"
    },
    {
      step: "2",
      title: "Get Custom Quote",
      description: "Receive a tailored quote based on your unique needs"
    },
    {
      step: "3",
      title: "Schedule Service",
      description: "Book your preferred date and time for the cleaning"
    },
    {
      step: "4",
      title: "Expert Cleaning",
      description: "Our specialists complete your custom cleaning service"
    }
  ];

  const whyChooseWipely = [
    {
      title: "Tailored Solutions",
      description: "Every cleaning plan is customized to your specific needs and preferences, ensuring you get exactly what you're looking for.",
      icon: Settings
    },
    {
      title: "Professional Expertise",
      description: "Our trained specialists have experience with all types of cleaning challenges and use the right techniques for each task.",
      icon: Award
    },
    {
      title: "Quality Guarantee",
      description: "We stand behind our work with a satisfaction guarantee. If you're not happy, we'll make it right at no extra cost.",
      icon: Shield
    },
    {
      title: "Flexible Scheduling",
      description: "Book your custom cleaning service at a time that works for you, with options for one-time or recurring services.",
      icon: Clock
    }
  ];

  const faqs = [
    {
      question: "What types of custom cleaning services do you offer?",
      answer: "We offer a wide range of specialized cleaning services including carpet cleaning, upholstery cleaning, oven cleaning, BBQ cleaning, staircase cleaning and commercial space cleaning. Just tell us what you need!"
    },
    {
      question: "How do you determine pricing for custom cleaning?",
      answer: "Our pricing is based on the specific services you need, the size of the area, and the complexity of the work. We provide transparent quotes with no hidden fees before starting any work."
    },
    {
      question: "Do I need to be home during cleaning?",
      answer: "It depends on the service. For some services like carpet cleaning, we recommend being present. For others, you can provide access and go about your day."
    },
    {
      question: "How long does custom cleaning take?",
      answer: "The duration varies depending on the services selected. Carpet cleaning typically takes 2-3 hours, while oven cleaning takes 1-2 hours. We'll provide an estimated timeframe when you book."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, bank transfers, and cash. Payment is due after the service is completed to your satisfaction."
    }
  ];

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
                Specialised Services
              </span>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Custom Cleaning
              </h1>
              <p className="text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
                Specialised cleaning solutions — carpet, upholstery, oven, BBQ, staircase and
                commercial space cleaning — tailored to your unique needs, booked on their own or
                added to any clean.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src={customCleaningImg}
                alt="Wipely specialist performing a custom cleaning service"
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
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-emerald-600 font-semibold !text-sm uppercase tracking-wide">
              Service Overview
            </span>
            <h2 className="font-display text-4xl font-bold text-gray-900 mt-3 mb-6">
              What is Custom Cleaning?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Custom Cleaning is Wipely's collection of specialised, single-focus services for the
              jobs a regular clean doesn't cover — carpets, upholstery, ovens, BBQs, staircases and
              commercial spaces. Book any service on its own, or add it as an extra to any Regular,
              End of Lease or Hourly Spring clean.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What's Included: the 6 specialised services */}
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
              Our Specialised Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six dedicated services, each with its own page, pricing details and booking flow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {specialisedServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full"
              >
                <Link to={service.href} className="group block h-full">
                  <div className="h-full flex flex-col bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 overflow-hidden">
                    <div className="relative overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1 flex flex-col p-6">
                      <h3 className="font-display font-bold text-xl text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem]">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2 min-h-[3rem]">{service.description}</p>
                      <span className="mt-auto inline-flex items-center gap-2 text-emerald-600 font-semibold group-hover:text-emerald-700 transition-colors duration-300">
                        View Service
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to get your specialised cleaning booked and completed
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Wipely */}
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
              <Settings className="w-8 h-8 text-emerald-600" />
            </div>
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
              Why Book Wipely for Custom Cleaning?
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {whyChooseWipely.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group h-full"
              >
                <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-lg relative overflow-hidden h-full">
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

      {/* Pricing note + Reviews */}
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
              Transparent, Custom Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              Every specialised service is priced individually with no hidden fees — visit any
              service page above for its specific pricing, or start a booking for an instant quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book?service=custom-cleaning">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg text-base"
                >
                  Get My Instant Quote
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </motion.button>
              </Link>
              <Link
                to="/reviews"
                className="inline-flex items-center justify-center gap-2 bg-white text-emerald-600 border-2 border-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                <Star className="w-5 h-5 fill-current" />
                Read Customer Reviews
              </Link>
            </div>
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
              Book Specialised Cleaning That Works for You
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-emerald-100">
              Professional results, flexible scheduling, transparent pricing.
            </p>
            <Link to="/book?service=custom-cleaning">
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

export default CustomCleaning;

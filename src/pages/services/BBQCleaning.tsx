import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  Shield,
  Clock,
  ArrowRight,
  Sparkles,
  Award,
  Star,
  Heart
} from 'lucide-react';
import bbqImg from "../../images/bbqImg.jpg";
import bbqSecImg from "../../images/bbqSecImg.jpg";

const BBQCleaning: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const bbqServices = [
    {
      title: "Standard BBQ Cleaning",
      description:
        "Thorough cleaning of grills, burners, drip trays, and surfaces using our advanced cleaning technology.",
      icon: "🔥",
      features: ["Deep grease removal", "Eco-friendly degreasers", "Sanitisation", "Quick-dry"],
    },
    {
      title: "Premium BBQ Cleaning",
      description:
        "Complete disassembly, cleaning, and sanitisation of all BBQ parts, including hood and exterior panels.",
      icon: "🛠️",
      features: ["Full disassembly", "Stainless steel polish", "Eco-safe cleaning agents", "Odour removal"],
    },
    {
      title: "Commercial BBQ Maintenance",
      description:
        "Professional cleaning for restaurants, catering businesses, and commercial BBQs with high usage.",
      icon: "🏢",
      features: ["Flexible scheduling", "High-traffic BBQs", "Grease trap cleaning", "Hygiene compliance"],
    },
  ];

  const whyChooseWipely = [
    {
      icon: Shield,
      title: "Vetted & Insured Cleaners",
      description: "Every technician is background-checked, fully insured, and trained to Wipely's cleaning standards."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Book a time that suits you in minutes, with easy online scheduling around your day."
    },
    {
      icon: Award,
      title: "Attention to Detail",
      description: "A thorough checklist for grills, burners, trays, and panels, so nothing gets missed."
    },
    {
      icon: Heart,
      title: "Customer-Focused Service",
      description: "Your satisfaction comes first. Let us know if anything needs a second look and we'll sort it."
    }
  ];

  const faqs = [
    {
      question: "How often should I have my BBQ professionally cleaned?",
      answer:
        "We recommend cleaning your BBQ every 3-6 months depending on usage, or after heavy grease accumulation.",
    },
    {
      question: "Is your cleaning safe for all BBQ types?",
      answer:
        "Yes! We handle gas, charcoal, and electric BBQs with care using eco-friendly and non-corrosive methods.",
    },
    {
      question: "Do I need to disassemble my BBQ?",
      answer:
        "For premium cleaning, yes. Standard cleaning covers grills, burners, and trays without full disassembly.",
    },
    {
      question: "How long does the cleaning process take?",
      answer:
        "Standard cleaning takes 60-90 minutes. Premium or commercial services may take 2-3 hours depending on size.",
    },
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
            <h1 className="font-display text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              BBQ <span className="text-emerald-600">Cleaning</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Advanced BBQ cleaning technology removes grease, burnt residue, and bacteria, leaving your BBQ safe and ready to use.
            </p>
            <Link to="/book?service=bbq-cleaning">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
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

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">
                Service Overview
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
                What Our BBQ Cleaning Covers
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                A deep, hands-on clean of grills, burners, drip trays, hoods, and exterior panels using
                eco-friendly degreasers, for backyard BBQs and commercial kitchens alike.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={bbqImg}
                alt="BBQ grill being professionally cleaned"
                className="rounded-2xl shadow-xl w-full h-full object-cover max-h-96"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included: Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our BBQ Cleaning Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive cleaning solutions for residential and commercial BBQs across Melbourne
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {bbqServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full"
              >
                <div className="h-full flex flex-col text-left bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 min-h-[3.5rem]">{service.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
                  <ul className="space-y-2 mt-auto">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Wipely
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional BBQ cleaning that removes grease, burnt residue, and bacteria, for safer cooking and a longer-lasting BBQ.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative">
                <img
                  src={bbqSecImg}
                  alt="Professional BBQ cleaning in action"
                  className="rounded-2xl shadow-2xl w-full"
                />

                <div className="absolute -bottom-6 -right-6 bg-white px-5 py-4 rounded-xl shadow-lg flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 text-emerald-600 fill-current" />
                  </div>
                  <div>
                    <Link
                      to="/reviews"
                      className="font-semibold text-gray-900 text-sm hover:text-emerald-600 transition-colors"
                    >
                      Read customer reviews
                    </Link>
                    <div className="text-gray-500 text-xs">Real Google reviews</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {whyChooseWipely.map((value) => (
                <div
                  key={value.title}
                  className="bg-white rounded-xl p-5 shadow-md border border-gray-100"
                >
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mb-3">
                    <value.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{value.title}</h3>
                  <p className="text-gray-600 text-xs leading-snug">{value.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-3">
              BBQ Cleaning Pricing
            </h2>
            <p className="text-lg text-gray-600">
              Professional BBQ cleaning at transparent rates
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-xl shadow-md border border-gray-200">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white">
                  <th className="py-4 px-6 text-left font-semibold">BBQ Type / Quantity</th>
                  <th className="py-4 px-6 text-left font-semibold">Price</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Small BBQ (1-2 BBQs)", "$70 each"],
                  ["Small BBQ (3-4 BBQs)", "$65 each"],
                  ["Small BBQ (5+ BBQs)", "$60 each"],
                  ["Medium BBQ (1-2 BBQs)", "$120 each"],
                  ["Medium BBQ (3-4 BBQs)", "$110 each"],
                  ["Medium BBQ (5+ BBQs)", "$100 each"],
                  ["Large BBQ (1-2 BBQs)", "$180 each"],
                  ["Large BBQ (3-4 BBQs)", "$165 each"],
                  ["Large BBQ (5+ BBQs)", "$150 each"],
                  ["Premium Full Disassembly (1 BBQ)", "$250"],
                  ["Premium Full Disassembly (2 BBQs)", "$240 each"],
                  ["Premium Full Disassembly (3+ BBQs)", "$230 each"],
                ].map(([bbq, price], idx) => (
                  <tr
                    key={idx}
                    className={`${
                      idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-emerald-50 transition-colors`}
                  >
                    <td className="py-4 px-6 border-b border-gray-200">{bbq}</td>
                    <td className="py-4 px-6 border-b border-gray-200">
                      <span className="bg-emerald-100 text-emerald-700 font-semibold px-3 py-1 rounded-full">
                        {price}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Minimum Price */}
          <div className="mt-6 text-center">
            <p className="text-gray-700 text-sm">
              Minimum service charge:{" "}
              <span className="font-semibold text-emerald-600">$70</span>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-emerald-50 py-14">
        <div className="max-w-6xl mx-auto px-4">
          {/* Heading */}
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-[5px]">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-emerald-500 rounded mt-[5px] mb-6"></div>

          {/* FAQ Items */}
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
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
            Ready for a Cleaner, Safer BBQ?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Professional BBQ cleaning that removes grease, burnt residue, and bacteria. Book your service today!
          </p>
          <Link to="/book?service=bbq-cleaning">
            <button className="inline-flex items-center gap-2 bg-white text-emerald-600 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-100 transition duration-300">
              Book Now
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BBQCleaning;

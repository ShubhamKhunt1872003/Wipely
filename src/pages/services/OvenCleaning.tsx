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
import ovenBanner from "../../images/ovenBanner.jpg";

const OvenCleaning: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const ovenServices = [
    {
      title: "Standard Oven Cleaning",
      description: "Complete cleaning of oven interior, racks, trays, and glass doors to remove grease and grime.",
      icon: "🔥",
      features: ["Interior cleaning", "Racks & trays", "Glass polishing", "Eco-friendly solutions"]
    },
    {
      title: "Self-Cleaning Oven Assistance",
      description: "Specialized cleaning for self-cleaning ovens without damaging surfaces or coatings.",
      icon: "🧼",
      features: ["Safe on coatings", "Detailed residue removal", "Odor elimination"]
    },
    {
      title: "Rangehood Cleaning",
      description: "Deep clean of rangehoods and filters to improve kitchen air quality and efficiency.",
      icon: "💨",
      features: ["Filter wash", "Exterior wipe", "Grease removal", "Odor-free"]
    }
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
      description: "A thorough checklist for racks, trays, glass, and interior surfaces, so nothing gets missed."
    },
    {
      icon: Heart,
      title: "Customer-Focused Service",
      description: "Your satisfaction comes first. Let us know if anything needs a second look and we'll sort it."
    }
  ];

  const faqs = [
    {
      question: "How often should I have my oven professionally cleaned?",
      answer: "We recommend professional oven cleaning every 6-12 months, depending on usage."
    },
    {
      question: "Is the cleaning solution safe for food contact surfaces?",
      answer: "Yes! We only use non-toxic, eco-friendly products that are safe for cooking."
    },
    {
      question: "Do I need to remove oven racks myself?",
      answer: "No, our team will safely remove and clean all racks and trays as part of the service."
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
            <h1 className="font-display text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Oven <span className="text-emerald-600">Cleaning</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Deep cleaning that removes grease, grime, and burnt-on food, leaving your oven sparkling clean.
            </p>
            <Link to="/book?service=oven-cleaning">
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

      {/* What's Included: Oven Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Oven Cleaning Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive oven care for homes and commercial kitchens, using eco-friendly, non-toxic solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {ovenServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full"
              >
                <div className="h-full flex flex-col bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
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
              Professional, insured technicians who treat your oven with care and leave it spotless, every time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative">
                <img
                  src={ovenBanner}
                  alt="Professional oven cleaning in action"
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

            {/* Benefits */}
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

      {/* Oven Cleaning Melbourne Prices */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Intro */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Oven Cleaning Melbourne Prices
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transparent pricing for homes and commercial kitchens across Melbourne.
            </p>
          </motion.div>

          {/* Price Table */}
          <div className="overflow-x-auto mb-8 rounded-xl shadow-lg border border-gray-200">
            <table className="min-w-full bg-white">
              <thead className="bg-emerald-600 text-white">
                <tr>
                  <th className="py-4 px-6 text-left text-lg font-semibold">Service</th>
                  <th className="py-4 px-6 text-left text-lg font-semibold">Details</th>
                  <th className="py-4 px-6 text-left text-lg font-semibold">Price (AUD)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 font-medium">Standard Oven Cleaning</td>
                  <td className="py-4 px-6 text-gray-600">
                    Interior, racks, trays, and glass doors cleaned thoroughly. Suitable for conventional ovens.
                  </td>
                  <td className="py-4 px-6 font-semibold">From $120</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 font-medium">Self-Cleaning Oven</td>
                  <td className="py-4 px-6 text-gray-600">
                    Professional cleaning for high-temperature self-cleaning ovens. Removes stubborn residues without damage.
                  </td>
                  <td className="py-4 px-6 font-semibold">From $150</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 font-medium">Rangehood Cleaning</td>
                  <td className="py-4 px-6 text-gray-600">
                    Filter and exterior deep cleaning. Improves air quality and reduces fire risk in your kitchen.
                  </td>
                  <td className="py-4 px-6 font-semibold">From $80</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 font-medium">Combo Offer</td>
                  <td className="py-4 px-6 text-gray-600">
                    Oven + Rangehood cleaning package. Save time and get a sparkling clean kitchen.
                  </td>
                  <td className="py-4 px-6 font-semibold">From $200</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Professional Tip / Info Box */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200 max-w-3xl mx-auto">
              <h3 className="text-lg font-semibold text-emerald-800 mb-2">
                Pro Tip
              </h3>
              <p className="text-emerald-700">
                Regular oven cleaning prevents smoke and grease buildup, and pairs well with a rangehood clean for complete kitchen hygiene.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-emerald-50 py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-[5px]">
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
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
            Ready for a Spotless Oven?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Professional oven cleaning that removes grease, grime, and burnt-on food. Book your service today!
          </p>
          <Link to="/book?service=oven-cleaning">
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

export default OvenCleaning;

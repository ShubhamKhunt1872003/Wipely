import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  Shield,
  Clock,
  ArrowRight,
  Sparkles,
  Users,
  Award,
  Droplets,
  Wind,
  Zap,
  Star,
  Heart,
  Home as HomeIcon
} from 'lucide-react';

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

  const cleaningProcess = [
    {
      step: "1",
      title: "Inspection & Assessment",
      description: "We inspect the oven to identify greasy spots, burnt-on food, and delicate areas.",
      icon: CheckCircle
    },
    {
      step: "2",
      title: "Disassembly & Pre-Clean",
      description: "Removable parts like trays, racks, and panels are cleaned separately for best results.",
      icon: Droplets
    },
    {
      step: "3",
      title: "Deep Cleaning",
      description: "Interior surfaces are cleaned with eco-friendly solutions to remove all dirt and grease.",
      icon: Zap
    },
    {
      step: "4",
      title: "Polish & Final Check",
      description: "We polish exterior surfaces and ensure all parts are reassembled correctly.",
      icon: Award
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
      <section className="relative h-[300px] md:h-[400px] w-full">
        <img
          src="https://images.pexels.com/photos/434213/pexels-photo-434213.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Professional Oven Cleaning"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <h1 className="text-white text-3xl md:text-5xl font-bold mb-2">
              Professional Oven Cleaning
            </h1>
            <p className="text-white text-base md:text-lg max-w-2xl">
              Deep cleaning that removes grease, grime, and burnt-on food — leaving your oven sparkling clean.
            </p>
          </div>
        </div>
      </section>

      

      {/* Oven Services */}
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
              Our Oven Cleaning Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive oven care for homes and commercial kitchens
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ovenServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


{/* Oven Cleaning Melbourne Prices */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4">
    {/* Section Intro */}
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Oven Cleaning Melbourne Prices
      </h2>
      <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Professional oven cleaning services that save time, protect your appliance, and keep your kitchen hygienic.
        Transparent pricing for homes and commercial kitchens across Melbourne.
      </p>
    </motion.div>

    {/* Price Table */}
    <div className="overflow-x-auto mb-8">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
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
      className="mt-6 text-center"
    >
      <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200 max-w-3xl mx-auto">
        <h3 className="text-lg font-semibold text-emerald-800 mb-2">
          💡 Pro Tip
        </h3>
        <p className="text-emerald-700">
          Regular oven cleaning prevents smoke, bad odors, and grease buildup, while extending your appliance’s lifespan. 
          Combine with rangehood cleaning for complete kitchen hygiene!
        </p>
      </div>
    </motion.div>

    {/* CTA Button */}
    <div className="mt-10 text-center">
      <Link to="/book">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Book Your Oven Cleaning
        </motion.button>
      </Link>
    </div>
  </div>
</section>




      {/* Oven Cleaning Process */}
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
              Our Cleaning Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Step-by-step procedure to restore your oven to pristine condition
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
      <section className="bg-emerald-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Ready for a Spotless Oven?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Professional oven cleaning that removes grease, grime, and burnt-on food — book your service today!
          </p>
          <Link to="/book">
            <button className="inline-block bg-white text-emerald-600 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-100 transition duration-300">
              Book Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OvenCleaning;

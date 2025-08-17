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
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Professional Oven
              <span className="block text-emerald-600">Cleaning</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Deep cleaning that removes grease, grime, and burnt-on food ,  leaving your oven sparkling clean
            </p>
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

      {/* Why Professional Oven Cleaning (same layout as BBQ section) */}
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
        Why Professional Oven Cleaning?
      </h2>
      <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Professional oven cleaning removes baked-on grease, carbonised residue, and odours, 
        improves heating efficiency, and extends your appliance’s lifespan for safer, fresher cooking.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Image + Testimonial */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative order-2 lg:order-1"
      >
        <div className="relative">
          {/* You can swap ovenBanner for another image if you have one */}
          <img
            src={ovenBanner}
            alt="Professional oven cleaning in action"
            className="rounded-2xl shadow-2xl w-full"
          />

          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-sm">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm">Sarah M.</div>
                <div className="text-gray-600 text-xs">Melbourne</div>
              </div>
            </div>
            <blockquote className="text-gray-700 italic text-sm leading-relaxed">
              "Fantastic job! No more burnt smells and the glass door is crystal clear. Highly recommend."
            </blockquote>
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Copy + Benefits */}
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

            <div className="space-y-4 mb-8">
              <p className="text-gray-700 leading-relaxed">
                We use non-toxic, eco-friendly solutions and careful techniques to break down grease and carbon build-up
                without damaging enamel, seals, or glass.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our trained technicians detail racks, trays, and doors for a like-new finish and better performance.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Shield, text: "Safe & Non-Toxic" },
                { icon: Wind, text: "Odour & Fume-Free" },
                { icon: Award, text: "Streak-Free Glass" },
                { icon: Users, text: "Trained Experts" },
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
            Professional oven cleaning that removes grease, grime, and burnt-on food ,  book your service today!
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

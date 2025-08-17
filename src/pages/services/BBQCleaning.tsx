import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Shield, 
  Sparkles,
  Users,
  Award,
  Droplets,
  Wind,
  Star
} from 'lucide-react';
import bbqImg from "../../images/bbqImg.jpg";
import bbqSecImg from "../../images/bbqSecImg.jpg";
const BBQCleaning: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const beforeAfterImages = [
  {
    title: "Standard BBQ Cleaning",
    before: "/images/bbq-before1.jpg",
    after: "/images/bbq-after1.jpg",
  },
  {
    title: "Premium BBQ Cleaning",
    before: "/images/bbq-before2.jpg",
    after: "/images/bbq-after2.jpg",
  },
  {
    title: "Commercial BBQ Cleaning",
    before: "/images/bbq-before3.jpg",
    after: "/images/bbq-after3.jpg",
  },
];


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

  const pricingItems = [
    { item: "Small BBQ (up to 3 burners)", price: "$70" },
    { item: "Medium BBQ (4-5 burners)", price: "$120" },
    { item: "Large BBQ (6+ burners)", price: "$180" },
    { item: "Premium Full Disassembly Cleaning", price: "$250" },
    { item: "Commercial BBQ (per unit)", price: "$300" },
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
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Professional BBQ
              <span className="block text-emerald-600">Cleaning Melbourne</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Advanced BBQ cleaning technology removes grease, burnt residue, and bacteria ,  leaving your BBQ safe and ready to use
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
        Why Professional BBQ Cleaning?
      </h2>
      <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Professional BBQ cleaning removes grease, burnt residue, and bacteria, extends the life of your BBQ, and ensures safer cooking for your family and friends.
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
                  src={bbqSecImg}
                  alt="Professional carpet cleaning in action"
                  className="rounded-2xl shadow-2xl w-full"
                />
          
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-sm">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm">John D.</div>
                <div className="text-gray-600 text-xs">Melbourne</div>
              </div>
            </div>
            <blockquote className="text-gray-700 italic text-sm leading-relaxed">
              "My BBQ has never been cleaner! The team removed all the grease and grime. Perfect service and professional staff."
            </blockquote>
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
              ))}
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
            
            <div className="space-y-4 mb-8">
              <p className="text-gray-700 leading-relaxed">
                Our professional BBQ cleaning uses safe, eco-friendly cleaning agents and advanced tools to remove grease, burnt food, and bacteria that regular cleaning can't reach.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Unlike DIY methods, our trained experts ensure thorough cleaning while protecting your BBQ's components for long-lasting performance.
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



      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our BBQ Cleaning Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cleaning solutions for residential and commercial BBQs across Melbourne
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bbqServices.map((service, index) => (
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

      {/* Pricing Section */}

<section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-4">
    {/* Heading */}
    <div className="text-center mb-10">
      <h2 className="text-4xl font-bold text-gray-900 mb-3">
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

    {/* CTA */}
    <div className="mt-8 text-center">
      <Link to="/book">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
        >
          Book Online
        </motion.button>
      </Link>
    </div>
  </div>
</section>

  
<section className="py-12 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4">
    {/* Heading */}
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-10"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-[5px]">
        BBQ Cleaning Results
      </h2>
      <div className="w-20 h-1 bg-emerald-500 rounded mt-[5px] mb-6 mx-auto"></div>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
        See the dramatic difference our professional BBQ cleaning makes ,  before and after our service.
      </p>
    </motion.div>

    {/* Before & After Grid */}
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
            {/* Before Image */}
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

            {/* After Image */}
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

          {/* Title */}
          <div className="p-4 text-center">
            <h3 className="font-semibold text-gray-900">{item.title}</h3>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

    {/* FAQ Section – Carpet Cleaning Style */}
<section className="bg-emerald-50 py-14">
  <div className="max-w-6xl mx-auto px-4">
    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-[5px]">
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
<section className="bg-emerald-600 text-white py-12">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-3">
      Ready for a Cleaner, Safer BBQ?
    </h2>
    <p className="text-lg mb-6 max-w-2xl mx-auto">
      Professional BBQ cleaning that removes grease, burnt residue, and bacteria ,  book your service today!
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

export default BBQCleaning;

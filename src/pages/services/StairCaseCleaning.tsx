import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Droplets,
  Shield,
  Zap,
  Award,
  Wind,
  Sparkles,
  Star,
  Users,
  ArrowRight,
} from "lucide-react";

import stairCaseImg from "../../images/staircaseImg.jpg";

const StairCaseCleaning: React.FC = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const toggleFaq = (i: number) => setFaqOpen(faqOpen === i ? null : i);

  const services = [
    {
      title: "Wooden Stairs",
      desc: "Deep cleaning to remove dust, dirt and polish for a refreshed finish.",
      points: ["Dust removal", "Spot cleaning", "Polish & protect", "Detailing edges"],
      icon: "🪜",
    },
    {
      title: "Carpeted Stairs",
      desc: "Hot water extraction and stain removal to make carpets look new.",
      points: ["Pre-vacuum", "Stain treatment", "Steam cleaning", "Fast drying"],
      icon: "🧶",
    },
    {
      title: "Tile & Stone Stairs",
      desc: "Thorough scrubbing and sealing for long-lasting protection.",
      points: ["Grout clean", "Surface polish", "Eco-friendly solutions", "Protection coating"],
      icon: "🪨",
    },
  ];

  const whyChooseWipely = [
    {
      icon: Shield,
      title: "Trusted & Insured",
      desc: "Fully insured, background-checked cleaners who treat your home with care.",
    },
    {
      icon: Users,
      title: "Experienced Team",
      desc: "Trained to handle wooden, carpeted, tiled and stone staircases properly.",
    },
    {
      icon: Wind,
      title: "Fast & Efficient",
      desc: "Most staircases are cleaned and finished within a single visit.",
    },
    {
      icon: Award,
      title: "Customer-Focused",
      desc: "We turn up on time and follow a consistent checklist on every job.",
    },
  ];

  const process = [
    { step: "1", title: "Inspection & Prep", desc: "Assess staircase type and problem areas.", icon: CheckCircle },
    { step: "2", title: "Pre-Treatment", desc: "Apply stain removers and surface cleaners.", icon: Droplets },
    { step: "3", title: "Deep Cleaning", desc: "Scrub, vacuum, or steam depending on surface.", icon: Zap },
    { step: "4", title: "Finishing Touch", desc: "Polish, seal, and protect for lasting results.", icon: Award },
  ];

  const faqs = [
    { q: "How long does staircase cleaning take?", a: "Depending on material and size, most jobs take 1–3 hours." },
    { q: "Are the cleaning products safe for kids and pets?", a: "Yes. We use non-toxic, eco-friendly solutions." },
    { q: "Can you remove tough stains on carpeted stairs?", a: "We remove most common stains. Some set-in dyes may be permanent." },
    { q: "Do you clean staircases in apartments and units?", a: "Yes, we clean staircases in houses, apartments, and shared building stairwells." },
    { q: "Do I need to be home during the clean?", a: "Not necessarily — many customers arrange access for us and go about their day." },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-br from-emerald-50 to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-emerald-100 text-emerald-700 !text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Custom Cleaning Service
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Staircase
              <span className="block text-emerald-600">Cleaning</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Restore wooden, carpeted, or tiled stairs with deep, safe cleaning that keeps every
              step looking its best.
            </p>
            <div className="flex justify-center">
              <a href="tel:+61435137936">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300 text-base"
                >
                  Call +61 435 137 936
                </motion.button>
              </a>
            </div>
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
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src={stairCaseImg}
              alt="Professional staircase cleaning in progress"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-emerald-600 font-semibold !text-sm uppercase tracking-wide">
              Service Overview
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
              Keep Your Stairs Spotless & Safe
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our professional staircase cleaning removes dirt, dust, and allergens from wooden,
              carpeted, or tiled stairs — improving safety and extending their life. Ideal for
              homeowners, renters, and property managers, whether it's inside the home or in
              shared building stairwells.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Clean */}
      <section className="py-14 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-emerald-600 font-semibold !text-sm uppercase tracking-wide">
              What We Clean
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Every Staircase Surface, Covered
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Remove dirt, allergens, and stains while protecting your stairs' surfaces for
              long-lasting results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {services.map((s, idx) => (
              <motion.div
                key={s.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="h-full"
              >
                <div className="h-full flex flex-col bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h3 className="font-display text-xl font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem]">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{s.desc}</p>
                  <ul className="space-y-2 mt-auto">
                    {s.points.map((p, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-6">Our Cleaning Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Step-by-step for spotless results</p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-emerald-200 transform -translate-y-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {process.map((p, i) => (
                <motion.div
                  key={p.step}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative text-center"
                >
                  <div className="relative z-10 bg-white rounded-xl p-6 shadow-lg h-full">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <p.icon className="w-8 h-8 text-emerald-600" />
                    </div>
                    <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">{p.step}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{p.title}</h3>
                    <p className="text-gray-600 text-sm">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Wipely */}
      <section className="py-14 sm:py-16 bg-gradient-to-br from-emerald-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Wipely
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professional, reliable staircase cleaning from a team that pays attention to detail.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {whyChooseWipely.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full text-center"
              >
                <div className="h-full flex flex-col bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 min-h-[3.5rem]">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-300"
            >
              <Star className="w-4 h-4 fill-current" />
              Read Customer Reviews
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Get a Custom Quote */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-emerald-50 border border-emerald-100 rounded-2xl p-10"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Get a Custom Quote
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Pricing depends on your staircase's material, size, and condition. Book online and
              we'll confirm the details with you.
            </p>
            <Link to="/book?service=staircase-cleaning">
              <button className="btn-primary">
                Book Now
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-emerald-50 py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-[5px]">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-emerald-500 rounded mt-[5px] mb-6"></div>

          {faqs.map((f, i) => (
            <div
              key={i}
              className="border border-gray-200 bg-white rounded-md p-4 mb-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFaq(i)}
                className="w-full text-left flex justify-between items-center text-lg font-medium text-gray-800"
              >
                {f.q}
                <span className="ml-4 text-emerald-500 text-2xl">{faqOpen === i ? "-" : "+"}</span>
              </button>
              {faqOpen === i && <p className="mt-3 text-gray-600 text-base leading-relaxed">{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">Ready to Clean Your Stairs?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto text-emerald-100">
            Professional staircase cleaning for wooden, carpeted, and tiled stairs. Book your service today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book?service=staircase-cleaning">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-emerald-600 font-semibold py-3 px-8 rounded-full shadow-md hover:bg-gray-100 transition duration-300"
              >
                Book Now
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300"
              >
                Contact Us
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StairCaseCleaning;

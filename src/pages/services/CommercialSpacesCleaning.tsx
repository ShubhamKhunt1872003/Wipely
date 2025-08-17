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
} from "lucide-react";

import commercialImg from "../../images/commercialImg.jpg"; // Main image
import commercialBeforeImg from "../../images/commercialBefore.jpg";
import commercialAfterImg from "../../images/commercialAfter.jpg";

const CommercialSpacesCleaning: React.FC = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const toggleFaq = (i: number) => setFaqOpen(faqOpen === i ? null : i);

  const services = [
    {
      title: "Office Cleaning",
      desc: "Keep your workspace clean, hygienic and welcoming.",
      points: ["Desks & surfaces sanitized", "Floors vacuumed & mopped", "Trash removed", "Disinfect common areas"],
      icon: "🏢",
    },
    {
      title: "Retail Spaces",
      desc: "Professional cleaning for shops and showrooms.",
      points: ["Floor polishing", "Window & display cleaning", "Spot removal", "High-touch area disinfecting"],
      icon: "🛍️",
    },
    {
      title: "Healthcare & Clinics",
      desc: "Specialized cleaning for health-focused spaces.",
      points: ["Disinfect surfaces", "Sanitize waiting areas", "Hygienic floors", "Reduce allergens"],
      icon: "🏥",
    },
  ];

  const process = [
    { step: "1", title: "Assessment & Planning", desc: "Identify areas, frequency and cleaning requirements.", icon: CheckCircle },
    { step: "2", title: "Pre-Cleaning Setup", desc: "Remove clutter, prepare surfaces and equipment.", icon: Droplets },
    { step: "3", title: "Deep Cleaning", desc: "Comprehensive cleaning with eco-friendly products.", icon: Zap },
    { step: "4", title: "Final Inspection", desc: "Ensure spotless results and client satisfaction.", icon: Award },
  ];

  const faqs = [
    { q: "Do you clean after hours?", a: "Yes, we can schedule cleaning outside business hours to avoid disruption." },
    { q: "Are your products safe for employees?", a: "Absolutely. We use eco-friendly, non-toxic cleaning products." },
    { q: "Can you handle large commercial spaces?", a: "Yes, we have teams trained for offices, retail, and healthcare facilities of any size." },
  ];

  const testimonials = [
    { name: "James H.", location: "Melbourne CBD", rating: 5, text: "Our office has never looked better. Efficient and professional team.", service: "Office Cleaning" },
    { name: "Sarah W.", location: "South Yarra", rating: 5, text: "Retail space sparkling clean! Customers love it.", service: "Retail Cleaning" },
    { name: "Dr. Allen K.", location: "Fitzroy", rating: 5, text: "Clinic cleaned to perfection. Very hygienic and safe.", service: "Healthcare Cleaning" },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Professional Commercial
              <span className="block text-emerald-600">Spaces Cleaning</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Expert cleaning for offices, retail stores, clinics, and all commercial environments
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

      {/* Why Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={commercialImg} alt="Commercial Cleaning" className="rounded-2xl shadow-2xl w-full" />
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Expert Cleaning for Your Commercial Spaces</h2>
            <div className="w-24 h-1 bg-emerald-500 mb-6"></div>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Maintain a clean, safe, and welcoming environment for employees and clients with our professional commercial cleaning services.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[{ icon: Shield, text: "Eco-Friendly Solutions" }, { icon: Users, text: "Trained Experts" }, { icon: Wind, text: "Fast & Efficient" }, { icon: Award, text: "Guaranteed Satisfaction" }].map((b, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <b.icon className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{b.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.07 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-600 mb-4">{s.desc}</p>
              <ul className="space-y-2">
                {s.points.map((p, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <motion.h2 initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl font-bold text-gray-900 mb-6">
            Our Cleaning Process
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">A detailed approach to ensure spotless results for every commercial space</p>
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
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
                <div className="relative z-10 bg-white rounded-xl p-6 shadow-lg">
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
      </section>

      {/* Testimonials */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-[5px]">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-emerald-500 rounded mt-[5px] mb-6 mx-auto"></div>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">Real reviews from Melbourne businesses</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-gray-50 rounded-xl shadow-md p-6 h-full flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center mb-3 justify-center">
                    {[...Array(t.rating)].map((_, s) => (
                      <Star key={s} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4">"{t.text}"</p>
                </div>
                <div className="text-center mt-4">
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-600">{t.location}</div>
                  <span className="inline-block mt-2 text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded">{t.service}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-emerald-50 py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-[5px]">Frequently Asked Questions</h2>
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
      <section className="bg-emerald-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Ready to Elevate Your Commercial Space?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Professional cleaning for offices, retail stores, and commercial environments. Book your service today!
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

export default CommercialSpacesCleaning;

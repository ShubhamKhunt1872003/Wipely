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
  Heart,
  Users,
} from "lucide-react";
import upholsteryBeforeImg from "../../images/upholsteryBefore.jpg";
import upholsteryAfterImg from "../../images/upholsteryAfter.jpg";
import upholsterySecImg from "../../images/upholsterySecImg.jpg";
const UpholsteryCleaning: React.FC = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const toggleFaq = (i: number) => setFaqOpen(faqOpen === i ? null : i);

  const services = [
    {
      title: "Fabric Sofa & Couch",
      desc: "Deep hot water extraction to lift soil, body oils, and allergens.",
      points: ["Pre-vacuum & pre-spray", "Spot & stain treatment", "Steam extraction", "Deodorise"],
      icon: "🛋️",
    },
    {
      title: "Armchairs & Recliners",
      desc: "Gentle clean for frequently used seating with quick dry times.",
      points: ["Targeted pre-treat", "Detailing on arms/headrest", "Fast extraction", "Care advice"],
      icon: "🪑",
    },
    {
      title: "Dining Chairs & Ottomans",
      desc: "Food spill and spot removal for dining seats and ottomans.",
      points: ["Fabric-safe formulas", "Spot removal", "Deodorise", "Optional protection"],
      icon: "🍽️",
    },
    {
      title: "Mattress Refresh",
      desc: "Sanitising clean to reduce dust mites, odors, and allergens.",
      points: ["Low-moisture method", "Hygienic treatment", "Neutralise odors", "Drying guidance"],
      icon: "🛏️",
    }
  ];

  const process = [
    { step: "1", title: "Inspection & Fabric Test", desc: "Identify fabric type, colourfastness and best method.", icon: CheckCircle },
    { step: "2", title: "Pre-Treatment", desc: "Pre-spray and spot treatment for oils, spills and marks.", icon: Droplets },
    { step: "3", title: "Hot Water Extraction", desc: "Deep clean to remove soil, allergens and residues.", icon: Zap },
    { step: "4", title: "Finishing & Care", desc: "Deodorise, groom fibres and share drying/aftercare tips.", icon: Award },
  ];

  const faqs = [
    { q: "How long does upholstery take to dry?", a: "Most fabrics are touch-dry in 4–8 hours. Ventilation, humidity and thickness affect dry times. We suggest good airflow and avoiding use until fully dry." },
    { q: "Is it safe for kids and pets?", a: "Yes. We use eco-friendly, non-toxic solutions and rinse thoroughly so no sticky residues are left behind." },
    { q: "Can you remove tough stains (wine, food, pen)?", a: "We remove most common stains. Some set-in dyes/bleach/old marks may be permanent, but we’ll pre-test and set realistic expectations." },
    { q: "Do you offer fabric protection?", a: "Yes. We can apply a protector after cleaning to help repel spills and make future clean-ups easier." },
  ];

  const testimonials = [
    {
      name: "Elise P.",
      location: "Port Melbourne",
      rating: 5,
      text: "Our linen sofa looks amazing again. Friendly techs, careful testing, and fast dry time.",
      service: "Fabric Sofa Clean",
    },
    {
      name: "Tom R.",
      location: "Hawthorn",
      rating: 5,
      text: "Food stains on dining chairs are gone. Impressed with the detail and results.",
      service: "Dining Chairs",
    },
    {
      name: "Maya K.",
      location: "Bentleigh",
      rating: 5,
      text: "Mattress feels fresh and clean. Allergies improved right away.",
      service: "Mattress Refresh",
    },
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
              Professional Upholstery
              <span className="block text-emerald-600">Cleaning</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Restore sofas, chairs and mattresses with deep, fabric-safe cleaning and fast drying
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

      {/* Why Section - Upholstery (like BBQ page) */}
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
        Why Professional Upholstery Cleaning?
      </h2>
      <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Extend fabric life, remove allergens and oils, and keep your lounge looking and feeling fresh.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Image Side with Testimonial Bubble */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div className="relative">
          <img
            src={upholsterySecImg} // Replace with your main upholstery image
            alt="Professional Upholstery Cleaning"
            className="rounded-2xl shadow-2xl w-full"
          />

          {/* Testimonial Bubble */}
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-sm">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm">Elise P.</div>
                <div className="text-gray-600 text-xs">Port Melbourne</div>
              </div>
            </div>
            <blockquote className="text-gray-700 italic text-sm leading-relaxed">
              "Our linen sofa looks amazing again. Friendly techs, careful testing, and fast dry time."
            </blockquote>
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Text & Benefits Side */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div className="bg-white rounded-2xl p-8 relative overflow-hidden shadow-lg">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">The Wipely Difference</h3>
            <p className="text-gray-700 mb-4">
              Our professional upholstery cleaning uses safe, eco-friendly solutions and advanced techniques to remove allergens, oils, and stains that regular cleaning can't reach.
            </p>
            <p className="text-gray-700 mb-6">
              Unlike DIY methods, our trained experts ensure thorough cleaning while protecting your fabrics for long-lasting performance.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Zap, text: "Hot Water Extraction" },
                { icon: Shield, text: "Eco-Safe Solutions" },
                { icon: Wind, text: "Faster Drying" },
                { icon: Award, text: "Satisfaction First" },
              ].map((benefit) => (
                <div key={benefit.text} className="flex items-center gap-2">
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


      {/* Why Section */}
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
              Professional Care for Your Fabrics
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Extend fabric life, remove allergens and oils, and keep your lounge looking and feeling fresh.
            </p>
          </motion.div>

          

          {/* Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* Pricing (table, unique look) */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Upholstery Cleaning Pricing</h2>
            <p className="text-lg text-gray-600">Transparent rates for popular items</p>
          </motion.div>

          <div className="overflow-x-auto rounded-xl shadow-md border border-gray-200">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white">
                  <th className="py-4 px-6 text-left font-semibold">Item</th>
                  <th className="py-4 px-6 text-left font-semibold">Price</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["2-Seater Fabric Sofa", "$85"],
                  ["3-Seater Fabric Sofa", "$105"],
                  ["Chaise / L-Shape (per section)", "$60+"],
                  ["Armchair / Recliner", "$45"],
                  ["Dining Chair (seat only)", "$12"],
                  ["Dining Chair (seat & back)", "$18"],
                  ["Ottoman", "$25"],
                  ["Mattress – Single/Double", "$75 / $95"],
                  ["Mattress – Queen/King", "$115 / $135"],                ].map(([item, price], idx) => (
                  <tr key={idx} className={`${idx % 2 ? "bg-gray-50" : "bg-white"} hover:bg-emerald-50 transition-colors`}>
                    <td className="py-4 px-6 border-b border-gray-200">{item}</td>
                    <td className="py-4 px-6 border-b border-gray-200">
                      <span className="bg-emerald-100 text-emerald-700 font-semibold px-3 py-1 rounded-full">{price}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600 mt-4 text-center">
            *Prices are guide rates and may vary by fabric type, size and condition. Minimum service charge:{" "}
            <span className="font-semibold text-emerald-600">$125</span>.
          </p>

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
      
   <section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-4">
    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Upholstery Cleaning Results
      </h2>
      <p className="text-lg text-gray-600">
        See the transformation our professional upholstery cleaning delivers
      </p>
    </div>

    {/* Before & After Grid */}
    <div className="grid md:grid-cols-2 gap-8">
      {/* Before */}
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <img
          src={upholsteryBeforeImg}
          alt="Upholstery before cleaning"
          className="w-full h-72 object-cover"
        />
        <div className="bg-red-50 text-red-600 font-semibold py-2 text-center">
          Before
        </div>
      </div>

      {/* After */}
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <img
          src={upholsteryAfterImg}
          alt="Upholstery after cleaning"
          className="w-full h-72 object-cover"
        />
        <div className="bg-emerald-50 text-emerald-600 font-semibold py-2 text-center">
          After
        </div>
      </div>
    </div>

    {/* Highlights */}
    <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
      {[
        ["99%", "Stains Removed"],
        ["100%", "Eco-Friendly Cleaning"],
        ["5★", "Customer Rated Service"],
      ].map(([value, text], idx) => (
        <div
          key={idx}
          className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition"
        >
          <p className="text-3xl font-bold text-emerald-600">{value}</p>
          <p className="text-gray-700 mt-2">{text}</p>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Upholstery Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">A careful approach for beautiful, long-lasting results</p>
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
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-[5px]">What Our Customers Say</h2>
          <div className="w-20 h-1 bg-emerald-500 rounded mt-[5px] mb-6 mx-auto"></div>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">Real reviews from Melbourne customers</p>

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
                  <span className="inline-block mt-2 text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded">
                    {t.service}
                  </span>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Ready to Refresh Your Upholstery?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Professional, fabric-safe cleaning for sofas, chairs and mattresses. Book your service today!
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

export default UpholsteryCleaning;

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

const FinalCTA: React.FC = () => (
  <section className="bg-emerald-600 text-white py-14 sm:py-16">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display font-bold !text-3xl md:!text-4xl mb-3">Ready for a Cleaner Space?</h2>
        <p className="!text-lg text-emerald-50 mb-7 max-w-xl mx-auto">
          Tell us what you need cleaned and we'll help you find the right cleaning solution.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/book"
            className="inline-flex items-center gap-2 bg-white text-emerald-700 font-semibold py-3.5 px-7 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300"
          >
            Get a Free Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:+61435137936"
            className="inline-flex items-center gap-2 bg-emerald-700/40 border border-white/50 text-white font-semibold py-3.5 px-7 rounded-full hover:bg-emerald-700/60 transition-colors duration-300"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;

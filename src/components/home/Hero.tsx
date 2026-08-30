import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, ShieldCheck, MapPin, Search } from 'lucide-react';
import ServiceImag from '../../images/Service.jpg';

interface HeroProps {
  postalCode: string;
  onPostalCodeChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  availabilityMessage: string;
}

const Hero: React.FC<HeroProps> = ({ postalCode, onPostalCodeChange, onSubmit, availabilityMessage }) => {
  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={ServiceImag}
          alt="Wipely cleaner delivering a spotless, streak-free finish in a Melbourne home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
      </div>

      <div className="relative z-10 min-h-[85vh] flex items-center pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl text-white">
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 !text-sm font-semibold tracking-wide uppercase text-emerald-300 mb-5"
            >
              <ShieldCheck className="w-4 h-4" />
              Professional • Reliable • Fully Insured
            </motion.span>

            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6"
            >
              Professional Cleaning.
              <span className="block text-emerald-400">Exceptional Results.</span>
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="!text-lg sm:!text-xl text-gray-200 mb-8 max-w-xl"
            >
              From everyday home cleaning to end-of-lease and specialised cleaning, Wipely delivers reliable,
              professional cleaning across Melbourne.
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.7 }}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <Link
                to="/book"
                className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3.5 rounded-full font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>

              <Link
                to="/book"
                className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/40 hover:bg-white/20 text-white px-7 py-3.5 rounded-full font-semibold transition-colors duration-300"
              >
                Book a Cleaning
              </Link>

              <a
                href="tel:+61435137936"
                className="inline-flex items-center text-white font-semibold px-2 py-3.5 hover:text-emerald-300 transition-colors duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us: +61 435 137 936
              </a>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <form
                onSubmit={onSubmit}
                className="max-w-md bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-2 flex gap-2"
              >
                <div className="relative flex-1">
                  <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter your postcode"
                    value={postalCode}
                    onChange={(e) => onPostalCodeChange(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 !text-sm rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl font-semibold !text-sm transition-colors duration-300 whitespace-nowrap"
                >
                  <Search className="w-4 h-4" />
                  Check Availability
                </button>
              </form>

              {availabilityMessage && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-3 !text-sm font-medium ${
                    availabilityMessage.includes('Great news') ? 'text-emerald-300' : 'text-orange-300'
                  }`}
                >
                  {availabilityMessage}
                </motion.p>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

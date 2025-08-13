import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle, Phone } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-emerald-50 to-sage-100 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 text-emerald-200"
        >
          <Sparkles size={40} />
        </motion.div>
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-10 text-sage-200"
        >
          <CheckCircle size={50} />
        </motion.div>
      </div>

      <div className="relative z-10 min-h-screen bg-black/40 flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-20 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Professional Cleaning Services
              <span className="block text-emerald-400">in Melbourne</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Expert deep clean services for your home and office. Professional, reliable, and affordable cleaning solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/book"
                className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Book Now
              </a>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-300"
              >
                <Phone className="mr-2" size={20} />
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
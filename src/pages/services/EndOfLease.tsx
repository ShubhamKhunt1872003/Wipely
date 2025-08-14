import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Shield, 
  Clock, 
  ArrowRight,
  Home as HomeIcon,
  Sparkles,
  Users,
  Award,
  Key,
  Calendar,
  Leaf
} from 'lucide-react';

const EndOfLease: React.FC = () => {
  const includedServices = [
    { task: "Full Kitchen Degreasing", description: "Oven, stovetop, splashbacks, and all surfaces" },
    { task: "Complete Bathroom Sanitation", description: "Tiles, glass, fixtures, and deep scrubbing" },
    { task: "Floor Care", description: "Vacuuming, mopping, and detailed cleaning" },
    { task: "Wall Spot-Cleaning", description: "Marks, scuffs, and stains removed" },
    { task: "Window Cleaning", description: "Internal window cleaning and polishing" },
    { task: "Detail Work", description: "Cobwebs, dust removal, light fittings, and fans" }
  ];

  const addOns = [
    { name: "Carpet Steam Cleaning", price: "$80", icon: "🧽" },
    { name: "Balcony/Garage Cleaning", price: "$60", icon: "🏠" },
    { name: "Upholstery Cleaning", price: "$60", icon: "🛋️" },
    { name: "Curtain Cleaning", price: "$45", icon: "🪟" },
    { name: "Pressure Washing", price: "$85", icon: "🚿" },
    { name: "Interior Painting Touch-ups", price: "$120", icon: "🎨" }
  ];

  const whyChooseWipely = [
    {
      icon: Award,
      title: "Real Estate Expertise",
      description: "We know exactly what property managers look for and ensure every detail meets their standards."
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "We work around your move-out timeline, including same-day and weekend availability."
    },
    {
      icon: Shield,
      title: "Fully Insured Team",
      description: "Every cleaner is police-checked, insured, and trained in bond cleaning standards."
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Products",
      description: "Non-toxic, eco-friendly supplies that are safe for your family and the environment."
    }
  ];

  const beforeAfterImages = [
    {
      before: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=400",
      after: "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Kitchen Transformation"
    },
    {
      before: "https://images.pexels.com/photos/6436308/pexels-photo-6436308.jpeg?auto=compress&cs=tinysrgb&w=400",
      after: "https://images.pexels.com/photos/6436309/pexels-photo-6436309.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Bathroom Restoration"
    },
    {
      before: "https://images.pexels.com/photos/4239037/pexels-photo-4239037.jpeg?auto=compress&cs=tinysrgb&w=400",
      after: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Living Room Deep Clean"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 to-sage-50 -mt-16 pt-36">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                End of Lease Cleaning
                <span className="block text-emerald-600">in Melbourne</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Move out stress-free — we clean so you don't lose your bond.
              </p>
              <Link to="/book">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary px-8 py-4"
                >
                  Book Now
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/6197260/pexels-photo-6197260.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional cleaner working in empty apartment"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Key className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Bond Back Guarantee</div>
                    <div className="text-gray-600">From $280</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is End of Lease Cleaning */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional bond cleaning checklist"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What is End of Lease Cleaning?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                End of lease cleaning is a comprehensive deep cleaning service designed to restore your rental property to the condition expected by real estate agents and property managers.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our team understands the specific requirements and standards that need to be met to ensure you get your full bond back. We follow detailed checklists used by property managers across Melbourne.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: Shield, title: "Bond Back Guarantee", description: "Meet all real estate standards" },
                  { icon: CheckCircle, title: "Deep Cleaning", description: "Every surface thoroughly cleaned" },
                  { icon: Clock, title: "Flexible Timing", description: "Available 7 days a week" },
                  { icon: Award, title: "Experienced Team", description: "Specialized bond cleaning experts" }
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Included Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What's Included in Every Bond Clean
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive checklist ensures every detail meets real estate standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {includedServices.map((item, index) => (
              <motion.div
                key={item.task}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.task}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Bond Cleaning Transformations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the difference our professional bond cleaning makes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beforeAfterImages.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
              >
                <div className="grid grid-cols-2 gap-0">
                  <div className="relative">
                    <img src={item.before} alt="Before cleaning" className="w-full h-48 object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-red-600 text-white text-center py-2 text-sm font-medium">
                      Before
                    </div>
                  </div>
                  <div className="relative">
                    <img src={item.after} alt="After cleaning" className="w-full h-48 object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-emerald-600 text-white text-center py-2 text-sm font-medium">
                      After
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-gradient-to-r from-emerald-50 to-sage-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Optional Add-On Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your bond clean with these additional services — add them during checkout
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 hover:bg-emerald-50 transition-colors duration-300 card-hover"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{addon.icon}</span>
                    <h3 className="font-semibold text-gray-900">{addon.name}</h3>
                  </div>
                  <span className="text-emerald-600 font-bold">{addon.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Wipely */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Wipely for Your Exit Clean?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the stress of moving out. Let us handle the cleaning while you focus on your move.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseWipely.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center card-hover"
              >
                <div className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-colors duration-300">
                    <item.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let us handle the cleaning while you focus on the move.
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-emerald-100">
              Get your bond back with our professional end of lease cleaning service
            </p>
            <Link to="/book">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg text-base"
              >
                Book Now
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EndOfLease;
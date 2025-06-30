import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home as HomeIcon, 
  CheckCircle, 
  Sparkles, 
  Settings, 
  ArrowRight,
  Shield,
  Leaf,
  Clock,
  Award
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Regular House Cleaning",
      description: "Weekly or bi-weekly cleaning to maintain your home's freshness. Perfect for busy families who want a consistently clean living space.",
      features: ["Floors vacuumed & mopped", "Bathrooms sanitized", "Kitchen cleaned", "Dusting & tidying"],
      icon: HomeIcon,
      href: "/services/regular-cleaning",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "End of Lease Cleaning", 
      description: "Comprehensive bond-back guarantee cleaning for renters. Meet real estate standards and get your full deposit returned.",
      features: ["Deep kitchen degreasing", "Full bathroom restoration", "Carpet cleaning", "Window cleaning"],
      icon: CheckCircle,
      href: "/services/end-of-lease",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      title: "One-off Spring Cleaning",
      description: "Seasonal deep clean to refresh and revitalize your entire home. Perfect for special occasions or post-renovation cleanup.",
      features: ["Deep cleaning all rooms", "Hard-to-reach areas", "Appliance cleaning", "Detailed dusting"],
      icon: Sparkles,
      href: "/services/spring-cleaning",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Custom Cleaning",
      description: "Specialized cleaning services including carpet, upholstery, oven, BBQ, mattress, stairs, and commercial spaces.",
      features: ["Carpet steam cleaning", "Upholstery care", "Oven deep clean", "Commercial spaces"],
      icon: Settings,
      href: "/services/custom-cleaning",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const whyWipely = [
    {
      icon: Shield,
      title: "Trusted Professionals",
      description: "All cleaners are background-checked, insured, and trained to our high standards."
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Products",
      description: "We use environmentally safe, non-toxic cleaning products for your family's health."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Book at your convenience with easy online booking and flexible time slots."
    },
    {
      icon: Award,
      title: "Satisfaction Guaranteed",
      description: "Not happy? We'll re-clean for free or refund your money. Your satisfaction is our priority."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Expert Cleaning Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Choose the perfect cleaning solution for your space. Professional, reliable, and tailored to your needs.
            </p>
          </motion.div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                  {/* Service Header */}
                  <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                  
                  <div className="p-8">
                    {/* Icon and Title */}
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mr-4`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-600">
                            <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <Link to={service.href}>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full bg-gradient-to-r ${service.color} text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 group`}
                      >
                        Book This Service
                        <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Wipely Section */}
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
              Why Choose Wipely?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another cleaning service. Here's what makes us different.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyWipely.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
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

          {/* Trust Badge */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-6 py-3 rounded-full">
              <Award className="w-5 h-5 mr-2" />
              <span className="font-semibold">Rated 4.9 stars by 1200+ happy customers</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Still Not Sure?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-emerald-100">
              Get a free, no-obligation quote tailored to your specific needs
            </p>
            <Link to="/book">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg"
              >
                Get Free Quote Today
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MapComponent from '../components/MapComponent';
import { 
  Heart, 
  Shield, 
  Users, 
  Award,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle,
  Star,
  Sparkles,
  Target,
  Eye
} from 'lucide-react';

const About: React.FC = () => {

  const values = [
    {
      icon: Heart,
      title: "Care & Compassion",
      description: "We treat every home as if it were our own, with genuine care for your family's comfort and well-being."
    },
    {
      icon: Shield,
      title: "Trust & Reliability",
      description: "Fully insured, background-checked professionals you can count on, every single time."
    },
    {
      icon: Users,
      title: "Respect & Professionalism",
      description: "We respect your space, your time, and your privacy while delivering exceptional service."
    },
    {
      icon: Award,
      title: "Quality & Excellence",
      description: "We're not satisfied until you're delighted with the results. Your satisfaction is our success."
    }
  ];

  const stats = [
    { number: "2,500+", label: "Homes Cleaned", icon: "🏠" },
    { number: "4.9", label: "Star Rating", icon: "⭐" },
    { number: "1,200+", label: "Happy Families", icon: "👨‍👩‍👧‍👦" },
    { number: "3", label: "Years Serving Melbourne", icon: "📅" }
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Operations Manager",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Ensures every clean meets our high standards"
    },
    {
      name: "Michael Chen",
      role: "Quality Supervisor",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Leads our training and quality assurance"
    },
    {
      name: "Emma Wilson",
      role: "Customer Success",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Your first point of contact for bookings"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 to-sage-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              More Than Just Cleaning, 
              <span className="block text-emerald-600">It's Care You Can Count On</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              At Wipely, we believe a clean home is a happy home. Here's our story.
            </p>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-8 h-8 text-emerald-300 opacity-60"
          >
            <Sparkles className="w-full h-full" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-32 right-20 w-6 h-6 text-sage-300 opacity-60"
          >
            <Heart className="w-full h-full" />
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Mission & Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What drives us every day and where we're headed
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg card-hover"
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To deliver reliable, personalized cleaning services that make everyday life easier for Melbourne families. 
                We believe everyone deserves to come home to a clean, welcoming space without the stress of maintaining it themselves.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg card-hover"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be Melbourne's most trusted and loved cleaning service ,  where quality meets heart. 
                We envision a community where families have more time for what matters most, supported by cleaning partners they can truly rely on.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center card-hover"
              >
                <div className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-emerald-600 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-emerald-100">
              Proud to serve the Melbourne community
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-emerald-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Proudly Serving Melbourne and Surrounding Suburbs
              </h2>
              
              <div className="bg-emerald-50 rounded-xl p-8 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Wipely HQ</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-emerald-600" />
                    <div>
                      
                      <p className="text-gray-900">Melbourne, VIC, Australia</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-emerald-600" />
                    <p className="text-gray-900">+61 435 137 936</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-emerald-600" />
                    <p className="text-gray-900">info@wipely.au</p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                From the bustling CBD to the leafy suburbs, we're proud to bring our professional 
                cleaning services to homes and businesses across Melbourne. Our local team understands 
                the unique needs of Melbourne properties and families.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <MapComponent height="400px" showPopup={true} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Want a Sparkling Home Without Lifting a Finger?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-emerald-100">
              Join hundreds of Melbourne families who trust Wipely with their homes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300 text-base"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
            
            <div className="mt-8 flex items-center justify-center space-x-6 text-emerald-100">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Free quotes</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5" />
                <span>4.9 star rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>Fully insured</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
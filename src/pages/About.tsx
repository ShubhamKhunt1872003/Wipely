import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MapComponent from '../components/MapComponent';
import {
  Shield,
  Users,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle,
  Star,
  Sparkles,
  Target,
  ClipboardCheck,
  Leaf,
  CalendarClock,
  ThumbsUp,
  BadgeCheck,
} from 'lucide-react';

const About: React.FC = () => {
  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Trusted & Reliable',
      description:
        'Fully insured, background-checked cleaners you can count on to turn up on time, every time.',
    },
    {
      icon: Sparkles,
      title: 'Attention to Detail',
      description:
        'We follow a thorough, room-by-room checklist so nothing gets missed — from skirting boards to splashbacks.',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Products',
      description:
        'Safe, effective cleaning products that protect your family, pets and the environment.',
    },
    {
      icon: CalendarClock,
      title: 'Flexible Scheduling',
      description:
        'One-off, weekly, fortnightly or move-out cleans — booked online in minutes, around your schedule.',
    },
  ];

  const reliableCleaners = [
    {
      icon: BadgeCheck,
      title: 'Vetted & Trained',
      description: 'Every cleaner is police-checked and trained to Wipely\'s cleaning standards before they set foot in your home.',
    },
    {
      icon: ClipboardCheck,
      title: 'Consistent Standards',
      description: 'We use the same detailed checklist on every job, so the quality you get on week one is the quality you get every time after.',
    },
    {
      icon: ThumbsUp,
      title: 'Accountable Service',
      description: 'Not happy with a spot we missed? Let us know within 24 hours and we\'ll come back and fix it, free of charge.',
    },
  ];

  const stats = [
    { number: '2,500+', label: 'Homes Cleaned' },
    { number: '4.9', label: 'Average Rating' },
    { number: '1,200+', label: 'Happy Clients' },
    { number: '24hr', label: 'Response Time' },
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
            <span className="inline-block bg-emerald-100 text-emerald-700 !text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              About Wipely
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Melbourne's Trusted
              <span className="block text-emerald-600">Cleaning Specialists</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Professional, reliable cleaning for homes and businesses — delivered by a local team
              that treats every property like it's our own.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg text-base"
                >
                  Get a Free Quote
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </motion.button>
              </Link>
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

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-20 left-10 w-8 h-8 text-emerald-300 opacity-60"
          >
            <Sparkles className="w-full h-full" />
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-emerald-600 font-semibold !text-sm uppercase tracking-wide">
                Who We Are
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
                A Local Cleaning Team You Can Rely On
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Wipely is a Melbourne-based cleaning company built around one simple idea: cleaning
                should be reliable, thorough and easy to book. We work with homeowners, renters and
                businesses across Melbourne who want their space cleaned properly, without the
                hassle of chasing quotes or managing unreliable cleaners.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From regular house cleans to end-of-lease jobs and specialised services like carpet
                and upholstery cleaning, our team brings the same care and attention to detail to
                every booking — big or small.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-emerald-50 rounded-2xl p-6 text-center border border-emerald-100"
                >
                  <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-700 !text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-emerald-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              To deliver reliable, professional cleaning that gives Melbourne families and
              businesses their time back. We believe a clean, well-maintained space shouldn't be a
              source of stress — it should be one less thing on your list, handled properly by
              people who take pride in their work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Wipely */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Wipely</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What makes us the cleaning company Melbourne locals come back to
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gray-50 rounded-xl p-8 h-full shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional & Reliable Cleaners */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-sage-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 space-y-6"
            >
              {reliableCleaners.map((item) => (
                <div key={item.title} className="flex gap-4 bg-white rounded-xl p-6 shadow-md border border-gray-100">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 !text-[15px] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <span className="text-emerald-600 font-semibold !text-sm uppercase tracking-wide">
                Our People
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
                Professional & Reliable Cleaners
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Every Wipely cleaner is police-checked, fully insured and trained on our cleaning
                standards before they take on their first booking. We don't outsource to
                unfamiliar contractors — you get a professional who knows exactly what a Wipely
                clean looks like.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                It's this consistency that keeps our clients booking again, and referring us to
                friends and family across Melbourne.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Cleaning Services */}
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
              Quality Cleaning Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From regular home cleans to specialised jobs, every service follows the same
              standard of care
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Residential Cleaning',
                description: 'Regular, one-off and end-of-lease cleaning for houses, apartments and units.',
              },
              {
                title: 'Specialised Cleaning',
                description: 'Carpet, upholstery, oven, BBQ and staircase cleaning using the right tools for the job.',
              },
              {
                title: 'Commercial Cleaning',
                description: 'Reliable, after-hours friendly cleaning for offices and small businesses.',
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300"
              >
                <CheckCircle className="w-8 h-8 text-emerald-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-300"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Satisfaction */}
      <section className="py-20 bg-emerald-600 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Star className="w-10 h-10 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Customer Satisfaction Comes First</h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              We measure success by whether you'd book us again — and the results speak for
              themselves
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
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-emerald-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 bg-white text-emerald-600 font-semibold px-6 py-3 rounded-full hover:bg-emerald-50 transition-colors duration-300"
            >
              Read Customer Reviews
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Flexible Cleaning Solutions */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-emerald-600 font-semibold !text-sm uppercase tracking-wide">
                Flexibility
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
                Flexible Cleaning Solutions
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Not every home needs the same clean. That's why Wipely offers regular weekly or
                fortnightly cleaning, one-off spring cleans, end-of-lease cleaning and a full
                range of custom services — carpet, upholstery, oven, BBQ and staircase cleaning
                — that can be booked on their own or added to any clean.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Booking is simple: choose your service, pick a time that suits you, and we take
                care of the rest.
              </p>
              <div className="mt-6">
                <Link to="/services/custom-cleaning">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-all duration-300"
                  >
                    Explore Custom Services
                    <ArrowRight className="inline-block ml-2 w-4 h-4" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                'Weekly & Fortnightly',
                'One-off Spring Clean',
                'End of Lease',
                'Carpet & Upholstery',
                'Oven & BBQ',
                'Commercial Spaces',
              ].map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-800 font-medium !text-sm">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-emerald-600 font-semibold !text-sm uppercase tracking-wide">
                Service Areas
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-6">
                Proudly Serving Melbourne and Surrounding Suburbs
              </h2>

              <div className="bg-emerald-50 rounded-xl p-8 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Wipely HQ</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-emerald-600" />
                    <p className="text-gray-900">Melbourne, VIC, Australia</p>
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
                From the CBD to the leafy eastern and south-eastern suburbs — including Malvern
                East, Bentleigh East and everywhere in between — our local team understands what
                Melbourne homes and businesses need.
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
              Ready for a Spotless Space, Sorted?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-emerald-100">
              Join the Melbourne homes and businesses that trust Wipely with their cleaning
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

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-emerald-100">
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
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>1,200+ happy clients</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

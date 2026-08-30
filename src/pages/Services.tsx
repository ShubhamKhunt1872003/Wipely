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
  Award,
} from 'lucide-react';
import regularHouseImg from '../images/regularHouseImg.jpg';
import endOfLeaseImg from '../images/endOfLeaseImg.jpg';
import oneOfSpringImg from '../images/oneOfSpringImg.jpg';
import customCleaningImg from '../images/customCleaning.jpg';
import carpetSteamCleaning from '../images/carpetSteamCleaning.jpg';
import upholsteryImg from '../images/upholsteryImg.jpg';
import ovenImg from '../images/ovenImg.jpg';
import bbqImg from '../images/bbqImg.jpg';
import staircaseImg from '../images/staircaseImg.jpg';
import commercialImg from '../images/commercialImg.jpg';

const mainServices = [
  {
    title: 'Regular House Cleaning',
    description:
      'Reliable weekly or fortnightly cleaning to keep your home consistently fresh and spotless.',
    features: [
      'Floors vacuumed & mopped',
      'Bathrooms & kitchen cleaned',
      'Dusting & surface wipe-down',
      'Flexible weekly or fortnightly visits',
    ],
    icon: HomeIcon,
    image: regularHouseImg,
    href: '/services/regular-cleaning',
  },
  {
    title: 'End of Lease Cleaning',
    description:
      'Thorough, inspection-ready cleaning that helps you meet real estate standards and get your bond back.',
    features: [
      'Full property deep clean',
      'Oven, rangehood & exhaust',
      'Carpet cleaning available',
      'Bond-back guarantee support',
    ],
    icon: CheckCircle,
    image: endOfLeaseImg,
    href: '/services/end-of-lease',
  },
  {
    title: 'Hourly Spring Cleaning',
    description:
      'Flexible, hourly deep cleaning tailored to exactly what your home needs, whenever it needs it.',
    features: [
      'Book by the hour',
      'Deep clean any room',
      'Great for one-off refreshes',
      'No lock-in contracts',
    ],
    icon: Sparkles,
    image: oneOfSpringImg,
    href: '/services/spring-cleaning',
  },
  {
    title: 'Custom Cleaning',
    description:
      'Specialised cleaning for carpets, upholstery, ovens, BBQs, staircases and commercial spaces.',
    features: [
      'Carpet & upholstery steam cleaning',
      'Oven & BBQ deep cleaning',
      'Staircase & commercial spaces',
      'Mix and match what you need',
    ],
    icon: Settings,
    image: customCleaningImg,
    href: '/services/custom-cleaning',
  },
];

const customServices = [
  { title: 'Carpet Cleaning', image: carpetSteamCleaning, href: '/services/carpet-cleaning' },
  { title: 'Upholstery Cleaning', image: upholsteryImg, href: '/services/upholstery-cleaning' },
  { title: 'Oven Cleaning', image: ovenImg, href: '/services/oven-cleaning' },
  { title: 'BBQ Cleaning', image: bbqImg, href: '/services/bbq-cleaning' },
  { title: 'Staircase Cleaning', image: staircaseImg, href: '/services/staircase-cleaning' },
  { title: 'Commercial Cleaning', image: commercialImg, href: '/services/commercial-cleaning' },
];

const whyWipely = [
  {
    icon: Shield,
    title: 'Trusted Professionals',
    description: 'All cleaners are background-checked, insured, and trained to our high standards.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Products',
    description: "We use environmentally safe, non-toxic cleaning products for your family's health.",
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'Book at your convenience with easy online booking and flexible time slots.',
  },
  {
    icon: Award,
    title: 'Satisfaction Guaranteed',
    description: "Not happy? We'll re-clean for free or refund your money. Your satisfaction is our priority.",
  },
];

const Services: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Expert
              <span className="block text-emerald-600">Cleaning Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Tailored cleaning solutions for homes and businesses across Melbourne
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
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-20 left-10 w-6 h-6 text-emerald-400 opacity-60"
          >
            <Sparkles className="w-full h-full animate-float" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute top-32 right-20 w-4 h-4 text-blue-400 opacity-60"
          >
            <Sparkles className="w-full h-full animate-float" />
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-emerald-600 font-semibold !text-sm uppercase tracking-wide">
              Our Core Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Four Ways We Keep Melbourne Spotless
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <div className="h-full flex flex-col bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 overflow-hidden">
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-44 object-cover"
                    />
                    <div className="absolute -bottom-6 left-6 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-emerald-600" />
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col pt-10 pb-6 px-6">
                    <h3 className="font-display font-bold !text-lg text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem]">
                      {service.title}
                    </h3>
                    <p className="!text-[15px] text-gray-600 mb-4 line-clamp-2">{service.description}</p>

                    <ul className="space-y-2 mb-6 flex-1">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 !text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to={service.href}
                      className="mt-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold !text-sm px-5 py-2.5 rounded-full transition-colors duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Cleaning specialised services */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-emerald-600 font-semibold !text-sm uppercase tracking-wide">
              Custom Cleaning
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Specialised Services, Booked Your Way
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every Custom Cleaning service below can be booked on its own or added to any clean.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 items-stretch">
            {customServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="h-full"
              >
                <Link to={service.href} className="group block h-full">
                  <div className="h-full flex flex-col bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 hover:border-emerald-200 overflow-hidden transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-32 sm:h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1 flex items-center justify-between gap-2 px-4 py-4 min-h-[4.5rem]">
                      <span className="font-semibold !text-sm sm:!text-base text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                        {service.title}
                      </span>
                      <ArrowRight className="w-4 h-4 text-emerald-600 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services/custom-cleaning"
              className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-300"
            >
              View Custom Cleaning Overview
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Wipely */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Why Choose Our Cleaning Services?</h2>
            <div className="w-14 h-1 bg-emerald-500 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              At Wipely, we go beyond basic cleaning. We provide flexible, professional, and
              eco-friendly cleaning tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyWipely.map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="!text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-emerald-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Professional Cleaning?</h2>
          <p className="mb-6 text-lg text-emerald-100">
            Book your service now and enjoy a sparkling clean space. Fast, friendly, and reliable!
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <a
              href="tel:+61435137936"
              className="inline-flex items-center gap-2 bg-white text-emerald-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-emerald-50 transition duration-300"
            >
              Call Us: +61 435 137 936
            </a>
            <Link
              to="/book"
              className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-emerald-600 transition duration-300"
            >
              Book Online
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

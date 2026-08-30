import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  Clock,
  ArrowRight,
  Home as HomeIcon,
  Sparkles,
  Users,
  Heart,
  Sun,
  Calendar,
  Baby,
  Star,
  ShieldCheck,
} from 'lucide-react';
import SectionHeading from '../../components/home/SectionHeading';
import FAQAccordionItem from '../../components/home/FAQAccordionItem';
import regularHouseImg from '../../images/regularHouseImg.jpg';
import regularHouseSectionImg from '../../images/regularCLImg.jpg';
import bedRoomInmg from '../../images/bedroom.jpg';
import bathroomImg from '../../images/bathroomImg.jpg';
import livingroomImg from '../../images/livingroom.jpg';
import kitchenImg from '../../images/kitchenImg.jpg';
import laundryroomImg from '../../images/laundryRoomImg.jpg';
import kitchenBeforeImg from '../../images/kitchenBefore.jpg';
import kitchenAfterImg from '../../images/kitchenAfter.jpg';
import bathroomBeforeImg from '../../images/bathroomRegBefore.jpeg';
import bathroomAfterImg from '../../images/bathroomRegAfter.jpeg';

const includedServices = [
  {
    title: 'Bedroom',
    image: bedRoomInmg,
    items: [
      'Dust all surfaces & furniture',
      'Vacuum carpets & rugs',
      'Wipe mirrors & fixtures',
      'Tidy up and make the bed',
      'Empty trash bins',
    ],
  },
  {
    title: 'Bathroom',
    image: bathroomImg,
    items: [
      'Scrub and disinfect toilet, shower, and sink',
      'Clean mirrors, tiles, and splashbacks',
      'Wipe all surfaces, shelves, and counters',
      'Polish taps and chrome fixtures',
      'Mop floors and empty bins',
    ],
  },
  {
    title: 'Livingroom',
    image: livingroomImg,
    items: [
      'Dust all surfaces & furniture',
      'Vacuum carpets & rugs',
      'Wipe mirrors & fixtures',
      'Tidy up and make the bed',
      'Empty trash bins',
    ],
  },
  {
    title: 'Kitchen',
    image: kitchenImg,
    items: [
      'Wipe cabinet doors and handles',
      'Scrub sink and polish fixtures',
      'Clean stovetop and remove grease',
      'Empty and clean trash bin',
      'Sweep and mop the floor',
    ],
  },
  {
    title: 'Laundry',
    image: laundryroomImg,
    items: [
      'Wipe appliances',
      'Sink cleaned',
      'Mop floors',
      'Dust shelving',
      'Clean lint filters',
    ],
  },
];

const optionalExtras = [
  { name: 'Interior & Exterior Window', icon: '🪟' },
  { name: 'Fridge Cleanout', icon: '🧊' },
  { name: 'BBQ & Oven Deep Cleaning', icon: '🔥' },
  { name: 'Gas Stove Top & Rangehood', icon: '🧽' },
  { name: 'Organizing', icon: '🗄️' },
  { name: 'Deep Clean Add-on', icon: '✨' },
];

const whenToBook = [
  {
    icon: Sun,
    title: 'Weekly Service',
    description: 'Perfect for busy households that need constant maintenance',
  },
  {
    icon: Users,
    title: 'Bi-Weekly Service',
    description: 'The most popular choice for balanced home maintenance',
  },
  {
    icon: HomeIcon,
    title: 'Monthly Service',
    description: 'Great for smaller spaces or those who clean between visits',
  },
  {
    icon: Baby,
    title: 'New Parents',
    description: 'Keep your home clean while focusing on your new arrival',
  },
];

const whyRegular = [
  {
    icon: Calendar,
    title: 'Consistent Schedule',
    description: "Set it and forget it - we'll come on the same schedule every time.",
  },
  {
    icon: Clock,
    title: 'Time Saving',
    description: 'Free up your weekends with reliable professional cleaning.',
  },
  {
    icon: Sparkles,
    title: 'Maintained Cleanliness',
    description: 'Prevent buildup of dirt and grime with regular attention.',
  },
  {
    icon: Heart,
    title: 'Healthier Home',
    description: 'Reduce allergens and bacteria with frequent cleaning.',
  },
];

const stats = [
  { number: '2,500+', label: 'Homes Cleaned', icon: '🏠' },
  { number: '4.9', label: 'Star Rating', icon: '⭐' },
  { number: '98%', label: 'Customer Retention', icon: '💚' },
  { number: '24hr', label: 'Response Time', icon: '⚡' },
];

const transformationGallery = [
  {
    before: kitchenBeforeImg,
    after: kitchenAfterImg,
    title: 'Kitchen Maintenance',
  },
  {
    before: bathroomBeforeImg,
    after: bathroomAfterImg,
    title: 'Bathroom Maintenance',
  },
  {
    before:
      'https://images.pexels.com/photos/4239037/pexels-photo-4239037.jpeg?auto=compress&cs=tinysrgb&w=600',
    after:
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Living Room Maintenance',
  },
];

const faqs = [
  {
    question: 'How often should I schedule regular cleaning?',
    answer:
      'Most clients choose bi-weekly service, but we can customize a schedule that works best for your home and lifestyle.',
  },
  {
    question: 'Do I need to be home during the cleaning?',
    answer:
      "Not required. Many clients provide us with access instructions so we can clean while they're at work or away.",
  },
  {
    question: 'What if I\'m not happy with a clean?',
    answer:
      "Let us know within 24 hours and we'll come back and fix it, free of charge.",
  },
  {
    question: 'What are your hours and service area?',
    answer:
      "We're based in Melbourne, VIC, and clean Monday to Saturday, 8am to 6pm. Call us on +61 435 137 936 or email info@wipely.au to check availability in your area.",
  },
];

const RegularCleaning: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-emerald-50 to-sage-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 !text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <ShieldCheck className="w-4 h-4" />
              Trusted Melbourne Cleaners
            </span>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6">
              Regular House <span className="text-emerald-600">Cleaning</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Weekly or fortnightly, Wipely keeps your space fresh, clean, and stress-free.
            </p>
            <Link to="/book?service=regular-house-cleaning">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg text-base"
              >
                Book Now
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-4xl mx-auto mt-14"
          >
            <img
              src={regularHouseImg}
              alt="Freshly cleaned Melbourne living room after a Wipely regular clean"
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-6 bg-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-3 whitespace-nowrap">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="!text-sm font-semibold text-gray-900">4.9 rated by Melbourne homes</span>
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
          <motion.div
            animate={{ y: [0, -25, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute bottom-32 left-1/4 w-5 h-5 text-emerald-300 opacity-60"
          >
            <Sparkles className="w-full h-full animate-float" />
          </motion.div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            eyebrow="Service Overview"
            title="What is Regular Cleaning?"
            description="Consistent, professional cleaning that keeps your home spotless without the stress"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <img
                src={regularHouseSectionImg}
                alt="Professional Wipely cleaner performing a regular house clean"
                className="rounded-2xl shadow-xl w-full h-80 object-cover"
              />
              <div className="text-center mt-4">
                <Link
                  to="/reviews"
                  className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-300 !text-sm"
                >
                  Read customer reviews
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <HomeIcon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-gray-900">The Wipely Difference</h3>
              </div>

              <p className="text-gray-700 leading-relaxed mb-8">
                Unlike one-time deep cleans, our regular service <strong>maintains</strong> your home on a
                schedule that works for you, keeping it fresh and comfortable week after week without the
                hassle of doing it yourself.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Clock, text: 'Time Saving' },
                  { icon: Heart, text: 'Stress-Free' },
                  { icon: Sparkles, text: 'Consistent Quality' },
                  { icon: Users, text: 'Trusted Team' },
                ].map((benefit) => (
                  <div key={benefit.text} className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="!text-sm font-medium text-gray-700">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Statistics Row */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-emerald-600 mb-1">{stat.number}</div>
                <div className="!text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-14 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading eyebrow="What's Included" title="Included in Every Visit" />

          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 items-stretch">
            {includedServices.map((service) => (
              <div
                key={service.title}
                className="h-full flex flex-col relative bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} cleaning`}
                    className="w-full h-40 object-cover transform transition-transform duration-500 ease-in-out hover:scale-110"
                  />
                  <div className="absolute top-2 right-2 bg-emerald-500 text-white !text-xs font-semibold uppercase px-3 py-1 rounded-md shadow-md z-10">
                    Every Visit
                  </div>
                </div>

                <div className="flex-1 flex flex-col p-5 bg-gradient-to-br from-gray-50 to-white">
                  <h3 className="font-semibold mb-4 text-emerald-600">{service.title}</h3>
                  <ul className="space-y-2 text-gray-700">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 !text-sm">
                        <CheckCircle className="text-emerald-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optional Extras */}
      <section className="py-14 sm:py-16 bg-gradient-to-br from-emerald-50 via-white to-sage-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            eyebrow="Add-Ons"
            title="Optional Extras Available"
            description="Customize your regular cleaning at checkout"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {optionalExtras.map((extra, index) => (
              <motion.div
                key={extra.name}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="h-full bg-white rounded-xl p-6 shadow-sm hover:shadow-md border border-gray-100 hover:border-emerald-200 transition-all duration-300 flex items-center"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl flex-shrink-0">{extra.icon}</span>
                  <h3 className="font-semibold text-gray-900">{extra.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Transformation Gallery */}
      <section className="py-14 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            eyebrow="Results"
            title="See the Transformation"
            description="Real before-and-after results from Wipely regular cleans across Melbourne homes"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {transformationGallery.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full flex flex-col bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
              >
                <div className="grid grid-cols-2">
                  <div className="relative overflow-hidden group">
                    <img
                      src={item.before}
                      alt={`${item.title} before Wipely cleaning`}
                      className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-red-600 text-white !text-xs font-semibold text-center py-1">
                      Before
                    </div>
                  </div>
                  <div className="relative overflow-hidden group">
                    <img
                      src={item.after}
                      alt={`${item.title} after Wipely cleaning`}
                      className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-emerald-600 text-white !text-xs font-semibold text-center py-1">
                      After
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Regular Cleaning */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            eyebrow="Why Choose Wipely"
            title="Why Choose Regular Cleaning?"
            description="The consistent, professional cleaning that transforms your home and lifestyle"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {whyRegular.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full"
              >
                <div className="h-full bg-white rounded-2xl p-6 border border-gray-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-lg">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="!text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Scheduling Options */}
      <section className="py-14 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            eyebrow="Scheduling"
            title="Ideal Scheduling Options"
            description="Choose the frequency that works for your lifestyle"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {whenToBook.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="h-full"
              >
                <div className="h-full flex flex-col bg-white rounded-xl p-6 shadow-sm hover:shadow-md border border-gray-100 hover:border-emerald-200 transition-all duration-300">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mb-3">
                    <item.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold !text-base text-gray-900 mb-1">{item.title}</h3>
                  <p className="!text-sm text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-16 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" align="left" className="mb-10" />

          {faqs.map((faq, index) => (
            <FAQAccordionItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={activeIndex === index}
              onToggle={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-14 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold !text-3xl md:!text-4xl mb-4">
              Book Your Cleaning Services in Melbourne Today!
            </h2>
            <p className="!text-lg mb-8 max-w-2xl mx-auto text-emerald-50">
              Trusted by hundreds of happy customers — fast, eco-friendly cleaning at your fingertips.
            </p>
            <Link to="/book?service=regular-house-cleaning">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-emerald-600 font-semibold py-3.5 px-8 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300"
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

export default RegularCleaning;

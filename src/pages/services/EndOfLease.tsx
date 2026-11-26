import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  Shield,
  Clock,
  ArrowRight,
  Sparkles,
  Award,
  Calendar,
  Leaf,
} from 'lucide-react';
import SectionHeading from '../../components/home/SectionHeading';
import FAQAccordionItem from '../../components/home/FAQAccordionItem';
import endOfLeaseImg from '../../images/endOfLeaseImg.jpg';
import eolSectionImg from '../../images/eolSectionImg.jpg';
import RecentJobs from '../../components/RecentJobs';
import { JOB_PHOTOS } from '../../data/jobPhotos';

const includedServices = [
  { task: 'Full Kitchen Degreasing', description: 'Oven, stovetop, splashbacks, and all surfaces' },
  { task: 'Complete Bathroom Sanitation', description: 'Tiles, glass, fixtures, and deep scrubbing' },
  { task: 'Floor Care', description: 'Vacuuming, mopping, and detailed cleaning' },
  {
    task: 'Bedroom Dusting & Surfaces',
    description: 'All bedroom furniture, shelves, and surfaces dusted and wiped for a fresh look',
  },
  { task: 'Window Cleaning', description: 'Internal window cleaning and polishing' },
  { task: 'Detail Work', description: 'Cobwebs, dust removal, light fittings, and fans' },
  {
    task: 'Laundry Sink & Taps',
    description: 'Scrub and polish laundry sink, taps, and fixtures for a spotless finish.',
  },
];

const addOns = [
  { name: 'Carpet Steam Cleaning', icon: '🧽' },
  { name: 'Exterior Window Cleaning', icon: '🌟' },
  { name: 'Inside Fridge Cleaning', icon: '🧊' },
  { name: 'Inside Washing Machine Cleaning', icon: '🌀' },
  { name: 'Upholstery Cleaning', icon: '🛋️' },
  { name: 'Blind Cleaning', icon: '🪟' },
];

const whyChooseWipely = [
  {
    icon: Award,
    title: 'Real Estate Expertise',
    description:
      'We know exactly what property managers look for and ensure every detail meets their standards.',
  },
  {
    icon: Calendar,
    title: 'Flexible Scheduling',
    description: 'We work around your move-out timeline, including same-day and weekend availability.',
  },
  {
    icon: Shield,
    title: 'Fully Insured Team',
    description: 'Every cleaner is police-checked, insured, and trained in bond cleaning standards.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Products',
    description: 'Non-toxic, eco-friendly supplies that are safe for your family and the environment.',
  },
];

const faqs = [
  {
    question: 'How long does an end of lease clean take?',
    answer:
      'It depends on the size and condition of the property. Get in touch with your address and we can give you an accurate estimate before booking.',
  },
  {
    question: 'Do I need to be home during the clean?',
    answer:
      "Not required. Many clients arrange access with their agent or landlord so our team can clean while they're not there.",
  },
  {
    question: "What if I'm not happy with the clean?",
    answer:
      "That's covered by our re-clean promise: tell us within 24 hours of the clean and we'll come back and re-clean anything we missed, free of charge.",
  },
  {
    question: 'How do I book an end of lease clean?',
    answer:
      'Book directly through our website — choose End of Lease Cleaning, enter your property details, and confirm your booking online, or call us on +61 435 137 936.',
  },
  {
    question: 'What areas do you service?',
    answer: "We're based in Melbourne, VIC, and provide end of lease cleaning across the Melbourne area, 7 days a week, 6am to 10pm.",
  },
];

const EndOfLease: React.FC = () => {
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
              <Shield className="w-4 h-4" />
              Free 24-Hour Re-clean
            </span>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6">
              End of Lease <span className="text-emerald-600">Cleaning</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Move out stress-free — we clean so you don't lose your bond.
            </p>
            <Link to="/book?service=end-of-lease-cleaning">
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
              src={endOfLeaseImg}
              alt="Spotless rental kitchen after a Wipely end of lease clean"
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-6 bg-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-3 whitespace-nowrap">
              <Shield className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <span className="!text-sm font-semibold text-gray-900">Real estate approved checklist</span>
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
            title="What is End of Lease Cleaning?"
            description="A comprehensive deep clean designed to restore your rental to the condition expected by real estate agents and property managers"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={eolSectionImg}
                alt="Professional bond cleaning checklist"
                className="rounded-2xl shadow-xl w-full h-80 object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our team follows the detailed checklists used by Melbourne property managers, so every
                surface meets the standard required to get your full bond back.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: Shield, title: 'Free Re-clean', description: 'Tell us within 24 hours' },
                  { icon: CheckCircle, title: 'Deep Cleaning', description: 'Every surface thoroughly cleaned' },
                  { icon: Clock, title: 'Flexible Timing', description: '7 days, 6am to 10pm' },
                  { icon: Award, title: 'Experienced Team', description: 'Specialized bond cleaning experts' },
                ].map((benefit) => (
                  <div key={benefit.title} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                      <p className="!text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-14 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            eyebrow="What's Included"
            title="What's Included in Every Bond Clean"
            description="Our comprehensive checklist ensures every detail meets real estate standards"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {includedServices.map((item, index) => (
              <motion.div
                key={item.task}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="h-full"
              >
                <div className="h-full flex flex-col bg-white rounded-xl p-6 shadow-md hover:shadow-lg border border-gray-100 hover:border-emerald-200 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[2.75rem]">
                        {item.task}
                      </h3>
                      <p className="!text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real job photos (replaces stock before/after images) */}
      <RecentJobs
        eyebrow="Results"
        title="Bond Cleans We've Finished"
        description="Real photos from recent Wipely end of lease cleans in Melbourne, ready for the final inspection."
        photos={[
          JOB_PHOTOS.kitchen,
          JOB_PHOTOS.kitchenOvens,
          JOB_PHOTOS.shower,
          JOB_PHOTOS.ensuiteVanity,
          JOB_PHOTOS.bedroom,
          JOB_PHOTOS.wardrobe,
        ]}
      />

      {/* Add-ons */}
      <section className="py-14 sm:py-16 bg-gradient-to-r from-emerald-50 to-sage-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            eyebrow="Add-Ons"
            title="Optional Add-On Services"
            description="Enhance your bond clean with these additional services — add them during checkout"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="h-full bg-white rounded-xl p-6 shadow-sm hover:shadow-md border border-gray-100 hover:border-emerald-200 transition-all duration-300 flex items-center"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl flex-shrink-0">{addon.icon}</span>
                  <h3 className="font-semibold text-gray-900">{addon.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Wipely */}
      <section className="py-14 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            eyebrow="Why Choose Wipely"
            title="Why Choose Wipely for Your Exit Clean?"
            description="We understand the stress of moving out — let us handle the cleaning while you focus on your move"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {whyChooseWipely.map((item, index) => (
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

      {/* FAQ */}
      <section className="py-14 sm:py-16 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4">
          <FAQSection />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-14 sm:py-16 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold !text-3xl md:!text-4xl mb-4">
              Let us handle the cleaning while you focus on the move.
            </h2>
            <p className="!text-lg md:!text-xl mb-8 text-emerald-50">
              Get your bond back with our professional end of lease cleaning service
            </p>
            <Link to="/book?service=end-of-lease-cleaning">
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

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  return (
    <>
      <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" align="left" className="mb-10" />
      {faqs.map((faq, index) => (
        <FAQAccordionItem
          key={faq.question}
          question={faq.question}
          answer={faq.answer}
          isOpen={activeIndex === index}
          onToggle={() => setActiveIndex(activeIndex === index ? null : index)}
        />
      ))}
    </>
  );
};

export default EndOfLease;

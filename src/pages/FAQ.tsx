import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronUp, 
  HelpCircle,
  MessageSquare,
  ArrowRight,
  Search,
  CheckCircle,
  Clock,
  Shield,
  Star
} from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const faqData: FAQItem[] = [
    {
      id: '1',
      question: 'What areas do you service?',
      answer: 'We proudly serve Melbourne and surrounding suburbs. Just enter your postal code on the booking page to check availability! Our service area includes the CBD and extends to most metropolitan Melbourne suburbs.',
      category: 'Service Area'
    },
    {
      id: '2',
      question: 'Do I need to provide cleaning products or equipment?',
      answer: 'Not at all! We bring our own professional-grade supplies and equipment. However, if you prefer we use specific products (perhaps for allergies or personal preference), just let us know during booking and we\'ll be happy to accommodate.',
      category: 'Service Details'
    },
    {
      id: '3',
      question: 'How can I book a cleaning service?',
      answer: 'Just head to our Book Page, select your service type, fill in a few details about your home and preferences, and submit your request ,  no payment needed upfront. We\'ll contact you within 24 hours to confirm details and schedule your clean.',
      category: 'Booking'
    },
    {
      id: '4',
      question: 'What if I\'m not happy with the service?',
      answer: 'Your satisfaction is our top priority. If something\'s not right, contact us within 24 hours and we\'ll make it right ,  no fuss. We offer a satisfaction guarantee and will return to re-clean any areas that don\'t meet your expectations.',
      category: 'Quality Guarantee'
    },
    {
      id: '5',
      question: 'Are your cleaners insured and background-checked?',
      answer: 'Yes, every cleaner is fully insured and has passed a detailed background check before joining the Wipely team. We also provide ongoing training to ensure consistent, professional service.',
      category: 'Safety & Trust'
    },
    {
      id: '6',
      question: 'Can I reschedule or cancel a booking?',
      answer: 'Absolutely. Just contact us at least 24 hours in advance and we\'ll be happy to help reschedule or cancel your booking. We understand that life happens and we\'re flexible with changes.',
      category: 'Booking'
    },
    {
      id: '7',
      question: 'Do you offer one-off cleaning services?',
      answer: 'Yes, our spring/deep cleans and move-in/move-out cleans are perfect for a one-time refresh. You can also book any of our services as a one-off without committing to regular cleaning.',
      category: 'Service Details'
    },
    {
      id: '8',
      question: 'Can I request extra services like oven cleaning or window washing?',
      answer: 'You sure can! We offer a wide list of optional extras including oven cleaning, carpet steam cleaning, upholstery care, and more. Just select the ones you need on the booking form and we\'ll take care of the rest.',
      category: 'Service Details'
    },
    {
      id: '9',
      question: 'How much do your services cost?',
      answer: 'Our pricing depends on the size of your home, type of service, and any extras you choose. Regular house cleaning starts from around $120, while specialized services like end-of-lease cleaning start from $280. Use our booking form for an instant estimate.',
      category: 'Pricing'
    },
    {
      id: '10',
      question: 'Do I need to be home during the cleaning?',
      answer: 'Not necessarily! Many of our clients provide access and go about their day. We\'re fully insured and bonded for your peace of mind. However, you\'re always welcome to be home if you prefer.',
      category: 'Service Details'
    },
    {
      id: '11',
      question: 'How long does a typical cleaning take?',
      answer: 'This depends on the size of your home and type of service. Regular house cleaning typically takes 2-4 hours, while deep cleans or end-of-lease cleaning can take 4-8 hours. We\'ll provide an estimated timeframe when you book.',
      category: 'Service Details'
    },
    {
      id: '12',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, bank transfers, and cash. Payment is due after the service is completed to your satisfaction. We\'ll send you an invoice via email for your records.',
      category: 'Payment'
    },
    {
      id: '13',
      question: 'Do you clean on weekends and public holidays?',
      answer: 'Yes, we offer cleaning services 7 days a week, including weekends. Public holiday availability may vary, and there may be a small surcharge for holiday bookings. Contact us to check availability for your preferred date.',
      category: 'Scheduling'
    },
    {
      id: '14',
      question: 'What happens if something gets damaged during cleaning?',
      answer: 'While rare, accidents can happen. We\'re fully insured and will take full responsibility for any damage caused by our team. We\'ll work with you and our insurance provider to resolve any issues quickly and fairly.',
      category: 'Safety & Trust'
    },
    {
      id: '15',
      question: 'Can you work around my pets?',
      answer: 'Absolutely! We love pets and are experienced in working around them. Just let us know about your furry friends when booking so we can take any necessary precautions and ensure their comfort during the clean.',
      category: 'Service Details'
    }
  ];

  const categories = ['All', ...Array.from(new Set(faqData.map(item => item.category)))];

  const filteredFAQs = faqData.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 to-sage-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-10 h-10 text-emerald-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              We've Got
              <span className="block text-emerald-600">Answers!</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              If you've got questions, we've got you covered. Here are the most common things people ask us.
            </p>
          </motion.div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-6 h-6 text-emerald-300 opacity-40">
            <HelpCircle className="w-full h-full" />
          </div>
          <div className="absolute top-32 right-20 w-4 h-4 text-sage-300 opacity-40">
            <MessageSquare className="w-full h-full" />
          </div>
          <div className="absolute bottom-32 left-1/4 w-5 h-5 text-emerald-400 opacity-40">
            <CheckCircle className="w-full h-full" />
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            
            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          
          {searchTerm && (
            <p className="mt-4 text-gray-600">
              Found {filteredFAQs.length} result{filteredFAQs.length !== 1 ? 's' : ''} for "{searchTerm}"
            </p>
          )}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-4">
            {filteredFAQs.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-inset rounded-lg"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {item.question}
                    </h3>
                    <span className="inline-block mt-2 text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded">
                      {item.category}
                    </span>
                  </div>
                  <div className="flex-shrink-0">
                    {openItems.includes(item.id) ? (
                      <ChevronUp className="w-5 h-5 text-emerald-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openItems.includes(item.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4">
                        <p className="text-gray-600 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No FAQs found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search terms or category filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Clock, stat: "24hr", label: "Response Time" },
              { icon: Star, stat: "4.9", label: "Star Rating" },
              { icon: Shield, stat: "100%", label: "Insured" },
              { icon: CheckCircle, stat: "2,500+", label: "Happy Customers" }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{item.stat}</div>
                <div className="text-gray-600">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-emerald-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-emerald-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Still have a question?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We're here to help. Just reach out and we'll get back to you quickly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary flex items-center"
                  >
                    Contact Us <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.button>
                </Link>
                <Link to="/book">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary"
                  >
                    Book a Service
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
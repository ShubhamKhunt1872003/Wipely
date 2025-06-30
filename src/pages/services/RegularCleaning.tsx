import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  RefreshCw, 
  Clock, 
  ArrowRight,
  Home as HomeIcon,
  Sparkles,
  Users,
  Heart,
  Sun,
  Calendar,
  Gift,
  Baby
} from 'lucide-react';

const RegularCleaning: React.FC = () => {
  const includedServices = [
    { task: "Kitchen Cleaning", description: "Countertops, sinks, stovetops, and appliance exteriors" },
    { task: "Bathroom Refresh", description: "Toilets, sinks, showers, mirrors, and fixtures" },
    { task: "Dusting", description: "All surfaces, furniture, and accessible ledges" },
    { task: "Floor Care", description: "Vacuuming carpets and mopping hard floors" },
    { task: "Trash Removal", description: "Emptying all waste bins and replacing liners" },
    { task: "Tidying Up", description: "Straightening rooms and making spaces neat" }
  ];

  const optionalExtras = [
    { name: "Interior Windows", price: "$30", icon: "🪟" },
    { name: "Fridge Cleanout", price: "$40", icon: "🧊" },
    { name: "Inside Oven", price: "$50", icon: "🔥" },
    { name: "Laundry Service", price: "$60", icon: "👕" },
    { name: "Organizing", price: "$45", icon: "🗄️" },
    { name: "Deep Clean Add-on", price: "$75", icon: "✨" }
  ];

  const whenToBook = [
    {
      icon: Sun,
      title: "Weekly Service",
      description: "Perfect for busy households that need constant maintenance"
    },
    {
      icon: Users,
      title: "Bi-Weekly Service",
      description: "The most popular choice for balanced home maintenance"
    },
    {
      icon: HomeIcon,
      title: "Monthly Service",
      description: "Great for smaller spaces or those who clean between visits"
    },
    {
      icon: RefreshCw,
      title: "Move-In/Move-Out",
      description: "Regular cleaning during transitions between homes"
    },
    {
      icon: Baby,
      title: "New Parents",
      description: "Keep your home clean while focusing on your new arrival"
    },
    {
      icon: Gift,
      title: "Hosting Regularly",
      description: "Always be ready for guests with consistent cleaning"
    }
  ];

  const whyRegular = [
    {
      icon: Calendar,
      title: "Consistent Schedule",
      description: "Set it and forget it - we'll come on the same schedule every time."
    },
    {
      icon: Clock,
      title: "Time Saving",
      description: "Free up your weekends with reliable professional cleaning."
    },
    {
      icon: Sparkles,
      title: "Maintained Cleanliness",
      description: "Prevent buildup of dirt and grime with regular attention."
    },
    {
      icon: Heart,
      title: "Healthier Home",
      description: "Reduce allergens and bacteria with frequent cleaning."
    }
  ];

  const beforeAfterImages = [
    {
      before: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=400",
      after: "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Kitchen Maintenance"
    },
    {
      before: "https://images.pexels.com/photos/6436308/pexels-photo-6436308.jpeg?auto=compress&cs=tinysrgb&w=400", 
      after: "https://images.pexels.com/photos/6436309/pexels-photo-6436309.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Bathroom Maintenance"
    },
    {
      before: "https://images.pexels.com/photos/4239037/pexels-photo-4239037.jpeg?auto=compress&cs=tinysrgb&w=400",
      after: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Living Room Maintenance"
    }
  ];

  const faqs = [
    {
      question: "How often should I schedule regular cleaning?",
      answer: "Most clients choose bi-weekly service, but we can customize a schedule that works best for your home and lifestyle."
    },
    {
      question: "Do I need to be home during the cleaning?",
      answer: "Not required. Many clients provide us with access instructions so we can clean while they're at work or away."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-yellow-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Regular Cleaning Service
                <span className="block text-emerald-600">in Melbourne</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Maintain a consistently clean home with our reliable recurring service.
              </p>
              <Link to="/book">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-lg px-8 py-4"
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
                src="https://images.pexels.com/photos/6197119/pexels-photo-6197119.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Bright, clean living room with sunshine"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <RefreshCw className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Recurring Service</div>
                    <div className="text-gray-600">From $120/visit</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is Regular Cleaning */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What is Regular Cleaning?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our regular cleaning service provides consistent, thorough cleaning on a schedule that works for you. 
                Perfect for maintaining a clean home without the hassle of doing it yourself.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Unlike one-time deep cleans, regular cleaning focuses on maintaining cleanliness with each visit, 
                keeping your home fresh and comfortable week after week.
              </p>
              
              <div className="bg-emerald-50 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Sparkles className="w-6 h-6 text-emerald-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Customer Testimonial</h3>
                </div>
                <blockquote className="text-gray-700 italic text-lg">
                  "Having Wipely come every two weeks has been life-changing. Our home is always guest-ready, and we get to spend our free time actually enjoying it!"
                </blockquote>
                <cite className="text-emerald-600 font-medium mt-2 block">— Sarah M., Carlton</cite>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional cleaner doing regular cleaning"
                className="rounded-2xl shadow-xl"
              />
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
              Included in Every Visit
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cleaning tasks performed consistently
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

      {/* Visual Transformation Gallery */}
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
              Maintenance Transformations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the difference regular professional cleaning makes
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

      {/* Optional Extras */}
      <section className="py-20 bg-gradient-to-r from-yellow-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Optional Extras Available
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Customize your regular cleaning at checkout
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {optionalExtras.map((extra, index) => (
              <motion.div
                key={extra.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 hover:bg-emerald-50 transition-colors duration-300 card-hover"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{extra.icon}</span>
                    <h3 className="font-semibold text-gray-900">{extra.name}</h3>
                  </div>
                  <span className="text-emerald-600 font-bold">{extra.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Book Regular */}
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
              Why Choose Regular Cleaning?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The benefits of consistent professional cleaning
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyRegular.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center card-hover"
              >
                <div className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
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

      {/* When to Book */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ideal Scheduling Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the frequency that works for your lifestyle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whenToBook.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 card-hover"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/faq">
              <button className="btn-secondary">
                View All FAQs
              </button>
            </Link>
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
              Ready for a consistently clean home?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-emerald-100">
              Schedule your regular cleaning service today
            </p>
            <Link to="/book">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg"
              >
                Get Started
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
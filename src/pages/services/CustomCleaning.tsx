import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Settings, 
  CheckCircle, 
  Clock, 
  Shield, 
  Star,
  Sparkles,
  Award,
  Users,
  ThumbsUp
} from 'lucide-react';
import customCleaningImg from "../../images/customCleaningImg.jpg";
const CustomCleaning: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const customServices = [
    {
      title: "Deep Kitchen Clean",
      description: "Comprehensive cleaning of appliances, cabinets, and surfaces",
      icon: "🍳"
    },
    {
      title: "Bathroom Sanitization",
      description: "Thorough disinfection and deep cleaning of all bathroom areas",
      icon: "🚿"
    },
    {
      title: "Window & Glass Cleaning",
      description: "Professional cleaning of windows, mirrors, and glass surfaces",
      icon: "🪟"
    },
    {
      title: "Carpet & Upholstery",
      description: "Deep cleaning and stain removal for carpets and furniture",
      icon: "🛋️"
    },
    {
      title: "Garage & Storage Areas",
      description: "Organization and cleaning of storage spaces and garages",
      icon: "🏠"
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Tell Us Your Needs",
      description: "Describe your specific cleaning requirements and preferences"
    },
    {
      step: "2",
      title: "Get Custom Quote",
      description: "Receive a tailored quote based on your unique needs"
    },
    {
      step: "3",
      title: "Schedule Service",
      description: "Book your preferred date and time for the cleaning"
    },
    {
      step: "4",
      title: "Expert Cleaning",
      description: "Our specialists complete your custom cleaning service"
    }
  ];

  const whyChooseWipely = [
    {
      title: "Tailored Solutions",
      description: "Every cleaning plan is customized to your specific needs and preferences, ensuring you get exactly what you're looking for.",
      icon: Settings
    },
    {
      title: "Professional Expertise",
      description: "Our trained specialists have experience with all types of cleaning challenges and use the right techniques for each task.",
      icon: Award
    },
    {
      title: "Quality Guarantee",
      description: "We stand behind our work with a satisfaction guarantee. If you're not happy, we'll make it right at no extra cost.",
      icon: Shield
    },
    {
      title: "Flexible Scheduling",
      description: "Book your custom cleaning service at a time that works for you, with options for one-time or recurring services.",
      icon: Clock
    }
  ];

  const testimonials = [
    {
      author: "Sarah Johnson",
      location: "Melbourne CBD",
      text: "Wipely's custom cleaning service was exactly what I needed. They handled my post-renovation cleanup perfectly and paid attention to every detail."
    },
    {
      author: "Michael Chen",
      location: "South Yarra",
      text: "I needed specialized carpet cleaning and window washing. The team was professional and the results exceeded my expectations."
    }
  ];

  const faqs = [
    {
      question: "What types of custom cleaning services do you offer?",
      answer: "We offer a wide range of specialized cleaning services including deep kitchen cleaning, bathroom sanitization, carpet cleaning, window washing, post-construction cleanup, and more. Just tell us what you need!"
    },
    {
      question: "How do you determine pricing for custom cleaning?",
      answer: "Our pricing is based on the specific services you need, the size of the area, and the complexity of the work. We provide transparent quotes with no hidden fees before starting any work."
    },
    {
      question: "Do I need to be home during cleaning?",
      answer: "It depends on the service. For some services like carpet cleaning, we recommend being present. For others, you can provide access and go about your day."
    },
    {
      question: "How long does custom cleaning take?",
      answer: "The duration varies depending on the services selected. Carpet cleaning typically takes 2-3 hours, while oven cleaning takes 1-2 hours. We'll provide an estimated timeframe when you book."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, bank transfers, and cash. Payment is due after the service is completed to your satisfaction."
    }
  ];

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
              Custom Cleaning
              <span className="block text-emerald-600">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Specialized cleaning solutions tailored to your unique needs and requirements
            </p>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-6 h-6 text-emerald-400 opacity-60"
          >
            <Sparkles className="w-full h-full animate-float" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-32 right-20 w-4 h-4 text-blue-400 opacity-60"
          >
            <Sparkles className="w-full h-full animate-float" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -25, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-32 left-1/4 w-5 h-5 text-emerald-300 opacity-60"
          >
            <Sparkles className="w-full h-full animate-float" />
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
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
              Our Custom Cleaning Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From specialized deep cleaning to unique maintenance needs, we've got you covered
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to get your specialized cleaning service booked and completed
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Wipely */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
              <Settings className="w-8 h-8 text-emerald-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Book Wipely for Custom Cleaning?
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional expertise, quality results, and transparent pricing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {whyChooseWipely.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-lg relative overflow-hidden h-full">
                  {/* Decorative background element */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-50 rounded-full -translate-y-10 translate-x-10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-200 group-hover:scale-110 transition-all duration-300">
                      <item.icon className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Additional Benefits Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 border border-gray-100"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">More Reasons to Choose Custom Cleaning</h3>
              <p className="text-gray-600">Additional benefits that make custom cleaning the smart choice</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: "💰",
                  title: "Flexible Pricing",
                  description: "Pay only for the services you need"
                },
                {
                  icon: "🏠",
                  title: "Specialized Equipment",
                  description: "Professional tools for every cleaning challenge"
                },
                {
                  icon: "😌",
                  title: "Expert Results",
                  description: "Trained specialists for each service type"
                }
              ].map((benefit, index) => (
                <div key={benefit.title} className="text-center">
                  <div className="text-3xl mb-3">{benefit.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from satisfied customers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-md"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic text-lg">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-600">{testimonial.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="bg-emerald-50 py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-[5px]">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-emerald-500 rounded mt-[5px] mb-6"></div>

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 bg-white rounded-md p-4 mb-4 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center text-lg font-medium text-gray-800"
              >
                {faq.question}
                <span className="ml-4 text-emerald-500 text-2xl">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <p className="mt-3 text-gray-600 text-base leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-emerald-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Book Specialized Cleaning That Works for You
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Professional results, flexible scheduling, transparent pricing ,  get the custom cleaning your space deserves.
          </p>
          <a
            href="/book"
            className="inline-block bg-white text-emerald-600 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-100 transition duration-300"
          >
            Book Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default CustomCleaning;
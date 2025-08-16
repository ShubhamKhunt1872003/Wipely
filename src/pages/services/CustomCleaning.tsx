import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Settings, 
  ArrowRight,
  Flame,
  Layers,
  Bed,
  Shirt,
  Microwave,
  Square,
  Star,
  Users,
  Clock,
  Award
} from 'lucide-react';

const CustomCleaning: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const customServices = [
    {
      icon: Layers,
      name: "Carpet Steam Cleaning",
      description: "Remove deep dirt, stains, and allergens with professional steam cleaning equipment",
      features: ["Deep stain removal", "Allergen elimination", "Fast drying", "Eco-friendly products"]
    },
    {
      icon: Settings,
      name: "Upholstery Cleaning", 
      description: "Couches, sofas, chairs — restored and refreshed to like-new condition",
      features: ["Fabric care", "Stain treatment", "Odor removal", "Color protection"]
    },
    {
      icon: Bed,
      name: "Mattress Cleaning",
      description: "Deep steam sanitization and odor removal for healthier sleep",
      features: ["Dust mite removal", "Stain elimination", "Sanitization", "Odor control"]
    },
    {
      icon: Flame,
      name: "Oven Cleaning",
      description: "Deep clean your oven with non-toxic products to remove grease, grime, and restore its shine.",

      features: ["Non-toxic products", "Full disassembly", "Grease removal", "Shine restoration"]
    },
    {
      icon: Flame,
      name: "BBQ Cleaning",
      description: "Restore your grill to safe, usable condition for the next cookout",
      features: ["Complete disassembly", "Grease trap cleaning", "Grill restoration", "Safety check"]
    },
    {
      icon: Square,
      name: "Staircase Cleaning",
      description: "Hard-to-reach areas scrubbed top to bottom with attention to detail",
      features: ["Balustrade cleaning", "Step deep clean", "Corner attention", "Safety focus"]
    },
    {
      icon: Users,
      name: "Commercial Spaces",
      description: "Offices, shops, or salons — spotless presentation for your business",
      features: ["Flexible scheduling", "Professional standards", "Discreet service", "Regular maintenance"]
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Choose Your Cleaning Type(s)",
      description: "Select from our range of specialized cleaning services"
    },
    {
      step: "2", 
      title: "Select Available Date & Time",
      description: "Pick a convenient time slot that works for your schedule"
    },
    {
      step: "3",
      title: "Let Our Experts Do the Job",
      description: "Sit back while our trained professionals handle everything"
    },
    {
      step: "4",
      title: "Enjoy a Fresh, Clean Space",
      description: "Experience the transformation and enjoy your refreshed space"
    }
  ];

  const whyChooseWipely = [
    {
      icon: Award,
      title: "Specialized Training",
      description: "Our team is trained in specialized tools and techniques for each service type."
    },
    {
      icon: Layers,
      title: "Eco-Friendly Products",
      description: "We use environmentally safe, non-toxic products for your family's health."
    },
    {
      icon: Clock,
      title: "Flat-Rate Pricing",
      description: "Transparent, affordable pricing with no hidden costs or surprises."
    },
    {
      icon: CheckCircle,
      title: "No Commitments",
      description: "Flexible one-time service with no long-term contracts required."
    }
  ];

  const beforeAfterImages = [
    {
      before: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=400",
      after: "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Carpet Cleaning"
    },
    {
      before: "https://images.pexels.com/photos/6436308/pexels-photo-6436308.jpeg?auto=compress&cs=tinysrgb&w=400",
      after: "https://images.pexels.com/photos/6436309/pexels-photo-6436309.jpeg?auto=compress&cs=tinysrgb&w=400", 
      title: "Oven Restoration"
    },
    {
      before: "https://images.pexels.com/photos/4239037/pexels-photo-4239037.jpeg?auto=compress&cs=tinysrgb&w=400",
      after: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Sofa Deep Clean"
    }
  ];

  const testimonials = [
    {
      text: "They revived my old carpet like magic! Stains I thought were permanent just disappeared.",
      author: "Michelle K.",
      location: "Fitzroy"
    },
    {
      text: "Best oven clean I've ever had. It looks brand new and actually works better now!",
      author: "David L.", 
      location: "Richmond"
    }
  ];

  const faqs = [
    {
      question: "Can I book more than one service at a time?",
      answer: "Absolutely! Many customers combine multiple services for maximum value. Just select all the services you need during booking."
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
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] w-full">
        <img
          src="https://images.pexels.com/photos/6197260/pexels-photo-6197260.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Custom Cleaning Services"
          className="w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <h1 className="text-white text-3xl md:text-5xl font-bold mb-2">
              Custom Cleaning Services
            </h1>
            <p className="text-white text-base md:text-lg max-w-2xl">
              Tailored cleaning for every surface, appliance, and space — on your terms.
            </p>
          </div>
        </div>
      </section>

      {/* What is Custom Cleaning */}
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
                What Is Custom Cleaning?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Not all cleaning fits in a box. Whether it's carpets, curtains, BBQs, or your commercial space, 
                Wipely offers targeted cleaning solutions that work for your schedule and your surfaces.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our specialized services use professional-grade equipment and techniques specifically designed 
                for each type of cleaning challenge. From delicate upholstery to heavy-duty commercial spaces, 
                we have the expertise and tools to get the job done right.
              </p>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Mix & Match Services
                </h3>
                <p className="text-gray-700">
                  Combine Custom Cleaning with our regular house cleaning, end of lease cleaning, 
                  or one-off spring clean services. Just ask during booking for a customized package!
                </p>
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
                alt="Specialized cleaning equipment and tools"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Can Clean */}
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
              What We Can Clean
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized cleaning services for every surface and space in your home or business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {customServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 card-hover"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
  <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
  <Link 
    to={`/book`}
    className="flex items-center text-emerald-600 font-medium hover:text-emerald-700 transition-colors duration-300"
  >
    Book Now
    <ArrowRight className="w-4 h-4 ml-1 hover:translate-x-1 transition-transform duration-300" />
  </Link>
</div>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Results */}
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
              Real-Life Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the dramatic transformations our specialized cleaning services achieve
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
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
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
            Professional results, flexible scheduling, transparent pricing — get the custom cleaning your space deserves.
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
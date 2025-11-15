import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import MapComponent from '../components/MapComponent';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  User,
  ArrowRight,
  HelpCircle
} from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+61 435 137 936",
      description: "Call us for assistance"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@wipely.au",
      description: "Send us a message anytime"
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Mon–Sat: 8 AM – 6 PM",
      description: "Sunday: Emergency only"
    },
    {
      icon: MapPin,
      title: "Service Area",
      details: "Melbourne, VIC",
      description: "And surrounding suburbs"
    }
  ];

  const subjectOptions = [
    "General Inquiry",
    "Booking Question",
    "Service Feedback",
    "Complaint",
    "Partnership",
    "Other"
  ];

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate form submission to Formspree or similar service
      console.log('Contact form submitted:', data);
      
      // Here you would typically submit to your form service
      // Example: await fetch('https://formspree.io/f/your-form-id', { ... })
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-sage-50 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto px-4 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-10 h-10 text-emerald-600" />
            </motion.div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Message Sent Successfully!
            </h2>
            <p className="text-gray-600 mb-6">
              Thank you for reaching out! We'll get back to you within 24 hours.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSubmitted(false)}
              className="btn-primary w-full"
            >
              Send Another Message
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

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
              We'd Love to
              <span className="block text-emerald-600">Hear From You</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Whether it's a question, a custom request, or a compliment ,  our team is always happy to chat.
            </p>
          </motion.div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-sage-200/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us ,  choose what works best for you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center card-hover"
              >
                <div className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <info.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-lg font-medium text-emerald-600 mb-2">
                    {info.details}
                  </p>
                  <p className="text-gray-600">
                    {info.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Business Address */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Visit Our Office
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-emerald-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Wipely HQ</h4>
                      <p className="text-gray-600">
                        Melbourne, VIC, Australia
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-emerald-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">+61 435 137 936</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-emerald-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">info@wipely.au</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Business Info & Map */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >

              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Our Location
                </h3>
                <MapComponent height="300px" showPopup={true} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-emerald-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="w-8 h-8 text-emerald-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Have More Questions?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Check out our comprehensive FAQ section for quick answers to common questions about our services, pricing, and policies.
              </p>
              <Link to="/faq">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Read Our FAQs
                  <ArrowRight className=" inline-block w-4 h-4 ml-2" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need a reliable clean? Let's chat.
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-emerald-100">
              Ready to book a service? Our booking process is quick and easy.
            </p>
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
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
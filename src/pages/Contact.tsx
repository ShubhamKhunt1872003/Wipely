import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import MapComponent from '../components/MapComponent';
import { track, trackContactClick } from '../lib/metaPixel';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  ArrowRight,
  HelpCircle,
  ShieldCheck,
  Sparkles,
  Timer,
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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+61 435 137 936',
      href: 'tel:+61435137936',
      description: 'Call us for assistance',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@wipely.au',
      href: 'mailto:info@wipely.au',
      description: 'Send us a message anytime',
    },
    {
      icon: Clock,
      title: 'Hours',
      details: 'Mon–Sat: 8 AM – 6 PM',
      description: 'Sunday: Emergency only',
    },
    {
      icon: MapPin,
      title: 'Service Area',
      details: 'Melbourne, VIC',
      description: 'And surrounding suburbs',
    },
  ];

  const subjectOptions = [
    'General Inquiry',
    'Booking Question',
    'Service Feedback',
    'Complaint',
    'Partnership',
    'Other',
  ];

  const whyChooseUs = [
    {
      icon: ShieldCheck,
      title: 'Fully Insured',
      description: 'Vetted, background-checked cleaners you can trust in your space.',
    },
    {
      icon: Timer,
      title: 'Quick Response',
      description: "We typically reply within 24 hours, often much sooner.",
    },
    {
      icon: Sparkles,
      title: 'Quality Guaranteed',
      description: "Not happy with a spot we missed? We'll come back and fix it.",
    },
  ];

  const onSubmit = async (data: ContactFormData) => {
    // Here you would typically submit to your form service, e.g.
    // await fetch('https://formspree.io/f/your-form-id', { method: 'POST', body: JSON.stringify(data) })
    console.log('Contact form submitted:', data);
    await new Promise((resolve) => setTimeout(resolve, 800));
    // Lead: a contact-form submission is a standard "generated a lead" event.
    // Only the (non-personal) subject category is sent, never name/email/etc.
    track('Lead', { content_name: 'contact_form', content_category: data.subject });
    setIsSubmitted(true);
    reset();
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[80vh] bg-gradient-to-br from-emerald-50 to-sage-50 flex items-center justify-center">
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
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-10 h-10 text-emerald-600" />
            </motion.div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h2>
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
            <span className="inline-block bg-emerald-100 text-emerald-700 !text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Contact Wipely
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              We'd Love to
              <span className="block text-emerald-600">Hear From You</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Whether it's a question, a custom request, or a compliment — our team is always
              happy to chat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg text-base"
                >
                  Book a Cleaning
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </motion.button>
              </Link>
              <a href="tel:+61435137936" onClick={() => trackContactClick('call')}>
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

        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-sage-200/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 sm:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us — choose what works best for you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center h-full"
              >
                <div className="h-full flex flex-col bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <info.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{info.title}</h3>
                  {info.href ? (
                    <a
                      href={info.href}
                      onClick={() => trackContactClick(info.title === 'Phone' ? 'call' : 'email')}
                      className="text-lg font-medium text-emerald-600 mb-2 hover:text-emerald-700 transition-colors duration-200"
                    >
                      {info.details}
                    </a>
                  ) : (
                    <p className="text-lg font-medium text-emerald-600 mb-2">{info.details}</p>
                  )}
                  <p className="text-gray-600 mt-auto">{info.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 sm:py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h3>
              <p className="text-gray-600 mb-6">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block !text-sm font-medium text-gray-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      className={`form-input ${errors.name ? 'border-red-400 focus:ring-red-400 focus:border-red-400' : ''}`}
                      placeholder="Jane Smith"
                      {...register('name', { required: 'Please enter your name' })}
                    />
                    {errors.name && (
                      <p className="!text-xs text-red-500 mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block !text-sm font-medium text-gray-700 mb-1.5">
                      Phone (optional)
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      className="form-input"
                      placeholder="04XX XXX XXX"
                      {...register('phone')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block !text-sm font-medium text-gray-700 mb-1.5">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    className={`form-input ${errors.email ? 'border-red-400 focus:ring-red-400 focus:border-red-400' : ''}`}
                    placeholder="jane@example.com"
                    {...register('email', {
                      required: 'Please enter your email',
                      pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email address' },
                    })}
                  />
                  {errors.email && (
                    <p className="!text-xs text-red-500 mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block !text-sm font-medium text-gray-700 mb-1.5">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subject"
                    defaultValue=""
                    className={`form-input ${errors.subject ? 'border-red-400 focus:ring-red-400 focus:border-red-400' : ''}`}
                    {...register('subject', { required: 'Please choose a subject' })}
                  >
                    <option value="" disabled>
                      Choose a subject
                    </option>
                    {subjectOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.subject && (
                    <p className="!text-xs text-red-500 mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block !text-sm font-medium text-gray-700 mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`form-input resize-none ${errors.message ? 'border-red-400 focus:ring-red-400 focus:border-red-400' : ''}`}
                    placeholder="Tell us how we can help..."
                    {...register('message', { required: 'Please enter a message' })}
                  />
                  {errors.message && (
                    <p className="!text-xs text-red-500 mt-1">{errors.message.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
            </motion.div>

            {/* Business Info & Map */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Office</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Wipely HQ</h4>
                      <p className="text-gray-600">Melbourne, VIC, Australia</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <a
                        href="tel:+61435137936"
                        onClick={() => trackContactClick('call')}
                        className="text-gray-600 hover:text-emerald-600 transition-colors duration-200"
                      >
                        +61 435 137 936
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <a
                        href="mailto:info@wipely.au"
                        onClick={() => trackContactClick('email')}
                        className="text-gray-600 hover:text-emerald-600 transition-colors duration-200"
                      >
                        info@wipely.au
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Hours</h4>
                      <p className="text-gray-600">Mon – Sat: 8 AM – 6 PM</p>
                      <p className="text-gray-600">Sunday: Emergency only</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Location</h3>
                <MapComponent height="300px" showPopup={true} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Wipely */}
      <section className="py-16 sm:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Get in Touch with Wipely</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fast, friendly and reliable — that's the Wipely way
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 !text-[15px] leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-16 sm:py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="w-8 h-8 text-emerald-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Have More Questions?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Check out our comprehensive FAQ section for quick answers to common questions
                about our services, pricing, and policies.
              </p>
              <Link to="/faq">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Read Our FAQs
                  <ArrowRight className="inline-block w-4 h-4 ml-2" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Need a reliable clean? Let's chat.</h2>
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

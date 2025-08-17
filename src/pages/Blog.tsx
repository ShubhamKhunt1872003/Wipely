import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Calendar,
  User,
  Heart,
  Sparkles,
  Quote,
  BookOpen,
  Star
} from 'lucide-react';

import blogData from '../data/blog.json';

const Blog: React.FC = () => {

  const testimonial = {
    text: "Wipely didn't just clean our home ,  they gave us our weekends back. As working parents, having that extra time with our kids is priceless.",
    author: "Sarah & Michael Thompson",
    location: "Carlton North",
    rating: 5
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-emerald-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              The Spark Behind
              <span className="block text-emerald-600">Wipely</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              A Journey of Clean Spaces & Fresh Starts
            </p>
            <Link to="/book">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary px-8 py-4"
              >
                Book a Clean Today
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-8 h-8 text-blue-300 opacity-60"
          >
            <Sparkles className="w-full h-full" />
          </motion.div>
          <motion.div
            animate={{ 
              y: [0, -30, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-32 right-20 w-6 h-6 text-emerald-300 opacity-60"
          >
            <Heart className="w-full h-full" />
          </motion.div>
          <motion.div
            animate={{ 
              y: [0, -25, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            className="absolute bottom-32 left-1/4 w-7 h-7 text-blue-400 opacity-60"
          >
            <BookOpen className="w-full h-full" />
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
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
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What drives us every day and guides every decision we make
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg card-hover"
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To deliver reliable, personalized cleaning services that make everyday life easier for Melbourne families. 
                We believe everyone deserves to come home to a clean, welcoming space without the stress of maintaining it themselves.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg card-hover"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be Melbourne's most trusted and loved cleaning service ,  where quality meets heart. 
                We envision a community where families have more time for what matters most, supported by cleaning partners they can truly rely on.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Latest from Our Blog
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, tips, and stories from the world of professional cleaning
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-lg card-hover"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-AU', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium transition-colors duration-200"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonial */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Quote className="w-8 h-8 text-emerald-600" />
              </div>
              
              <blockquote className="text-2xl font-medium text-gray-900 italic mb-6">
                "{testimonial.text}"
              </blockquote>
              
              <div className="flex items-center justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <cite className="text-lg font-semibold text-gray-900">
                {testimonial.author}
              </cite>
              <div className="text-gray-600">{testimonial.location}</div>
            </div>
          </motion.div>
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
              Ready to Experience the Wipely Difference?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-emerald-100">
              Join hundreds of Melbourne families who trust us with their homes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg text-base"
                >
                  Explore Our Services
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </motion.button>
              </Link>
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300 text-base"
                >
                  Learn More About Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
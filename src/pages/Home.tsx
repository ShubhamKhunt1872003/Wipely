import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import regularHouseImg from "../images/regularHouseImg.jpg";
import endOfLeaseImg from "../images/endOfLeaseImg.jpg";
import oneOfSpringImg from "../images/oneOfSpringImg.jpg";
import customCleaning from "../images/customCleaning.jpg";
import ServiceImag from "../images/Service.jpg";
import Banner2 from "../images/banner2.jpg";

import "swiper/css";
import "swiper/css/pagination";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Home as HomeIcon,
  Clock,
  Shield,
  Heart,
  Sparkles,
  ChevronLeft,
  Phone,
  ChevronRight
} from 'lucide-react';
import postalCodes from '../data/postalcode.json';
import kitchenBeforeImg from "../images/kitchenBefore.jpg";
import kitchenAfterImg from "../images/kitchenAfter.jpg";
import btathroomAfterImg from "../images/bathroomAfter.jpeg";
import bathroomBeforeImg from "../images/bathroomBefore.jpeg";

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [postalCode, setPostalCode] = useState('');
  const [availabilityMessage, setAvailabilityMessage] = useState('');
const navigate = useNavigate();
  const services = [
    {
      title: "Regular House Cleaning",
      description: "Weekly or bi-weekly cleaning to keep your home spotless",
      icon: HomeIcon,
      image: regularHouseImg,
      href: "/services/regular-cleaning"
    },
    {
      title: "End of Lease Cleaning",
      description: "Bond-back guarantee cleaning for peace of mind",
      icon: CheckCircle,
      image: endOfLeaseImg,
      href: "/services/end-of-lease"
    },
    {
      title: "One-off Spring Cleaning",
      description: "Deep seasonal clean to refresh your entire home",
      icon: Sparkles,
      image: oneOfSpringImg,
      href: "/services/spring-cleaning"
    },
    {
      title: "Custom Cleaning",
      description: "Carpet, upholstery, oven, and commercial cleaning",
      icon: Shield,
      image: customCleaning,
      href: "/services/custom-cleaning"
    }
  ];

  const stats = [
    { number: "4.9", label: "Star Rating", icon: Star },
    { number: "2500+", label: "Homes Cleaned", icon: HomeIcon },
    { number: "1200+", label: "Happy Customers", icon: Users },
    { number: "24hr", label: "Response Time", icon: Clock }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "South Yarra",
      rating: 5,
      text: "Wipely transformed my home! The team was professional, thorough, and left everything spotless. I'll definitely book them again."
    },
    {
      name: "Michael Chen",
      location: "Richmond",
      rating: 5,
      text: "Outstanding end of lease cleaning service. Got my full bond back thanks to their meticulous attention to detail."
    },
    {
      name: "Emma Thompson",
      location: "Carlton",
      rating: 5,
      text: "Regular cleaning service has been a game-changer for our busy family. Reliable, thorough, and reasonably priced."
    },
    {
      name: "Janvi Rakholiya",
      location: "Mulgrave",
      rating: 5,
      text: "Wipely transformed my home! The team was professional, thorough, and left everything spotless. I'll definitely book them again."
    },
  ];

  const handleAvailabilityCheck = (e: React.FormEvent) => {
    e.preventDefault();

    if (postalCodes.includes(postalCode)) {
      setAvailabilityMessage(
        "Great news! Wipely services your area. Let's get you booked!"
      );

      setTimeout(() => {
        navigate('/services');   // <--- React router navigation
      }, 1500);
    } else {
      setAvailabilityMessage(
        "Sorry, Wipely isn't available in your area yet! We're expanding soon."
      );
    }
  };
  

  const faqs = [
  {
    question: "What services does Wipely offer?",
    answer:
      "Wipely provides residential and commercial cleaning including deep cleans, end-of-lease cleaning, window washing, and more ,  tailored to Melbourne homes and offices."
  },
  {
    question: "Are your cleaning products eco-friendly?",
    answer:
      "Yes, we use non-toxic, eco-friendly products that are safe for children, pets, and the environment."
  },
  {
    question: "Do I need to be home during the service?",
    answer:
      "Not necessarily. Our professional cleaners are trusted and background-verified. You can provide secure access if needed."
  },
  {
    question: "How do I schedule a cleaning?",
    answer:
      "You can schedule your service easily through our website or by calling our friendly customer support team."
  }
];

const [activeIndex, setActiveIndex] = useState(null);
const toggleFAQ = (index:any) => {
  setActiveIndex(activeIndex === index ? null : index);
};

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={ServiceImag}
            alt="Professional Kitchen Cleaning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center text-center text-white pt-16">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-3xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg text-left"
            >
              Professional Cleaning Services
              <span className="block text-emerald-400 drop-shadow-lg">in Melbourne</span>
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-lg md:text-xl mb-8 text-gray-200 text drop-shadow-md text-left"
            >
              <span className="block">From homes to high-rises, we deliver expert cleaning solutions across Melbourne.</span>
              <span className="block">Our experienced cleaners use eco-friendly products and attention to detail to leave every space spotless and fresh.</span>
              <span className="block">Book today and enjoy a cleaner, healthier environment ,  without the hassle.</span>
            </motion.p>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="drop-shadow-md"
            >
              <div className="flex justify-start items-center gap-6 mt-6 flex-wrap">
                {/* Phone Number Button Style */}
                <a
                  href="tel:+61435137936"
                  className="flex items-center px-6 py-3 rounded-full border-2 border-emerald-600 text-emerald-600 bg-white font-semibold text-base hover:bg-emerald-50 transition-colors duration-200 shadow-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  +61 435 137 936
                </a>

                {/* Book Your Clean Now Button */}
                <Link to="/book">
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full text-base font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center">
                    Book Now
                    <ArrowRight className="inline-block ml-2 w-5 h-5" />
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Availability Checker */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Check if We Service Your Area
            </h2>

            <form onSubmit={handleAvailabilityCheck} className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Enter your postcode"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300"
                >
                  Check
                </button>
              </div>
            </form>

            {availabilityMessage && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 text-lg font-medium ${availabilityMessage.includes('Great news') ? 'text-emerald-600' : 'text-orange-600'
                  }`}
              >
                {availabilityMessage}
              </motion.p>
            )}
          </motion.div>
        </div>
      </section>


      {/* Professional Cleaning Services Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <img
                src={Banner2}
                alt="Professional Cleaning"
                className="rounded-lg shadow-md w-full object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Professional Cleaning Services in Melbourne
              </h2>
              <div className="w-20 h-1 bg-emerald-500 rounded mb-6"></div>
              <p className="text-gray-700 mb-4">
                At Wipely, we take pride in delivering professional cleaning services that meet the highest standards. Our team is trained, insured, and equipped to make your space sparkle ,  whether it's a home, office, or commercial property.
              </p>
              <p className="text-gray-700">
                Serving the Melbourne area, we offer flexible scheduling, eco-friendly cleaning supplies, and transparent pricing. Experience the Wipely difference with reliable service that puts customer satisfaction first.
              </p>
              <ul className="mt-6 space-y-3 text-gray-800">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-emerald-500 w-5 h-5" />
                  Provide flexibility in scheduling
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-emerald-500 w-5 h-5" />
                  Use eco-friendly cleaning products
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-emerald-500 w-5 h-5" />
                  Fully insured & background-checked staff
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-emerald-500 w-5 h-5" />
                  Transparent pricing – no hidden fees
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-emerald-500 w-5 h-5" />
                  Satisfaction guaranteed
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Services Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Expert Services
            </h2>
            <div className="w-20 h-1 bg-emerald-500 rounded mb-6 mx-auto"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
              Discover a wide range of professional cleaning services tailored for homes and businesses across Melbourne.
              From regular upkeep to deep seasonal cleans ,  we've got every corner covered.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Link to={service.href}>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-emerald-200">

                    {/* Image Section */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-40 object-cover"
                    />

                    {/* Content Section */}
                    <div className="pt-10 pb-6 px-6 text-center relative">

                      {/* Floating Icon Above Title */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 z-10">
                        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center shadow-md group-hover:bg-emerald-200 transition-colors duration-300">
                          <service.icon className="w-8 h-8 text-emerald-600" />
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-2 group-hover:text-emerald-600 transition-colors duration-300">
                        {service.title}
                      </h3>

                      <p className="text-gray-600 mb-6">{service.description}</p>

                      <div className="flex items-center justify-center text-emerald-600 font-medium group-hover:text-emerald-700 transition-colors duration-300">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Why Customers Love Us
            </h2>
            <div className="w-20 h-1 bg-emerald-400 rounded mx-auto mt-1.5 mb-4"></div>
            <p className="text-lg text-gray-300">
              Trusted by families and businesses across Melbourne for quality and reliability
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-emerald-400">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-[5px]">
              See the Transformation
            </h2>
            <div className="w-20 h-1 bg-emerald-500 rounded mt-[5px] mb-6 mx-auto"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
              At Wipely, we believe that seeing is believing. Our professional cleaning services deliver visible results you can trust. From kitchens to living rooms, these before-and-after transformations showcase the attention to detail our team brings to every space.
            </p>

          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                before: kitchenBeforeImg,
                after: kitchenAfterImg,
                title: "Kitchen Deep Clean"
              },
              {
                before: bathroomBeforeImg,
                after: btathroomAfterImg,
                title: "Bathroom Restoration"
              },
              {
                before: "https://images.pexels.com/photos/4239037/pexels-photo-4239037.jpeg?auto=compress&cs=tinysrgb&w=600",
                after: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600",
                title: "Living Room Refresh"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="grid grid-cols-2">
                  <div className="relative overflow-hidden group">
                    <img
                      src={item.before}
                      alt="Before"
                      className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-red-600 text-white text-xs font-semibold text-center py-1">
                      Before
                    </div>
                  </div>
                  <div className="relative overflow-hidden group">
                    <img
                      src={item.after}
                      alt="After"
                      className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-emerald-600 text-white text-xs font-semibold text-center py-1">
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

      {/* Testimonials */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-[5px]">
            What Our Customers Say
          </h2>
          <div className="w-20 h-1 bg-emerald-500 rounded mt-[5px] mb-6 mx-auto"></div>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Real reviews from our happy Melbourne clients who experienced the Wipely difference.
          </p>
          <div className="px-4 md:px-8">
            <Swiper
              modules={[Pagination, Autoplay]}
              slidesPerView={1}
              spaceBetween={30}
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000 }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-12"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-gray-50 rounded-xl shadow-md p-6 h-full flex flex-col justify-between min-h-[280px]">
                    <div>
                      <div className="flex items-center mb-3 justify-center">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-700 italic mb-4">
                        "{testimonial.text}"
                      </p>
                    </div>
                    <div className="text-center mt-4">
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.location}</div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
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
<section className="bg-emerald-600 text-white py-12">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-3">
      Book Your Cleaning Services in Melbourne Today!
    </h2>
    <p className="text-lg mb-6 max-w-2xl mx-auto">
      Get sparkling results with Wipely ,  trusted by hundreds of happy customers across Melbourne. Fast, eco-friendly, and professional cleaning at your fingertips.
    </p>
   <Link
  to="/book"   // MUST match your route path
  className="inline-block bg-white text-emerald-600 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-100 transition duration-300"
>
  Book Now
</Link>
  </div>
</section>
    </div>
  );
};

export default Home;
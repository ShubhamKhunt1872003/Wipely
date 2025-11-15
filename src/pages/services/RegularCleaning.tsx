import * as React from 'react';
import { useState } from 'react';
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
  Baby,
  Star
} from 'lucide-react';
import regularHouseImg from "../../images/regularHouseImg.jpg";
import regularHouseSectionImg from "../../images/regularCLImg.jpg";
import bedRoomInmg from "../../images/bedroom.jpg";
import bathroomImg from "../../images/bathroomImg.jpg";
import livingroomImg from "../../images/livingroom.jpg";
import kitchenImg from "../../images/kitchenImg.jpg";
import binImg from "../../images/bin.jpg";
import laundryroomImg from "../../images/laundryRoomImg.jpg";
import kitchenBeforeImg from "../../images/kitchenBefore.jpg";
import kitchenAfterImg from "../../images/kitchenAfter.jpg";
// Using Pexels stock photos
const kitchen = kitchenImg;
const cleaningImg = 'https://images.pexels.com/photos/6197119/pexels-photo-6197119.jpeg?auto=compress&cs=tinysrgb&w=1200';
const claningImgSec = 'https://images.pexels.com/photos/4107063/pexels-photo-4107063.jpeg?auto=compress&cs=tinysrgb&w=800';
const bin = binImg;
const bedImg = bedRoomInmg;
const bathroom = bathroomImg;
const livingroom = livingroomImg;
const laundryRoomImg = laundryroomImg;

const RegularCleaning: React.FC = () => {
 const includedServices = [
  {
     title: 'Bedroom',
    image: bedImg,
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
    image: bathroom,
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
    image: livingroom,
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
    image: kitchen,
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
    image: laundryRoomImg,
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
    { name: "Interior & Exterior Window", icon: "🪟" },
    { name: "Fridge Cleanout",  icon: "🧊" },
    { name: "BBQ & Oven Deep Cleaning", icon: "🔥" },
    { name: "Gas Stove Top & Rangehood", icon: "🧽" },
    { name: "Organizing", icon: "🗄️" },
    { name: "Deep Clean Add-on", icon: "✨" }
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
  

const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index:any) => {
  setActiveIndex(activeIndex === index ? null : index);
};


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
              Regular House
              <span className="block text-emerald-600">Cleaning</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Weekly or fortnightly ,  Wipely keeps your space fresh, clean, and stress-free
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

      {/* What is Regular Cleaning */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What is Regular Cleaning?
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Consistent, professional cleaning that keeps your home spotless without the stress
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative">
                <img
                  src= {regularHouseSectionImg}
                  alt="Professional cleaner doing regular cleaning"
                  className="rounded-2xl shadow-2xl w-full"
                />
                
                {/* Floating testimonial card */}
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">Sarah M.</div>
                      <div className="text-gray-600 text-xs">Carlton</div>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 italic text-sm leading-relaxed">
                    "Having Wipely come every two weeks has been life-changing. Our home is always guest-ready!"
                  </blockquote>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-1 lg:order-2"
            >
              <div className="bg-white rounded-2xl p-8 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-100 rounded-full -translate-y-10 translate-x-10 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-100 rounded-full translate-y-8 -translate-x-8 opacity-50"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                      <HomeIcon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">The Wipely Difference</h3>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <p className="text-gray-700 leading-relaxed">
                      Our regular cleaning service provides <strong>consistent, thorough cleaning</strong> on a schedule that works for you. 
                      Perfect for maintaining a clean home without the hassle of doing it yourself.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Unlike one-time deep cleans, regular cleaning focuses on <strong>maintaining cleanliness</strong> with each visit, 
                      keeping your home fresh and comfortable week after week.
                    </p>
                  </div>

                  {/* Key Benefits */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {[
                      { icon: Clock, text: "Time Saving" },
                      { icon: Heart, text: "Stress-Free" },
                      { icon: Sparkles, text: "Consistent Quality" },
                      { icon: Users, text: "Trusted Team" }
                    ].map((benefit, index) => (
                      <div key={benefit.text} className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                          <benefit.icon className="w-4 h-4 text-emerald-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">{benefit.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Statistics Row */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: "2,500+", label: "Homes Cleaned", icon: "🏠" },
              { number: "4.9", label: "Star Rating", icon: "⭐" },
              { number: "98%", label: "Customer Retention", icon: "💚" },
              { number: "24hr", label: "Response Time", icon: "⚡" }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-emerald-600 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>


      

      {/* Included Services */}

          
<section className="bg-gray-50 py-16">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-2">Included in Every Visit</h2>
    <div className="h-1 w-20 bg-emerald-500 mx-auto mb-10"></div>

    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 text-left">
      {includedServices.map((service, index) => (
        <div
          key={index}
          className="relative bg-white rounded-xl shadow-md overflow-hidden"
        >
          {/* Image */}
          <div className="overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-40 object-cover transform transition-transform duration-500 ease-in-out hover:scale-110"
            />
          </div>

          {/* Label */}
          <div className="absolute top-2 right-2 bg-emerald-500 text-white text-xs font-semibold uppercase px-3 py-1 rounded-md shadow-md z-10">
            Every Visit
          </div>

          {/* Content */}
          <div className="p-5 bg-gradient-to-br from-gray-50 to-white">
            <h3 className="font-semibold text-base mb-4 text-emerald-600">{service.title}</h3>
            <ul className="space-y-2 text-gray-700">
              {service.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="text-emerald-500 w-4 h-4 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          </div> */}
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
                  {/* <span className="text-emerald-600 font-bold">{extra.price}</span> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Transformation Gallery */}
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
                before: "https://images.pexels.com/photos/4107286/pexels-photo-4107286.jpeg?auto=compress&cs=tinysrgb&w=600",
                after: "https://images.pexels.com/photos/6197121/pexels-photo-6197121.jpeg?auto=compress&cs=tinysrgb&w=600",
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
  

      {/* Why Book Regular */}
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
              <Heart className="w-8 h-8 text-emerald-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Regular Cleaning?
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the life-changing benefits of consistent professional cleaning that transforms your home and lifestyle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {whyRegular.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-lg relative overflow-hidden">
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">More Reasons to Love Regular Cleaning</h3>
              <p className="text-gray-600">Additional benefits that make regular cleaning the smart choice</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: "💰",
                  title: "Cost Effective",
                  description: "Regular maintenance costs less than deep cleaning"
                },
                {
                  icon: "🏠",
                  title: "Home Value",
                  description: "Maintain your property's condition and value"
                },
                {
                  icon: "😌",
                  title: "Peace of Mind",
                  description: "Always ready for unexpected guests"
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
      Book Your Cleaning Services in Melbourne Today!
    </h2>
    <p className="text-lg mb-6 max-w-2xl mx-auto">
      Get sparkling results with Wipely ,  trusted by hundreds of happy customers across Melbourne. Fast, eco-friendly, and professional cleaning at your fingertips.
    </p>
    <a
      href="/book" // or use your booking route
      className="inline-block bg-white text-emerald-600 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-100 transition duration-300"
    >
      Book Now
    </a>
  </div>
</section>
    </div>
  );
};

export default RegularCleaning;
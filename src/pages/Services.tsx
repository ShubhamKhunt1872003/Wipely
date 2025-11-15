import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home as HomeIcon, 
  CheckCircle, 
  Sparkles, 
  Settings, 
  ArrowRight,
  Shield,
  Leaf,
  Clock,
  Award
} from 'lucide-react';
import regularHouseImg from "../images/regularHouseImg.jpg";
import endOfLeaseImg from "../images/endOfLeaseImg.jpg";
import oneOfSpringImg from "../images/oneOfSpringImg.jpg";
import customCleaning from "../images/customCleaning.jpg";
import carpetSteamCleaning from "../images/carpetSteamCleaning.jpg";
import upholsteryImg from "../images/upholsteryImg.jpg";
import ovenImg from "../images/ovenImg.jpg";
import bbqImg from "../images/bbqImg.jpg";
import staircaseImg from "../images/staircaseImg.jpg";
import commercialImg from "../images/commercialImg.jpg";
// Using Pexels stock photos
const RegularHouseImg = regularHouseImg;
const EndofleaseImg = endOfLeaseImg;
const OneOfSpringImg = oneOfSpringImg;
const CommercialImg = commercialImg;
const StaircaseImg = staircaseImg;
const CustomCleaning = customCleaning;
const CarpetSteamCleaning = carpetSteamCleaning;
const UpholsteryImg = upholsteryImg;
const OvenImg = ovenImg;
const BBQImg = bbqImg;
const KitchenImg = 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600';

const Services: React.FC = () => {
  const services = [
    {
      title: "Regular House Cleaning",
      description: "Weekly or bi-weekly cleaning to maintain your home's freshness. Perfect for busy families who want a consistently clean living space.",
      features: ["Floors vacuumed & mopped", "Bathrooms sanitized", "Kitchen cleaned", "Dusting & tidying"],
      icon: HomeIcon,
      href: "/services/regular-cleaning",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "End of Lease Cleaning", 
      description: "Comprehensive bond-back guarantee cleaning for renters. Meet real estate standards and get your full deposit returned.",
      features: ["Deep kitchen degreasing", "Full bathroom restoration", "Carpet cleaning", "Window cleaning"],
      icon: CheckCircle,
      href: "/services/end-of-lease",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      title: "One-off Spring Cleaning",
      description: "Seasonal deep clean to refresh and revitalize your entire home. Perfect for special occasions or post-renovation cleanup.",
      features: ["Deep cleaning all rooms", "Hard-to-reach areas", "Appliance cleaning", "Detailed dusting"],
      icon: Sparkles,
      href: "/services/spring-cleaning",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Custom Cleaning",
      description: "Specialized cleaning services including carpet, upholstery, oven, BBQ, mattress, stairs, and commercial spaces.",
      features: ["Carpet steam cleaning", "Upholstery care", "Oven deep clean", "Commercial spaces"],
      icon: Settings,
      href: "/services/custom-cleaning",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const whyWipely = [
    {
      icon: Shield,
      title: "Trusted Professionals",
      description: "All cleaners are background-checked, insured, and trained to our high standards."
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Products",
      description: "We use environmentally safe, non-toxic cleaning products for your family's health."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Book at your convenience with easy online booking and flexible time slots."
    },
    {
      icon: Award,
      title: "Satisfaction Guaranteed",
      description: "Not happy? We'll re-clean for free or refund your money. Your satisfaction is our priority."
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
              Our Expert
              <span className="block text-emerald-600">Cleaning Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Tailored cleaning solutions for homes and businesses across Melbourne
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
     <section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Explore Our Services</h2>
    <div className="w-16 h-1 bg-emerald-500 mx-auto mb-10"></div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Regular House Cleaning",
          icon: "🏠",
          img: RegularHouseImg,
          href: "/services/regular-cleaning",
          includes: [
            "Bedroom & Living area dusting",
            "Mopping & vacuuming floors",
            "Surface disinfecting",
            "Kitchen sink wipe-down"
          ]
        },
        {
          title: "End of Lease Cleaning",
          icon: "🚪",
          img: EndofleaseImg,
          href: "/services/end-of-lease",
          includes: [
            "Full property deep clean",
            "Oven, range hood & exhaust",
            "Carpet steam cleaning (optional)",
            "Bond-back guarantee support"
          ]
        },
        {
          title: "One-off Spring Cleaning",
          icon: "✨",
          img: OneOfSpringImg,
          href: "/services/spring-cleaning",
          includes: [
            "Deep cleaning all rooms",
            "Hard-to-reach areas",
            "Appliance cleaning",
            "Detailed dusting"
          ]
        },
        {
          title: "Custom Cleaning",
          icon: "🛠️",
          img: CustomCleaning,
          href: "/services/custom-cleaning",
          includes: [
            "Specialized cleaning services",
            "Flexible service options",
            "Professional equipment",
            "Tailored to your needs"
          ]
        },
        {
          title: "Carpet Steam Cleaning",
          icon: "🧽",
          img:CarpetSteamCleaning,
          href: "/services/carpet-cleaning",
          includes: [
            "Deep stain removal",
            "Allergen elimination",
            "Fast drying process",
            "Eco-friendly products"
          ]
        },
        {
          title: "Upholstery Cleaning",
          icon: "🛋️",
          img: UpholsteryImg,
          href: "/services/upholstery-cleaning",
          includes: [
            "Fabric care treatment",
            "Stain removal",
            "Odor elimination",
            "Color protection"
          ]
        },
        {
          title: "Oven Cleaning",
          icon: "🔥",
          img: OvenImg,
          href: "/services/oven-cleaning",
          includes: [
            "Non-toxic products",
            "Full disassembly",
            "Grease removal",
            "Shine restoration"
          ]
        },
        {
          title: "BBQ Cleaning",
          icon: "🍖",
          img: BBQImg,
          href: "/services/bbq-cleaning",
          includes: [
            "Complete disassembly",
            "Grease trap cleaning",
            "Grill restoration",
            "Safety check"
          ]
        },
        {
          title: "Staircase Cleaning",
          icon: "🪜",
          img: StaircaseImg,
          href: "/services/staircase-cleaning",
          includes: [
            "Balustrade cleaning",
            "Step deep clean",
            "Corner attention",
            "Safety focus"
          ]
        },
        {
          title: "Commercial Spaces",
          icon: "🏢",
          img: CommercialImg,
          href: "/services/commercial-cleaning",
          includes: [
            "Desk & electronics wiped",
            "Trash disposal & restocking",
            "Kitchenette deep clean",
            "Glass partitions cleaned"
          ]
        }
      ].map((service, index) => (
        <div key={index} className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-md transition overflow-hidden">
          {/* Image + Icon */}
         <div className="relative group overflow-visible">
  {/* Zoom Image */}
  <img
    src={service.img}
    alt={service.title}
    className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
  />

  {/* Centered Icon – Half on image, half on card */}
  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-3 text-2xl shadow-lg z-10">
    {service.icon}
  </div>
</div>

          {/* Content */}
          <div className="pt-8 px-6 pb-6">
            <h3 className="text-xl font-bold text-emerald-600 mb-4">{service.title}</h3>
            <h4 className="font-semibold text-gray-700 mb-2">What's Included:</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mb-6">
              {service.includes.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <Link
          to={service.href}
          className="block text-center bg-emerald-500 text-white px-6 py-3 rounded-full hover:bg-emerald-600 shadow-md transition"
        >
          📋 View More
        </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



      
      <section className="py-16 bg-gray-100">
  <div className="max-w-6xl mx-auto px-4">
    <div className="mb-10 text-left">
      <h2 className="text-3xl font-bold text-gray-800 mb-3">Why Choose Our Cleaning Services?</h2>
      <div className="w-14 h-1 bg-emerald-500 mb-6"></div>
      <p className="text-gray-600 text-lg max-w-2xl">
        At Wipely, we go beyond basic cleaning. We provide flexible, professional, and eco-friendly cleaning tailored to your needs. Here's why Melbourne residents love us:
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
      <div className="border p-6 rounded-lg shadow hover:shadow-md transition">
        <div className="text-emerald-500 text-3xl mb-3">✅</div>
        <h4 className="text-lg font-semibold mb-2">Reliable & On-Time</h4>
        <p className="text-sm text-gray-600">We value your time. Our team arrives promptly and finishes efficiently without compromising quality.</p>
      </div>

      <div className="border p-6 rounded-lg shadow hover:shadow-md transition">
        <div className="text-emerald-500 text-3xl mb-3">🧽</div>
        <h4 className="text-lg font-semibold mb-2">Eco-Friendly Products</h4>
        <p className="text-sm text-gray-600">We use safe, biodegradable products to protect your health and the planet.</p>
      </div>

      <div className="border p-6 rounded-lg shadow hover:shadow-md transition">
        <div className="text-emerald-500 text-3xl mb-3">⏱️</div>
        <h4 className="text-lg font-semibold mb-2">Flexible Scheduling</h4>
        <p className="text-sm text-gray-600">We adapt to your timing ,  early morning or late evening, we clean when it suits you.</p>
      </div>
    </div>
  </div>
</section>


      {/* Why Wipely Section */}
    
      {/* Call to Action */}
     
      <section className="bg-emerald-600 text-white py-12">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-4">
      Ready to Experience Professional Cleaning?
    </h2>
    <p className="mb-6 text-lg">
      Book your service now and enjoy a sparkling clean space. Fast, friendly, and reliable!
    </p>

    <div className="flex justify-center flex-wrap gap-4">
      {/* Call Button */}
      <a
        href="tel:+61435137936"
        className="bg-white text-emerald-600 font-medium px-6 py-3 rounded-full shadow-md hover:bg-emerald-100 transition duration-300"
      >
        📞 Call Us: +61 435 137 936
      </a>

      {/* Book Button */}
     <Link
  to="/book"
  className="bg-white text-emerald-600 font-medium px-6 py-3 rounded-full shadow-md hover:bg-emerald-100 transition duration-300"
>
  📋 Book Online
</Link>
    </div>
  </div>
</section>


    </div>
  );
};

export default Services;
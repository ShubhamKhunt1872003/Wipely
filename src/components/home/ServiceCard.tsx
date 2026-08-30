import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  href: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, image, href, index }) => (
  <motion.div
    initial={{ y: 30, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -8 }}
    className="group h-full"
  >
    <Link to={href} className="block h-full">
      <div className="h-full flex flex-col bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-emerald-200">
        <img src={image} alt={title} className="w-full h-40 object-cover flex-shrink-0" />

        <div className="flex-1 flex flex-col pt-10 pb-6 px-6 text-center relative">
          <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center shadow-md group-hover:bg-emerald-200 transition-colors duration-300">
            <Icon className="w-8 h-8 text-emerald-600" />
          </div>

          <h3 className="font-display font-bold !text-lg text-gray-900 mb-3 mt-2 line-clamp-2 min-h-[3.5rem] group-hover:text-emerald-600 transition-colors duration-300">
            {title}
          </h3>

          <p className="!text-[15px] text-gray-600 mb-6 flex-1 line-clamp-2">{description}</p>

          <div className="flex items-center justify-center text-emerald-600 font-medium group-hover:text-emerald-700 transition-colors duration-300 mt-auto">
            Learn More
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

export default ServiceCard;

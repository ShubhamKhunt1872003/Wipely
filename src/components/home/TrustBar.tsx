import { motion } from 'framer-motion';
import { ShieldCheck, Users, Leaf, CalendarCheck, ThumbsUp } from 'lucide-react';

const trustPoints = [
  { icon: ShieldCheck, label: 'Fully Insured' },
  { icon: Users, label: 'Professional Cleaners' },
  { icon: Leaf, label: 'Eco-Friendly Products' },
  { icon: CalendarCheck, label: 'Reliable Scheduling' },
  { icon: ThumbsUp, label: 'Satisfaction Focused' },
];

const TrustBar: React.FC = () => (
  <section className="bg-white border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {trustPoints.map((point, index) => (
          <motion.div
            key={point.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
              <point.icon className="w-5 h-5 text-emerald-600" />
            </div>
            <span className="!text-sm font-semibold text-gray-800">{point.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;

import { motion } from 'framer-motion';
import { ImageOff } from 'lucide-react';

interface BeforeAfterCardProps {
  title: string;
  index: number;
}

// Placeholder tile for categories without a verified, matching before/after photo pair yet.
// Intentionally does not render any image — see redesign notes: several "before/after"
// filenames in the asset library turned out to be unrelated stock photos, not real
// matched pairs, so they're not used here.
const BeforeAfterCard: React.FC<BeforeAfterCardProps> = ({ title, index }) => (
  <motion.div
    initial={{ y: 30, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="rounded-2xl border-2 border-dashed border-gray-200 bg-white aspect-[4/3] flex flex-col items-center justify-center text-center p-6"
  >
    <ImageOff className="w-7 h-7 text-gray-400 mb-3" />
    <h3 className="font-semibold text-gray-700">{title}</h3>
    <p className="!text-sm text-gray-500 mt-1">[ADD REAL BEFORE/AFTER PHOTOS]</p>
  </motion.div>
);

export default BeforeAfterCard;

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
  theme?: 'light' | 'dark';
  animated?: boolean;
  className?: string;
}

// Note: h2/h3/p font-size are capped site-wide by !important rules in index.css.
// The `!` (Tailwind important-modifier) classes below use a class selector, which
// out-specifies that global element-selector rule, so headings render at full size
// here without touching the shared stylesheet.
const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'center',
  theme = 'light',
  animated = true,
  className = ''
}) => {
  const isCentered = align === 'center';
  const titleColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const bodyColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-600';
  const underlineColor = theme === 'dark' ? 'bg-emerald-400' : 'bg-emerald-500';
  const eyebrowColor = theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600';

  const content = (
    <div className={`${isCentered ? 'text-center' : 'text-left'} mb-10 ${className}`}>
      {eyebrow && (
        <span className={`block text-sm font-semibold tracking-wide uppercase mb-3 ${eyebrowColor}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`font-display font-bold !text-3xl md:!text-4xl lg:!text-5xl leading-tight ${titleColor} mb-4`}>
        {title}
      </h2>
      <div className={`w-16 h-1 ${underlineColor} rounded mb-5 ${isCentered ? 'mx-auto' : ''}`} />
      {description && (
        <p className={`!text-lg ${bodyColor} max-w-2xl ${isCentered ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );

  if (!animated) return content;

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {content}
    </motion.div>
  );
};

export default SectionHeading;

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import SectionHeading from './SectionHeading';

const reasons = [
  'Fully insured, background-checked cleaners',
  'Attention to detail on every job',
  'Reliable scheduling — no chasing, no reshuffles',
  'Eco-conscious cleaning products',
  'Transparent, upfront pricing',
  'Customer-focused service',
];

const steps = [
  { number: '01', title: 'Request a Quote', description: 'Tell us about your property and cleaning requirements.' },
  { number: '02', title: 'Confirm Your Booking', description: 'Choose a suitable date and service.' },
  { number: '03', title: 'Enjoy a Cleaner Space', description: 'Our team completes the cleaning professionally.' },
];

const WhyWipelyHowItWorks: React.FC = () => (
  <section className="py-16 sm:py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Why Wipely" title="Why Choose Wipely?" className="mb-12" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid sm:grid-cols-2 gap-x-6 gap-y-4 content-start"
        >
          {reasons.map((reason) => (
            <div key={reason} className="flex items-start gap-2.5">
              <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span className="!text-[15px] text-gray-700">{reason}</span>
            </div>
          ))}
        </motion.div>

        <div className="border-t lg:border-t-0 lg:border-l border-gray-200 pt-10 lg:pt-0 lg:pl-16">
          <h3 className="font-display font-bold !text-xl text-gray-900 mb-6">How It Works</h3>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ x: 15, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-display font-bold !text-sm flex items-center justify-center flex-shrink-0">
                  {step.number}
                </div>
                <div>
                  <h4 className="font-semibold !text-base text-gray-900">{step.title}</h4>
                  <p className="!text-sm text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyWipelyHowItWorks;

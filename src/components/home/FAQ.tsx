import { useState, useEffect } from 'react';
import SectionHeading from './SectionHeading';
import FAQAccordionItem from './FAQAccordionItem';

const faqs = [
  {
    question: 'What cleaning services does Wipely provide?',
    answer:
      'Regular house cleaning, end of lease cleaning, and hourly spring cleaning, plus specialised services including carpet steam cleaning, upholstery cleaning, oven cleaning, BBQ cleaning, and commercial cleaning.',
  },
  {
    question: 'Do you bring your own cleaning products and equipment?',
    answer:
      'Yes — our cleaners bring eco-friendly cleaning products as standard. [BUSINESS OWNER TO CONFIRM: full equipment list]',
  },
  {
    question: 'Do I need to be home during the cleaning?',
    answer: '[BUSINESS OWNER TO CONFIRM]',
  },
  {
    question: 'How do I book a cleaning?',
    answer:
      'Book directly through our website: choose your service, enter your property details, and confirm your booking online — or call us on +61 435 137 936.',
  },
  {
    question: 'Do you provide end-of-lease cleaning?',
    answer:
      'Yes. Our end of lease cleaning covers kitchens, bathrooms, floors and final detailing for an inspection-ready result.',
  },
  {
    question: 'Do you provide commercial cleaning?',
    answer: 'Yes, we clean offices, commercial properties and small business workspaces across Melbourne.',
  },
  {
    question: 'How can I request a quote?',
    answer: 'Tap "Get a Free Quote" anywhere on this page, or call us directly on +61 435 137 936.',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="py-16 sm:py-20 bg-emerald-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" align="left" className="mb-10" />

        {faqs.map((faq, index) => (
          <FAQAccordionItem
            key={faq.question}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;

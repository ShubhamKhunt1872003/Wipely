interface FAQAccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQAccordionItem: React.FC<FAQAccordionItemProps> = ({ question, answer, isOpen, onToggle }) => (
  <div className="border border-gray-200 bg-white rounded-xl p-5 mb-4 shadow-sm hover:shadow-md transition-shadow duration-300">
    <button
      onClick={onToggle}
      aria-expanded={isOpen}
      className="w-full text-left flex justify-between items-center gap-4 font-semibold !text-base text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
    >
      {question}
      <span className="text-emerald-500 !text-2xl leading-none flex-shrink-0">{isOpen ? '-' : '+'}</span>
    </button>

    {isOpen && <p className="mt-3 !text-[15px] text-gray-600 leading-relaxed">{answer}</p>}
  </div>
);

export default FAQAccordionItem;

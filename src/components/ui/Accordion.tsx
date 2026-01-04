'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionItemProps {
  question: string;
  answer: string;
}

export function AccordionItem({ question, answer }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 px-6 text-left flex justify-between items-center hover:bg-blue-50 transition-all duration-300"
        aria-expanded={isOpen}
      >
        <span className="font-bold text-gray-900 text-lg pr-8">
          {question}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-blue-600 transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-gray-700 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface AccordionProps {
  items: { question: string; answer: string }[];
  className?: string;
}

export default function Accordion({ items, className = '' }: AccordionProps) {
  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 ${className}`}>
      {items.map((item, index) => (
        <AccordionItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}

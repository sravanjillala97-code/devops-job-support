'use client';

import { motion } from 'framer-motion';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { siteConfig } from '@/content/site';
import Accordion from '../ui/Accordion';

export default function FAQ() {
  const faqItems = siteConfig.faqs.map(faq => ({
    question: faq.question,
    answer: faq.answer,
  }));

  return (
    <section id="faq" className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle 
            centered
            subtitle="Find answers to common questions"
          >
            Frequently Asked Questions
          </SectionTitle>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Accordion items={faqItems} />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-8 rounded-xl shadow-2xl"
          >
            <p className="text-lg font-semibold text-white mb-4">
              Still have questions?
            </p>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}?text=Hi! I have some questions about the training programs`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-white text-purple-600 font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-110 hover:text-primary-700"
            >
              Get in touch with us →
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

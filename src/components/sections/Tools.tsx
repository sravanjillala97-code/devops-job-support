'use client';

import { motion } from 'framer-motion';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Badge from '../ui/Badge';
import { siteConfig } from '@/content/site';

export default function Tools() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle 
            centered
            subtitle="Technologies and platforms we support"
          >
            Tools We Work With
          </SectionTitle>

          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {siteConfig.tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
              >
                <Badge variant="gray" className="text-base px-5 py-2.5 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all cursor-default transform hover:scale-105">
                  {tool.name}
                </Badge>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center text-gray-600 dark:text-gray-400 mt-8 max-w-2xl mx-auto"
          >
            And many more! If you need help with a tool not listed here, just ask. We're constantly expanding our expertise.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}

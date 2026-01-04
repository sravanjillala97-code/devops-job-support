'use client';

import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { siteConfig } from '@/content/site';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-800 dark:via-purple-900/20 dark:to-blue-900/20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle 
            centered
            subtitle="Our simple and effective support process"
          >
            How It Works
          </SectionTitle>

          <div className="max-w-4xl mx-auto">
            {siteConfig.howItWorks.map((step, index) => {
              const IconComponent = (LucideIcons as any)[step.icon.split('-').map((word: string) => 
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join('')] || LucideIcons.Circle;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative flex gap-6 mb-12 last:mb-0"
                >
                  {/* Timeline line */}
                  {index < siteConfig.howItWorks.length - 1 && (
                    <div className="absolute left-7 top-16 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-900"></div>
                  )}

                  {/* Step number and icon */}
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/50">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 text-white flex items-center justify-center text-xs font-bold shadow-md">
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              What You Get
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {siteConfig.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <LucideIcons.CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

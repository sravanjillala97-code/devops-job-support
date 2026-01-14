'use client';

import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { siteConfig } from '@/content/site';

export default function Services() {
  const handleContactClick = () => {
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}`, '_blank');
  };

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle 
            centered
            subtitle="Expert assistance across the entire DevOps lifecycle"
          >
            Our Services
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.services.map((service, index) => {
              const IconComponent = (LucideIcons as any)[service.icon.split('-').map((word: string) => 
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join('')] || LucideIcons.Box;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-2 border-transparent hover:border-purple-300 dark:hover:border-purple-500 transition-all">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center mb-4 shadow-lg shadow-purple-500/50">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-4">
                      {service.details.slice(0, 4).map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <span className="text-accent-500 mt-0.5">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      href="/services"
                      className="w-full"
                    >
                      Learn More
                    </Button>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <Button size="lg" onClick={handleContactClick}>
              Get Started Now
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

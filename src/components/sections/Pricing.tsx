'use client';

import { motion } from 'framer-motion';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import PricingCard from '../ui/PricingCard';
import { siteConfig } from '@/content/site';

export default function Pricing() {
  const handleCtaClick = (tierId: string) => {
    if (tierId === 'monthly') {
      window.location.href = '/contact';
    } else {
      window.open(`https://wa.me/${siteConfig.contact.whatsapp}`, '_blank');
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-purple-900/20 dark:to-blue-900/20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle 
            centered
            subtitle="Flexible pricing plans to match your needs"
          >
            Simple, Transparent Pricing
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {siteConfig.pricing.tiers.map((tier, index) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <PricingCard
                  name={tier.name}
                  price={tier.price}
                  period={tier.period}
                  description={tier.description}
                  features={tier.features}
                  cta={tier.cta}
                  highlighted={tier.highlighted}
                  onCtaClick={() => handleCtaClick(tier.id)}
                />
              </motion.div>
            ))}
          </div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg max-w-4xl mx-auto"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-4">
              <strong className="text-gray-900 dark:text-white">Important:</strong> {siteConfig.pricing.disclaimer}
            </p>
            <p className="text-center text-gray-700 dark:text-gray-300">
              {siteConfig.pricing.customPlanText}
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

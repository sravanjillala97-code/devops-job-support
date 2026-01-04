'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import PricingCard from '@/components/ui/PricingCard';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { siteConfig } from '@/content/site';
import { Calendar, Clock, MessageCircle } from 'lucide-react';

export default function PricingPage() {
  const handleCtaClick = (tierId: string) => {
    if (tierId === 'monthly') {
      window.location.href = '/contact';
    } else {
      window.open(`https://wa.me/${siteConfig.contact.whatsapp}`, '_blank');
    }
  };

  const handleConsultationClick = () => {
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi! I'd like to book a free 10-minute consultation.`, '_blank');
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Choose the plan that fits your needs. No hidden fees, just honest pricing.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {siteConfig.pricing.tiers.map((tier, index) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto mb-16"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-4">
              <strong className="text-gray-900 dark:text-white">Important:</strong> {siteConfig.pricing.disclaimer}
            </p>
            <p className="text-center text-gray-700 dark:text-gray-300">
              {siteConfig.pricing.customPlanText}
            </p>
          </motion.div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle centered className="mb-12">
              Plan Comparison
            </SectionTitle>
            <div className="overflow-x-auto">
              <table className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-900">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">Hourly</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white bg-primary-50 dark:bg-primary-900/30">Weekly</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">Monthly</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Response Time</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-400">2-4 hours</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-400 bg-primary-50/50 dark:bg-primary-900/10">&lt; 1 hour</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-400">&lt; 30 min</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Screen Share Support</td>
                    <td className="px-6 py-4 text-center text-sm">✓</td>
                    <td className="px-6 py-4 text-center text-sm bg-primary-50/50 dark:bg-primary-900/10">✓</td>
                    <td className="px-6 py-4 text-center text-sm">✓</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">WhatsApp/Call Support</td>
                    <td className="px-6 py-4 text-center text-sm">Email</td>
                    <td className="px-6 py-4 text-center text-sm bg-primary-50/50 dark:bg-primary-900/10">✓</td>
                    <td className="px-6 py-4 text-center text-sm">✓</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Documentation</td>
                    <td className="px-6 py-4 text-center text-sm">✓</td>
                    <td className="px-6 py-4 text-center text-sm bg-primary-50/50 dark:bg-primary-900/10">✓ + RCA</td>
                    <td className="px-6 py-4 text-center text-sm">✓ + Custom</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Code Review</td>
                    <td className="px-6 py-4 text-center text-sm">-</td>
                    <td className="px-6 py-4 text-center text-sm bg-primary-50/50 dark:bg-primary-900/10">✓</td>
                    <td className="px-6 py-4 text-center text-sm">✓</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Proactive Suggestions</td>
                    <td className="px-6 py-4 text-center text-sm">-</td>
                    <td className="px-6 py-4 text-center text-sm bg-primary-50/50 dark:bg-primary-900/10">-</td>
                    <td className="px-6 py-4 text-center text-sm">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Free Consultation */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="max-w-4xl mx-auto text-center">
              <Calendar className="w-16 h-16 text-primary-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Free 10-Minute Consultation
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Not sure which plan is right for you? Book a free consultation to discuss your needs and get personalized recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <Clock className="w-5 h-5" />
                  <span>10 minutes</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp or Call</span>
                </div>
              </div>
              <Button size="lg" onClick={handleConsultationClick} className="mt-8">
                Book Free Consultation
              </Button>
            </Card>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}

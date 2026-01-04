'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Phone, Video, FlaskConical, Award, Briefcase } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { siteConfig } from '@/content/site';

export default function Hero() {
  const handleExploreClick = () => {
    const trainingSection = document.getElementById('training');
    trainingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleConsultationClick = () => {
    window.open(`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}?text=Hi! I'd like to get a free consultation about DevOps training programs`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30"></div>

      <Container className="relative z-10 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg inline-block">
              {siteConfig.tagline}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-purple-700 via-pink-600 to-indigo-700 bg-clip-text text-transparent mb-6 leading-tight"
          >
            {siteConfig.hero.headline}
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-800 mb-10 max-w-3xl mx-auto font-semibold"
          >
            {siteConfig.hero.subtext}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button size="lg" onClick={handleExploreClick} className="gap-2 min-w-[200px] bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg font-semibold text-lg">
              {siteConfig.hero.cta1}
            </Button>
            <Button size="lg" variant="outline" onClick={handleConsultationClick} className="gap-2 min-w-[200px] border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all font-semibold text-lg text-gray-700 hover:text-blue-600">
              <MessageCircle className="w-5 h-5" />
              {siteConfig.hero.cta2}
            </Button>
          </motion.div>

          {/* Trust Signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {siteConfig.trustSignals.map((signal, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-blue-400"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                  {signal.icon === 'users' && <Video className="w-8 h-8 text-white" />}
                  {signal.icon === 'code' && <FlaskConical className="w-8 h-8 text-white" />}
                  {signal.icon === 'award' && <Award className="w-8 h-8 text-white" />}
                  {signal.icon === 'briefcase' && <Briefcase className="w-8 h-8 text-white" />}
                </div>
                <span className="text-sm font-bold text-gray-800 text-center leading-tight">
                  {signal.text}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full mx-auto"
          />
        </div>
      </motion.div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { siteConfig } from '@/content/site';

export default function CTA() {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}`, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = `tel:${siteConfig.contact.phone}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${siteConfig.contact.email}`;
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-950 via-purple-950 to-pink-950 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-pink-400 to-purple-600 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-200 via-blue-100 to-purple-200 bg-clip-text text-transparent mb-6 drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]">
            Ready to Start Your DevOps Journey?
          </h2>
          <p className="text-xl bg-gradient-to-r from-gray-200 via-white to-gray-200 bg-clip-text text-transparent mb-8 max-w-2xl mx-auto font-medium">
            Join hundreds of professionals who have transformed their careers with our expert-led DevOps training.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              onClick={handleWhatsAppClick}
              className="gap-2 min-w-[200px] bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-pink-500 hover:via-purple-600 hover:to-cyan-500 shadow-2xl shadow-cyan-500/60 hover:shadow-pink-500/60 transition-all duration-500 border-2 border-white/20 font-bold hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={handleCallClick}
              className="gap-2 min-w-[200px] border-2 border-white/40 bg-white/10 backdrop-blur-sm hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-600 hover:border-transparent shadow-xl shadow-purple-500/40 hover:shadow-pink-500/60 transition-all duration-500 font-bold hover:scale-105 text-white"
            >
              <Phone className="w-5 h-5" />
              Call Us
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={handleEmailClick}
              className="gap-2 min-w-[200px] bg-white text-primary-600 hover:bg-gray-50 border-white"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </Button>
          </div>

          <p className="text-sm text-primary-100">
            Your project details are kept private. We sign NDAs if required.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { siteConfig } from '@/content/site';

export default function ServicesPage() {
  const handleContactClick = () => {
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}`, '_blank');
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            {/* Hero Card */}
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              {/* Gradient Header */}
              <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-8 md:p-12 text-center">
                {/* Animated background */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
                </div>
                
                <div className="relative z-10">
                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-4"
                  >
                    <LucideIcons.Zap className="w-3.5 h-3.5 text-yellow-300" />
                    <span className="text-xs font-semibold text-white">24/7 Expert Support</span>
                  </motion.div>
                  
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    DevOps Job Support
                  </h1>
                  <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mx-auto mb-6">
                    Get unstuck with expert help on CI/CD, Docker, Kubernetes, and Cloud platforms.
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button 
                      size="lg" 
                      onClick={handleContactClick}
                      className="bg-white text-blue-600 hover:bg-gray-100 font-bold shadow-lg"
                    >
                      <LucideIcons.MessageCircle className="w-4 h-4 mr-2" />
                      Get Support Now
                    </Button>
                    <Button 
                      size="lg" 
                      variant="secondary"
                      onClick={() => {
                        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30"
                    >
                      View Services
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Detailed Services */}
      <section id="services" className="py-20 bg-gradient-to-b from-white via-blue-50 to-purple-50">
        <Container>
          {/* Encouragement Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-8 md:p-12">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
              
              <div className="relative z-10 text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                  <LucideIcons.Rocket className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Stuck at work? We're here to help.
                </h2>
                <p className="text-xl text-blue-50 mb-6 leading-relaxed">
                  Get real-time DevOps support when you face issues and keep your work moving without delays.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                    <LucideIcons.Clock className="w-5 h-5 text-white" />
                    <span className="text-white font-semibold">Quick Response</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                    <LucideIcons.Users className="w-5 h-5 text-white" />
                    <span className="text-white font-semibold">Expert Team</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                    <LucideIcons.CheckCircle className="w-5 h-5 text-white" />
                    <span className="text-white font-semibold">Proven Solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: LucideIcons.Users, value: '500+', label: 'Engineers Helped' },
                { icon: LucideIcons.Clock, value: '< 2hr', label: 'Avg Response Time' },
                { icon: LucideIcons.Star, value: '98%', label: 'Success Rate' },
                { icon: LucideIcons.Award, value: '10+', label: 'Years Experience' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all border border-gray-100"
                >
                  <stat.icon className="w-10 h-10 text-blue-500 mb-3 mx-auto" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-20 mt-20">
            {siteConfig.services.map((service, index) => {
              const IconComponent = (LucideIcons as any)[service.icon.split('-').map((word: string) => 
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join('')] || LucideIcons.Box;

              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="scroll-mt-24"
                >
                  <div className="grid md:grid-cols-2 gap-8 items-start bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">
                          {service.title}
                        </h2>
                      </div>
                      <p className="text-base text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <LucideIcons.CheckCircle className="w-5 h-5 text-green-500" />
                        What We Help With:
                      </h3>
                      <ul className="space-y-2.5 mb-6">
                        {service.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <LucideIcons.Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                            <span className="text-sm text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        onClick={handleContactClick}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg shadow-purple-500/30"
                      >
                        <LucideIcons.MessageCircle className="w-4 h-4 mr-2" />
                        Get Help Now
                      </Button>
                    </div>

                    <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <LucideIcons.AlertCircle className="w-5 h-5 text-orange-500" />
                        Typical Issues We Solve:
                      </h3>
                      <ul className="space-y-2.5">
                        {service.typicalIssues.map((issue, i) => (
                          <li key={i} className="flex items-start gap-2.5 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <LucideIcons.AlertTriangle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">{issue}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/30 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-500/30 rounded-full filter blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10 text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-6 border border-white/20">
              <LucideIcons.HelpCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Don't See Your Issue Listed?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We handle a wide range of DevOps challenges across all tools and platforms. Reach out and let's discuss how we can help you succeed.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                variant="secondary" 
                onClick={handleContactClick}
                className="bg-white text-gray-900 hover:bg-gray-100 font-bold shadow-xl px-8 py-4 text-lg"
              >
                <LucideIcons.MessageCircle className="w-5 h-5 mr-2" />
                Contact Us Now
              </Button>
              <Button 
                size="lg" 
                onClick={() => window.open(`tel:${siteConfig.contact.phone}`, '_self')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold shadow-lg shadow-purple-500/30 px-8 py-4 text-lg"
              >
                <LucideIcons.Phone className="w-5 h-5 mr-2" />
                Call Directly
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}

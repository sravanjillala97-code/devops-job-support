"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/content/site";
import SectionTitle from "@/components/ui/SectionTitle";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Clock, Award, BookOpen, Users, ArrowRight } from "lucide-react";
import * as LucideIcons from "lucide-react";

export function Training() {
  const { trainingPrograms } = siteConfig;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="training" className="relative py-16 bg-gradient-to-b from-white via-blue-50 to-purple-50 overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full filter blur-3xl"></div>
      </div>
      
      <Container className="relative z-10">
        <SectionTitle
          centered
          subtitle="Level up your DevOps skills with our comprehensive, hands-on training programs"
        >
          DevOps Training Programs
        </SectionTitle>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 mt-12 max-w-7xl mx-auto"
        >
          {trainingPrograms.map((program, index) => {
            const IconComponent = LucideIcons[
              program.icon as keyof typeof LucideIcons
            ] as React.ComponentType<{ className?: string }>;
            
            // Define color schemes for each program
            const colorScheme = [
              { gradient: 'from-blue-500 to-indigo-600', bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', shadow: 'shadow-blue-500/30' },
              { gradient: 'from-purple-500 to-pink-600', bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200', shadow: 'shadow-purple-500/30' },
              { gradient: 'from-cyan-500 to-blue-600', bg: 'bg-cyan-50', text: 'text-cyan-600', border: 'border-cyan-200', shadow: 'shadow-cyan-500/30' },
              { gradient: 'from-indigo-500 to-purple-600', bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-200', shadow: 'shadow-indigo-500/30' },
              { gradient: 'from-pink-500 to-rose-600', bg: 'bg-pink-50', text: 'text-pink-600', border: 'border-pink-200', shadow: 'shadow-pink-500/30' },
              { gradient: 'from-violet-500 to-purple-600', bg: 'bg-violet-50', text: 'text-violet-600', border: 'border-violet-200', shadow: 'shadow-violet-500/30' },
            ][index % 6];

            return (
              <motion.div key={program.id} variants={itemVariants}>
                <div className="h-full group hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden bg-white border-2 border-gray-100 hover:border-blue-200 hover:-translate-y-2">
                  {/* Colored Header */}
                  <div className={`p-6 bg-gradient-to-br ${colorScheme.gradient} relative overflow-hidden`}>
                    {/* Decorative pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16 -mt-16"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full -ml-12 -mb-12"></div>
                    </div>
                    
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="inline-flex p-3 rounded-2xl bg-white/30 backdrop-blur-sm mb-3 group-hover:scale-110 transition-transform shadow-xl">
                        {IconComponent && (
                          <IconComponent className="w-7 h-7 text-white" />
                        )}
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-2">
                        {program.title}
                      </h3>
                      
                      {/* Info badges */}
                      <div className="flex flex-wrap gap-2">
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/25 backdrop-blur-sm border border-white/40">
                          <Clock className="w-3.5 h-3.5 text-white" />
                          <span className="text-xs font-semibold text-white">
                            {program.duration}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/25 backdrop-blur-sm border border-white/40">
                          <Award className="w-3.5 h-3.5 text-white" />
                          <span className="text-xs font-semibold text-white">
                            {program.level}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* White Content Area */}
                  <div className="p-6">
                    {/* Description */}
                    <p className="text-gray-700 text-sm leading-relaxed mb-5">
                      {program.description}
                    </p>

                    {/* Topics */}
                    <div className="mb-5">
                      <div className="flex items-center gap-2 mb-3">
                        <div className={`p-2 rounded-lg ${colorScheme.bg}`}>
                          <BookOpen className={`w-4 h-4 ${colorScheme.text}`} />
                        </div>
                        <h4 className="text-base font-bold text-gray-900">
                          What You'll Learn
                        </h4>
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        {program.topics.map((topic, topicIndex) => (
                          <div
                            key={topicIndex}
                            className={`flex items-start gap-2.5 p-2.5 rounded-xl ${colorScheme.bg} border ${colorScheme.border} transition-all hover:shadow-md`}
                          >
                            <span className={`${colorScheme.text} mt-0.5 font-bold`}>✓</span>
                            <span className="text-sm text-gray-700 font-medium">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-5">
                      <div className="flex items-center gap-2 mb-3">
                        <div className={`p-2 rounded-lg ${colorScheme.bg}`}>
                          <Users className={`w-4 h-4 ${colorScheme.text}`} />
                        </div>
                        <h4 className="text-base font-bold text-gray-900">
                          Program Features
                        </h4>
                      </div>
                      <ul className="space-y-2">
                        {program.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="text-sm text-gray-700 flex items-start gap-2.5 font-medium"
                          >
                            <span className={`${colorScheme.text} mt-0.5 text-lg`}>•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="mt-6 pt-5 border-t-2 border-gray-100">
                      <Button
                        variant="primary"
                        size="lg"
                        className={`w-full bg-gradient-to-r ${colorScheme.gradient} text-white font-bold text-base py-4 rounded-xl shadow-lg ${colorScheme.shadow} hover:shadow-xl hover:scale-105 transition-all duration-300`}
                        href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}?text=Hi! I'm interested in the ${program.title} program`}
                      >
                        Enroll Now
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 rounded-3xl bg-white border-2 border-gray-200 shadow-2xl relative overflow-hidden max-w-2xl">
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            <div className="relative z-10 pt-3">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Not Sure Which Program Is Right for You?
              </h3>
              <p className="text-gray-600 text-base mb-6 max-w-xl mx-auto leading-relaxed">
                Book a free consultation call and we'll help you choose the perfect training path based on your current skills and career goals.
              </p>
              <Button
                variant="primary"
                size="lg"
                className="shadow-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold text-lg px-10 py-6 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}?text=Hi! I'd like to discuss which DevOps training program is right for me`}
              >
                Get Free Consultation
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

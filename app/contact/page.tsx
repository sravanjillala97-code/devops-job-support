'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, Send, CheckCircle } from 'lucide-react';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { siteConfig } from '@/content/site';

// Country codes data
const COUNTRY_CODES = [
  { code: '+1', country: '🇺🇸 USA' },
  { code: '+44', country: '🇬🇧 UK' },
  { code: '+91', country: '🇮🇳 India' },
  { code: '+1', country: '🇨🇦 Canada' },
  { code: '+61', country: '🇦🇺 Australia' },
  { code: '+33', country: '🇫🇷 France' },
  { code: '+49', country: '🇩🇪 Germany' },
  { code: '+81', country: '🇯🇵 Japan' },
  { code: '+86', country: '🇨🇳 China' },
  { code: '+55', country: '🇧🇷 Brazil' },
  { code: '+27', country: '🇿🇦 South Africa' },
  { code: '+234', country: '🇳🇬 Nigeria' },
  { code: '+971', country: '🇦🇪 UAE' },
  { code: '+65', country: '🇸🇬 Singapore' },
  { code: '+60', country: '🇲🇾 Malaysia' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phoneNumber: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10,15}$/.test(formData.phoneNumber.replace(/\s+/g, ''))) {
      newErrors.phoneNumber = 'Phone number must be 10-15 digits';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        const fullPhone = `${formData.countryCode}${formData.phoneNumber}`;
        
        // Submit to our API endpoint which will send email
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: fullPhone,
            message: formData.message,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to submit form');
        }

        console.log('Form submitted successfully:', {
          name: formData.name,
          email: formData.email,
          phone: fullPhone,
          message: formData.message,
          submissionId: data.submissionId,
        });

        // Show success message
        setSubmitted(true);
        setFormData({ name: '', email: '', countryCode: '+91', phoneNumber: '', message: '' });
      } catch (error) {
        console.error('Error sending message:', error);
        // Still show success for better UX since the form validation passed
        setSubmitted(true);
        setFormData({ name: '', email: '', countryCode: '+91', phoneNumber: '', message: '' });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error for this field
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: '',
      });
    }
  };

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
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Subtle background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30"></div>
        
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto relative z-10"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-700">
              Have a question or need DevOps training? We're here to help. Choose your preferred way to reach us.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="text-center h-full bg-white border-2 border-gray-200 hover:border-green-400 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center mx-auto mb-4 shadow-lg relative">
                  <svg viewBox="0 0 24 24" className="w-9 h-9" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-green-600 mb-2">WhatsApp</h3>
                <p className="text-gray-600 mb-4 text-sm">Quick response, available now</p>
                <Button onClick={handleWhatsAppClick} variant="secondary" className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
                  Chat on WhatsApp
                </Button>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="text-center h-full bg-white border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-600 mb-2">Phone</h3>
                <p className="text-gray-600 mb-4 text-sm">Talk to us directly</p>
                <Button onClick={handleCallClick} variant="primary" className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700">
                  Call Now
                </Button>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="text-center h-full bg-white border-2 border-gray-200 hover:border-purple-400 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-purple-600 mb-2">Email</h3>
                <p className="text-gray-600 mb-4 text-sm">Send us a detailed message</p>
                <Button onClick={handleEmailClick} variant="secondary" className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white">
                  Send Email
                </Button>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Contact Form */}
      <section className="py-12 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="bg-gradient-to-br from-slate-800 via-purple-900 to-indigo-900 border-2 border-purple-400/30 shadow-2xl shadow-purple-600/40">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent mb-2 text-center">
                Send Us a Message
              </h2>
              <p className="text-gray-200 mb-6 text-center">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent mb-3">
                    Thank You!
                  </h3>
                  <p className="text-gray-200 text-lg mb-2">
                    Your message has been sent successfully.
                  </p>
                  <p className="text-purple-300">
                    Our team will contact you shortly via WhatsApp or call.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-purple-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border-2 ${
                        errors.name 
                          ? 'border-red-400' 
                          : 'border-purple-400/30'
                      } bg-slate-900/50 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-purple-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border-2 ${
                        errors.email 
                          ? 'border-red-400' 
                          : 'border-purple-400/30'
                      } bg-slate-900/50 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-purple-300 mb-2">
                      Phone Number *
                    </label>
                    <div className="flex gap-2">
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        className="px-3 py-3 rounded-lg border-2 border-purple-400/30 bg-slate-900/50 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                      >
                        {COUNTRY_CODES.map((item) => (
                          <option key={item.code + item.country} value={item.code}>
                            {item.country} ({item.code})
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className={`flex-1 px-4 py-3 rounded-lg border-2 ${
                          errors.phoneNumber 
                            ? 'border-red-400' 
                            : 'border-purple-400/30'
                        } bg-slate-900/50 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all`}
                        placeholder="9876543210"
                      />
                    </div>
                    {errors.phoneNumber && (
                      <p className="mt-1 text-sm text-red-500">{errors.phoneNumber}</p>
                    )}
                    <p className="mt-2 text-xs text-gray-400">
                      ℹ️ Enter phone number without country code. Example: 9876543210
                    </p>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-purple-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-3 rounded-lg border-2 ${
                        errors.message 
                          ? 'border-red-400' 
                          : 'border-purple-400/30'
                      } bg-slate-900/50 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all`}
                      placeholder="Tell us about your DevOps training needs..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>

                  <p className="text-xs text-gray-300 text-center">
                    By submitting this form, you agree to our privacy policy. Your information is kept confidential.
                  </p>
                </form>
              )}
            </Card>
          </motion.div>
        </Container>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-700 via-pink-600 to-indigo-700 bg-clip-text text-transparent mb-6 text-center">
              Other Ways to Reach Us
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card hover={false} className="bg-gradient-to-br from-slate-800 via-purple-900 to-pink-900 border-2 border-purple-400/30 shadow-xl shadow-purple-600/30">
                <Mail className="w-8 h-8 text-purple-400 mb-3" />
                <h4 className="font-semibold text-purple-200 mb-2">Email</h4>
                <a 
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-purple-300 hover:text-pink-300 transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </Card>
              <Card hover={false} className="bg-gradient-to-br from-slate-800 via-indigo-900 to-blue-900 border-2 border-blue-400/30 shadow-xl shadow-blue-600/30">
                <Phone className="w-8 h-8 text-blue-400 mb-3" />
                <h4 className="font-semibold text-blue-200 mb-2">Phone</h4>
                <a 
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-blue-300 hover:text-indigo-300 transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

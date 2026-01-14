'use client';

import Link from 'next/link';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import Container from '../ui/Container';
import { siteConfig } from '@/content/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleServiceClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes('#training')) {
      e.preventDefault();
      if (window.location.pathname === '/') {
        // Already on home page, just scroll
        const element = document.getElementById('training');
        element?.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Navigate to home page with hash
        window.location.href = '/#training';
      }
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-gray-300 pt-16 pb-8 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full filter blur-3xl"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/50 animate-pulse">
                <span className="text-white font-bold text-xl">DT</span>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-cyan-200 to-purple-200 bg-clip-text text-transparent">{siteConfig.name}</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              {siteConfig.footer.description}
            </p>
            <div className="flex gap-3">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center hover:from-green-500 hover:to-green-600 transition-all duration-300 shadow-lg shadow-green-500/30 hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-700 flex items-center justify-center hover:from-blue-500 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-pink-700 flex items-center justify-center hover:from-purple-500 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-purple-500/30 hover:scale-110"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {siteConfig.footer.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              {siteConfig.footer.services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    onClick={(e) => handleServiceClick(e, service.href)}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <a 
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <a 
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#25D366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <a 
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                >
                  WhatsApp Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {siteConfig.footer.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}

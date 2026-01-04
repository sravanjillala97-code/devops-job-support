'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail, MessageCircle } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { siteConfig } from '@/content/site';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'DevOps Job Support', href: '/services' },
  { name: 'Training Programs', href: '/#training' },
  { name: 'Testimonials', href: '/#testimonials' },
  { name: 'FAQ', href: '/#faq' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Track active section on home page
      if (isHomePage) {
        const sections = ['training', 'testimonials', 'faq'];
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 150 && rect.bottom >= 150;
          }
          return false;
        });
        setActiveSection(currentSection || '');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isContactDropdownOpen) {
        const target = event.target as HTMLElement;
        if (!target.closest('.contact-dropdown')) {
          setIsContactDropdownOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isContactDropdownOpen]);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      const targetId = href.substring(2);
      
      // If not on home page, navigate to home page with hash
      if (!isHomePage) {
        // Let the default navigation happen
        return;
      }
      
      // If on home page, smooth scroll to section
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        setIsMobileMenuOpen(false);
      }
    }
  };

  const handleContactClick = () => {
    setIsContactDropdownOpen(!isContactDropdownOpen);
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}`, '_blank');
    setIsContactDropdownOpen(false);
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${siteConfig.contact.phone}`;
    setIsContactDropdownOpen(false);
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${siteConfig.contact.email}`;
    setIsContactDropdownOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-950/95 backdrop-blur-md shadow-lg shadow-purple-500/20 border-b border-purple-500/20' 
        : 'bg-slate-950/80 backdrop-blur-sm'
    }`}>
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/50">
              <span className="text-white font-bold text-xl">DT</span>
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent group-hover:from-pink-300 group-hover:to-purple-300 transition-all duration-300">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = link.href.startsWith('/#')
                ? activeSection === link.href.substring(2)
                : pathname === link.href;
              
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith('/#')) {
                      handleSmoothScroll(e, link.href);
                    } else if (link.href === '/' && isHomePage) {
                      // If on home page and clicking Home, scroll to top
                      e.preventDefault();
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                      });
                      setIsMobileMenuOpen(false);
                    } else {
                      // For navigation to different pages
                      setIsMobileMenuOpen(false);
                    }
                  }}
                  className={`px-4 py-2 rounded-lg text-base font-bold transition-all duration-300 relative overflow-hidden group ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border border-purple-400/30'
                      : 'text-gray-300 hover:text-white hover:bg-purple-500/10'
                  }`}
                >
                  {/* Shining effect */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                  <span className="relative z-10">
                  {link.name}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <Button size="md" className="gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 shadow-lg shadow-purple-500/30">
                <Phone className="w-4 h-4" />
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-purple-500/10 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-purple-500/30 bg-slate-950/98 backdrop-blur-md shadow-lg">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = link.href.startsWith('/#')
                  ? activeSection === link.href.substring(2)
                  : pathname === link.href;
                
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith('/#')) {
                        handleSmoothScroll(e, link.href);
                      } else if (link.href === '/' && isHomePage) {
                        // If on home page and clicking Home, scroll to top
                        e.preventDefault();
                        window.scrollTo({
                          top: 0,
                          behavior: 'smooth'
                        });
                        setIsMobileMenuOpen(false);
                      } else {
                        setIsMobileMenuOpen(false);
                      }
                    }}
                    className={`px-4 py-3 rounded-lg text-base font-bold transition-all duration-300 relative overflow-hidden group ${
                      isActive
                        ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border border-purple-400/30'
                        : 'text-gray-300 hover:text-white hover:bg-purple-500/10'
                    }`}
                  >
                    {/* Shining effect */}
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                    <span className="relative z-10">
                    {link.name}
                    </span>
                  </Link>
                );
              })}
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-2">
                <Button className="gap-2 w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 shadow-lg shadow-purple-500/30">
                  <Phone className="w-4 h-4" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}

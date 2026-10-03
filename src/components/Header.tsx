import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown, GraduationCap, Award, ShieldCheck, MapPin, MessageCircle } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface HeaderProps {
  onOpenEnquiry?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { 
      name: 'Academics', 
      path: '/academics',
      children: [
        { name: 'Curriculum & Streams', path: '/academics#curriculum' },
        { name: 'Foundational Stage', path: '/academics#pre-primary' },
        { name: 'Middle & Secondary', path: '/academics#middle' },
        { name: 'STEM & Robotics Hub', path: '/academics#stem' }
      ]
    },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Campus & Facilities', path: '/campus' },
    { name: 'Student Life', path: '/student-life' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Bar / Announcement Ribbon */}
      <div className="bg-primary text-secondary text-xs font-medium py-2 px-4 sm:px-8 border-b border-accent/20">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center gap-1.5 text-accent font-semibold uppercase tracking-wider text-[10px] bg-accent/10 px-2 py-0.5 rounded border border-accent/30">
              <ShieldCheck className="w-3 h-3 text-accent" /> CBSE Affiliated 1930482
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-white/80">
              <MapPin className="w-3 h-3 text-accent" /> Knowledge Corridor, New Delhi
            </span>
          </div>

          <div className="flex items-center space-x-4 sm:space-x-6 text-white/90 text-[11px] sm:text-xs">
            <a 
              href={`tel:${SCHOOL_INFO.admissionsHelpline}`} 
              className="inline-flex items-center gap-1.5 hover:text-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
            >
              <Phone className="w-3 h-3 text-accent" />
              <span>Call: <strong className="text-white">{SCHOOL_INFO.admissionsHelpline}</strong></span>
            </a>
            <a 
              href="https://wa.me/919876543210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold focus:outline-none transition-colors"
            >
              <MessageCircle className="w-3 h-3 fill-emerald-400 text-primary" />
              <span>WhatsApp</span>
            </a>
            <a 
              href={`mailto:${SCHOOL_INFO.email}`} 
              className="hidden lg:inline-flex items-center gap-1.5 hover:text-accent focus:outline-none transition-colors"
            >
              <Mail className="w-3 h-3 text-accent" />
              <span>{SCHOOL_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        aria-label="Main Navigation"
        className={`w-full ${isScrolled ? 'bg-primary/95 backdrop-blur-md shadow-xl border-b border-accent/20 py-2.5' : 'bg-primary py-3.5'} transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Crest */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-accent rounded-lg p-1">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full gold-gradient-bg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg sm:text-2xl font-bold tracking-tight text-white leading-tight">
                Oakridge
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold tracking-widest text-accent uppercase font-body">
                International Academy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              if (link.children) {
                return (
                  <div 
                    key={link.name} 
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      to={link.path}
                      className={`relative inline-flex items-center gap-1 px-3 py-2 text-xs xl:text-sm font-medium rounded-md transition-colors focus:outline-none focus:ring-1 focus:ring-accent ${
                        isActive ? 'text-accent font-semibold bg-white/10' : 'text-white/90 hover:text-accent hover:bg-white/5'
                      }`}
                    >
                      {link.name}
                      <ChevronDown className="w-3.5 h-3.5 text-accent/80" />
                    </Link>

                    {/* Dropdown Menu */}
                    {activeDropdown === link.name && (
                      <div className="absolute top-full left-0 w-56 pt-2 z-50 animate-fade-in">
                        <div className="bg-primary/95 backdrop-blur-xl border border-accent/30 rounded-xl shadow-2xl p-2 space-y-1">
                          {link.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.path}
                              className="block px-3 py-2 text-xs text-white/90 hover:text-accent hover:bg-white/10 rounded-lg transition-colors focus:outline-none focus:bg-white/10"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-3 py-2 text-xs xl:text-sm font-medium rounded-md transition-colors focus:outline-none focus:ring-1 focus:ring-accent ${
                    isActive ? 'text-accent font-semibold bg-white/10' : 'text-white/90 hover:text-accent hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 gold-gradient-bg rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Enquire CTA Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={onOpenEnquiry}
              className="gold-gradient-bg text-primary font-body font-bold text-xs xl:text-sm px-5 py-2.5 rounded-lg shadow-md hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <Award className="w-4 h-4" />
              <span>Enquire Now</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle & Touch CTAs */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenEnquiry}
              className="gold-gradient-bg text-primary text-xs font-bold px-3 py-1.5 rounded-md shadow-sm active:scale-95"
            >
              Enquire
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white/90 hover:text-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Toggle Navigation Menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-accent" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[88px] bg-primary/98 border-b border-accent/30 backdrop-blur-2xl shadow-2xl z-40 max-h-[calc(100vh-88px)] overflow-y-auto">
          <div className="px-6 py-6 space-y-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.path}
                  className={`block py-3 text-base font-medium border-b border-white/5 active:bg-white/5 px-2 rounded ${
                    location.pathname === link.path ? 'text-accent font-bold' : 'text-white/90'
                  }`}
                >
                  {link.name}
                </Link>
              </div>
            ))}

            <div className="pt-4 space-y-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (onOpenEnquiry) onOpenEnquiry();
                }}
                className="w-full gold-gradient-bg text-primary font-bold text-center py-3.5 rounded-lg shadow-lg flex items-center justify-center gap-2 text-sm"
              >
                <Award className="w-4 h-4" />
                <span>Book Admission Counselling</span>
              </button>

              <a
                href={`tel:${SCHOOL_INFO.admissionsHelpline}`}
                className="w-full bg-white/10 text-white font-semibold text-center py-3 rounded-lg border border-accent/30 flex items-center justify-center gap-2 text-xs"
              >
                <Phone className="w-4 h-4 text-accent" />
                <span>Call Admissions: {SCHOOL_INFO.admissionsHelpline}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

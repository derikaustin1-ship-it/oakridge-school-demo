import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, MapPin, Phone, Mail, Clock, ShieldAlert } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-secondary pt-16 pb-8 border-t border-accent/20">
      {/* Portfolio Demo Disclaimer Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-amber-200/90 text-xs sm:text-sm">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-amber-300 font-semibold block sm:inline">Portfolio Demonstration Notice: </strong>
              <span>
                Oakridge International Academy is a fictional school created solely for web design and development demonstration purposes.
                It is not affiliated with any real educational institution.
              </span>
            </div>
          </div>
          <span className="text-[11px] font-mono text-amber-400/70 whitespace-nowrap bg-amber-500/10 px-2 py-1 rounded">
            DEMO VERSION 1.0
          </span>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Col 1: Brand & Crest */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full gold-gradient-bg flex items-center justify-center shadow-md">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <div>
              <span className="font-heading text-xl font-bold text-white block leading-tight">
                Oakridge
              </span>
              <span className="text-[10px] tracking-widest text-accent uppercase font-body font-semibold">
                International Academy
              </span>
            </div>
          </div>
          <p className="text-xs text-white/70 leading-relaxed">
            "{SCHOOL_INFO.tagline}" – Empowering students through holistic CBSE education, STEM innovation, and global values since {SCHOOL_INFO.established}.
          </p>
          <div className="pt-2 text-xs text-accent font-mono space-y-1">
            <p>CBSE Affiliation No: <span className="text-white">1930482</span></p>
            <p>School Code: <span className="text-white">{SCHOOL_INFO.schoolCode}</span></p>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="space-y-3">
          <h3 className="font-heading text-lg font-semibold text-white border-b border-accent/20 pb-2">
            Quick Navigation
          </h3>
          <ul className="space-y-2 text-xs text-white/80">
            <li><Link to="/about" className="hover:text-accent transition-colors">About Our Legacy & Vision</Link></li>
            <li><Link to="/academics" className="hover:text-accent transition-colors">Academic Streams & CBSE</Link></li>
            <li><Link to="/admissions" className="hover:text-accent transition-colors">Admissions Process & Criteria</Link></li>
            <li><Link to="/campus" className="hover:text-accent transition-colors">Campus Facilities & Labs</Link></li>
            <li><Link to="/student-life" className="hover:text-accent transition-colors">Clubs, Houses & Co-Curriculars</Link></li>
            <li><Link to="/achievements" className="hover:text-accent transition-colors">Hall of Fame & Laurels</Link></li>
            <li><Link to="/gallery" className="hover:text-accent transition-colors">Photo & Video Gallery</Link></li>
          </ul>
        </div>

        {/* Col 3: Academics & Wings */}
        <div className="space-y-3">
          <h3 className="font-heading text-lg font-semibold text-white border-b border-accent/20 pb-2">
            Academics & Wings
          </h3>
          <ul className="space-y-2 text-xs text-white/80">
            <li><Link to="/academics#pre-primary" className="hover:text-accent transition-colors">Foundational Stage (Pre-Primary)</Link></li>
            <li><Link to="/academics#primary" className="hover:text-accent transition-colors">Preparatory Stage (Class III - V)</Link></li>
            <li><Link to="/academics#middle" className="hover:text-accent transition-colors">Middle Stage (Class VI - VIII)</Link></li>
            <li><Link to="/academics#secondary" className="hover:text-accent transition-colors">Senior Secondary (PCM / PCB / Commerce / Arts)</Link></li>
            <li><Link to="/academics#stem" className="hover:text-accent transition-colors">Robotics & AI Innovation Hub</Link></li>
            <li><Link to="/admissions#fees" className="hover:text-accent transition-colors">Fee Structure & Transparency</Link></li>
          </ul>
        </div>

        {/* Col 4: Contact Info */}
        <div className="space-y-3">
          <h3 className="font-heading text-lg font-semibold text-white border-b border-accent/20 pb-2">
            Contact Admissions
          </h3>
          <div className="space-y-3 text-xs text-white/80">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <span>{SCHOOL_INFO.address}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-accent shrink-0" />
              <span>{SCHOOL_INFO.admissionsHelpline}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-accent shrink-0" />
              <span>{SCHOOL_INFO.email}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-accent shrink-0" />
              <span>{SCHOOL_INFO.hours}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
        <p>© {new Date().getFullYear()} Oakridge International Academy (Fictional Demo). All rights reserved.</p>
        <div className="flex items-center space-x-6">
          <Link to="/contact" className="hover:text-accent">Contact</Link>
          <span className="text-white/20">•</span>
          <Link to="/admissions" className="hover:text-accent">Admissions Policy</Link>
          <span className="text-white/20">•</span>
          <span className="text-accent/80 font-mono">Portfolio Demo</span>
        </div>
      </div>
    </footer>
  );
};

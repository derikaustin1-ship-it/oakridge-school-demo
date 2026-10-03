import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { 
  QUICK_STATS, 
  ACADEMIC_PROGRAMS, 
  FACILITIES, 
  ACHIEVEMENTS, 
  TESTIMONIALS, 
  SCHOOL_INFO 
} from '../data/schoolData';
import { 
  ArrowRight, 
  Award, 
  BookOpen, 
  Compass, 
  Cpu, 
  Globe, 
  HeartHandshake, 
  ShieldCheck, 
  Sparkles, 
  Star, 
  Users, 
  CheckCircle2, 
  ChevronRight,
  Phone
} from 'lucide-react';

interface HomeProps {
  onOpenEnquiry?: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenEnquiry }) => {
  const [selectedFacilityCategory, setSelectedFacilityCategory] = useState<string>('All');

  const facilityCategories = ['All', 'Infrastructure', 'Sports', 'Technology', 'Wellness'];

  const filteredFacilities = selectedFacilityCategory === 'All'
    ? FACILITIES
    : FACILITIES.filter(f => f.category === selectedFacilityCategory);

  return (
    <>
      <SEOHead 
        title="Oakridge International Academy | Premier CBSE School in New Delhi" 
        description="Oakridge International Academy offers world-class CBSE education, state-of-the-art STEM robotics labs, 15-acre green campus, and 100% board results."
      />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center bg-primary overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero.jpg" 
            alt="Oakridge International Academy 15-Acre Eco Campus" 
            className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity scale-105 transform hover:scale-100 transition-transform duration-1000"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-accent/40 text-accent px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>Admissions Open for Academic Session 2026-27</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.15] max-w-5xl mx-auto drop-shadow-sm">
            Where Curiosity Becomes <span className="gold-gradient-text italic font-serif">Confidence</span>.
          </h1>

          {/* Subheading */}
          <p className="mt-4 sm:mt-6 text-sm sm:text-lg lg:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed font-body font-normal">
            Oakridge International Academy is a premier co-educational CBSE institution nurturing future-ready global leaders through academic rigor, STEM innovation, and timeless values.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-md sm:max-w-none mx-auto">
            <button
              onClick={onOpenEnquiry}
              className="w-full sm:w-auto gold-gradient-bg text-primary font-body font-bold text-xs sm:text-sm px-7 py-3.5 sm:py-4 rounded-lg shadow-xl hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <Award className="w-4 h-4" />
              <span>Apply for Admission 2026-27</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <Link
              to="/campus"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-body font-semibold text-xs sm:text-sm px-7 py-3.5 sm:py-4 rounded-lg border border-accent/40 backdrop-blur-md transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <BookOpen className="w-4 h-4 text-accent" />
              <span>Explore 15-Acre Campus</span>
            </Link>
          </div>

          {/* Key Accreditation Badges */}
          <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left">
            <div className="flex items-center gap-3 p-2 rounded-lg bg-white/5 sm:bg-transparent border border-white/10 sm:border-none">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] sm:text-xs font-bold text-white uppercase tracking-wider">CBSE Affiliated</p>
                <p className="text-[10px] sm:text-[11px] text-white/70">No. 1930482</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2 rounded-lg bg-white/5 sm:bg-transparent border border-white/10 sm:border-none">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] sm:text-xs font-bold text-white uppercase tracking-wider">100% Board Pass</p>
                <p className="text-[10px] sm:text-[11px] text-white/70">91.4% School Average</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2 rounded-lg bg-white/5 sm:bg-transparent border border-white/10 sm:border-none">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] sm:text-xs font-bold text-white uppercase tracking-wider">15:1 Ratio</p>
                <p className="text-[10px] sm:text-[11px] text-white/70">Personalized Care</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2 rounded-lg bg-white/5 sm:bg-transparent border border-white/10 sm:border-none">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] sm:text-xs font-bold text-white uppercase tracking-wider">Robotics & AI</p>
                <p className="text-[10px] sm:text-[11px] text-white/70">Tinker Innovation Hub</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS & HIGHLIGHTS STRIP */}
      <section className="bg-secondary/70 py-10 sm:py-12 border-y border-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 text-center">
            {QUICK_STATS.map((stat, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/80 border border-accent/20 shadow-sm hover:shadow-md transition-shadow">
                <p className="font-heading text-2xl sm:text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-xs font-bold text-primary/90 mt-1 uppercase tracking-wider font-body">{stat.label}</p>
                <p className="text-[11px] text-primary/60 mt-0.5 font-body">{stat.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WELCOME & VISION FROM PRINCIPAL */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Image & Quote Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-secondary max-w-md mx-auto lg:max-w-none">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                  alt="Principal Dr. Meenakshi Sundaram"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/20 rounded-full blur-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary/10 rounded-full blur-2xl -z-10" />

              <div className="mt-4 lg:mt-0 lg:absolute lg:-bottom-6 lg:-right-6 bg-primary text-white p-4 rounded-xl shadow-xl max-w-xs border border-accent/30 mx-auto">
                <p className="text-xs font-heading italic text-accent leading-relaxed">
                  "Education is not the filling of a pail, but the lighting of a fire."
                </p>
                <p className="text-[10px] text-white/70 mt-1 font-semibold">— Dr. M. Sundaram, Principal</p>
              </div>
            </div>

            {/* Vision & Message Text */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-2 text-accent font-semibold text-xs tracking-widest uppercase font-body">
                <BookOpen className="w-4 h-4" />
                <span>Leadership Message</span>
              </div>
              
              <h2 className="font-heading text-2xl sm:text-4xl font-bold text-primary leading-tight">
                Welcome to Oakridge International Academy
              </h2>

              <p className="text-xs sm:text-base text-gray-700 leading-relaxed font-body">
                At Oakridge, we believe every child possesses a unique spark of intellect and creativity. Situated on a serene 15-acre eco-friendly campus in New Delhi, our academy blends CBSE academic rigor with experiential learning, global cultural awareness, and character synthesis.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold text-primary uppercase font-body">Holistic CBSE Pedagogy</h3>
                    <p className="text-xs text-gray-600 font-body">Integrates National Education Policy (NEP 2020) framework with inquiry-led modules.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold text-primary uppercase font-body">Individualized Student Care</h3>
                    <p className="text-xs text-gray-600 font-body">Strict 15:1 ratio ensuring every child receives personalized academic & emotional mentorship.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-6">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-primary font-bold text-xs sm:text-sm hover:text-accent transition-colors group focus:outline-none"
                >
                  <span>Read Full Leadership Vision</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ACADEMIC EXCELLENCE STREAMS */}
      <section className="py-16 sm:py-20 bg-secondary/40 border-y border-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-accent font-semibold text-xs tracking-widest uppercase font-body block mb-2">
              Structured Progression
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-primary">
              Academic Wings & Curriculum
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 sm:mt-3 font-body">
              Designed according to CBSE standards and NEP 2020 guidelines to ensure seamless transitions from foundational years to Senior Secondary streams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {ACADEMIC_PROGRAMS.map((program) => (
              <div 
                key={program.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-accent/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-primary text-accent text-[11px] font-bold px-2.5 py-1 rounded shadow">
                    {program.grades}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-primary group-hover:text-accent transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-xs text-gray-600 mt-2 leading-relaxed font-body">
                      {program.description}
                    </p>
                  </div>

                  <div className="border-t border-gray-100 pt-3">
                    <p className="text-[11px] font-bold text-primary/80 uppercase tracking-wider mb-2 font-body">Key Highlights:</p>
                    <ul className="space-y-1.5">
                      {program.features.slice(0, 3).map((feat, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-center gap-1.5 font-body">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={`/academics#${program.id}`}
                    className="pt-2 inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-accent group-hover:translate-x-1 transition-all focus:outline-none"
                  >
                    <span>Explore Wing Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE OAKRIDGE (4 CORE PILLARS) */}
      <section className="py-16 sm:py-20 bg-primary text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-accent font-semibold text-xs tracking-widest uppercase font-body block mb-2">
              Our Educational Ethos
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white">
              The Four Pillars of Oakridge Excellence
            </h2>
            <p className="text-xs sm:text-sm text-white/70 mt-2 sm:mt-3 font-body">
              We prepare students not just for examinations, but for a lifetime of leadership, empathy, and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-accent/50 transition-all space-y-4">
              <div className="w-12 h-12 rounded-lg gold-gradient-bg flex items-center justify-center text-primary shadow-md">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white">Holistic Pedagogy</h3>
              <p className="text-xs text-white/70 leading-relaxed font-body">
                Integrating academics with sports, visual arts, music, and public speaking to nourish body, mind, and spirit.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-accent/50 transition-all space-y-4">
              <div className="w-12 h-12 rounded-lg gold-gradient-bg flex items-center justify-center text-primary shadow-md">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white">STEM & AI Hub</h3>
              <p className="text-xs text-white/70 leading-relaxed font-body">
                Advanced tinkering labs equipped with 3D printers, micro-controllers, and AI programming modules for real-world problem solving.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-accent/50 transition-all space-y-4">
              <div className="w-12 h-12 rounded-lg gold-gradient-bg flex items-center justify-center text-primary shadow-md">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white">Global Perspective</h3>
              <p className="text-xs text-white/70 leading-relaxed font-body">
                Model United Nations, international cultural exchanges, and global university counselling cells preparing global citizens.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-accent/50 transition-all space-y-4">
              <div className="w-12 h-12 rounded-lg gold-gradient-bg flex items-center justify-center text-primary shadow-md">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white">Values & Integrity</h3>
              <p className="text-xs text-white/70 leading-relaxed font-body">
                Community service projects, environmental sustainability initiatives, and ethical leadership programs embedded in daily life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CAMPUS & FACILITIES HIGHLIGHT */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
            <div>
              <span className="text-accent font-semibold text-xs tracking-widest uppercase font-body block mb-2">
                15-Acre Eco Smart Campus
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl font-bold text-primary">
                World-Class Infrastructure
              </h2>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {facilityCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedFacilityCategory(cat)}
                  className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs font-semibold transition-all focus:outline-none ${
                    selectedFacilityCategory === cat
                      ? 'bg-primary text-accent shadow-md font-bold'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredFacilities.map((fac) => (
              <div 
                key={fac.id}
                className="group rounded-xl overflow-hidden shadow-md border border-gray-200 hover:shadow-xl transition-all flex flex-col"
              >
                <div className="relative h-52 sm:h-56 overflow-hidden">
                  <img 
                    src={fac.image} 
                    alt={fac.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-primary/90 text-accent text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded border border-accent/20">
                    {fac.category}
                  </span>
                </div>
                <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-primary group-hover:text-accent transition-colors">
                      {fac.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed font-body mt-2">
                      {fac.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 sm:mt-12 text-center">
            <Link
              to="/campus"
              className="inline-flex items-center gap-2 gold-gradient-bg text-primary font-bold text-xs sm:text-sm px-6 py-3.5 rounded-lg shadow hover:brightness-105 transition-all focus:outline-none"
            >
              <span>Explore All Campus Facilities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. WALL OF HONOR / KEY ACHIEVEMENTS */}
      <section className="py-16 sm:py-20 bg-secondary/50 border-t border-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-accent font-semibold text-xs tracking-widest uppercase font-body block mb-2">
              Excellence Recognized
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-primary">
              Wall of Honor & Recent Laurels
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 font-body">
              Celebrating the outstanding achievements of our scholars in CBSE Board exams, national STEM competitions, and sports meets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACHIEVEMENTS.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-xl border border-accent/20 shadow-md hover:-translate-y-1 transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-accent bg-primary px-2.5 py-1 rounded">
                    {item.year}
                  </span>
                  <span className="text-[10px] font-bold text-primary uppercase bg-accent/20 px-2 py-0.5 rounded">
                    {item.badge}
                  </span>
                </div>
                <h3 className="font-heading text-base font-bold text-primary leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-body">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10">
            <Link to="/achievements" className="text-xs font-bold text-primary hover:text-accent inline-flex items-center gap-1 focus:outline-none">
              <span>View Complete Hall of Fame</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. PARENT TESTIMONIALS */}
      <section className="py-16 sm:py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-accent font-semibold text-xs tracking-widest uppercase font-body block mb-2">
              Community Voices
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white">
              What Parents Say About Oakridge
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-white/90 italic leading-relaxed font-serif">
                    "{t.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <img 
                    src={t.avatar} 
                    alt={t.parentName}
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-accent" 
                    loading="lazy"
                  />
                  <div>
                    <h3 className="font-heading text-sm font-bold text-white">{t.parentName}</h3>
                    <p className="text-[11px] text-accent font-body">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. ADMISSIONS CTA BANNER */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-accent/20 via-secondary to-accent/20 border-t border-accent/30 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full gold-gradient-bg flex items-center justify-center mx-auto shadow-lg">
            <Award className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
          </div>

          <h2 className="font-heading text-2xl sm:text-5xl font-bold text-primary leading-tight">
            Begin Your Child's Journey of Excellence Today
          </h2>

          <p className="text-xs sm:text-base text-gray-700 max-w-2xl mx-auto font-body">
            Admissions for the 2026-27 academic session are now open for Pre-Nursery through Class XI. Schedule a personalized campus walkthrough with our admissions counsellors.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-md sm:max-w-none mx-auto">
            <button
              onClick={onOpenEnquiry}
              className="w-full sm:w-auto gold-gradient-bg text-primary font-bold text-xs sm:text-sm px-8 py-4 rounded-lg shadow-xl hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 focus:outline-none"
            >
              <span>Schedule Campus Interaction</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${SCHOOL_INFO.admissionsHelpline}`}
              className="w-full sm:w-auto bg-primary text-white font-bold text-xs sm:text-sm px-8 py-4 rounded-lg shadow-md hover:bg-primary/90 transition-all flex items-center justify-center gap-2 focus:outline-none"
            >
              <Phone className="w-4 h-4 text-accent" />
              <span>Call Helpline: {SCHOOL_INFO.admissionsHelpline}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

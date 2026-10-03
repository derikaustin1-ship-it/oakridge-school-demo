import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { ACADEMIC_PROGRAMS } from '../data/schoolData';
import { BookOpen, Cpu, CheckCircle2, Download, FileText } from 'lucide-react';

interface AcademicsProps {
  onOpenEnquiry?: () => void;
}

export const Academics: React.FC<AcademicsProps> = ({ onOpenEnquiry }) => {
  const streams = [
    {
      name: "Science Stream (PCM / PCB)",
      subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "Computer Science / Python", "Biotechnology", "English Core"],
      outcomes: "Integrated preparation for JEE Main/Advanced, NEET UG, IISER, CUET, and international engineering/medical admissions."
    },
    {
      name: "Commerce Stream",
      subjects: ["Accountancy", "Business Studies", "Economics", "Applied Mathematics", "Informatics Practices", "Entrepreneurship", "English Core"],
      outcomes: "Prepares students for CA Foundation, IPMAT (IIMs), CLAT, Economics Honours, and global business schools."
    },
    {
      name: "Humanities & Liberal Arts Stream",
      subjects: ["Psychology", "Political Science", "Sociology", "Economics", "History", "Fine Arts / Commercial Art", "English Core"],
      outcomes: "Ideal for aspiring Law, Civil Services, Design, International Relations, Journalism, and Psychology scholars."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Academics & CBSE Curriculum | Oakridge International Academy" 
        description="Explore CBSE streams (Science, Commerce, Humanities), STEM Robotics, and academic wings at Oakridge International Academy."
      />

      {/* Hero Banner */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-accent font-semibold text-xs tracking-widest uppercase font-body block mb-2">
            CBSE Curriculum Framework
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight">
            Academic Wings & Curriculum
          </h1>
          <p className="mt-4 text-sm sm:text-lg text-white/80 max-w-2xl mx-auto font-body">
            Empowering students through conceptual mastery, interdisciplinary STEM projects, and holistic evaluation.
          </p>
        </div>
      </section>

      {/* Academic Stages Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {ACADEMIC_PROGRAMS.map((program, idx) => (
            <div 
              key={program.id}
              id={program.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center scroll-mt-28 ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`lg:col-span-6 space-y-4 ${idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="inline-flex items-center gap-2 bg-accent/20 text-primary text-xs font-bold px-3 py-1 rounded">
                  <BookOpen className="w-3.5 h-3.5 text-accent" />
                  <span>{program.grades}</span>
                </div>
                <h2 className="font-heading text-3xl font-bold text-primary">{program.title}</h2>
                <p className="text-sm text-gray-700 leading-relaxed font-body">{program.description}</p>
                
                <div className="pt-2">
                  <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-3">Key Features & Pedagogy:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {program.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 bg-secondary/50 p-2.5 rounded-lg border border-accent/20 text-xs font-semibold text-primary">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="rounded-2xl shadow-xl border-4 border-secondary object-cover w-full h-80" 
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Senior Secondary Streams (Class XI & XII) */}
      <section id="curriculum" className="py-20 bg-secondary/40 border-y border-accent/20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-xs tracking-widest uppercase font-body block mb-2">
              Class XI & XII Specializations
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary">
              Senior Secondary CBSE Streams
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 font-body">
              Rigorous board preparation combined with integrated entrance examination training (JEE, NEET, CLAT, CUET, SAT).
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {streams.map((stream, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-accent/20 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl gold-gradient-bg flex items-center justify-center text-primary font-heading font-bold text-xl">
                    0{idx + 1}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-primary">{stream.name}</h3>
                  
                  <div>
                    <h4 className="text-xs font-bold text-accent uppercase tracking-wider mb-2">Core Subject Combinations:</h4>
                    <ul className="space-y-1.5 text-xs text-gray-700">
                      {stream.subjects.map((sub, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-[11px] font-bold text-primary/80 uppercase tracking-wider mb-1">Career Pathways:</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{stream.outcomes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEM & Innovation Hub */}
      <section id="stem" className="py-20 bg-primary text-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 text-accent text-xs font-bold px-3 py-1 rounded-full border border-accent/30">
                <Cpu className="w-4 h-4" />
                <span>Next-Gen Technology Integration</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
                Tinker & Robotics Innovation Hub
              </h2>
              <p className="text-sm text-white/80 leading-relaxed font-body">
                Oakridge features a dedicated 2,500 sq. ft. Innovation Hub equipped with 3D printers, IoT microcontrollers, drone fabrication benches, and Python/AI workstations. Students from Class IV onwards design real-world prototypes addressing urban sustainability and healthcare challenges.
              </p>
              
              <div className="space-y-3">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-xs">
                  <strong className="text-accent block mb-0.5">National Robotics Champions 2025</strong>
                  <span className="text-white/70">Oakridge senior team won 1st prize at the National Youth Robotics Challenge.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800" 
                alt="Oakridge STEM Robotics Lab"
                className="rounded-2xl shadow-2xl border-4 border-accent/20 object-cover w-full h-96" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Download Prospectus Banner */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="w-14 h-14 rounded-full gold-gradient-bg flex items-center justify-center mx-auto shadow-md">
            <FileText className="w-7 h-7 text-primary" />
          </div>
          <h2 className="font-heading text-3xl font-bold text-primary">Download Academic Prospectus</h2>
          <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto">
            Get detailed information on subject codes, evaluation patterns, Olympiad schedules, and co-curricular electives.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={onOpenEnquiry}
              className="gold-gradient-bg text-primary font-bold text-xs sm:text-sm px-6 py-3 rounded-lg shadow hover:brightness-105 transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Digital Prospectus (PDF)</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

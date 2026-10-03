import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { FACILITIES } from '../data/schoolData';
import { Bus, Stethoscope, Video, Lock } from 'lucide-react';

export const Campus: React.FC = () => {
  const safetyProtocols = [
    {
      icon: Video,
      title: "24/7 High-Definition CCTV Surveillance",
      desc: "Over 180 HD IP cameras monitoring all corridors, entry points, playgrounds, and common areas."
    },
    {
      icon: Bus,
      title: "GPS-Tracked AC Transport Fleet",
      desc: "Buses equipped with real-time GPS tracking, speed governors, CCTV cameras, and trained female attendants."
    },
    {
      icon: Stethoscope,
      title: "Full-Time Infirmary & Doctor-on-Call",
      desc: "4-bed air-conditioned medical room staffed by registered nurses and emergency ambulance support."
    },
    {
      icon: Lock,
      title: "RFID Smart Access Gates",
      desc: "Biometric and RFID card authorization for all visitors, faculty, and administrative staff."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Campus & Facilities | 15-Acre Eco Smart Infrastructure | Oakridge" 
        description="Explore Oakridge International Academy's 15-acre smart campus, robotics lab, sports arena, auditorium, and safety protocols."
      />

      {/* Hero Banner */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-accent font-semibold text-xs tracking-widest uppercase font-body block mb-2">
            15-Acre Sustainable Campus
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight">
            Campus Infrastructure & Facilities
          </h1>
          <p className="mt-4 text-sm sm:text-lg text-white/80 max-w-2xl mx-auto font-body">
            Designed to foster intellectual curiosity, physical agility, and creative expression.
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FACILITIES.map((fac) => (
              <div 
                key={fac.id}
                className="bg-secondary/20 rounded-2xl overflow-hidden border border-accent/20 shadow-md group hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={fac.image} 
                    alt={fac.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <span className="absolute top-3 left-3 bg-primary text-accent text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow border border-accent/20">
                    {fac.category}
                  </span>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-heading text-xl font-bold text-primary group-hover:text-accent transition-colors">
                    {fac.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-body">
                    {fac.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Security Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-xs tracking-widest uppercase font-body block mb-2">
              Uncompromising Protection
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              Student Safety & Security Protocols
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyProtocols.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div key={idx} className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 space-y-4">
                  <div className="w-12 h-12 rounded-lg gold-gradient-bg flex items-center justify-center text-primary shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white">{p.title}</h3>
                  <p className="text-xs text-white/70 leading-relaxed font-body">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Music, Code, Globe, Heart } from 'lucide-react';

export const StudentLife: React.FC = () => {
  const houses = [
    { name: "Emerald House", color: "bg-emerald-700", motto: "Courage & Integrity", symbol: "Panther" },
    { name: "Ruby House", color: "bg-rose-700", motto: "Passion & Valor", symbol: "Phoenix" },
    { name: "Sapphire House", color: "bg-blue-800", motto: "Wisdom & Excellence", symbol: "Falcon" },
    { name: "Topaz House", color: "bg-amber-600", motto: "Unity & Strength", symbol: "Griffin" }
  ];

  const clubs = [
    { name: "Oakridge MUN Society", category: "Public Speaking", desc: "Participates in national and international Model UN conferences, building global diplomacy skills.", icon: Globe },
    { name: "Tinker & Coding Club", category: "Technology", desc: "Hands-on web development, app development, Python, and robotics project workshops.", icon: Code },
    { name: "Cultural & Performing Arts", category: "Arts", desc: "Indian classical music, Western band, contemporary dance, and theatrical productions.", icon: Music },
    { name: "Eco Champions Club", category: "Sustainability", desc: "Drives campus composting, solar monitoring, and neighborhood tree plantation drives.", icon: Heart }
  ];

  return (
    <>
      <SEOHead 
        title="Student Life | Clubs, House System & Co-Curriculars | Oakridge" 
        description="Discover student life at Oakridge International Academy: 4 House System, MUN, Robotics Club, Cultural Fests, and Sports."
      />

      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-accent font-semibold text-xs tracking-widest uppercase font-body block mb-2">
            Vibrant Campus Culture
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight">
            Student Life & Beyond Academics
          </h1>
          <p className="mt-4 text-sm sm:text-lg text-white/80 max-w-2xl mx-auto font-body">
            Fostering leadership, camaraderie, and creative expression through our House System and 30+ clubs.
          </p>
        </div>
      </section>

      {/* House System */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-xs tracking-widest uppercase font-body block mb-2">
              Camaraderie & Competition
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary">
              The Four Houses of Oakridge
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 font-body">
              Every student is assigned to one of our four historic houses, competing throughout the academic year for the coveted Founder's Trophy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {houses.map((h, idx) => (
              <div key={idx} className="bg-secondary/20 p-6 rounded-2xl border border-accent/20 text-center space-y-4 hover:-translate-y-1 transition-all shadow-sm">
                <div className={`w-16 h-16 rounded-full ${h.color} text-white flex items-center justify-center mx-auto shadow-lg font-heading text-xl font-bold`}>
                  {h.name[0]}
                </div>
                <h3 className="font-heading text-xl font-bold text-primary">{h.name}</h3>
                <p className="text-xs text-accent font-bold uppercase tracking-wider font-mono">"{h.motto}"</p>
                <p className="text-xs text-gray-600 font-body">Mascot: <strong className="text-primary">{h.symbol}</strong></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs & Societies */}
      <section className="py-20 bg-secondary/40 border-y border-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-xs tracking-widest uppercase font-body block mb-2">
              Co-Curricular Electives
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary">
              Clubs & Student Societies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clubs.map((c, idx) => {
              const Icon = c.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-md border border-accent/20 space-y-4">
                  <div className="w-12 h-12 rounded-lg gold-gradient-bg flex items-center justify-center text-primary shadow">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold text-accent uppercase tracking-wider bg-primary px-2.5 py-0.5 rounded">
                    {c.category}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-primary">{c.name}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-body">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

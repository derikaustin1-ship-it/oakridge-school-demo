import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Compass, ShieldCheck, Target, CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  const leadership = [
    {
      name: "Dr. Meenakshi Sundaram",
      role: "Principal & Academic Director",
      qualification: "Ph.D. in Education (DU), M.Sc. Physics",
      experience: "25+ Years in CBSE Leadership",
      bio: "Former CBSE Curriculum Advisor with over two decades of experience nurturing award-winning schools across India.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Prof. Ananya Roy Chaudhury",
      role: "Head of STEM & Research",
      qualification: "M.Tech Robotics (IIT Delhi)",
      experience: "15+ Years in Educational Technology",
      bio: "Spearheads Oakridge's AI and Robotics Tinker Lab, mentoring national award-winning student innovator teams.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Cmdr. Rajeshwar Varma (Retd.)",
      role: "Director of Operations & Sports",
      qualification: "M.Sc. Defence Studies",
      experience: "20+ Years Operational Leadership",
      bio: "Oversees campus safety, transport fleets, eco-sustainability, and Olympic-standard sports development.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <>
      <SEOHead 
        title="About Us | Oakridge International Academy Legacy & Vision" 
        description="Discover the history, leadership, vision, and CBSE accreditation of Oakridge International Academy in New Delhi."
      />

      {/* Header Hero Banner */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-accent font-semibold text-xs tracking-widest uppercase font-body block mb-2">
            Established 2008
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight">
            Our Legacy & Educational Vision
          </h1>
          <p className="mt-4 text-sm sm:text-lg text-white/80 max-w-2xl mx-auto font-body">
            Empowering curious young minds through academic excellence, character synthesis, and global innovation.
          </p>
        </div>
      </section>

      {/* Legacy & History Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-accent font-semibold text-xs tracking-widest uppercase font-body">
                18+ Years of Service
              </span>
              <h2 className="font-heading text-3xl font-bold text-primary">
                A Legacy of CBSE Academic Distinction
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed font-body">
                Founded in 2008 by visionary educationists, Oakridge International Academy was established to bridge traditional Indian values with futuristic global pedagogy. Spanning 15 acres of green infrastructure, the institution has nurtured thousands of scholars who now excel in premier global universities and leadership roles.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed font-body">
                Affiliated with the Central Board of Secondary Education (CBSE Affiliation No. 1930482), Oakridge adheres strictly to the highest standards of conceptual clarity, continuous evaluation, and sports integration outlined in NEP 2020.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                <div className="p-3 bg-secondary/50 rounded-lg border border-accent/20">
                  <p className="font-heading text-2xl font-bold text-primary">100%</p>
                  <p className="text-[11px] text-gray-600 font-medium">CBSE Board Pass Record</p>
                </div>
                <div className="p-3 bg-secondary/50 rounded-lg border border-accent/20">
                  <p className="font-heading text-2xl font-bold text-primary">15:1</p>
                  <p className="text-[11px] text-gray-600 font-medium">Student-Teacher Ratio</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=800" 
                alt="Oakridge Heritage Campus Building"
                className="rounded-2xl shadow-xl border-4 border-secondary object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, & Core Values */}
      <section className="py-16 bg-secondary/40 border-y border-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border border-accent/20 space-y-4">
              <div className="w-12 h-12 rounded-lg gold-gradient-bg flex items-center justify-center text-primary">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary">Our Vision</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-body">
                To be a globally recognized center of academic excellence that inspires lifelong curiosity, emotional resilience, and ethical leadership in every student.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-accent/20 space-y-4">
              <div className="w-12 h-12 rounded-lg gold-gradient-bg flex items-center justify-center text-primary">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary">Our Mission</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-body">
                To deliver a balanced CBSE curriculum enhanced by STEM innovation, sports, art, and community service, empowering students to excel in a rapidly evolving world.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-accent/20 space-y-4">
              <div className="w-12 h-12 rounded-lg gold-gradient-bg flex items-center justify-center text-primary">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary">Core Values</h3>
              <ul className="space-y-1.5 text-xs text-gray-600 font-body">
                <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-accent" /> Integrity & Moral Courage</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-accent" /> Inquisitiveness & Innovation</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-accent" /> Empathy & Inclusivity</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-accent" /> Environmental Responsibility</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-xs tracking-widest uppercase font-body block mb-2">
              Academic Stewardship
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary">
              School Leadership & Advisory Board
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((member, idx) => (
              <div key={idx} className="bg-secondary/30 rounded-xl overflow-hidden border border-accent/20 shadow-md group hover:-translate-y-1 transition-all">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="p-6 space-y-2">
                  <span className="text-[10px] font-bold text-accent uppercase bg-primary px-2.5 py-0.5 rounded">
                    {member.role}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-primary">{member.name}</h3>
                  <p className="text-[11px] font-medium text-gray-500">{member.qualification} | {member.experience}</p>
                  <p className="text-xs text-gray-600 leading-relaxed font-body pt-2">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

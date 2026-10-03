import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { ACHIEVEMENTS } from '../data/schoolData';

export const Achievements: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Academic', 'Sports', 'STEM & Innovation', 'Arts & Culture'];

  const filtered = filter === 'All'
    ? ACHIEVEMENTS
    : ACHIEVEMENTS.filter(a => a.category === filter);

  return (
    <>
      <SEOHead 
        title="Achievements & Wall of Honor | Oakridge Laurels" 
        description="Explore academic board toppers, national robotics champions, and sports laurels at Oakridge International Academy."
      />

      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-accent font-semibold text-xs tracking-widest uppercase font-body block mb-2">
            Wall of Honor
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight">
            Key Achievements & Laurels
          </h1>
          <p className="mt-4 text-sm sm:text-lg text-white/80 max-w-2xl mx-auto font-body">
            Celebrating excellence across CBSE Board exams, national STEM competitions, and sports.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                  filter === cat
                    ? 'gold-gradient-bg text-primary shadow-md font-bold'
                    : 'bg-secondary/40 text-gray-700 hover:bg-secondary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item) => (
              <div key={item.id} className="bg-secondary/20 p-8 rounded-2xl border border-accent/20 shadow-md space-y-4 hover:-translate-y-1 transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-accent bg-primary px-3 py-1 rounded">
                    {item.year}
                  </span>
                  <span className="text-[10px] font-bold text-primary uppercase bg-accent/20 px-2.5 py-1 rounded">
                    {item.badge}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-primary leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-body">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

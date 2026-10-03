import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { GALLERY_ITEMS, type GalleryItem } from '../data/schoolData';
import { LightboxModal } from '../components/LightboxModal';
import { Maximize2 } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Campus', 'Events', 'Sports', 'Labs', 'Arts'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[prevIndex]);
  };

  return (
    <>
      <SEOHead 
        title="Photo & Media Gallery | Oakridge Campus Moments" 
        description="Browse high-resolution photographs of Oakridge International Academy campus, annual sports day, robotics fairs, and cultural events."
      />

      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-accent font-semibold text-xs tracking-widest uppercase font-body block mb-2">
            Campus Life in Pictures
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight">
            Photo & Media Gallery
          </h1>
          <p className="mt-4 text-sm sm:text-lg text-white/80 max-w-2xl mx-auto font-body">
            A visual glimpse into our vibrant community, sports meets, science expos, and everyday campus moments.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'gold-gradient-bg text-primary shadow font-bold'
                    : 'bg-secondary/40 text-gray-700 hover:bg-secondary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry / Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl border border-gray-200 transition-all"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                  <span className="text-[10px] font-bold text-accent uppercase tracking-wider bg-white/10 backdrop-blur-md px-2.5 py-1 rounded w-max mb-1 border border-accent/20">
                    {item.category}
                  </span>
                  <h4 className="font-heading text-lg font-bold">{item.title}</h4>
                  <p className="text-xs text-white/80 mt-1 line-clamp-2">{item.caption}</p>
                  
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </>
  );
};

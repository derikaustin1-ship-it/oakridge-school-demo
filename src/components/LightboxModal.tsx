import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryItem } from '../data/schoolData';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose, onNext, onPrev }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors z-50"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {onPrev && (
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {onNext && (
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center">
        <img
          src={item.image}
          alt={item.title}
          className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg shadow-2xl border border-white/10"
        />
        <div className="mt-4 text-center max-w-lg">
          <span className="inline-block bg-accent/20 text-accent text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-1">
            {item.category}
          </span>
          <h4 className="font-heading text-xl font-bold text-white">{item.title}</h4>
          <p className="text-xs text-white/70 mt-1">{item.caption}</p>
        </div>
      </div>
    </div>
  );
};

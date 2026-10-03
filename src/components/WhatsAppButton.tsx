import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedMessage = encodeURIComponent(
      message || `Hello Oakridge Admissions team, I would like to inquire about admission for the 2026-27 session.`
    );
    window.open(`https://wa.me/919876543210?text=${encodedMessage}`, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
    setMessage('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Popover Chat Box */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-white rounded-2xl shadow-2xl border border-emerald-200 overflow-hidden animate-fade-in text-gray-800">
          <div className="bg-emerald-700 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-heading font-bold text-white">
                OAK
              </div>
              <div>
                <h4 className="font-heading text-sm font-bold leading-tight">Oakridge Admissions</h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1.5 font-body">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                  Typically replies in 15 mins
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-emerald-100 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Close WhatsApp chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 bg-emerald-50/50 text-xs space-y-3 font-body">
            <div className="bg-white p-3 rounded-xl shadow-sm border border-emerald-100 max-w-[85%] text-gray-700 space-y-1">
              <p className="font-semibold text-emerald-900">Namaste! 👋</p>
              <p className="leading-relaxed">
                Welcome to Oakridge International Academy. How can our admissions counsellors assist you today?
              </p>
              <span className="text-[10px] text-gray-400 block text-right">Just now</span>
            </div>

            <form onSubmit={handleSend} className="space-y-2 pt-2">
              <input
                type="text"
                placeholder="Type your query (e.g. Nursery fee schedule)..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white"
              />
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 rounded-lg shadow flex items-center justify-center gap-2 transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Start WhatsApp Chat</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-emerald-600 hover:bg-emerald-700 text-white p-3.5 sm:p-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group border-2 border-white focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Chat on WhatsApp with Admissions Office"
      >
        <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap text-xs font-bold font-body pr-1">
          WhatsApp Us
        </span>
      </button>
    </div>
  );
};

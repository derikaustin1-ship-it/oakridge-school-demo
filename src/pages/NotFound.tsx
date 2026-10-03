import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { Home, ArrowLeft, GraduationCap } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <>
      <SEOHead title="Page Not Found | Oakridge International Academy" />

      <section className="min-h-[75vh] bg-primary text-white flex items-center justify-center p-6 text-center">
        <div className="max-w-md space-y-6">
          <div className="w-16 h-16 rounded-full gold-gradient-bg flex items-center justify-center mx-auto shadow-xl">
            <GraduationCap className="w-8 h-8 text-primary" />
          </div>

          <span className="text-accent font-bold font-mono text-4xl block">404</span>

          <h1 className="font-heading text-3xl font-bold">Page Not Found</h1>

          <p className="text-xs sm:text-sm text-white/80 font-body leading-relaxed">
            The page you are looking for might have been removed, renamed, or is temporarily unavailable.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <Link
              to="/"
              className="w-full sm:w-auto gold-gradient-bg text-primary font-bold text-xs px-6 py-3 rounded-lg shadow hover:brightness-105 transition-all flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <Link
              to="/admissions"
              className="w-full sm:w-auto bg-white/10 text-white font-semibold text-xs px-6 py-3 rounded-lg border border-accent/30 hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4 text-accent" />
              <span>Admissions Office</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { WhatsAppButton } from './components/WhatsAppButton';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Academics } from './pages/Academics';
import { Admissions } from './pages/Admissions';
import { Campus } from './pages/Campus';
import { StudentLife } from './pages/StudentLife';
import { Achievements } from './pages/Achievements';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

// Helper component to scroll window to top on route change or handle hash navigation
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
};

export const App: React.FC = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-gray-50 selection:bg-accent selection:text-primary font-body text-primary antialiased">
          <Header onOpenEnquiry={() => setIsEnquiryOpen(true)} />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home onOpenEnquiry={() => setIsEnquiryOpen(true)} />} />
              <Route path="/about" element={<About />} />
              <Route path="/academics" element={<Academics onOpenEnquiry={() => setIsEnquiryOpen(true)} />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/campus" element={<Campus />} />
              <Route path="/student-life" element={<StudentLife />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />

          {/* Floating conversion triggers */}
          <WhatsAppButton />

          {/* Enquiry Modal Pop-up */}
          <EnquiryModal 
            isOpen={isEnquiryOpen} 
            onClose={() => setIsEnquiryOpen(false)} 
          />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;

import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { ADMISSION_STEPS, FAQS, SCHOOL_INFO } from '../data/schoolData';
import { 
  CheckCircle, 
  ShieldCheck, 
  Send, 
  ChevronDown, 
  ChevronUp, 
  User, 
  Phone, 
  Mail,
  AlertCircle,
  Loader2
} from 'lucide-react';

export const Admissions: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    phone: '',
    email: '',
    grade: 'Class I',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const ageMatrix = [
    { grade: "Pre-Nursery", age: "2.5 to 3 Years (as of March 31)" },
    { grade: "Nursery / KG", age: "3 to 4.5 Years" },
    { grade: "Class I to V (Primary)", age: "5.5 Years onwards" },
    { grade: "Class VI to VIII (Middle)", age: "10.5 Years onwards" },
    { grade: "Class IX to XI (Secondary)", age: "As per CBSE guidelines" }
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.parentName.trim()) {
      newErrors.parentName = 'Parent name is required';
    }

    if (!formData.studentName.trim()) {
      newErrors.studentName = "Child's name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <>
      <SEOHead 
        title="Admissions 2026-27 | Oakridge International Academy Criteria & Application" 
        description="Apply for admissions 2026-27 at Oakridge International Academy. Step-by-step process, age matrix, fee transparency, and online enquiry form."
      />

      {/* Hero Banner */}
      <section className="bg-primary text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-accent font-semibold text-xs tracking-widest uppercase font-body block mb-2">
            Admissions Open Session 2026-27
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Join the Oakridge Family
          </h1>
          <p className="mt-4 text-xs sm:text-base text-white/80 max-w-2xl mx-auto font-body">
            Transparent admissions process focused on nurturing your child's potential.
          </p>
        </div>
      </section>

      {/* 4-Step Admission Timeline */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-accent font-semibold text-xs tracking-widest uppercase font-body block mb-2">
              Simple 4-Step Roadmap
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-primary">
              The Admission Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {ADMISSION_STEPS.map((step, idx) => (
              <div key={idx} className="bg-secondary/30 p-6 sm:p-8 rounded-2xl border border-accent/20 relative shadow-sm hover:shadow-md transition-shadow">
                <span className="font-heading text-3xl sm:text-4xl font-bold text-accent/60 block mb-3">
                  {step.step}
                </span>
                <h3 className="font-heading text-base sm:text-lg font-bold text-primary mb-2">{step.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed font-body">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Enquiry Form & Age Matrix */}
      <section id="form" className="py-16 sm:py-20 bg-secondary/40 border-y border-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Col: Age Criteria & Fee Note */}
            <div className="lg:col-span-5 space-y-6 sm:space-y-8">
              <div className="space-y-3">
                <span className="text-accent font-semibold text-xs tracking-widest uppercase font-body block">
                  Eligibility Criteria
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary">
                  Age Matrix & Guidelines
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-body">
                  Oakridge strictly complies with CBSE age guidelines and Directorate of Education regulations for foundational admissions.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-accent/20 overflow-hidden">
                <div className="bg-primary text-white text-xs font-bold px-4 py-3 border-b border-accent/20 uppercase tracking-wider font-body">
                  Grade vs. Minimum Age Table
                </div>
                <div className="divide-y divide-gray-100">
                  {ageMatrix.map((item, idx) => (
                    <div key={idx} className="px-4 py-3 flex items-center justify-between text-xs font-body">
                      <span className="font-bold text-primary">{item.grade}</span>
                      <span className="text-gray-600 font-mono text-[11px] sm:text-xs">{item.age}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Transparent Fee Notice */}
              <div id="fees" className="bg-white p-6 rounded-xl shadow-md border border-accent/20 space-y-3 scroll-mt-24">
                <div className="flex items-center gap-2 text-primary font-bold text-sm font-heading">
                  <ShieldCheck className="w-5 h-5 text-accent shrink-0" />
                  <span>Fee Structure Transparency</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed font-body">
                  We maintain complete transparency with zero hidden charges. Annual fee schedules include tuition, digital lab access, library resources, and safety insurance. Transport fees are charged per route.
                </p>
                <div className="pt-1 flex items-center justify-between text-xs">
                  <span className="text-accent font-semibold font-body">Admissions Desk Helpline:</span>
                  <a href={`tel:${SCHOOL_INFO.admissionsHelpline}`} className="font-bold text-primary hover:text-accent font-mono">
                    {SCHOOL_INFO.admissionsHelpline}
                  </a>
                </div>
              </div>
            </div>

            {/* Right Col: Admissions Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl shadow-xl border border-accent/30">
              <div className="mb-6 pb-4 border-b border-gray-100">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-primary">
                  Online Admission Enquiry Form
                </h3>
                <p className="text-xs text-gray-500 mt-1 font-body">
                  Fill out the form below to initiate admission counselling for session 2026-27.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h4 className="font-heading text-2xl font-bold text-primary">Enquiry Submitted!</h4>
                  <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto font-body">
                    Thank you <strong className="text-primary">{formData.parentName}</strong>. Our admissions officer will contact you shortly via phone or email to schedule your campus tour.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ parentName: '', studentName: '', phone: '', email: '', grade: 'Class I', message: '' });
                    }}
                    className="gold-gradient-bg text-primary font-bold text-xs px-6 py-2.5 rounded-lg shadow mt-4"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-primary mb-1">Parent / Guardian Full Name *</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Rajesh Sharma"
                        value={formData.parentName}
                        onChange={(e) => {
                          setFormData({ ...formData, parentName: e.target.value });
                          if (errors.parentName) setErrors({ ...errors, parentName: '' });
                        }}
                        className={`w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm border rounded-lg focus:outline-none focus:ring-2 ${
                          errors.parentName ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-accent'
                        }`}
                      />
                    </div>
                    {errors.parentName && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-medium font-body">
                        <AlertCircle className="w-3 h-3" /> {errors.parentName}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-primary mb-1">Child's Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Child's full name"
                        value={formData.studentName}
                        onChange={(e) => {
                          setFormData({ ...formData, studentName: e.target.value });
                          if (errors.studentName) setErrors({ ...errors, studentName: '' });
                        }}
                        className={`w-full px-3 py-2.5 text-xs sm:text-sm border rounded-lg focus:outline-none focus:ring-2 ${
                          errors.studentName ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-accent'
                        }`}
                      />
                      {errors.studentName && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-medium font-body">
                          <AlertCircle className="w-3 h-3" /> {errors.studentName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-primary mb-1">Seeking Grade *</label>
                      <select
                        value={formData.grade}
                        onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                        className="w-full px-3 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white"
                      >
                        <option value="Pre-Nursery">Pre-Nursery / Nursery</option>
                        <option value="KG">KG / Prep</option>
                        <option value="Class I">Class I to V (Primary)</option>
                        <option value="Class VI">Class VI to VIII (Middle)</option>
                        <option value="Class IX">Class IX to X (Secondary)</option>
                        <option value="Class XI">Class XI (Science / Commerce / Arts)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-primary mb-1">Phone Number *</label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => {
                            setFormData({ ...formData, phone: e.target.value });
                            if (errors.phone) setErrors({ ...errors, phone: '' });
                          }}
                          className={`w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm border rounded-lg focus:outline-none focus:ring-2 ${
                            errors.phone ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-accent'
                          }`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-medium font-body">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-primary mb-1">Email Address *</label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                        <input
                          type="email"
                          required
                          placeholder="parent@example.com"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: '' });
                          }}
                          className={`w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm border rounded-lg focus:outline-none focus:ring-2 ${
                            errors.email ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-accent'
                          }`}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-medium font-body">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-primary mb-1">Additional Notes / Questions</label>
                    <textarea
                      rows={3}
                      placeholder="Any specific query regarding transport, hostel, or subject stream options?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent resize-none font-body"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gold-gradient-bg text-primary font-bold text-xs sm:text-sm py-3.5 rounded-lg shadow-lg hover:brightness-105 transition-all flex items-center justify-center gap-2 disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-primary" />
                        <span>Submitting Application...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Admission Application</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-accent font-semibold text-xs tracking-widest uppercase font-body block mb-2">
              Got Questions?
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-primary">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div 
                key={idx} 
                className="border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left bg-secondary/20 hover:bg-secondary/40 flex items-center justify-between font-heading text-sm sm:text-base font-bold text-primary focus:outline-none"
                >
                  <span>{faq.question}</span>
                  {openFaq === idx ? <ChevronUp className="w-5 h-5 text-accent shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />}
                </button>
                {openFaq === idx && (
                  <div className="p-4 sm:p-5 text-xs sm:text-sm text-gray-700 leading-relaxed font-body bg-white border-t border-gray-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { SCHOOL_INFO } from '../data/schoolData';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, User, MessageSquare, AlertCircle, Loader2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Enquiry',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please type your message query';
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
        title="Contact Us | Oakridge International Academy New Delhi" 
        description="Get in touch with Oakridge International Academy. Address, phone numbers, admissions helpline, and location map."
      />

      <section className="bg-primary text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-accent font-semibold text-xs tracking-widest uppercase font-body block mb-2">
            Get in Touch
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Contact Admissions & Admin
          </h1>
          <p className="mt-4 text-xs sm:text-base text-white/80 max-w-2xl mx-auto font-body">
            We are here to answer your queries and assist with campus visits.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-6 sm:space-y-8">
              <div className="space-y-3">
                <span className="text-accent font-semibold text-xs tracking-widest uppercase font-body block">
                  Campus Location
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary">
                  Oakridge Main Campus
                </h2>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg gold-gradient-bg flex items-center justify-center text-primary shrink-0 shadow">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-primary">Address</h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed font-body">
                      {SCHOOL_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg gold-gradient-bg flex items-center justify-center text-primary shrink-0 shadow">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-primary">Phone Helplines</h3>
                    <p className="text-xs text-gray-600 mt-1 font-body">Admissions: <a href={`tel:${SCHOOL_INFO.admissionsHelpline}`} className="font-bold text-primary hover:text-accent font-mono">{SCHOOL_INFO.admissionsHelpline}</a></p>
                    <p className="text-xs text-gray-600 font-body">General Desk: <a href={`tel:${SCHOOL_INFO.phone}`} className="font-bold text-primary hover:text-accent font-mono">{SCHOOL_INFO.phone}</a></p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg gold-gradient-bg flex items-center justify-center text-primary shrink-0 shadow">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-primary">Email Addresses</h3>
                    <p className="text-xs text-gray-600 mt-1 font-body">Admissions: <a href={`mailto:${SCHOOL_INFO.email}`} className="text-primary hover:underline">{SCHOOL_INFO.email}</a></p>
                    <p className="text-xs text-gray-600 font-body">General Desk: <a href={`mailto:${SCHOOL_INFO.generalEmail}`} className="text-primary hover:underline">{SCHOOL_INFO.generalEmail}</a></p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg gold-gradient-bg flex items-center justify-center text-primary shrink-0 shadow">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-primary">Visiting Hours</h3>
                    <p className="text-xs text-gray-600 mt-1 font-body">{SCHOOL_INFO.hours}</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder Card */}
              <div className="bg-secondary/30 p-6 rounded-2xl border border-accent/20 relative overflow-hidden space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-heading text-sm font-bold text-primary">Interactive Campus Location</span>
                  <span className="text-[10px] font-mono text-accent bg-primary px-2 py-0.5 rounded">NEW DELHI</span>
                </div>
                <div className="w-full h-44 bg-primary/10 rounded-lg flex items-center justify-center border border-accent/20 text-center p-4">
                  <div>
                    <MapPin className="w-8 h-8 text-accent mx-auto mb-2" />
                    <p className="text-xs font-bold text-primary font-body">Oakridge International Academy Campus</p>
                    <p className="text-[11px] text-gray-500 mt-1 font-body">Knowledge Corridor, Green Hills Estate, New Delhi</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl shadow-xl border border-accent/30">
              <div className="mb-6 pb-4 border-b border-gray-100">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-primary">
                  Send Us a Direct Message
                </h3>
                <p className="text-xs text-gray-500 mt-1 font-body">
                  Have a question regarding fee structure, transport routes, or curriculum? Drop us a message.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h4 className="font-heading text-2xl font-bold text-primary">Message Sent Successfully!</h4>
                  <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto font-body">
                    Thank you <strong className="text-primary">{formData.name}</strong>. Our front desk will respond to your query at <strong className="text-primary">{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', subject: 'General Enquiry', message: '' });
                    }}
                    className="gold-gradient-bg text-primary font-bold text-xs px-6 py-2.5 rounded-lg shadow mt-4"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-primary mb-1">Your Full Name *</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ananya Sharma"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        className={`w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm border rounded-lg focus:outline-none focus:ring-2 ${
                          errors.name ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-accent'
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-medium font-body">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-primary mb-1">Email Address *</label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                        <input
                          type="email"
                          required
                          placeholder="your.email@example.com"
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
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-primary mb-1">Query Category</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white"
                    >
                      <option value="General Enquiry">General Admission Enquiry</option>
                      <option value="Transport Query">Transport & Bus Routes</option>
                      <option value="Fee Structure">Fee Schedule Clarification</option>
                      <option value="Careers">Faculty Careers & Recruitment</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-primary mb-1">Your Message *</label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                      <textarea
                        rows={4}
                        required
                        placeholder="Please describe your query here..."
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: '' });
                        }}
                        className={`w-full pl-9 pr-3 py-2 text-xs sm:text-sm border rounded-lg focus:outline-none focus:ring-2 resize-none font-body ${
                          errors.message ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-accent'
                        }`}
                      />
                    </div>
                    {errors.message && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-medium font-body">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gold-gradient-bg text-primary font-bold text-xs sm:text-sm py-3.5 rounded-lg shadow-lg hover:brightness-105 transition-all flex items-center justify-center gap-2 disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-primary" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

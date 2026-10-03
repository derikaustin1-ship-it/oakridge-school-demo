import React, { useState } from 'react';
import { X, CheckCircle, Send, GraduationCap, Calendar, Phone, Mail, User, AlertCircle, Loader2 } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    phone: '',
    email: '',
    grade: 'Class I',
    tourDate: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

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

  const handleReset = () => {
    setSubmitted(false);
    setErrors({});
    setFormData({ parentName: '', studentName: '', phone: '', email: '', grade: 'Class I', tourDate: '', message: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/80 backdrop-blur-md animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl border border-accent/30 max-w-lg w-full overflow-hidden relative">
        {/* Modal Header */}
        <div className="bg-primary px-6 py-4 text-white flex items-center justify-between border-b border-accent/20">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full gold-gradient-bg flex items-center justify-center shadow">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-white leading-tight">
                Admission Enquiry 2026-27
              </h3>
              <p className="text-[11px] text-accent font-medium">{SCHOOL_INFO.name}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="font-heading text-2xl font-bold text-primary">Enquiry Submitted Successfully!</h4>
              <p className="text-xs sm:text-sm text-gray-600 max-w-xs mx-auto leading-relaxed font-body">
                Thank you. Our admissions desk will call you at <strong className="text-primary">{formData.phone}</strong> within 24 working hours to confirm your campus visit.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-800 font-mono">
                Enquiry Reference ID: <span className="font-bold">OAK-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
              <button
                onClick={handleReset}
                className="gold-gradient-bg text-primary font-bold px-6 py-2.5 rounded-lg shadow hover:brightness-105 transition-all text-xs sm:text-sm mt-4"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <p className="text-xs text-gray-500 mb-2 font-body">
                Fill in the details below to receive a digital brochure & schedule a guided campus tour.
              </p>

              <div>
                <label className="block text-xs font-semibold text-primary mb-1">Parent / Guardian Name *</label>
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
                    className={`w-full pl-9 pr-3 py-2 text-xs sm:text-sm border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.parentName ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-accent'
                    }`}
                  />
                </div>
                {errors.parentName && (
                  <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3 h-3" /> {errors.parentName}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                    className={`w-full px-3 py-2 text-xs sm:text-sm border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.studentName ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-accent'
                    }`}
                  />
                  {errors.studentName && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3" /> {errors.studentName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-primary mb-1">Grade Applying For *</label>
                  <select
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white"
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                      className={`w-full pl-9 pr-3 py-2 text-xs sm:text-sm border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.phone ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-accent'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-medium">
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
                      className={`w-full pl-9 pr-3 py-2 text-xs sm:text-sm border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.email ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-accent'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-primary mb-1">Preferred Campus Visit Date (Optional)</label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="date"
                    value={formData.tourDate}
                    onChange={(e) => setFormData({ ...formData, tourDate: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-primary mb-1">Specific Questions / Comments</label>
                <textarea
                  rows={2}
                  placeholder="Any specific query regarding transport, hostel, or subject options?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none font-body"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gold-gradient-bg text-primary font-bold text-xs sm:text-sm py-3 rounded-lg shadow-md hover:brightness-105 active:scale-98 transition-all flex items-center justify-center gap-2 disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-primary" />
                      <span>Submitting Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Admission Enquiry</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-gray-400 text-center font-body">
                * We respect your privacy. Information will only be used for admission communication.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

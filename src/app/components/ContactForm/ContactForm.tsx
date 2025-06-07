'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import './ContactForm.css';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    package: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="contact-form-wrapper">
      <form className="contact-form" onSubmit={handleSubmit}>
        {/* Row 1 - Name */}
        <div className="form-row">
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              className={focusedField === 'name' ? 'focused' : ''}
              required
            />
          </div>
        </div>

        {/* Row 2 - Phone and Email */}
        <div className="form-row form-row-split">
          <div className="input-group">
            <div className="phone-input">
              <span className="country-code">+62</span>
              <input
                type="tel"
                name="phone"
                placeholder="Number Here"
                value={formData.phone}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('phone')}
                onBlur={() => setFocusedField(null)}
                className={focusedField === 'phone' ? 'focused' : ''}
                required
              />
            </div>
          </div>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email Here"
              value={formData.email}
              onChange={handleInputChange}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              className={focusedField === 'email' ? 'focused' : ''}
              required
            />
          </div>
        </div>

        {/* Row 3 - Package Selection */}
        <div className="form-row">
          <div className="input-group">
            <select
              name="package"
              value={formData.package}
              onChange={handleInputChange}
              onFocus={() => setFocusedField('package')}
              onBlur={() => setFocusedField(null)}
              className={`select-input ${focusedField === 'package' ? 'focused' : ''} ${formData.package ? 'has-value' : ''}`}
              required
            >
              <option value="">Please Choose Packages</option>
              <option value="basic">Basic Package</option>
              <option value="premium">Premium Package</option>
              <option value="enterprise">Enterprise Package</option>
              <option value="custom">Custom Package</option>
            </select>
          </div>
        </div>

        {/* Row 4 - Message */}
        <div className="form-row">
          <div className="input-group">
            <textarea
              name="message"
              placeholder="Message Here"
              value={formData.message}
              onChange={handleInputChange}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              className={focusedField === 'message' ? 'focused' : ''}
              rows={5}
              required
            />
          </div>
        </div>

        {/* Row 5 - Submit Button */}
        <div className="form-row">
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </div>
      </form>

      {/* Contact Information */}
      <div className="contact-details">
        <div className="contact-detail-item">
          <MapPin className="contact-icon" size={18} />
          <span>KLLG St, No.99, Pku City, ID 28289</span>
        </div>
        <div className="contact-detail-item">
          <Mail className="contact-icon" size={18} />
          <span>hello@domainsite.com</span>
        </div>
        <div className="contact-detail-item">
          <Phone className="contact-icon" size={18} />
          <span>0761-8523-398</span>
        </div>
        <div className="contact-detail-item">
          <Globe className="contact-icon" size={18} />
          <span>www.hellodomainsite.com</span>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

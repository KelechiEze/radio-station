'use client';
import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import { countryCodes } from '../../utils/countries';
import './ContactForm.css';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    countryCode: '+62',
    phone: '',
    email: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [baseUrl, setBaseUrl] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isProd = process.env.NODE_ENV === 'production';
      setBaseUrl(
        isProd ? 'https://radio-station-flax.vercel.app' : window.location.origin
      );
    }
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const fullPhone = `${formData.countryCode}${formData.phone}`;
      const payload = {
        ...formData,
        phone: fullPhone,
      };

      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({
          name: '',
          countryCode: '+62',
          phone: '',
          email: '',
          message: '',
        });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className="contact-form-wrapper">
      <form className="contact-form" onSubmit={handleSubmit}>
        {/* Name */}
        <div className="form-row">
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={handleInputChange}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              className={focusedField === 'name' ? 'focused' : ''}
              required
            />
          </div>
        </div>

        {/* Phone and Email */}
        <div className="form-row form-row-split">
          <div className="input-group">
            <div className="phone-input">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('countryCode')}
                onBlur={() => setFocusedField(null)}
                className={`country-code-select ${focusedField === 'countryCode' ? 'focused' : ''}`}
              >
                {countryCodes.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.code} {country.country}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                name="phone"
                placeholder="Mobile Phone Number"
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
              placeholder="Your Email Address"
              value={formData.email}
              onChange={handleInputChange}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              className={focusedField === 'email' ? 'focused' : ''}
              required
            />
          </div>
        </div>

        {/* Message */}
        <div className="form-row">
          <div className="input-group">
            <textarea
              name="message"
              placeholder="Write your message here. Tell us how we can help or leave your feedback!"
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

        {/* Submit Button with Spinner */}
        <div className="form-row">
          <button type="submit" className="submit-button" disabled={status === 'loading'}>
            {status === 'loading' ? (
              <span className="spinner"></span>
            ) : (
              'Submit Message'
            )}
          </button>
        </div>

        {status === 'success' && (
          <p className="success-message">Thanks! Your message has been sent successfully.</p>
        )}
        {status === 'error' && (
          <p className="error-message">Oops! Something went wrong. Please try again.</p>
        )}
      </form>

      {/* Contact Info */}
      <div className="contact-details">
        <div className="contact-detail-item">
          <MapPin className="contact-icon" size={18} />
          <span>Lagos: 1, Ketu Close, Surulere, Lagos.</span>
        </div>
        <div className="contact-detail-item">
          <Mail className="contact-icon" size={18} />
          <span>rapradioafrica@gmail.com</span>
        </div>
        <div className="contact-detail-item">
          <Phone className="contact-icon" size={18} />
          <span>+2348033133845</span>
        </div>
        <div className="contact-detail-item">
          <Globe className="contact-icon" size={18} />
          <span>www.rapradioafrica.com</span>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

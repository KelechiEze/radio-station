'use client';

import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import './ContactSection.css';

const ContactSection: React.FC = () => {
  return (
    <div id="contact-us" className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-image">
            <img 
              src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Professional podcast setup" 
            />
          </div>
          <div className="contact-info">
            <div className="contact-header">
              <span className="contact-label">Contact Us</span>
              <h2 className="contact-title">
                Any Question? Ask Us Anytime
              </h2>
              <p className="contact-description">
                We’d love to hear from you—whether you have questions, feedback, partnership inquiries, or want to get involved with Rap Radio Africa. Just fill out the form below and a member of our team will be in touch shortly.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

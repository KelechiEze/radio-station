'use client';

import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import './ContactSection.css';

const ContactSection: React.FC = () => {
  return (
    <div className="contact-section">
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
                Nostra consectetur phasellus scelerisque auismod integer consectetur dictum netus. Sed ut eu neque turpis auismod massa. Potenti vivamus potenti suspendisse rutrum facilisi per.
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

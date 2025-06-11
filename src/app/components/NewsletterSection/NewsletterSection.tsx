'use client';

import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import './NewsletterSection.css';

const NewsletterSection = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [showBankDetails, setShowBankDetails] = useState(false);

  const handleGiveNow = () => {
    setIsSpinning(true);
    setTimeout(() => {
      setShowBankDetails(true);
      setIsSpinning(false);
    }, 1000);
  };

  const handleBack = () => {
    setIsSpinning(true);
    setTimeout(() => {
      setShowBankDetails(false);
      setIsSpinning(false);
    }, 1000);
  };

  const handleWhatsAppRedirect = () => {
    const phoneNumber = '2348033133845'; // Replace with owner's WhatsApp number
    const message = encodeURIComponent("Hello, I’d like to give now in support of your mission.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="give" className="newsletter-section">
      <div className="newsletter-background">
        <img 
          src="https://images.unsplash.com/photo-1590602846989-e99596d2a6ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Radio host background" 
          className="background-image"
        />
        <div className="newsletter-overlay"></div>
      </div>
      
      <div className={`newsletter-container ${isSpinning ? 'spinning' : ''}`}>
        {!showBankDetails ? (
          <div className="newsletter-content">
            <div className="newsletter-header">
              <span className="newsletter-label">Give Now</span>
              <h1 className="newsletter-title">Support Our Mission</h1>
              <h2 className="newsletter-subtitle">Give With A Generous Heart</h2>
              <p className="newsletter-description">
                Your generous contribution helps us continue bringing quality content and supporting our community. 
                Every donation makes a meaningful impact on the lives we touch through our platform.
              </p>
            </div>
            <div className="newsletter-form">
              <button 
                className="newsletter-button"
                onClick={handleGiveNow}
              >
                GIVE NOW
              </button>
            </div>
          </div>
        ) : (
          <div className="bank-details-content">
            <div className="bank-header">
              <button className="back-button" onClick={handleBack}>
                <ArrowLeft size={24} />
              </button>
              <h1 className="bank-title">Bank Transfer Information</h1>
            </div>
            
            <div className="bank-details">
              <div className="bank-logo">
                <img 
                  src="/kuda.png" 
                  alt="Bank logo" 
                  className="bank-logo-image"
                />
              </div>
              
              <div className="bank-info">
                <div className="bank-item">
                  <span className="bank-label">Bank Name:</span>
                  <span className="bank-value">Kuda Bank</span>
                </div>
                <div className="bank-item">
                  <span className="bank-label">Account Name:</span>
                  <span className="bank-value">Ikenna Mbah</span>
                </div>
                <div className="bank-item">
                  <span className="bank-label">Account Number:</span>
                  <span className="bank-value">1101611319</span>
                </div>
              </div>
            </div>

            <div className="whatsapp-button-container">
              <button className="whatsapp-give-button" onClick={handleWhatsAppRedirect}>
                Give Now 
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection;

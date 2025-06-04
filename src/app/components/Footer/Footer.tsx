'use client';

import React from 'react';
import { MapPin, Phone, Mail, Globe, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-border"></div>
      <div className="footer-container">
        <div className="footer-content">
          
          {/* Logo and Mission Column */}
          <div className="footer-column logo-column">
            <div className="logo-section">
              <h2 className="logo-text">
                Pod<span className="logo-mic">🎙️</span>verse
              </h2>
              <div className="logo-subtitle">
                <span>RADIO</span>
                <span>PODCAST</span>
              </div>
            </div>
            <p className="mission-text">
              Our mission is to bring you daily episodes that dive deep into the stories, ideas, and experiences of remarkable individuals from all walks of life.
            </p>
          </div>

          {/* Pages Column */}
          <div className="footer-column pages-column">
            <h3 className="column-title">Pages</h3>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Home</a></li>
              <li><a href="#" className="footer-link">About Us</a></li>
              <li><a href="#" className="footer-link">Programs</a></li>
              <li><a href="#" className="footer-link">Articles</a></li>
              <li><a href="#" className="footer-link">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-column contact-column">
            <h3 className="column-title">Contact Us</h3>
            <div className="contact-items">
              <div className="contact-item">
                <MapPin className="contact-icon" size={18} />
                <span>KLLG St, No.99, Pku City, ID 28289</span>
              </div>
              <div className="contact-item">
                <Phone className="contact-icon" size={18} />
                <span>0761-8523-398</span>
              </div>
              <div className="contact-item">
                <Mail className="contact-icon" size={18} />
                <span>hello@domainsite.com</span>
              </div>
              <div className="contact-item">
                <Globe className="contact-icon" size={18} />
                <span>www.hellodomainsite.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="footer-column newsletter-column">
            <h3 className="column-title">Newsletter</h3>
            <div className="newsletter-form">
              <div className="input-container">
                <input 
                  type="email" 
                  placeholder="Email address"
                  className="email-input"
                />
                <button className="subscribe-btn">Subscribe</button>
              </div>
            </div>
            <div className="stats-container">
              <div className="stat-item">
                <span className="stat-number">2,000+</span>
                <span className="stat-label">Expert Host</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1,500+</span>
                <span className="stat-label">Episode Downloads</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="copyright">
            <span>Copyright © 2024 Rometheme. All Rights Reserved.</span>
          </div>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" className="social-link" aria-label="YouTube">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

'use client';

import { useState } from 'react';
import { Grid3X3, X, ChevronDown, Facebook, Instagram, Youtube } from 'lucide-react';
import { X as TwitterX } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
            <h1 className="logo-text">
              P<span className="logo-mic">🎙️</span>dverse
            </h1>
            <div className="logo-subtitle">
              <span>RADIO</span>
              <span>PODCAST</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className="navbar-links">
            <li><a href="#" className="nav-link">Home</a></li>
            <li><a href="#" className="nav-link">About Us</a></li>
            <li className="dropdown">
              <a href="#" className="nav-link">
                Pages <ChevronDown size={16} />
              </a>
            </li>
            <li className="dropdown">
              <a href="#" className="nav-link">
                Article & News <ChevronDown size={16} />
              </a>
            </li>
            <li><a href="#" className="nav-link">Contact Us</a></li>
          </ul>

          {/* Right Side Buttons */}
          <div className="navbar-actions">
            <button className="lets-talk-btn">Let&apos;s Talk</button>
            <button 
              className="grid-btn" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <Grid3X3 size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {isMenuOpen && (
        <div className={`sidebar-overlay ${isMenuOpen ? 'overlay-active' : ''}`} onClick={toggleMenu}>
          <div className={`sidebar ${isMenuOpen ? 'sidebar-active' : ''}`} onClick={(e) => e.stopPropagation()}>
            <button className="sidebar-close" onClick={toggleMenu}>
              <X size={24} />
            </button>
            
            <div className="sidebar-content">
              {/* Logo Section */}
              <div className="sidebar-logo">
                <h2 className="sidebar-logo-text">
                  P<span className="logo-mic">🎙️</span>dverse
                </h2>
                <p className="sidebar-tagline">Radio Station & Podcaster</p>
                <div className="sidebar-divider"></div>
              </div>

              {/* Contact Info */}
              <div className="sidebar-contact">
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>KLLG St. No.99, Pku City, ID 28289</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span>0761-8523-398</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <span>hello@domainsite.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🌐</span>
                  <span>www.hellodomainsite.com</span>
                </div>
              </div>

              {/* Subscribe Section */}
              <div className="sidebar-subscribe">
                <h3>FOLLOW & SUBSCRIBE</h3>
                <div className="subscribe-form">
                  <input 
                    type="email" 
                    placeholder="Email address"
                    className="subscribe-input"
                  />
                  <button className="subscribe-btn">Subscribe</button>
                </div>
                
                {/* Social Icons */}
                <div className="social-icons">
                  <a href="#" className="social-icon">
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="social-icon">
                    <TwitterX size={18} />
                  </a>
                  <a href="#" className="social-icon">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="social-icon">
                    <Youtube size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

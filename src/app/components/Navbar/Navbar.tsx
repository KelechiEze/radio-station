'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Grid3X3, X, Facebook, Instagram, Youtube, Twitter,
  MapPin, Phone, Mail, Globe
} from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  useEffect(() => {
    document.body.style.overflow = (isMenuOpen || isMobileNavOpen) ? 'hidden' : 'unset';
  }, [isMenuOpen, isMobileNavOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
            <Image
              src="/rapset.png"
              alt="Podverse Logo"
              width={160}
              height={90}
              className="navbar-logo-image"
            />
          </div>

          {/* Desktop Navigation */}
          <ul className="navbar-links">
            <li><a href="#" className="navbar-link">Home</a></li>
            <li><a href="#" className="navbar-link">About Us</a></li>
            <li><a href="#" className="navbar-link">Give</a></li>
            <li><a href="#" className="navbar-link">Contact Us</a></li>
          </ul>

          {/* Right Side Buttons */}
          <div className="navbar-actions">
            <button className="navbar-talk-btn">Let&apos;s Talk</button>
            
            {/* Mobile Navigation Hamburger - visible only on mobile */}
            <button className="navbar-mobile-nav-btn" onClick={toggleMobileNav} aria-label="Toggle mobile navigation">
              <div className="hamburger-lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>

            <button className="navbar-grid-btn" onClick={toggleMenu} aria-label="Toggle menu">
              <Grid3X3 size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Dropdown */}
      <div className={`mobile-nav-overlay ${isMobileNavOpen ? 'mobile-nav-overlay-active' : ''}`}>
        <div className={`mobile-nav-dropdown ${isMobileNavOpen ? 'mobile-nav-dropdown-active' : ''}`}>
          <button className="mobile-nav-close" onClick={toggleMobileNav}>
            <X size={24} />
          </button>
          
          <div className="mobile-nav-content">
            <ul className="mobile-nav-links">
              <li><a href="#" className="mobile-nav-link" onClick={toggleMobileNav}>Home</a></li>
              <li><a href="#" className="mobile-nav-link" onClick={toggleMobileNav}>About Us</a></li>
              <li><a href="#" className="mobile-nav-link" onClick={toggleMobileNav}>Give</a></li>
              <li><a href="#" className="mobile-nav-link" onClick={toggleMobileNav}>Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sidebar and Overlay */}
      <div className={`sidebar-overlay ${isMenuOpen ? 'overlay-active' : ''}`} onClick={toggleMenu}>
        <div
          className={`sidebar ${isMenuOpen ? 'sidebar-active' : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="sidebar-close" onClick={toggleMenu}>
            <X size={24} />
          </button>

          <div className="sidebar-content">
            <div className="sidebar-logo">
              <Image
                src="/twu.png"
                alt="Podverse Logo"
                width={140}
                height={50}
                className="sidebar-logo-image"
              />
              <p className="sidebar-tagline">Radio Station & Podcaster</p>
              <div className="sidebar-divider"></div>
            </div>

            {/* Contact Info */}
            <div className="sidebar-contact">
              <div className="sidebar-contact-item">
                <MapPin className="sidebar-contact-icon" size={18} />
                <span>KLLG St. No.99, Pku City, ID 28289</span>
              </div>
              <div className="sidebar-contact-item">
                <Phone className="sidebar-contact-icon" size={18} />
                <span>0761-8523-398</span>
              </div>
              <div className="sidebar-contact-item">
                <Mail className="sidebar-contact-icon" size={18} />
                <span>hello@domainsite.com</span>
              </div>
              <div className="sidebar-contact-item">
                <Globe className="sidebar-contact-icon" size={18} />
                <span>www.hellodomainsite.com</span>
              </div>
            </div>

            {/* Subscribe */}
            <div className="sidebar-subscribe">
              <h3>FOLLOW & SUBSCRIBE</h3>
              <div className="sidebar-subscribe-form">
                <input
                  type="email"
                  placeholder="Email address"
                  className="sidebar-subscribe-input"
                />
                <button className="sidebar-subscribe-btn">Subscribe</button>
              </div>

              <div className="sidebar-social-icons">
                <a href="#" className="sidebar-social-icon"><Facebook size={18} /></a>
                <a href="#" className="sidebar-social-icon"><Twitter size={18} /></a>
                <a href="#" className="sidebar-social-icon"><Instagram size={18} /></a>
                <a href="#" className="sidebar-social-icon"><Youtube size={18} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Grid3X3, X, Facebook, Instagram, Youtube, Twitter, Twitch,
  MapPin, Phone, Mail, Globe 
} from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleMobileNav = () => setIsMobileNavOpen(!isMobileNavOpen);

  useEffect(() => {
    document.body.style.overflow = (isMenuOpen || isMobileNavOpen) ? 'hidden' : 'unset';
  }, [isMenuOpen, isMobileNavOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
            <Image src="/rapset.png" alt="Podverse Logo" width={100} height={90} className="navbar-logo-image" />
          </div>

          {/* Desktop Navigation */}
          <ul className="navbar-links">
            <li><Link href="#home" className="navbar-link">Home</Link></li>
            <li><Link href="#about-us" className="navbar-link">About Us</Link></li>
            <li><Link href="#give" className="navbar-link">Give</Link></li>
            <li><Link href="#contact-us" className="navbar-link">Contact Us</Link></li>
          </ul>

          {/* Right Side Buttons */}
          <div className="navbar-actions">
            <button className="navbar-talk-btn">Let&apos;s Talk</button>
            
            <button className="navbar-mobile-nav-btn" onClick={toggleMobileNav} aria-label="Toggle mobile navigation">
              <div className="hamburger-lines"><span></span><span></span><span></span></div>
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
          <button className="mobile-nav-close" onClick={toggleMobileNav}><X size={24} /></button>
          <div className="mobile-nav-content">
            <ul className="mobile-nav-links">
              <li><Link href="#home" className="mobile-nav-link" onClick={toggleMobileNav}>Home</Link></li>
              <li><Link href="#about-us" className="mobile-nav-link" onClick={toggleMobileNav}>About Us</Link></li>
              <li><Link href="#give" className="mobile-nav-link" onClick={toggleMobileNav}>Give</Link></li>
              <li><Link href="#contact-us" className="mobile-nav-link" onClick={toggleMobileNav}>Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sidebar and Overlay */}
      <div className={`sidebar-overlay ${isMenuOpen ? 'overlay-active' : ''}`} onClick={toggleMenu}>
        <div className={`sidebar ${isMenuOpen ? 'sidebar-active' : ''}`} onClick={(e) => e.stopPropagation()}>
          <button className="sidebar-close" onClick={toggleMenu}><X size={24} /></button>

          <div className="sidebar-content">
            <div className="sidebar-logo">
              <Image src="/twu.png" alt="Podverse Logo" width={140} height={50} className="sidebar-logo-image" />
              <p className="sidebar-tagline">Radio Station & Podcaster</p>
              <div className="sidebar-divider"></div>
            </div>

            {/* Contact Info */}
            <div className="sidebar-contact">
              <div className="sidebar-contact-item"><MapPin className="sidebar-contact-icon" size={18} /><span>KLLG St. No.99, Pku City, ID 28289</span></div>
              <div className="sidebar-contact-item"><Phone className="sidebar-contact-icon" size={18} /><span>0761-8523-398</span></div>
              <div className="sidebar-contact-item"><Mail className="sidebar-contact-icon" size={18} /><span>hello@domainsite.com</span></div>
              <div className="sidebar-contact-item"><Globe className="sidebar-contact-icon" size={18} /><span>www.hellodomainsite.com</span></div>
            </div>

            {/* Subscribe */}
            <div className="sidebar-subscribe">
              <h3>FOLLOW & SUBSCRIBE</h3>
              <div className="sidebar-subscribe-form">
                <input type="email" placeholder="Email address" className="sidebar-subscribe-input" />
                <button className="sidebar-subscribe-btn">Subscribe</button>
              </div>
              <div className="sidebar-social-icons">
                <a href="https://www.facebook.com/rapradioafrica" className="sidebar-social-icon"><Facebook size={18} /></a>
                <a href="https://x.com/rapradioafrica" className="sidebar-social-icon"><Twitter size={18} /></a>
                <a href="https://www.instagram.com/rapradioafrica/" className="sidebar-social-icon"><Instagram size={18} /></a>
                <a href="https://www.youtube.com/@rapradioafrica" className="sidebar-social-icon"><Youtube size={18} /></a>
                <a href="https://www.twitch.tv/rapradioafrica" className="sidebar-social-icon"><Twitch size={18} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

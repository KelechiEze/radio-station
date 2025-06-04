'use client';

import React from 'react';
import { MessageCircle, Headphones, User2, Mic, Play } from 'lucide-react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left Side - Main Content */}
        <div className="about-content">
          <div className="about-text">
            <h3 className="about-subtitle">About Us</h3>
            <h1 className="about-title">
              Presenting The Best Headlines To You Always
            </h1>
            <p className="about-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed leo placerat, 
              sollicitudin lacus nec, porta lacus. Cras ac turpis ut sem dictum luctus. Nam rhoncus, 
              ante eu tempus interdum, purus lacus rutrum urna.
            </p>
          </div>
          
          {/* Podcast Image with Play Button */}
          <div className="podcast-image-container">
            <img 
              src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Podcast Recording"
              className="podcast-image"
            />
            <div className="play-button-overlay">
              <div className="play-button">
                <Play className="play-icon" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Feature Grid */}
        <div className="features-grid">
          <div className="feature-box">
            <MessageCircle className="feature-icon" />
            <h4 className="feature-title">Trending Topics</h4>
            <p className="feature-text">
              We bring the right people together to challenge established thinking and drive transform in 2020
            </p>
          </div>

          <div className="feature-box">
            <Headphones className="feature-icon" />
            <h4 className="feature-title">Pop Culture</h4>
            <p className="feature-text">
              We bring the right people together to challenge established thinking and drive transform in 2020
            </p>
          </div>

          <div className="feature-box">
            <User2 className="feature-icon" />
            <h4 className="feature-title">Comedy & Fun</h4>
            <p className="feature-text">
              We bring the right people together to challenge established thinking and drive transform in 2020
            </p>
          </div>

          <div className="feature-box">
            <Mic className="feature-icon" />
            <h4 className="feature-title">Sports & Health</h4>
            <p className="feature-text">
              We bring the right people together to challenge established thinking and drive transform in 2020
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

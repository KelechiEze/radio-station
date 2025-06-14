'use client';

import React from 'react';
import { MessageCircle, Headphones, User2, Mic, Play } from 'lucide-react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about-us" className="about-section">
      <div className="about-container">
        {/* Left Side - Main Content */}
        <div className="about-content">
          <div className="about-text">
            <h3 className="about-subtitle">About Us</h3>
            <h1 className="about-title">
              Presenting The Best Headlines To You Always
            </h1>
            <p className="about-description">
             Founded officially on January 4th 2016, Africa’s first Internet radio station has not only been a loud and gnawing voice of an unapologetic Culture, but also a wind instrument in the hands of its dopest practitioners going on a decade.  We’re not just a radio station; we’re the heartbeat of rap music in Africa; showcasing and promoting the four corners of the continent; from the neoteric indigenous notions of the North to the always vibey but voracious verses of the South, from the stylistic and melodic bars from the East to the age-long knocking penmanship from the West - we pay attention to all spin-off genres of Hiphop; Classics, Golden age, Alternative, Cloud Rap, Underground, Boombap, Conscious Rap, Grunge, Drill, Kwaito and the newly experimental Afrobeats-rap nothing is off the table, even some wack joints sometimes. There’s street talk to soul-stirring stories and never-heard-befores, as we amplify “the most intelligent music genre” with the music and voices that’s shaping Africa’s Hiphop culture on the continent as well as the diaspora.

              Streaming 24/7, one of our vision include always spotlighting rising talent, challenge narratives, and spark real conversations about Hiphop, our identity, our power and our ever evolving progress.

              Our mission is to keep the Hiphop Culture alive through dopeness, hard conversations as well as to connect, empower, and elevate Africa’s Hiphop culture through authentic rhythm, aware resistance, and avid 
              representation.

              “Real Hiphop is now on radio”
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

'use client';

import { Play } from 'lucide-react';
import './InfoSection.css';

const InfoSection = () => {
  return (
    <section className="info-section">
      <div className="info-overlay">
        <div className="info-content">
          <span className="info-subheading">Tune In!</span>
          <h1 className="info-heading">Catch Up on What You&#39;ve Missed</h1>
          <p className="info-paragraph">
            Dive into our full episode library and catch up on all the exciting conversations,
            inspiring stories, and trending topics you&#39;ve missed.
          </p>
          <div className="info-buttons">
            <button className="btn-subscribe">Subscribe</button>
            <button className="btn-listening">
              <Play className="play-icon" size={16} />
              Listening Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;

'use client';

import { Play } from 'lucide-react';
import './HomeView.css';

const HomeView = () => {
  return (
    <section className="home-view">
      <div className="home-container">
        {/* Left Column */}
        <div className="home-left">
          <p className="home-subtitle">Turn Up the Volume</p>
          <h1 className="home-title">Start Listening Your Favorite Podcast</h1>
          <p className="home-description">
            Dive into our latest episodes and discover captivating stories, insightful 
            interviews, and the best in entertainment. Tune in now and never miss a 
            moment of the action!
          </p>
          
          {/* CTA Buttons */}
          <div className="home-buttons">
            <button className="btn-primary">Learn More</button>
            <button className="btn-secondary">See All Episode</button>
          </div>
          
          {/* Platform Icons */}
          <div className="platform-section">
            <span className="platform-label">Listening On :</span>
            <div className="platform-icons">
              <div className="platform-icon spotify">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/232px-Spotify_icon.svg.png" alt="Spotify" />
              </div>
              <div className="platform-icon soundcloud">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Antu_soundcloud.svg/240px-Antu_soundcloud.svg.png" alt="SoundCloud" />
              </div>
              <div className="platform-icon apple">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Podcasts_%28iOS%29.svg/240px-Podcasts_%28iOS%29.svg.png" alt="Apple Podcasts" />
              </div>
              <div className="platform-icon pandora">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Pandora_logo.svg/240px-Pandora_logo.svg.png" alt="Pandora" />
              </div>
              <div className="platform-icon tunein">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/TuneIn_Logo_2017.svg/240px-TuneIn_Logo_2017.svg.png" alt="TuneIn" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Column */}
        <div className="home-right">
          {/* Studio Image */}
          <div className="studio-image">
            <img 
              src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Podcast Studio" 
            />
          </div>
          
          {/* Happy Listener Card */}
          <div className="listener-card">
            <div className="listener-avatars">
              <div className="avatar">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=100&q=80" alt="Listener" />
              </div>
              <div className="avatar">
                <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&w=100&q=80" alt="Listener" />
              </div>
              <div className="avatar">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=100&q=80" alt="Listener" />
              </div>
            </div>
            <h3 className="listener-title">Happy Listener</h3>
          </div>
          
          {/* Play Button */}
          <div className="play-button2">
            <button className="play-btn2">
              <Play size={32} fill="#f94144" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeView;

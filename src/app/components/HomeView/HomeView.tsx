'use client';

import VideoPlayer from '../YoutubePlayer/YoutubePlayer';
import MusicPlayer from '../MusicPlayer/MusicPlayer';
import './HomeView.css';

const HomeView = () => {
  return (
    <section id="home" className="home-view">
      <div className="home-container">
        {/* Left Column */}
        <div className="home-left">
          <p className="home-subtitle">Turn Up the Volume</p>
          <h1 className="home-title">Real Hiphop is now on radio</h1>
          <p className="home-description">
            Dive into our latest episodes and discover captivating stories, insightful 
            interviews, and the best in entertainment. Tune in now and never miss a 
            moment of the action!
          </p>

          {/* CTA Buttons */}
          <div className="home-buttons">
            <a href="#about-us" className="btn-primary">
              Learn More
            </a>
            <a
              href="https://www.youtube.com/@rapradioafrica/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              See All Episodes
            </a>
          </div>

          {/* Platform Icons */}
          <div className="platform-section">
            <span className="platform-label">Listening On :</span>
            <div className="platform-icons">
              <div className="platform-icon apple">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Podcasts_%28iOS%29.svg/240px-Podcasts_%28iOS%29.svg.png"
                  alt="Apple Podcasts"
                />
              </div>
              <div className="platform-icon soundcloud">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Antu_soundcloud.svg/240px-Antu_soundcloud.svg.png"
                  alt="SoundCloud"
                />
              </div>
              <div className="platform-icon spotify">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/232px-Spotify_icon.svg.png"
                  alt="Spotify"
                />
              </div>
              <div className="platform-icon pocketcasts">
                <img 
                  src="/pocketcasts.png" 
                  alt="Pocket Casts" 
                />
              </div>
              <div className="platform-icon googlepodcasts">
                <img 
                  src="/gogglepodcasts.png" 
                  alt="Google Podcasts" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="home-right">
          {/* Video Player */}
          <VideoPlayer />

          {/* Music Player */}
          <MusicPlayer />

          {/* Happy Listener Card */}
          <div className="listener-card">
            <div className="listener-avatars">
              <div className="avatar">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=100&q=80"
                  alt="Listener"
                />
              </div>
              <div className="avatar">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=1200"
                  alt="Listener"
                />
              </div>
              <div className="avatar">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=100&q=80"
                  alt="Listener"
                />
              </div>
            </div>
            <h3 className="listener-title">Happy Listeners</h3>
            <p className="listener-count">100K+ Active Listeners</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeView;

'use client';

import VideoPlayer from '../YoutubePlayer/YoutubePlayer';
import MusicPlayer from '../MusicPlayer/MusicPlayer';
import './HomeView.css';

const HomeView = () => {
  // Smooth scroll to the news section
  const scrollToNews = () => {
    const newsSection = document.getElementById('news');
    if (newsSection) {
      newsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            <button onClick={scrollToNews} className="btn-secondary">
              See Latest News
            </button>
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
          <VideoPlayer />
          <MusicPlayer />
        </div>
      </div>
    </section>
  );
};

export default HomeView;

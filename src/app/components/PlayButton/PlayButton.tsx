'use client';

import './PlayButton.css';

interface PlayButtonProps {
  isPlaying: boolean;
  onClick: () => void;
}

const PlayButton = ({ isPlaying, onClick }: PlayButtonProps) => {
  return (
    <button className={`play-button ${isPlaying ? 'playing' : ''}`} onClick={onClick}>
      <div className="button-background"></div>
      <div className="button-icon">
        {isPlaying ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5,3 19,12 5,21" />
          </svg>
        )}
      </div>
      <div className="ripple-effect"></div>
    </button>
  );
};

export default PlayButton;

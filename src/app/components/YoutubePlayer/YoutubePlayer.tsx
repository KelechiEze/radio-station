'use client';

import { useRef } from 'react';
import './YoutubePlayer.css';

const VideoPlayer = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <div className="video-player-container">
      <div className="video-wrapper">
        <iframe
          ref={iframeRef}
          src="https://www.youtube.com/embed/GGOyFnrZRt0?si=7NoaQxHK58A0-HHQ"
          title="Podcast Episode"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          className="video-frame"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;

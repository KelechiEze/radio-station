'use client';

import { useState, useRef, useEffect } from 'react';
import PlayButton from '../PlayButton/PlayButton';
import './MusicPlayer.css';

// Sample music tracks (replace these URLs with your actual music files)
const musicTracks = [
  {
    id: 1,
    title: "Hip Hop Beats Vol. 1",
    artist: "Underground Collective",
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Street Chronicles",
    artist: "City Legends",
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    cover: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop"
  },
  {
    id: 3,
    title: "Midnight Vibes",
    artist: "Nocturnal MC",
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop"
  },
  {
    id: 4,
    title: "Flow State",
    artist: "Rhythm Masters",
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop"
  },
  {
    id: 5,
    title: "Urban Stories",
    artist: "Street Poets",
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop"
  },
  {
    id: 6,
    title: "Bass Lines",
    artist: "Deep Frequencies",
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    cover: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=300&fit=crop"
  },
  {
    id: 7,
    title: "Lyrical Genius",
    artist: "Word Smiths",
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    cover: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop"
  },
  {
    id: 8,
    title: "Beat Revolution",
    artist: "Sound Rebels",
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop"
  },
  {
    id: 9,
    title: "Freestyle Friday",
    artist: "Improvised Sounds",
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop"
  },
  {
    id: 10,
    title: "Groove Theory",
    artist: "Funk Elements",
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop"
  },
  {
    id: 11,
    title: "Raw Talent",
    artist: "Fresh Voices",
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    cover: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=300&fit=crop"
  },
  {
    id: 12,
    title: "City Lights",
    artist: "Metro Sounds",
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    cover: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop"
  },
  {
    id: 13,
    title: "Underground Kings",
    artist: "Basement Beats",
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop"
  },
  {
    id: 14,
    title: "Mic Check",
    artist: "Audio Test",
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop"
  },
  {
    id: 15,
    title: "Rhythm & Rhyme",
    artist: "Classic Flow",
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop"
  },
  {
    id: 16,
    title: "Beat Drop",
    artist: "Electronic Fusion",
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    cover: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=300&fit=crop"
  },
  {
    id: 17,
    title: "Verbal Assault",
    artist: "Aggressive Lyrics",
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    cover: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop"
  },
  {
    id: 18,
    title: "Smooth Operator",
    artist: "Chill Vibes",
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop"
  },
  {
    id: 19,
    title: "Block Party",
    artist: "Community Sounds",
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop"
  },
  {
    id: 20,
    title: "Studio Sessions",
    artist: "Recording Artists",
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop"
  },
  {
    id: 21,
    title: "Digital Dreams",
    artist: "Synth Wave",
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    cover: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=300&fit=crop"
  },
  {
    id: 22,
    title: "Old School Revival",
    artist: "Vintage Beats",
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    cover: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop"
  },
  {
    id: 23,
    title: "Future Sounds",
    artist: "Tomorrow's Music",
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop"
  },
  {
    id: 24,
    title: "Crowd Pleaser",
    artist: "Popular Demand",
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop"
  },
  {
    id: 25,
    title: "Late Night Cuts",
    artist: "After Hours",
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop"
  },
  {
    id: 26,
    title: "Heavy Rotation",
    artist: "Radio Favorites",
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    cover: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=300&fit=crop"
  },
  {
    id: 27,
    title: "Underground Anthem",
    artist: "Rebel Collective",
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    cover: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop"
  },
  {
    id: 28,
    title: "Beat Laboratory",
    artist: "Experimental Sounds",
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop"
  },
  {
    id: 29,
    title: "Vocal Mastery",
    artist: "Technique Perfection",
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop"
  },
  {
    id: 30,
    title: "Finale Mix",
    artist: "Grand Closing",
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop"
  }
];

const MusicPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleNext);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleNext);
    };
  }, [currentTrack]);

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentTrack((prev) => (prev + 1) % musicTracks.length);
    setIsPlaying(true);
  };

  const handlePrevious = () => {
    setCurrentTrack((prev) => (prev - 1 + musicTracks.length) % musicTracks.length);
    setIsPlaying(true);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    audio.currentTime = percent * duration;
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const track = musicTracks[currentTrack];

  return (
    <div className="music-player">
      <audio
        ref={audioRef}
        src={track.url}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      
      <div className="player-header">
        <img src={track.cover} alt={track.title} className="track-cover" />
        <div className="track-info">
          <h3 className="track-title">{track.title}</h3>
          <p className="track-artist">{track.artist}</p>
        </div>
      </div>

      <div className="player-controls">
        <button className="control-btn previous-btn" onClick={handlePrevious}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
          </svg>
        </button>

        <PlayButton isPlaying={isPlaying} onClick={handlePlayPause} />

        <button className="control-btn next-btn" onClick={handleNext}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
          </svg>
        </button>
      </div>

      <div className="progress-section">
        <span className="time-display">{formatTime(currentTime)}</span>
        <div className="progress-bar" onClick={handleProgressClick}>
          <div 
            className="progress-fill"
            style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
          />
        </div>
        <span className="time-display">{formatTime(duration || 0)}</span>
      </div>

      <div className="track-counter">
        Track {currentTrack + 1} of {musicTracks.length}
      </div>
    </div>
  );
};

export default MusicPlayer;

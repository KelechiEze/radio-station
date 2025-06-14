'use client';

import React from 'react';
import { Twitter } from 'lucide-react';
import './TeamCard.css';

interface SocialMediaLinks {
  twitter: string;
}

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  socialMedia: SocialMediaLinks;
  onClick: (event: React.MouseEvent) => void;
  animationDelay?: number;
}

const TeamCard: React.FC<TeamCardProps> = ({
  name,
  role,
  image,
  socialMedia,
  onClick,
  animationDelay = 0,
}) => {
  const handleSocialClick = (e: React.MouseEvent, url: string) => {
    e.stopPropagation(); // prevents modal from opening
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="team-card"
      style={{ animationDelay: `${animationDelay}s` }}
      onClick={onClick}
    >
      <div className="card-image-container">
        <img src={image} alt={name} className="card-image" />
        <div className="card-overlay">
          <div className="social-icons">
            <a
              href="#"
              className="social-link"
              aria-label="Twitter"
              onClick={(e) => handleSocialClick(e, socialMedia.twitter)}
            >
              <Twitter size={20} />
            </a>
          </div>
          <div className="view-bio-overlay">
            <span className="view-bio-text">View Bio</span>
          </div>
        </div>
      </div>
      <div className="card-content">
        <h3 className="card-name">{name}</h3>
        <p className="card-role">{role}</p>
      </div>
    </div>
  );
};

export default TeamCard;

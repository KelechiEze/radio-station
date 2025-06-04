'use client';

import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import './TeamCard.css';

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, image }) => {
  return (
    <div className="team-card">
      <div className="card-image-container">
        <img src={image} alt={name} className="card-image" />
        <div className="card-overlay">
          <div className="social-icons">
            <a href="#" className="social-link" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" className="social-link" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
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

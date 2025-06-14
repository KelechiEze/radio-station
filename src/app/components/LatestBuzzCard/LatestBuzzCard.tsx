import React from 'react';
import './LatestBuzzCard.css';

interface LatestBuzzCardProps {
  image: string;
  date: string;
  title: string;
  excerpt: string;
}

const LatestBuzzCard: React.FC<LatestBuzzCardProps> = ({
  image,
  date,
  title,
  excerpt
}) => {
  return (
    <article className="buzz-card">
      <div className="buzz-card-image-container">
        <img 
          src={image} 
          alt={title}
          className="buzz-card-image"
        />
        <div className="buzz-card-date-badge">
          {date}
        </div>
      </div>
      
      <div className="buzz-card-content">
        <h3 className="buzz-card-title">{title}</h3>
        <p className="buzz-card-excerpt">{excerpt}</p>
        
      </div>
    </article>
  );
};

export default LatestBuzzCard;

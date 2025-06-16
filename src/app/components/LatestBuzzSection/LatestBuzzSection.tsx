import React from 'react';
import LatestBuzzCard from '../LatestBuzzCard/LatestBuzzCard';
import './LatestBuzzSection.css';

interface CardData {
  id: number;
  image: string;
  date: string;
  title: string;
  excerpt: string;
}

const LatestBuzzSection: React.FC = () => {
  const cardData: CardData[] = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      date: '14 Dec',
      title: 'Inside the Studio: How We Create Your Favorite Episodes',
      excerpt: 'Single Post Home – Single Post Dec 18, 2024 Inside the Studio: How We Create Your Favorite Episodes Ever wondered how...'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      date: '16 Dec',
      title: 'What&apos;s Next for Podverse: Upcoming Shows You&apos;ll Love',
      excerpt: 'Single Post Home – Single Post Dec 18, 2024 What&apos;s Next for Podverse: Upcoming Shows You&apos;ll Love Ever wondered how your...'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1590602846989-e99596d2a6ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      date: '18 Dec',
      title: 'Behind the Mic: Meet Our Newest Hosts and Guests',
      excerpt: 'Single Post Home – Single Post Dec 18, 2024 Behind the Mic: Meet Our Newest Hosts and Guests Ever wondered how...'
    }
  ];

  return (
    <section id="news" className="buzz-section">
      <div className="buzz-container">
        <div className="buzz-header">
          <p className="buzz-subtitle">The Latest Buzz</p>
          <h2 className="buzz-title">What&apos;s Hot Right Now</h2>
        </div>
        
        <div className="buzz-grid">
          {cardData.map((card) => (
            <LatestBuzzCard
              key={card.id}
              image={card.image}
              date={card.date}
              title={card.title}
              excerpt={card.excerpt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBuzzSection;

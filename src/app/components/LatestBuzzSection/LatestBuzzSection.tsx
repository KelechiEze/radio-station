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
      image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      date: '14 Dec',
      title: 'Inside the Studio: How We Create Your Favorite Episodes',
      excerpt: 'Single Post Home – Single Post Dec 18, 2024 Inside the Studio: How We Create Your Favorite Episodes Ever wondered how...'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      date: '16 Dec',
      title: "What's Next for Podverse: Upcoming Shows You'll Love",
      excerpt: "Single Post Home – Single Post Dec 18, 2024 What's Next for Podverse: Upcoming Shows You'll Love Ever wondered how your..."
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1590602846989-e99596d2a6ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      date: '18 Dec',
      title: 'Behind the Mic: Meet Our Newest Hosts and Guests',
      excerpt: 'Single Post Home – Single Post Dec 18, 2024 Behind the Mic: Meet Our Newest Hosts and Guests Ever wondered how...'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      date: '20 Dec',
      title: 'How Technology is Transforming Podcasting',
      excerpt: 'Explore how new tools and platforms are reshaping the way podcasts are produced and consumed around the world.'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1590602846989-e99596d2a6ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      date: '22 Dec',
      title: 'Top 5 Episodes That Made You Laugh in 2024',
      excerpt: 'A countdown of the most entertaining, hilarious, and fan-favorite podcast episodes of the year.'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      date: '24 Dec',
      title: 'Building a Podcast Brand: Tips from the Experts',
      excerpt: 'Leading hosts and producers share how they built their brand and loyal audience from the ground up.'
    }
  ];

  return (
    <section id="news" className="buzz-section">
      <div className="buzz-container">
        <div className="buzz-header">
          <p className="buzz-subtitle">News</p>
          <h2 className="buzz-title">What&apos;s Happening Right Now</h2>
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

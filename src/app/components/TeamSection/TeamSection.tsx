'use client';

import React, { useState } from 'react';
import TeamCard from '../TeamCard/TeamCard';
import Modal from '../Modal/Modal';
import './TeamSection.css';

type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  socialMedia: {
    twitter: string;
  };
};

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Bionic Mbah',
      role: 'Founder/CEO',
      image: '/team33.png',
      bio: 'A visionary force in African Hiphop, ...',
      socialMedia: { twitter: 'https://x.com/bionicmba' }
    },
    {
      id: 2,
      name: 'Smith Ukpong Smith',
      role: 'Operations',
      image: '/team22.png',
      bio: 'Smith Ukpong Smith is a multifaceted individual...',
      socialMedia: { twitter: 'https://x.com/THISISSMITHY' }
    },
    {
      id: 3,
      name: 'Yusuf Ayobami',
      role: 'Creative',
      image: '/team11.png',
      bio: 'Yusuf Omojola Ayobami is a rapper/singer...',
      socialMedia: { twitter: 'https://x.com/EvgDaGreat12345' }
    },
    {
      id: 4,
      name: 'Grace Okonye',
      role: 'Business Development',
      image: '/huh25.jpg',
      bio: 'Her work span almost a decade in sales/marketing...',
      socialMedia: { twitter: 'https://twitter.com/marcusjohnson' }
    }
  ];

  const handleCardClick = (
    member: TeamMember,
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const clickX = rect.left + rect.width / 2;
    const clickY = rect.top + rect.height / 2;

    setClickPosition({ x: clickX, y: clickY });
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedMember(null), 300);
  };

  return (
    <div id="thecru" className="team-section">
      <div className="team-container">
        <div className="team-cards-wrapper">
          <div className="team-cards-top">
            {teamMembers.slice(0, 3).map((member, index) => (
              <div key={member.id} onClick={(e) => handleCardClick(member, e)}>
                <TeamCard
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  socialMedia={member.socialMedia}
                  animationDelay={index * 0.2}
                />
              </div>
            ))}
          </div>

          <div className="team-card-solo">
            <div onClick={(e) => handleCardClick(teamMembers[3], e)}>
              <TeamCard
                name={teamMembers[3].name}
                role={teamMembers[3].role}
                image={teamMembers[3].image}
                socialMedia={teamMembers[3].socialMedia}
                animationDelay={0.6}
              />
            </div>
          </div>
        </div>

        <div className="team-content">
          <div className="team-badge">Broadcaster</div>
          <h2 className="team-title">Meet RapRadio Broadcasters</h2>
          <p className="team-description">
            Our talented team of broadcasters brings you the best in hip-hop culture,
            from breaking news to exclusive interviews...
          </p>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        member={selectedMember}
        clickPosition={clickPosition}
      />
    </div>
  );
};

export default TeamSection;

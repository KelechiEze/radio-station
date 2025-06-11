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

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Bionic Mbah",
      role: "Founder/CEO",
      image: "/team33.png",
      bio: "A visionary force in African Hiphop, a rapper, record producer, writer and all-round creative whose deep-rooted passion for The Kulture spans over three decades. Bionic, created the Rap Radio Africa brand as a radio show in Enugu, Nigeria in 2002, fast-forward to recent times, transformed into a pioneering online radio platform on January 4th, 2016 where four months later, the renowned legend Chuck D (Public Enemy) reached out to him for a simul-collab.",
      socialMedia: {
        twitter: "https://x.com/bionicmba"
      }
    },
    {
      id: 2,
      name: "Smith Ukpong Smith",
      role: "Operations",
      image: "/team22.png",
      bio: "Smith Ukpong Smith is a multifaceted individual; a lawyer, rapper and vibrant Hiphop show co-host with a magnetic personality. As co-convener of the Lyricist Lounge Nigeria brand, he assists to play a role in spotlighting lyrical excellence and nurturing emerging talent in the Nigerian Hiphop scene. His voice and vision also extend across the continent through the work that Rap Radio Africa is doing, where he contributes to shaping the narrative of a continent’s rap Kulture.",
      socialMedia: {
        twitter: "https://x.com/THISISSMITHY"
      }
    },
    {
      id: 3,
      name: "Yusuf Ayobami",
      role: "Creative",
      image: "/team11.png",
      bio: "Yusuf Omojola Ayobami is a rapper/singer/dancehall artiste/CEO, Yubami Music & Entertainment. Described by many as “creatively insane” he’s a door-opener for a new realm of Nigeria’s Hiphop, a fearless voice and one who brings thought-provokingness on his mic apparatus and insight to his penmanship.",
      socialMedia: {
        twitter: "https://x.com/EvgDaGreat12345"
      }
    },
    {
      id: 4,
      name: "Grace Okonye",
      role: "Business Development",
      image: "/huh25.jpg",
      bio: "Her work span almost a decade in sales/marketing across a diverse range of goods and services. Armed with a Business Administration degree, she brings a solid foundation of hands-on expertise in customer relations, skilled creative/ideation, innovative content creation and strong relationship management.",
      socialMedia: {
        twitter: "https://twitter.com/marcusjohnson"
      }
    }
  ];

  const handleCardClick = (member: TeamMember) => {
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
              <TeamCard
                key={member.id}
                name={member.name}
                role={member.role}
                image={member.image}
                socialMedia={member.socialMedia}
                onClick={() => handleCardClick(member)}
                animationDelay={index * 0.2}
              />
            ))}
          </div>
          <div className="team-card-solo">
            <TeamCard
              key={teamMembers[3].id}
              name={teamMembers[3].name}
              role={teamMembers[3].role}
              image={teamMembers[3].image}
              socialMedia={teamMembers[3].socialMedia}
              onClick={() => handleCardClick(teamMembers[3])}
              animationDelay={0.6}
            />
          </div>
        </div>

        <div className="team-content">
          <div className="team-badge">Broadcaster</div>
          <h2 className="team-title">Meet RapRadio Broadcasters</h2>
          <p className="team-description">
            Our talented team of broadcasters brings you the best in hip-hop culture,
            from breaking news to exclusive interviews. Each host brings their unique
            perspective and deep passion for the music that moves us all.
          </p>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        member={selectedMember}
        clickPosition={{ x: 0, y: 0 }}
      />
    </div>
  );
};

export default TeamSection;

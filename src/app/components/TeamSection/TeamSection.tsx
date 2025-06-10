'use client';

import React, { useState } from 'react';
import TeamCard from '../TeamCard/TeamCard';
import Modal from '../Modal/Modal';
import './TeamSection.css';

// Define the type for a team member
interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
}

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Bionic Mbah",
      role: "Founder/Creator, Rap Radio Africa.",
      image: "/team33.png",
      bio: "A visionary force in African Hiphop, a rapper, record producer, writer and all-round creative whose deep-rooted passion for The Kulture spans over three decades. Bionic, created the Rap Radio Africa brand as a radio show in Enugu, Nigeria in 2002, fast-forward to recent times, transformed into a pioneering online radio platform on January 4th, 2016 where four months later, the renowned legend Chuck D (Public Enemy) reached out to him for a simul-collab. Since inception, he has amongst many, conducted high-profile interviews with 2-time Grammy winner, Speech (Arrested Development), Rhymefest (4-time Grammy winner & Golden Globe winner), rap icon ChipFu (Fu-Schnickens), Rockness Monsta (one-half of the legendary HeltahSkeltah) and more."
    },
    {
      id: 2,
      name: "Smith Ukpong ",
      role: "co-Convener/co-host",
      image: "/team22.png",
      bio: "The lawyer/rapper/A&R is a Nigerian Hiphop enthusiast and co-host; The Rap Radio Africa Show as well as the co-Convener/co-host, Lyricist Lounge Nigeria where he is actively involved in organizing of its monthly event, a platform that showcases live performances, open mics/spoken word and freestyle cypher sessions. He co-hosts, Hiphop Chronicles live podcast which offers in-depth analyses of Hiphop’s impact and history in Africa."
    },
    {
      id: 3,
      name: "Yusuf Omojola Ayobami",
      role: "RadioRap Africa Host",
      image: "/team11.png",
      bio: "Yusuf Omojola Ayobami is a rapper/singer/dancehall artiste/CEO, Yubami Music & Entertainment. Described by many as “creatively insane” he’s a door-opener for a new realm of Nigeria’s Hiphop, a fearless voice and one who brings thought-provokingness on his mic apparatus and insight to his penmanship. Popularly known as “EVGDaGreat”, his wordplay is as sharp as his envious wit, where he blends streetwise storytelling with raw creativity, repping The Kulture with every ink-spill and every birthed soundscape, he’s moving the Kulture and shaking the system - one word at a time"
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
        <div className="team-cards">
          {teamMembers.map((member) => (
            <TeamCard
              key={member.id}
              name={member.name}
              role={member.role}
              image={member.image}
              onClick={() => handleCardClick(member)}
            />
          ))}
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
      />
    </div>
  );
};

export default TeamSection;

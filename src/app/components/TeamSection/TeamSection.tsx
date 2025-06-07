import React from 'react';
import TeamCard from '../TeamCard/TeamCard';
import './TeamSection.css';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Hanna Steward",
      role: "DeeFm Host",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=1200"
    },
    {
      id: 2,
      name: "Zea Alisson",
      role: "DeeFm Host", 
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=1200"
    },
    {
      id: 3,
      name: "Arita Dowie",
      role: "DeeFm Host",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=1200"
    }
  ];

  return (
    <div className="team-section">
      <div className="team-container">
        <div className="team-cards">
          {teamMembers.map((member) => (
            <TeamCard
              key={member.id}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>
        <div className="team-content">
          <div className="team-badge">Broadcaster</div>
          <h2 className="team-title">Meet RapRadio Broadcasters</h2>
          <p className="team-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed leo placerat, 
            sollicitudin lacus nec, porta lacus. Cras ac turpis ut sem dictum luctus. Nam rhoncus, 
            ante eu tempus interdum, purus lacus rutrum urna.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;

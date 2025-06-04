'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import './AboutAndStatsSection.css';

const AboutAndStatsSection = () => {
  const [stats, setStats] = useState({
    hosts: 0,
    episodes: 0,
    experience: 0,
  });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateStats();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateStats = () => {
    const duration = 2000;
    const targets = { hosts: 20, episodes: 1500, experience: 10 };
    const increments = {
      hosts: targets.hosts / (duration / 50),
      episodes: targets.episodes / (duration / 50),
      experience: targets.experience / (duration / 50),
    };

    const current = { hosts: 0, episodes: 0, experience: 0 };

    const interval = setInterval(() => {
      current.hosts = Math.min(current.hosts + increments.hosts, targets.hosts);
      current.episodes = Math.min(current.episodes + increments.episodes, targets.episodes);
      current.experience = Math.min(current.experience + increments.experience, targets.experience);

      setStats({
        hosts: Math.floor(current.hosts),
        episodes: Math.floor(current.episodes),
        experience: Math.floor(current.experience),
      });

      if (
        current.hosts >= targets.hosts &&
        current.episodes >= targets.episodes &&
        current.experience >= targets.experience
      ) {
        clearInterval(interval);
      }
    }, 50);
  };

  return (
    <section ref={sectionRef} className="about-stats-section">
      <div className="about-stats-container">
        <div className="about-column left-image">
          <Image
            src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Woman podcasting"
            className="podcast-image"
            width={400}
            height={400}
          />
        </div>

        <div className="about-column center-content">
          <span className="about-subheading">Our Story</span>
          <h2 className="about-heading">Crafting Unique Soundscapes for Every Listener</h2>

          <p className="about-paragraph">
            We are passionate about the transformative power of conversation. Our mission is to bring you daily
            episodes that dive deep into the stories, ideas, and experiences of remarkable individuals from all walks of
            life. From entrepreneurs and thought leaders to everyday heroes.
          </p>

          <p className="about-paragraph">
            We explore the journeys that shape their lives and the lessons they&#39;ve learned along the way. Each episode is
            designed to spark inspiration, provoke thought, and offer fresh perspectives that encourage personal
            growth and positive change. Whether it&#39;s overcoming obstacles, chasing dreams.
          </p>

          <button className="about-btn">Read More</button>

          <div className="stats-row">
            <div className="stat-item">
              <span className="stat-number">{stats.hosts}+</span>
              <span className="stat-label">Expert Host</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{(stats.episodes / 1000).toFixed(1)}K</span>
              <span className="stat-label">Episode Downloads</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{stats.experience}+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>
        </div>

        <div className="about-column right-image">
          <Image
            src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="People podcasting together"
            className="podcast-image"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutAndStatsSection;

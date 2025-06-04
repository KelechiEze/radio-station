'use client';

import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import './TestimonialSection.css';

interface Testimonial {
  id: number;
  text: string;
  rating: number;
  username: string;
  platform: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Maecenas commodo tortor tempor diam aliquam efficitur molestie quam ornare ipsum interdum, at lobortis mauris accumsan pretium non felis eget fermentum.",
    rating: 5,
    username: "Diana_a72",
    platform: "From Twitter",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 2,
    text: "Absolutely amazing service! The quality exceeded my expectations and the team was incredibly professional throughout the entire process.",
    rating: 5,
    username: "JohnDoe_23",
    platform: "From LinkedIn",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 3,
    text: "Outstanding experience from start to finish. Highly recommend to anyone looking for top-notch quality and exceptional customer service.",
    rating: 5,
    username: "SarahK_designs",
    platform: "From Instagram",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 4,
    text: "Professional, reliable, and innovative. This team delivered exactly what we needed and more. Couldn't be happier with the results.",
    rating: 5,
    username: "MikeStudio",
    platform: "From Facebook",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 5,
    text: "Exceptional attention to detail and creativity. The final product was beyond our wildest dreams. Thank you for your dedication!",
    rating: 5,
    username: "EmilyCreative",
    platform: "From Twitter",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 6,
    text: "Simply the best in the business. Fast turnaround, excellent communication, and results that speak for themselves.",
    rating: 5,
    username: "AlexTech",
    platform: "From LinkedIn",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
  }
];

const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="testimonial-section">
      <div className="testimonial-background"></div>
      <div className="testimonial-container">
        <div className="testimonial-content">
          <div className="testimonial-text-section">
            <span className="testimonial-badge">Testimonials</span>
            <h2 className="testimonial-heading">What Our Listener Say</h2>
            <p className="testimonial-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo placerat,
              sollicitudin lacus nec, porta lacus. Cras ac turpis ut sem dictum luctus. Nam rhoncus, ante
              eu tempus interdum, purus lacus rutrum urna.
            </p>
            <button className="more-testimonials-btn">MORE TESTIMONIALS</button>
          </div>

          <div className="testimonial-card-section">
            <div className="testimonial-slider">
              <button className="nav-btn prev-btn" onClick={prevTestimonial}>
                <ChevronLeft size={24} />
              </button>
              
              <div className="testimonial-card-container">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
                  >
                    <div className="star-rating">
                      {[...Array(testimonial.rating)].map((_, starIndex) => (
                        <Star key={starIndex} className="star-icon" fill="currentColor" />
                      ))}
                    </div>
                    <p className="testimonial-text">{testimonial.text}</p>
                    <div className="testimonial-author">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.username}
                        className="author-avatar"
                      />
                      <div className="author-info">
                        <h4 className="author-name">{testimonial.username}</h4>
                        <span className="author-platform">{testimonial.platform}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="nav-btn next-btn" onClick={nextTestimonial}>
                <ChevronRight size={24} />
              </button>
            </div>

            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => goToTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import './FAQ.css';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "What Is The Difference Between A Radio Station And A Podcast?",
      answer: "Radio stations typically broadcast live content over the airwaves, while podcasts are pre-recorded and available for download or streaming online. Radio stations also typically have a set schedule of programming, while podcasts can be listened to on demand."
    },
    {
      id: 2,
      question: "How Do I Listen To A Radio Station Or Podcast?",
      answer: "For radio stations, you can tune in through traditional radio, online streaming, or mobile apps. For podcasts, you can listen through podcast apps like Apple Podcasts, Spotify, Google Podcasts, or directly from the creator's website."
    },
    {
      id: 3,
      question: "How Do Radio Stations And Podcasts Make Money?",
      answer: "Radio stations typically make money through advertising, sponsorships, and sometimes subscription models. Podcasts can monetize through sponsorships, advertising, premium content, merchandise, and listener donations or subscriptions."
    },
    {
      id: 4,
      question: "Can I Start My Own Radio Station Or Podcast?",
      answer: "Yes! Starting a podcast is relatively easy with basic recording equipment and hosting platforms. Starting a radio station requires more investment, licensing, and technical setup, but internet radio stations are more accessible than traditional broadcast stations."
    }
  ];

  const toggleItem = (id: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-image-section">
          <img 
            src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="Radio Host with Microphone" 
            className="faq-image"
          />
        </div>
        
        <div className="faq-content-section">
          <div className="faq-header">
            <span className="faq-badge">FAQ</span>
            <h2 className="faq-title">
              Unanswered? Tune In To RapRadioAfrica Radio!
            </h2>
            <p className="faq-description">
              Phasellus sed diam dui. Vestibulum luctus ac ligula id imperdiet. Etiam ultrices posuere 
              justo, sit amet eleifend est dapibus sed. Aliquam vel rutrum dolor, et pretium arcu. Nullam 
              nibh ligula, lobortis a quam vel, rutrum semper nisl. Aenean porta velit at orci efficitur, eu 
              consectetur eros maximus.
            </p>
          </div>

          <div className="faq-list">
            {faqData.map((item) => (
              <div key={item.id} className="faq-item">
                <button 
                  className="faq-question-button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={openItems.has(item.id)}
                >
                  <span className="faq-question-text">{item.question}</span>
                  <div className="faq-icon">
                    {openItems.has(item.id) ? (
                      <Minus size={20} className="icon-minus" />
                    ) : (
                      <Plus size={20} className="icon-plus" />
                    )}
                  </div>
                </button>
                
                <div className={`faq-answer ${openItems.has(item.id) ? 'faq-answer-open' : ''}`}>
                  <div className="faq-answer-content">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

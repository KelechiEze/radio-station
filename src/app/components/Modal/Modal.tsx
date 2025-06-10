'use client';

import React, { useEffect } from 'react';
import './Modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  member: {
    name: string;
    role: string;
    image: string;
    bio: string;
  } | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, member }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!member) return null;

  return (
    <div className={`modal-overlay ${isOpen ? 'modal-open' : ''}`} onClick={onClose}>
      <div className={`modal-content ${isOpen ? 'modal-content-open' : ''}`} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <span className="close-icon">&times;</span>
        </button>
        
        <div className="modal-body">
          <div className="modal-image-section">
            <img src={member.image} alt={member.name} className="modal-image" />
            <div className="modal-image-overlay"></div>
          </div>
          
          <div className="modal-info-section">
            <div className="modal-header">
              <h2 className="modal-name">{member.name}</h2>
              <p className="modal-role">{member.role}</p>
            </div>
            
            <div className="modal-bio">
              <h3 className="modal-bio-title">Biography</h3>
              <p className="modal-bio-text">{member.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

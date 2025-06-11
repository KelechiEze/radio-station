import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
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
  clickPosition: { x: number; y: number };
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, member, clickPosition }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setTimeout(() => setIsAnimating(false), 300);
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

  const isMobile = window.innerWidth <= 768;

  return (
    <div 
      className={`modal-overlay ${isOpen ? 'modal-open' : ''}`} 
      onClick={onClose}
    >
      <div 
        className={`modal-content ${isOpen ? 'modal-content-open' : ''}`}
        onClick={(e) => e.stopPropagation()}
        style={{
          '--click-x': isMobile ? '50%' : `${clickPosition.x}px`,
          '--click-y': isMobile ? '50%' : `${clickPosition.y}px`,
        } as React.CSSProperties}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
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
              <p className="modal-bio-text">{member.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

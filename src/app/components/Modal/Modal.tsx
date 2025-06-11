'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
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
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleEscape);
    return () => { document.removeEventListener('keydown', handleEscape); };
  }, [isOpen, onClose]);

  if (!member) return null;

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  return (
    <div className={`modal-overlay ${isOpen ? 'modal-open' : ''}`} onClick={onClose}>
      <div
        className={`modal-content ${isOpen ? 'modal-content-open' : ''}`}
        onClick={(e) => e.stopPropagation()}
        style={
          {
            '--click-x': isMobile ? '50%' : `${clickPosition.x}px`,
            '--click-y': isMobile ? '50%' : `${clickPosition.y}px`,
          } as React.CSSProperties
        }
      >
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-body">
          <div className="modal-image-section">
            <Image
              src={member.image}
              alt={member.name}
              className="modal-image"
              layout="fill"
              objectFit="cover"
              priority
            />
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

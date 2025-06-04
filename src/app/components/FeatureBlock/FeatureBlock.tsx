'use client';

import React from 'react';
import {
  MessageCircle,
  Mic,
  Globe,
  Smartphone,
  LucideIcon,
} from 'lucide-react';
import './FeatureBlock.css';

interface FeatureBlockProps {
  iconName: string;
  title: string;
  description: string;
  index: number;
}

// Map string names to actual Lucide icons
const iconMap: Record<string, LucideIcon> = {
  MessageCircle,
  Mic,
  Globe,
  Smartphone,
};

const FeatureBlock: React.FC<FeatureBlockProps> = ({
  iconName,
  title,
  description,
  index,
}) => {
  const Icon = iconMap[iconName];

  return (
    <div
      className="deefm-feature-block"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="deefm-feature-icon-container">
        {Icon ? <Icon className="deefm-feature-icon" size={48} /> : null}
      </div>
      <h3 className="deefm-feature-title">{title}</h3>
      <p className="deefm-feature-description">{description}</p>
    </div>
  );
};

export default FeatureBlock;

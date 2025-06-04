'use client';

import FeatureBlock from '../FeatureBlock/FeatureBlock';
import './WhyDeeFM.css';

const WhyDeeFM = () => {
  const features = [
    {
      iconName: 'MessageCircle',
      title: 'Most Recent Topics',
      description:
        'Pellentesque habitant morbi tristique senectus Pellentesque habitant morbi tristique senectus et netus et malesuada',
    },
    {
      iconName: 'Mic',
      title: 'Famous Speaker',
      description:
        'Pellentesque habitant morbi tristique senectus Pellentesque habitant morbi tristique senectus et netus et malesuada',
    },
    {
      iconName: 'Globe',
      title: 'Worldwide Viewers',
      description:
        'Pellentesque habitant morbi tristique senectus Pellentesque habitant morbi tristique senectus et netus et malesuada',
    },
    {
      iconName: 'Smartphone',
      title: 'Support All Platform',
      description:
        'Pellentesque habitant morbi tristique senectus Pellentesque habitant morbi tristique senectus et netus et malesuada',
    },
  ];

  return (
    <section className="why-deefm-block-section">
      <div className="why-deefm-block-container">
        <div className="why-deefm-block-content">
          <p className="why-deefm-block-subtitle">Why DeeFM?</p>
          <h2 className="why-deefm-block-title">
            Why You Should Listen To Our Voices?
          </h2>

          <div className="why-deefm-block-features-grid">
            {features.map((feature, index) => (
              <FeatureBlock
                key={index}
                iconName={feature.iconName}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>

        <div className="why-deefm-block-watermark-text">CHOOSE US?</div>
      </div>
    </section>
  );
};

export default WhyDeeFM;

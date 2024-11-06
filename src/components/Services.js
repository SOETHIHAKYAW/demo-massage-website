// Services.js
import React from 'react';
import ServiceCard from './ServiceCard';
import './Services.css';

// Importing images for the services
import swedishMassageImg from '../images/services/swedish-massage.png';
import deepTissueMassageImg from '../images/services/deep-tissue-massage.png';
import aromatherapyMassageImg from '../images/services/aromatherapy-massage.png';

export default function Services() {
  const services = [
    { title: 'Swedish Massage', description: 'Relaxing massage to release tension and stress.', image: swedishMassageImg },
    { title: 'Deep Tissue Massage', description: 'Focused massage to relieve muscle pain and tightness.', image: deepTissueMassageImg },
    { title: 'Aromatherapy Massage', description: 'Essential oils to enhance relaxation and healing.', image: aromatherapyMassageImg },
  ];

  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="service-list">
        {services.map((service, index) => (
          <ServiceCard 
            key={index} 
            title={service.title} 
            description={service.description} 
            image={service.image} 
          />
        ))}
      </div>
    </section>
  );
}

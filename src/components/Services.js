// Services.js
import React from 'react';
import ServiceCard from './ServiceCard';
import './Services.css';

// Importing images for the services
import medicalMassageImg from '../images/services/medical-massage.jpg';
import deepTissueMassageImg from '../images/services/deep-tissue-massage.jpg';
import aromatherapyMassageImg from '../images/services/aromatherapy-massage.png';

export default function Services() {
  const services = [
    { title: 'Medical Massage', description: 'Therapeutic massage aimed at treating specific medical conditions, reducing pain, and promoting recovery.', image: medicalMassageImg },
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

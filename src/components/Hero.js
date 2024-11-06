import React from 'react';
import './Hero.css';

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <h2>Welcome to Relax & Renew</h2>
      <p>Experience tranquility and rejuvenation with our professional massage services.</p>
      <button className="cta-button" onClick={scrollToContact}>Book Now</button>
    </section>
  );
}

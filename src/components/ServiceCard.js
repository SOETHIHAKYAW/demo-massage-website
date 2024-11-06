// ServiceCard.js
import React from 'react';
import './ServiceCard.css';

export default function ServiceCard({ title, description, image }) {
  return (
    <div className="service-card">
      <img src={image} alt={title} className="service-image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

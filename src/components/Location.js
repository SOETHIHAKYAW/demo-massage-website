// src/components/Location.js
import React from 'react';
import './Location.css';

export default function Location() {
  return (
    <section className="location">
      <h2>Visit Us</h2>
      <p>123 Relaxation St, Spa City</p>
      <iframe
        src="https://www.google.com/maps/embed/v1/place?q=123+Relaxation+St,+Spa+City&key=YOUR_ACTUAL_GOOGLE_MAPS_API_KEY"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      />
    </section>
  );
}

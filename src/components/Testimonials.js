// src/components/Testimonials.js
import React from 'react';
import './Testimonials.css';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Best massage I've ever had! Highly recommend.",
      client: "Emily S.",
    },
    {
      quote: "I felt relaxed and rejuvenated. Fantastic experience!",
      client: "John D.",
    },
    {
      quote: "Best massage I've ever had! Highly recommend.",
      client: "Emily S.",
    },
    {
      quote: "I felt relaxed and rejuvenated. Fantastic experience!",
      client: "John D.",
    },
    // Add more testimonials as needed
  ];

  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-list">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p>"{testimonial.quote}"</p>
            <h4>- {testimonial.client}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

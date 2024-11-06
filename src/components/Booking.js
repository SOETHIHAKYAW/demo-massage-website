// src/components/Booking.js
import React, { useState } from 'react';
import './Booking.css';

export default function Booking() {
  const [formData, setFormData] = useState({ name: '', date: '', time: '', service: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking confirmed!');
    // Here, you can add actual booking logic, like an API call.
  };

  return (
    <section className="booking">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        <input type="time" name="time" value={formData.time} onChange={handleChange} required />
        <select name="service" value={formData.service} onChange={handleChange} required>
          <option value="">Select Service</option>
          <option value="swedish">Swedish Massage</option>
          <option value="deep tissue">Deep Tissue Massage</option>
          <option value="aromatherapy">Aromatherapy Massage</option>
        </select>
        <button type="submit">Confirm Booking</button>
      </form>
    </section>
  );
}

import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <h1>Relax & Renew</h1>
      <nav>
        <a href="#hero">Home</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

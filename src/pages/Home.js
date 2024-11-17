// src/pages/Home.js
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import FAQ from '../components/FAQ';
import Booking from '../components/Booking';
import ContactForm from '../components/ContactForm';
import videoPath from '../assets/videos/medical-animation.mp4'; // Import your video file
import './Home.css'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      {/* Animation Video Section */}
      <section className="animation-video">
        <h2>Experience Our Services</h2>
        <video
          src={videoPath}
          autoPlay
          loop
          muted
          controls={false}
          className="video"
        >
          Your browser does not support the video tag.
        </video>
      </section>
      <About />
      <Services />
      <Testimonials />
      <Gallery />
      <FAQ />
      <Booking />
      <ContactForm />
    </>
  );
}

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
import Location from '../components/Location';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Gallery />
      <FAQ />
      <Booking />
      {/* <Location /> */}
      <ContactForm />
    </>
  );
}

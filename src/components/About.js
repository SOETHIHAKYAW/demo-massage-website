import React from 'react';
import therapist1 from '../images/about/therapist/therapist1.jpg';
import therapist2 from '../images/about/therapist/therapist2.jpg';
import therapist3 from '../images/about/therapist/therapist3.jpg';
import './About.css';

export default function About() {
  return (
    <div className="about">
      <h2>Meet Our Therapists</h2>
      <p>Our team of expert therapists is here to provide you with the best care and relaxation experience.</p>
      <div className="therapists">
        <div className="therapist">
          <img src={therapist1} alt="Therapist 1" />
          <p>Therapist 1</p>
        </div>
        <div className="therapist">
          <img src={therapist2} alt="Therapist 2" />
          <p>Therapist 2</p>
        </div>
        <div className="therapist">
          <img src={therapist3} alt="Therapist 3" />
          <p>Therapist 3</p>
        </div>
      </div>
    </div>
  );
}

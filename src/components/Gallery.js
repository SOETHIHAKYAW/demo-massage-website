// src/components/Gallery.js
import React from 'react';
import gallery1 from '../images/gallery/gallery1.jpg';
import gallery2 from '../images/gallery/gallery2.jpg';
import gallery3 from '../images/gallery/gallery3.jpg';
import gallery4 from '../images/gallery/gallery4.webp';
import gallery5 from '../images/gallery/gallery5.jpg';
import gallery6 from '../images/gallery/gallery6.jpg';
import gallery7 from '../images/gallery/gallery7.jpg';
import gallery8 from '../images/gallery/gallery8.jpeg';
import gallery9 from '../images/gallery/gallery9.webp';
import './Gallery.css';

export default function Gallery() {
  return (
    <div className="gallery">
      <h2>Our Gallery</h2>
      <div className="gallery-grid">
        <div className="gallery-item">
          <img src={gallery1} alt="Gallery Image 1" className="gallery-image" />
        </div>
        <div className="gallery-item">
          <img src={gallery2} alt="Gallery Image 2" className="gallery-image" />
        </div>
        <div className="gallery-item">
          <img src={gallery3} alt="Gallery Image 3" className="gallery-image" />
        </div>
        <div className="gallery-item">
          <img src={gallery4} alt="Gallery Image 4" className="gallery-image" />
        </div>
        <div className="gallery-item">
          <img src={gallery5} alt="Gallery Image 5" className="gallery-image" />
        </div>
        <div className="gallery-item">
          <img src={gallery6} alt="Gallery Image 6" className="gallery-image" />
        </div>
        <div className="gallery-item">
          <img src={gallery7} alt="Gallery Image 7" className="gallery-image" />
        </div>
        <div className="gallery-item">
          <img src={gallery8} alt="Gallery Image 8" className="gallery-image" />
        </div>
        <div className="gallery-item">
          <img src={gallery9} alt="Gallery Image 9" className="gallery-image" />
        </div>
      </div>
    </div>
  );
}

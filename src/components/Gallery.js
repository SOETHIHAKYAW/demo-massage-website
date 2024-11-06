// src/components/Gallery.js
import React from 'react';
import gallery1 from '../images/gallery/gallery1.png';
import gallery2 from '../images/gallery/gallery2.png';
import gallery3 from '../images/gallery/gallery3.png';
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
          <img src={gallery3} alt="Gallery Image 3" className="gallery-image" />
        </div>
      </div>
    </div>
  );
}

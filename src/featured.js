// src/Featured.js
import React from 'react';

// To use your own local images, you would import them here like this:
 import stemwareImage from './Images/Featured/cat.jpg';
 import accentsImage from './Images/Featured/accents.jpg';
import clearanceImage from './Images/Featured/beagle.jpg';

// 1. We create a data array for our featured cards.
// Each object has a title, an image URL, and a link for where to go when clicked.
const featuredData = [
  {
    id: 1,
    title: "You'll love our fine stemware collection",
    // Replace these placeholders with your imported image variables
    imageUrl: accentsImage,
    linkUrl: '/stemware-category' // The destination URL
  },
  {
    id: 2,
    title: 'Home accent for the holidays',
    imageUrl: stemwareImage,
    linkUrl: '/home-accents'
  },
  {
    id: 3,
    title: 'Mikasa clearance sale 20% to 80% off',
    imageUrl: clearanceImage,
    linkUrl: '/clearance'
  }
];

function Featured() {
  return (
    <div className="featured-container">
      {/* 2. We map over the data array to create each card automatically. */}
      {featuredData.map((card) => (
        // 3. The entire card is wrapped in an <a> tag to make it a single link.
        <a key={card.id} href={card.linkUrl} className="feature-link-wrapper">
          <div className="feature-card">
            {/* The heading is still here */}
            <h3>{card.title}</h3>
            {/* The image is now below the heading */}
            <img src={card.imageUrl} alt={card.title} />
          </div>
        </a>
      ))}
    </div>
  );
}

export default Featured;
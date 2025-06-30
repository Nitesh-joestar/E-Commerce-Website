// src/Hero.js

// 1. We import 'useState' from React to give our component memory.
import React, { useState } from 'react';
import contemporaryImage from './Images/hero/contemporary1.jpg';
import traditionalImage from './Images/hero/traditional1.jpg';
import brunchImage from './Images/hero/brunch.jpeg';
import themesImage from './Images/hero/themes.jpg'; // Assuming you have these images
import buffetImage from './Images/hero/buffet.jpg';
import wineCheeseImage from './Images/hero/wine-cheese.jpg';

// 2. We create a data structure to hold our categories and image URLs.
// This makes the component easy to update later.
// I'm using placeholder images; you can replace these URLs with your own.
const categories = [
  {
    id: 'contemporary',
    name: 'Contemporary',
    imageUrl: contemporaryImage,
  },
  {
    id: 'traditional',
    name: 'Traditional',
    imageUrl: traditionalImage,
  },
  {
    id: 'brunch',
    name: 'Brunch',
    imageUrl: brunchImage,
  },
  {
    id: 'themes',
    name: 'Themes',
    imageUrl: themesImage,
  },
  {
    id: 'buffet',
    name: 'Buffet',
    imageUrl: buffetImage,
  },
  {
    id: 'wine-cheese',
    name: 'Wine & Cheese',
    imageUrl: wineCheeseImage,
  }
];

function Hero() {
  // 3. We set up our state. 'activeCategory' will hold the entire object
  // for the currently selected category. We initialize it with the first item.
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  // 4. This function updates the state when a link is clicked.
  const handleCategoryClick = (category, event) => {
    event.preventDefault(); // Prevents the link from trying to navigate
    setActiveCategory(category);
  };

  return (
    <div className="hero-container">
      <div className="hero-image">
        {/* 5. The <img> tag now gets its source URL from our state. */}
        {/* When the state changes, React automatically updates this src. */}
        <img src={activeCategory.imageUrl} alt={activeCategory.name} />
      </div>
      <div className="hero-promo-box">
        <h2>Dress your table</h2>
        <p>Create a fabulous new look for your next event. Choose from various styles and ideas.</p>
        <nav className="promo-nav">
          {/* 6. We dynamically generate the links by mapping over our data array. */}
          {/* This is much more efficient than writing each link by hand. */}
          {categories.map((category) => (
            <a
              key={category.id}
              href="#"
              // We add an 'active' class if this link's ID matches the active one in our state.
              className={activeCategory.id === category.id ? 'active' : ''}
              onClick={(e) => handleCategoryClick(category, e)}
            >
              {category.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Hero;
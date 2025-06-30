// src/Header.js

import React, { useState } from 'react';

function Header() {
  // State to track if the mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-container">
      {/* The top part of the header, which is always visible */}
      <div className="header-top-row">
        <div className="logo">EREN</div>
        
        {/* The hamburger menu button, which is only visible on mobile (controlled by CSS) */}
        <button className="hamburger-menu" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
      </div>
        <div classname="Media-links">
      {/* The navigation menu that collapses. Its 'open' class is controlled by our state */}
      <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
        <a href="https://www.youtube.com/">Dining</a>
        <a href="https://www.youtube.com/">Crystal</a>
        <a href="https://www.youtube.com/">By Brand</a>
        <a href="https://www.youtube.com/">What's New</a>
      </nav>
    </div>
      {/* The search bar, which is part of the main header flow */}
      <div className="search-bar">
        <input type="text" placeholder="Search Keyword " />
        <button>GO</button>
      </div>
    </header>
  );
}

export default Header;
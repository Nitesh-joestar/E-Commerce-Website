// src/PromoBar.js

import React from 'react';

function PromoBar() {
  return (
    <div className="promo-bar-container">
      <div className="scrolling-text">
        {/* --- Original Content --- */}
        <span>Free Shipping on Orders Over $150</span>
        <span>Holiday Platters</span>
        <span>Celebrate Thanksgiving</span>

        {/* --- Duplicated Content for Seamless Loop --- */}
        {/* We add an identical second set of the spans */}
        <span>Free Shipping on Orders Over $150</span>
        <span>Holiday Platters</span>
        <span>Celebrate Thanksgiving</span>
      </div>
    </div>
  );
}

export default PromoBar;
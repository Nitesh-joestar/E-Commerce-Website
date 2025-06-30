import React from 'react';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <a href="#">About Mikasa</a>
        <a href="#">Customer Service</a>
        <a href="#">Privacy Policy</a>
      </div>
      <div className="footer-signup">
        <p>Sign up to receive special offers & promotions from Mikasa.</p>
        <input type="email" placeholder="Enter your email address" />
        <button>SIGN UP</button>
      </div>
      <div className="footer-copyright">
        &copy; Copyright 2008 Mikasa & Company
      </div>
    </footer>
  );
}

export default Footer;
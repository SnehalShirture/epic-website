import React from 'react';
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Epic5678 Gym is your destination for fitness, health, and transformation.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Membership</li>
            <li>Trainers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@Epic.com</p>
          <p>Phone: +1 123-456-7890</p>
          <p>Location: Jalgaon, City</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Epic5678 Gym | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;

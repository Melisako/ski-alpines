import React from "react";
import { FaPhone, FaEnvelope, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import '../../assets/footer.css'; // Import your CSS file for Footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="location">
        <h3>Swiss Alpine Place</h3>
      </div>
      <div className="contact">
        <ul>
          <li><FaPhone /> +1234567890</li>
          <li><FaEnvelope /> schneebergblick@swiss.com</li>
        </ul>
      </div>
      <div className="social-icons">
        <a href="https://twitter.com"><FaTwitter /></a>
        <a href="https://facebook.com"><FaFacebook /></a>
        <a href="https://instagram.com"><FaInstagram /></a>
      </div>
    </footer>
  );
};

export default Footer;

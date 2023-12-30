import React from "react";
import { FaPhone, FaEnvelope, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import '../../assets/footer.css'; // Import your CSS file for Footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="location">
        <h3>Swiss Alpine Place</h3>
        <p>123 Mountain View, Alpine Valley</p>
        <p>Switzerland</p>
      </div>
      <div className="contact">
        <h4>Kontaktiere uns:</h4>
        <ul>
          <li><FaPhone /> +1234567890</li>
          <li><FaEnvelope /> schneebergblick@swiss.com</li>
          <li><FaPhone /> +9876543210</li> 
          <li><FaEnvelope /> info@swissalpineplace.com</li> 
        </ul>
      </div>

      <div className="social-icons">
        <h4>Folge uns</h4>
        <a href="https://twitter.com"><FaTwitter /></a>
        <a href="https://facebook.com"><FaFacebook /></a>
        <a href="https://instagram.com"><FaInstagram /></a>
      </div>
    </footer>
  );
};

export default Footer;

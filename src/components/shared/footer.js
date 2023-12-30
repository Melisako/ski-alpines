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
      <h4 style={{ letterSpacing: '2px' }}>Kontaktiere uns:</h4>


        <ul>
        
          <li><FaPhone /> +9876543210</li> 
          <li><FaEnvelope /> info@swissalpineplace.com</li> 
        </ul>
      </div>

      <div class="social-icons">
  <h4>Folge uns</h4>
  <a href="https://twitter.com" class="icon-link"><FaTwitter /></a>
  <a href="https://facebook.com" class="icon-link"><FaFacebook /></a>
  <a href="https://instagram.com" class="icon-link"><FaInstagram /></a>
</div>

    </footer>
  );
};

export default Footer;

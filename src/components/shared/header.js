
import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/header.css';
import swissImage from '../../assets/img/swiss.jpg'; 

const Header = () => {

  return (
    <div className="header">
      <div className="header-content">
        <img src={swissImage} alt="Swiss Alps" className="header-image" /> 
        <Link to="/aboutus" className="custom-link">Über uns</Link>
        <Link to="/services" className="custom-link">Dienstleistungen</Link>
        <Link to="/specialoffers" className="custom-link">Sonderangebote</Link>
        <Link to="/contactus" className="custom-link">Kontakt</Link>
      </div>
    </div>
  );
};

export default Header;

import React, { useState } from "react";
import news11Img from '../assets/img/11.jpg';
import news14Img from '../assets/img/14.jpg';
import news13Img from '../assets/img/13.jpg';

import img23 from '../assets/img/23.jpg';
import img24 from '../assets/img/24.jpg';
import img25 from '../assets/img/25.jpg';
import img26 from '../assets/img/26.jpg';

import '../assets/services.css';

const Services = () => {
  const [showCarousel, setShowCarousel] = useState(false);

  const toggleCarousel = () => {
    setShowCarousel(!showCarousel);
  };

  return (
    <div className="services">
      {!showCarousel ? (
        <>
          <div className="card">
            <img src={news11Img} alt="Swiss Alps" className="service-image" />
            <p>Teleferisches Skifahren beinhaltet die Nutzung eines Seilbahn-Systems wie einer Gondel oder einer Kabelbahn, um höhere Höhen im Gebirge zu erreichen.</p>
            <button className="link" onClick={toggleCarousel}>Klicken Sie hier</button>

          </div>
          <div className="card">
            <img src={news13Img} alt="Swiss Alps" className="service-image" />
            <p>Snowboarden ist ein Wintersport, bei dem Teilnehmer auf einem einzigen Brett, das an ihren Füßen befestigt ist, bergab gleiten.</p>
            <button className="link" onClick={toggleCarousel}>Klicken Sie hier</button>

          </div>
          <div className="card">
            <img src={news14Img} alt="Swiss Alps" className="service-image" />
            <p>Wettkampf in Deutsch bezieht sich auf Wettbewerbe oder Wettstreits auf Deutsch.</p>
            <button className="link" onClick={toggleCarousel}>Klicken Sie hier</button>

          </div>
        </>
      ) : (
        <div className="carousel">
        <img src={img23} alt="23" />
        <img src={img24} alt="24" />
        <img src={img25} alt="25" />
        <img src={img26} alt="26" />
      </div>
      )}
    </div>
  );
};

export default Services;

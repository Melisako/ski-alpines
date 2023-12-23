import React from "react";
import news11Img from '../assets/img/11.jpg';
import news14Img from '../assets/img/14.jpg';
import news13Img from '../assets/img/13.jpg';
import '../assets/services.css';

const Services = () => {
  return (
    <div className="services">
      <div className="card">
        <img src={news11Img} alt="Swiss Alps" className="service-image" />
    
        <p>Teleferisches Skifahren beinhaltet die Nutzung eines Seilbahn-Systems wie einer Gondel oder einer Kabelbahn, um höhere Höhen im Gebirge zu erreichen.</p>
        <a href="#" className="link">Klicken Sie hier</a>
      </div>
      <div className="card">
        <img src={news13Img} alt="Swiss Alps" className="service-image" />
        <p>Snowboarden ist ein Wintersport, bei dem Teilnehmer auf einem einzigen Brett, das an ihren Füßen befestigt ist, bergab gleiten.</p>
        <a href="#" className="link">Klicken Sie hier</a>
      </div>
      <div className="card">
        <img src={news14Img} alt="Swiss Alps" className="service-image" />
        <p>Wettkampf in Deutsch bezieht sich auf Wettbewerbe oder Wettstreits auf Deutsch.</p>
        <a href="#" className="link">Klicken Sie hier</a>
      </div>
    </div>
  );
}

export default Services;

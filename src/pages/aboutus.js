import React from "react";
import '../assets/aboutus.css';
import swisImg from  '../assets/img/4.jpg'; 
import news1Img from  '../assets/img/10.jpg'; 
import news2Img from  '../assets/img/6.jpg'; 
import news3Img from  '../assets/img/11.jpg'; 

const AboutUs = () => {
  return (
    <div className="aboutus">
    
      <img src={swisImg} alt="Swiss Alps" className="about-image" />
      <div className="content">
        <h3>Schneebergblick -</h3><strong><em>1998</em></strong>

        <p>
          Die Schweiz verfügt über einige der weltweit renommiertesten Skigebiete und bietet atemberaubende alpine Landschaften sowie erstklassige Skierlebnisse. Eines der herausragenden Skigebiete könnte Zermatt sein,<strong> ein malerisches Dorf </strong>am Fuße des ikonischen Matterhorn-Berges.
        </p>
        <span>
          Zermatt ist ein erstklassiges Skireiseziel, <span className="bspan">bekannt </span> ,für sein umfangreiches Skigelände mit miteinander verbundenen Pisten.
        </span>
        <div className="news">
  <div className="news-card">
    <img src={news1Img} alt="Swiss Alps" className="news-image" />
    <h4>Neuer Skilift in den Alpen eröffnet!</h4>
    <p className="p">Höhere Kapazität und schnellere Aufstiegszeiten für Wintersportler!</p>
  </div>
  <div className="news-card">
    <img src={news2Img} alt="Swiss Alps" className="news-image" />
    <h4>Alpenregion erlebt Rekordschnee...</h4>
    <p className="p">Große Mengen Schneefall führen zu idealen Bedingungen für Skifahrer und Snowboarder.</p>
  </div>
  <div className="news-card">
    <img src={news3Img} alt="Swiss Alps" className="news-image" />
    <h4>Umweltfreundliche Initiative gestartet!</h4>
    <p className="p">Alpenhotels setzen verstärkt auf Nachhaltigkeit, um die einzigartige Bergwelt zu schützen.</p>
  </div>
</div>

      </div>
    </div>
    
  );
};

export default AboutUs;

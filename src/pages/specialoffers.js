import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import lunchImg from '../assets/img/32.jpg';
import morningImg from '../assets/img/18.jpg';
import dinnerImg from '../assets/img/17.jpg';
import '../assets/specialoffers.css';
import { FaSkiing } from 'react-icons/fa'; 

const SpecialOffers = () => {

  return (
    <div className="containerrr">
  <h2 className="text-center my-4">
    <span className="red-icon">
      <FaSkiing /> 
    </span>
    {' '}Spezielle Angebote für das Skigebiet
    <span className="red-icon">
 <FaSkiing />
    </span>
  </h2>


      <div className="row">
        <div className="col-md-4">
 
          <div className="offerr-block">
          <button>1) $150</button>
            <img src={lunchImg} alt="Lunch Icon" />
            <h3>Mittagessen</h3>
           
            <label htmlFor="lunch-guests">
              <FontAwesomeIcon icon={faUsers} /> Reservieren für:
            </label>
            <input
              id="lunch-guests"
              type="number"
              className="reservation-input"
              aria-label="Mittagessen-date"
              placeholder="Anzahl der Gäste"
         
            />
            <label htmlFor="lunch-date">
              <FontAwesomeIcon /> Reservierungsdatum:
            </label>
            <input
              id="lunch-date"
              type="date"
              className="reservation-input"
              aria-label="Mittagessen-date"
            />
          </div>
        </div>

      
        <div className="col-md-4">
          <div className="offerr-block">
          <button>2) $200</button>
            <img src={morningImg} alt="Lunch Icon" />
            <h3>Mittagessen</h3>
          
            <label htmlFor="lunch-guests">
              <FontAwesomeIcon icon={faUsers} /> Reservieren für:
            </label>
            <input
              id="lunch-guests"
              type="number"
              placeholder="Anzahl der Gäste"
              className="reservation-input"
              aria-label="Mittagessen-date"
            />
            <label htmlFor="lunch-date">
              <FontAwesomeIcon  /> Reservierungsdatum:
            </label>
            <input
              id="lunch-date"
              type="date"
              className="reservation-input"
              aria-label="Mittagessen-date"
            />
          </div>
</div>


          <div className="col-md-4">
          <div className="offerr-block">
       <button>3) $250</button>
            <img src={dinnerImg} alt="Lunch Icon" />
            <h3>Mittagessen</h3>
          
            <label htmlFor="lunch-guests">
              <FontAwesomeIcon icon={faUsers} /> Reservieren für:
            </label>
            <input
              id="lunch-guests"
              type="number"
              className="reservation-input"
              placeholder="Anzahl der Gäste"
            />
            <label htmlFor="lunch-date">
              <FontAwesomeIcon  /> Reservierungsdatum:
            </label>
            <input
              id="lunch-date"
              type="date"
              className="reservation-input"
  aria-label="Mittagessen-date"
            />
     
        </div>
        </div>


      </div>
    </div>
  );
};

export default SpecialOffers;

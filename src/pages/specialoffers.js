import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import lunchImg from '../assets/img/19.jpg';
import morningImg from '../assets/img/18.jpg';
import dinnerImg from '../assets/img/17.jpg';
import '../assets/specialoffers.css';

const SpecialOffers = () => {

  return (
    <div className="container">
      <h2 className="text-center my-4">Spezielle Angebote für das Skigebiet</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="offer-block">
            <img src={lunchImg} alt="Lunch Icon" />
            <h3>Mittagessen</h3>
           
            <label htmlFor="lunch-guests">
              <FontAwesomeIcon icon={faUsers} /> Reservieren für:
            </label>
            <input
              id="lunch-guests"
              type="number"
              className="form-control"
              placeholder="Anzahl der Gäste"
              aria-label="Mittagessen-guests"
            />
            <label htmlFor="lunch-date">
              <FontAwesomeIcon icon={faCalendarAlt} /> Reservierungsdatum:
            </label>
            <input
              id="lunch-date"
              type="date"
              className="form-control"
              aria-label="Mittagessen-date"
            />
          </div>
        </div>


        <div className="col-md-4">
          <div className="offer-block">
            <img src={morningImg} alt="Lunch Icon" />
            <h3>Mittagessen</h3>
          
            <label htmlFor="lunch-guests">
              <FontAwesomeIcon icon={faUsers} /> Reservieren für:
            </label>
            <input
              id="lunch-guests"
              type="number"
              className="form-control"
              placeholder="Anzahl der Gäste"
              aria-label="Mittagessen-guests"
            />
            <label htmlFor="lunch-date">
              <FontAwesomeIcon icon={faCalendarAlt} /> Reservierungsdatum:
            </label>
            <input
              id="lunch-date"
              type="date"
              className="form-control"
              aria-label="Mittagessen-date"
            />
          </div>
</div>


          <div className="col-md-4">
          <div className="offer-block">
            <img src={dinnerImg} alt="Lunch Icon" />
            <h3>Mittagessen</h3>
          
            <label htmlFor="lunch-guests">
              <FontAwesomeIcon icon={faUsers} /> Reservieren für:
            </label>
            <input
              id="lunch-guests"
              type="number"
              className="form-control"
              placeholder="Anzahl der Gäste"
              aria-label="Mittagessen-guests"
            />
            <label htmlFor="lunch-date">
              <FontAwesomeIcon icon={faCalendarAlt} /> Reservierungsdatum:
            </label>
            <input
              id="lunch-date"
              type="date"
              className="form-control"
              aria-label="Mittagessen-date"
            />
     
        </div>
        </div>


      </div>
    </div>
  );
};

export default SpecialOffers;

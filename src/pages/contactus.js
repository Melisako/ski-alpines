import React from "react"
import '../assets/contactus.css';


const ContactUs = () => {
    return (
      <div className="contact-us">

        <form className="contact-form">
          <div className="form-group">
            <label>Name:</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" className="form-control" />
          </div>
          <div className="form-group">
            <label className="mess">Notiz:</label>
            <input type="message" className="form-cont" rows="5"></input>
          </div>
          <div className="date-group">
            <div className="form-group">
              <label className="date-label">Startdatum:</label>
              <input type="date" className="form-control start-date" />
            </div>
            <div className="form-group">
              <label className="date-label">Enddatum:</label>
              <input type="date" className="form-control end-date" />
            </div>
          </div>
          <button type="submit" className="btn-submit">Absenden</button>
        </form>
      </div>
    );
  };
  
  export default ContactUs;
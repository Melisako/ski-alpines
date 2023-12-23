import React from "react"
import '../assets/contactus.css';


const ContactUs = () => {
    return (
      <div className="contact-us">
        <h2>Contact Us</h2>
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
            <label className="mess">Message:</label>
            <input type="message" className="form-cont" rows="5"></input>
          </div>
          <div className="date-group">
            <div className="form-group">
              <label className="date-label">Start Date:</label>
              <input type="date" className="form-control start-date" />
            </div>
            <div className="form-group">
              <label className="date-label">End Date:</label>
              <input type="date" className="form-control end-date" />
            </div>
          </div>
          <button type="submit" className="btn-submit">Submit</button>
        </form>
      </div>
    );
  };
  
  export default ContactUs;
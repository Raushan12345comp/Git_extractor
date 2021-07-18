import React from 'react';
import { MdEmail, MdPhoneAndroid } from 'react-icons/md';
// import './contact.css';



const Contact = () => {
  return (
    <div id="contact">
      <div className="contact">
        <h1 className="contact-title">Contact</h1>
      </div>
      <div className="contact-flex">
        <div className="contact-details">
          <div className="call">
            <MdPhoneAndroid className="icon" />
            <h3 className="contact-heading">Call:</h3>
            <p className="conatact-para">+910101xxxxxx</p>
          </div>

          <div className="email">
            <MdEmail className="icon" />
            <h3 className="contact-heading">Email:</h3>
            <p className="conatact-para">gitextractor@gmail.com</p>
          </div>

          <div>
              <img width="395px" height="400px" src="Images/gif.gif"></img>
          </div>

          
        </div>

        <div>
          <form
            action="/contact"
            name="contact"
            method="post"
            data-netlify="true"
            className="form"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="form-group">
              <label className="label">Your Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="name"
                name="name"
                required
              />
            </div>

            <div className="form-group">
              <label className="label">Your Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="email"
                name="email"
                required
              />
            </div>

            <div className="form-group">
              <label className="label">Subject</label>
              <input
                type="text"
                className="form-control"
                placeholder="subject"
                name="subject"
                required
              />
            </div>
            <div className="form-group">
              <label className="label">Message</label>
              <textarea
                rows="10"
                className="form-control"
                name="message"
                placeholder="message"
                required
              ></textarea>
            </div>

            <div>
              <button className="submit" type="submit">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

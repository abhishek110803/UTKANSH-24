import React from 'react';
import './Contact.css';
const ContactSection = () => {
  return (
    <section style={{ backgroundColor: 'aliceblue', padding: '30px 0px 30px' }}>
      <div className="contact" id="contact">
        <div className="max-width">
          <h2 className="title" style={{ textAlign: 'center', color: '#070707', marginBottom: '30px' }}>Contact Us</h2>

          <div className="contact-content">
            <div className="column left">
              <div className="text">Get in Touch</div>
              <div className="icons">
                <div className="row">
                  <i className="fas fa-user"></i>
                  <div className="info">
                    <div className="head">Name</div>
                    <div className="sub-title">Abhishek Kumar</div>
                  </div>
                </div>
                <div className="row">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="info">
                    <div className="head">Address</div>
                    <div className="sub-title">Samastipur Bihar</div>
                  </div>
                </div>
                <div className="row">
                  <i className="fas fa-envelope"></i>
                  <div className="info">
                    <div className="head">Email</div>
                    <div className="sub-title">abhishek110803@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column right">
              <div className="text">Message me</div>
              <form action="#">
                <div className="fields">
                  <div className="field name">
                    <input type="text" placeholder="Name" required />
                  </div>
                  <div className="field email">
                    <input type="email" placeholder="Email" required />
                  </div>
                </div>
                <div className="field">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className="field textarea">
                  <textarea cols="30" rows="10" placeholder="Message.." required></textarea>
                </div>
                <div className="button-area">
                  <button type="submit">Send message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

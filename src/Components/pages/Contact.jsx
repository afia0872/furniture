import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <>
      <div className="page-section text-center py-5 position-relative overflow-hidden">
        <p className="breadcrumb-text text-muted mb-2">
          <Link to="/" className="breadcrumb-link">Home</Link> / <span className="text-dark">Contact</span>
        </p>
        <h2 className="page-heading fw-bold text-uppercase">Contact Us</h2>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-8 mb-4">
            <iframe
              title="Google Map - Manipal Hospital Mysore"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.491414944542!2d76.65760537379943!3d12.349980528204481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7092496f2c85%3A0xd84f0cc826a451aa!2sManipal%20Hospital%20Mysore!5e0!3m2!1sen!2sin!4v1751087949048!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="col-lg-4 bg-light p-4 contact-form">
            <h4 className="fw-bold text-center mb-4">GET IN TOUCH WITH US</h4>
            <p className="text-muted">If you wish to directly reach us, please fill out the form below:</p>
            <form className="mt-4">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Your Name <span>*</span></label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Your Email <span>*</span></label>
                  <input type="email" className="form-control" />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Subject <span>*</span></label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Your Message (optional)</label>
                <textarea className="form-control" rows="6"></textarea>
              </div>
              <button type="submit" className="btn btn-success w-100">SUBMIT</button>
            </form>
          </div>
        </div>

        <div className="row mt-5 text-center contact-info">
          <div className="col-md-6 col-lg-3 mb-3">
            <i className="bi bi-geo-alt-fill text-success fs-4"></i>
            <p>30, 28th Mysore, 520-Union Center</p>
          </div>
          <div className="col-md-6 col-lg-3 mb-3">
            <i className="bi bi-telephone-fill text-success fs-4"></i>
            <p>Call us: <br /> (+01) 123-456-7890</p>
          </div>
          <div className="col-md-6 col-lg-3 mb-3">
            <i className="bi bi-envelope-fill text-success fs-4"></i>
            <p>Mail us: <br /> sample@example.com</p>
          </div>
          <div className="col-md-6 col-lg-3 mb-3">
            <i className="bi bi-clock-fill text-success fs-4"></i>
            <p>Open Time: <br /> 10:00 AM - 6:00 PM</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

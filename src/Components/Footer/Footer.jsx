import React from 'react';
import { Link } from 'react-router-dom';
import payment from './../../assets/payment.png'; // Assuming this path is correct

function Footer() {
  return (
    // Using a more semantic <footer/> tag for better accessibility and SEO
    <footer className="footer text-light py-5 footer-bg">
      <div className="container">
        <div className="row">
          {/* Contact Us Section */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0"> {/* Added responsive mb classes */}
            <h5 className="fw-bold mb-3">CONTACT US</h5> {/* Added margin-bottom */}
            <p>
              <i className="ri-map-pin-2-fill me-2"></i>60 29th street Mysore, 570019
            </p>
            <p>
              <i className="ri-phone-fill me-2"></i>(+91) 4567-983-210
            </p>
            <p>
              <i className="ri-mail-fill me-2"></i>sample@example.com {/* Corrected typo "wxample" to "example" */}
            </p>
          </div>

          {/* Brand and Social Section */}
          <div className="col-lg-6 col-md-12 text-center mb-4 mb-lg-0"> {/* Adjusted column for better responsiveness */}
            <Link to='/' className='navbar-brand footer-logo d-inline-block mb-3'> {/* d-inline-block for proper margin */}
              <h3>Borcelle</h3>
            </Link>
            <p className="text-white mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, dicta? Cum quod doloremque explicabo eius, ipsum unde quis! Temporibus ullam, quia sed perspiciatis incidunt similique et alias blanditiis rem placeat.
            </p>
            <div className="d-flex justify-content-center gap-3 mb-4"> {/* Increased gap for better spacing */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"> {/* Added accessibility attributes */}
                <i className="ri-facebook-fill fs-4 text-white"></i> {/* Increased icon size and ensured text-white */}
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="ri-twitter-fill fs-4 text-white"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="ri-instagram-fill fs-4 text-white"></i>
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                <i className="ri-pinterest-fill fs-4 text-white"></i> {/* Corrected typo "pinterst" to "pinterest" */}
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <i className="ri-youtube-fill fs-4 text-white"></i>
              </a>
            </div>
            <div className="d-flex flex-wrap justify-content-center gap-4"> {/* Used flex-wrap for smaller screens */}
              <Link to="/information" className="text-decoration-none text-white">Information</Link> {/* Using Link for internal navigation */}
              <Link to="/contact" className="text-decoration-none text-white">Contact Us</Link>
              <Link to="/privacy-policy" className="text-decoration-none text-white">Privacy Policy</Link>
              <Link to="/about" className="text-decoration-none text-white">About Us</Link>
              <Link to="/faqs" className="text-decoration-none text-white">FAQs</Link>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="col-lg-3 col-md-6 newsletter-wrap"> {/* Added responsive mb classes */}
            <h5 className="fw-bold mb-3">OUR NEWSLETTER</h5> {/* Added margin-bottom */}
            <p className="text-white mb-3">Subscribe to our latest newsletter to get news about special discounts.</p> {/* Corrected typo "Subcribe" and "hte specisl" */}
            <div className="input-group">
              <input type="email" className='form-control rounded-start' placeholder='Your Email' aria-label="Email for newsletter" /> {/* Added aria-label for accessibility, rounded-start for better visual */}
              <span className="input-group-text p-0 border-0 bg-transparent"> {/* Added input-group-text for icon placement */}
                <i className="ri-mail-send-fill fs-5 text-white"></i> {/* Changed icon to send-fill for better visual, added fs-5, text-white */}
              </span>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <hr className="bg-white my-5" /> {/* Added a horizontal rule for visual separation */}
        <div className="row footer-bottom align-items-center"> {/* Aligned items vertically */}
          <div className="col-lg-6 col-md-12 text-center text-lg-start copyright-text mb-3 mb-lg-0"> {/* Responsive text alignment */}
            <p className="mb-0"> {/* Removed default paragraph margin */}
              &copy; {new Date().getFullYear()} All rights Reserved by <a href="https://a2ffocom.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-white">Afia fareen</a> {/* Dynamically set year, added target_blank and rel_noopener for external link security, corrected 'right' to 'rights' and 'Reserverd' to 'Reserved' */}
            </p>
          </div>
          <div className="col-lg-6 col-md-12 text-center text-lg-end payment-img"> {/* Responsive text alignment */}
            <img src={payment} alt='Accepted Payment Methods' className='img-fluid' style={{ maxWidth: '250px' }} /> {/* Added alt text for accessibility, set max-width for better control */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
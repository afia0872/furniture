import React from 'react'
import { Link } from 'react-router-dom'

import about_banner1 from '../../assets/about-banner-01.jpg'
import about_banner2 from '../../assets/about-banner-02.jpg'
import about_banner3 from '../../assets/about-banner-03.jpg'
import about_banner4 from '../../assets/about-banner-04.jpg'
import about_banner5 from '../../assets/about-banner-05.jpg'
import about_hero from '../../assets/furniforma-about-filler-img3.jpg'


function About() {
  return (
    <>
      <div className="page-section text-center py-5 position-relative overflow-hidden">
        {/* <p className="breadcrumb-text text-muted mb-2">
          <Link to='/' className='breadcrumb-link'>Home</Link> / <span className="text-dark">About</span>
        </p> */}
        <h2 className="page-heading fw-bold text-uppercase">About</h2>
      </div>

      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            <img src={about_banner2} alt='About banner 1' className='img-fluid w-100 h-100 object-fit-cover' style={{minHeight:"100%"}} />
          </div>
          <div className="col-md-6">
            <div className="about-content">
              <h2 className="fw-bold mb-4">Crafting Comfort and Style for Your Home</h2>
              <p className="text-muted">
                At Furniforma, we are passionate about crafting high-quality furniture that brings comfort, elegance, and timeless beauty into every home. With over 18+ years of experience, we blend craftsmanship and innovation to deliver exceptional products.
              </p>
              <ul className="list-unstyled">
                <li><i className="bi bi-check-circle-fill"></i> Sustainable materials and ethical sourcing</li>
                <li><i className="bi bi-check-circle-fill"></i> Ergonomic designs for ultimate comfort</li>
                <li><i className="bi bi-check-circle-fill"></i> Customization options to suit your style</li>
                <li><i className="bi bi-check-circle-fill"></i> Exceptional customer service and support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="about-banner-group container mb-5">
        <div className="row g-4">
          <div className="col-md-4">
            <img src={about_banner3} alt="About banner 2" className="img-fluid rounded" />
          </div>
          <div className="col-md-4">
            <img src={about_banner4} alt="About banner 3" className="img-fluid rounded" />
          </div>
          <div className="col-md-4">
            <img src={about_banner5} alt="About banner 4" className="img-fluid rounded" />
          </div>
        </div>
      </div>

      <div className="container enhanced-section my-5 py-5 text-center">
          <p className="section-subtitle text-uppercase mb-2">Our Values</p>
          <h2 className="section-title fw-bold mb-4 text-uppercase">Why Choose <span className="highlighted">Us?</span></h2>
          <p className="section-description mx-auto mb-5 px-3">We believe in creating furniture that lasts a lifetime, combining aesthetic appeal with robust functionality and sustainable practices.</p>

          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-lg-4">
              <div className="enhanced-card text-center">
                <div className="icon-circle bg-gradient-orange">
                  <i className="bi bi-truck"></i>
                </div>
                <h5 className="fw-semibold mt-3">Fast & Free Shipping</h5>
                <p className="text-muted">
                  Enjoy prompt and reliable delivery services with no additional cost for your convenience.
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-lg-4">
              <div className="enhanced-card text-center">
                <div className="icon-circle bg-gradient-purple">
                  <i className="bi bi-arrow-return-left"></i>
                </div>
                <h5 className="fw-semibold mt-3">Easy Returns</h5>
                <p className="text-muted">
                  Our hassle-free return policy ensures your satisfaction with every purchase.
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-lg-4">
              <div className="enhanced-card text-center">
                <div className="icon-circle bg-gradient-green">
                  <i className="bi bi-award"></i>
                </div>
                <h5 className="fw-semibold mt-3">Premium Quality</h5>
                <p className="text-muted">
                  Our furniture is crafted with top-grade material and attention to details for long-lasting elegance.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="aboutus-section container my-5 py-5 text-center position-relative overflow-hidden">
          <p className="section-subtitle text-uppercase mb-2">Get in Touch</p>
          <h2 className="section-title fw-bold mb-4 text-uppercase">About <span className="highlighted">us Info</span></h2>

          <p className="section-description mx-auto mb-5 px-3">we are passionated about crafting high-quality furniture that brings comfort, elegance, and timeless beauty into every home.
            with over 18+ years Of experience, we blend Craftmanship and innovation to delivery exceptional products.
          </p>
          <a href="" className="contact-btn text-uppercase fw-semibold d-line-flew align-items-center gap-2">
            <i className="bi bi-send-fill"></i>
            Contact Us Now
          </a>
        </div>
    </>
  )
}

export default About
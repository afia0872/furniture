import React, { useContext, useEffect, useState } from 'react';
import about_hero from '../../assets/furniforma-about-filler-img3.jpg'; // This image will be used for the about section
import hero_img from '../../assets/hero.png';
import subBanner1 from '../../assets/sub-banner-1.jpg';
import subBanner2 from '../../assets/sub-banner-2.jpg';
import subBanner3 from '../../assets/sub-banner-3.jpg';
import subBanner4 from '../../assets/sub-banner-4.jpg';
import user1 from '../../assets/user1.jpg';
import user2 from '../../assets/user2.jpg';
import user3 from '../../assets/user3.jpg';
import blog1 from '../../assets/blog-1.jpeg';
import blog2 from '../../assets/blog-2.jpg';
import blog3 from '../../assets/blog-3.jpg';
import blog4 from '../../assets/blog-4.jpg';
import blog5 from '../../assets/blog-5.jpg';
import blog6 from '../../assets/blog-6.jpeg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

import Products from './../../Product.json'; // Assuming this path is correct

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartContext } from './CartContextProvider';
import { WishlistContext } from './../pages/WishlistContextProvider';

const bg = '#faf7f2';

function Index() {
    const [selectedProduct, setSelectProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    // Add to cart
    const { addToCart } = useContext(CartContext);
    const { addToWishlist } = useContext(WishlistContext);

    const handleAddToCart = (product, qty = 1) => {
        const productWithNumbers = {
            ...product,
            price: parseFloat(product.price),
            offerPrice: parseFloat(product.offerPrice),
            quantity: qty, // Add quantity to the product object for the cart
        };
        addToCart(productWithNumbers);
        toast.success(`${product.name} added to cart!`);
    };

    // Handle Add to Wishlist with toast notification
    const handleAddToWishlist = (product) => {
        addToWishlist(product);
        toast.success(`${product.name} added to wishlist!`);
    };

    const handleProductClick = (product) => {
        setSelectProduct(product);
        setQuantity(1); // Reset quantity when a new product is selected for detail view
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity((count) => count - 1);
        }
    };

    const handleIncrease = () => {
        setQuantity((count) => count + 1);
    };

    // Close the product detail modal and reset selected product
    const handleCloseProductModal = () => {
        setSelectProduct(null);
        setQuantity(1); // Reset quantity when modal closes
    };

    return (
        <>
            {/* Hero Section */}
            <div className="hero" style={{ backgroundColor: bg }}>
                <div className="row">
                    <div className="hero-wrap hero-wrap1 col-md-6 mt-5">
                        <div className="hero-content">
                            <h3>Stylish Furnitures</h3>
                            <h1>
                                Sustainable Chairs <br />
                                For Every Space
                            </h1>
                            <p className="my-3">
                                Sodales ridiculus lacus laoreet dictum curae maimus , viverra
                                tortor eget,rutru.Nam malesuada pellentesque mi, non eleifend
                                ipsum ullamcorper id. Etian Vehicula tellu sem.
                            </p>
                            <a href="#" className="btn hero-btn mt-3 align-items-center gap-2">
                                <i className="bi bi-box"></i>Shop Now
                            </a>
                        </div>
                    </div>
                    <div className="hero-wrap col-md-6 hero-wrap2">
                        <div className="hero-img">
                            <img src={hero_img} className="img-fluid w-100" alt="" />
                        </div>
                    </div>
                </div>
            </div>

          
            {/* Sub banner */}
            <div className="container sub-banner-section my-5">
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="banner-card overflow-hidden rounded position-relative">
                            <img src={subBanner1} className="img-fluid rounded banner-img" alt="" />
                            <div className="sub-content">
                                <span>20% off</span>
                                <h4>For All Chair Products</h4>
                                <a href="#">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="sub-banner rounded position-relative">
                            <img src={subBanner2} className="img-fluid w-100" alt="" />
                            <div className="sub-content">
                                <span>20% off</span>
                                <h4>For All Chair Products</h4>
                                <a href="#">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Products */}
            <div className="container my-5 product-section">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <p className="section-subtitle text-uppercase mb-2">Our Products</p>
                        <h2 className="section-title fw-bold mb-4 text-uppercase">
                            Exclusive <span className="highlighted">Products</span>
                        </h2>
                        <p className="section-description mx-auto mb-5 px-3">
                            Discover our exquisite collection of handcrafted furniture, designed
                            to elevate your living space with unparalleled style and comfort.
                        </p>
                    </div>
                </div>
 
                <div className="row">

                         {Products.map((product) => (
                        <div className="col-lg-3 col-md-6" key={product.id}>
                            <div className="product-card">
                                <img src={product.image} className="img-fluid" alt="" />
                                <span className="product-badge text-uppercase">{product.badge}</span>
                                <div className="product-icons">
                                    <i
                                        className="bi bi-eye-fill"
                                        type="button"
                                        data-bs-toggle="modal"
                                        data-bs-target="#productDet"
                                        onClick={() => handleProductClick(product)}
                                    ></i>
                                    <i
                                        className="bi bi-heart"
                                        onClick={() => handleAddToWishlist(product)}
                                    ></i>
                                    <i
                                        className="bi bi-basket"
                                        onClick={() => handleAddToCart(product, 1)} // Add 1 as default quantity
                                    ></i>
                                </div>
                                <h3 className="product-title">{product.name}</h3>
                                <div className="product-rating">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-half"></i>
                                </div>
                                <div className="price mt-2">
                                    <span>₹{product.price}</span>
                                    <del>₹{product.offerPrice}</del>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Sub banner 2 */}
            <div className="container sub-banner-section my-5">
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="sub-banner rounded position-relative">
                            <img src={subBanner3} className="img-fluid w-100" alt="" />
                            <div className="sub-content">
                                <span>30% off</span>
                                <h4>For All Chair Products</h4>
                                <a href="#">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="sub-banner rounded position-relative">
                            <img src={subBanner4} className="img-fluid w-100" alt="" />
                            <div className="sub-content">
                                <span>10% off</span>
                                <h4>For All Chair Products</h4>
                                <a href="#">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


              {/* About Us Section */}
            ---
            <div className="container about-us-section my-5 py-5">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <div className="about-img">
                            <img src={about_hero} className="img-fluid rounded shadow-sm" alt="About Furniforma" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content ps-lg-4">
                            <p className="section-subtitle text-uppercase mb-2">About Us</p>
                            <h2 className="section-title fw-bold mb-4 text-uppercase">
                                Your Home, <span className="highlighted">Our Passion</span>
                            </h2>
                            <p className="section-description mb-4">
                                At Furniforma, we believe that furniture is more than just objects; it's an extension of your personality and a cornerstone of your living space. We meticulously craft each piece with attention to detail, quality materials, and sustainable practices, ensuring both beauty and durability.
                            </p>
                            <p className="section-description mb-4">
                                Our mission is to provide you with unique and timeless furniture that transforms your house into a home, reflecting comfort, style, and functionality. From classic designs to contemporary trends, we offer a diverse collection to suit every taste and need.
                            </p>
                            <ul className="list-unstyled about-features mb-4">
                                <li><i className="bi bi-check-circle-fill me-2 text-success"></i>High-Quality Materials</li>
                                <li><i className="bi bi-check-circle-fill me-2 text-success"></i>Sustainable & Eco-Friendly</li>
                                <li><i className="bi bi-check-circle-fill me-2 text-success"></i>Expert Craftsmanship</li>
                                <li><i className="bi bi-check-circle-fill me-2 text-success"></i>Exceptional Customer Service</li>
                            </ul>
                            <a href="/about" className="btn btn-dark hero-btn">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
            ---

              {/* Customer Review */}
            <div className="container-fluid my-5 py-5 bg-light">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <p className="section-subtitle text-uppercase mb-2">Testimonials</p>
                        <h2 className="section-title fw-bold mb-4 text-uppercase">
                            What Our <span className="highlighted">Customers Say</span>
                        </h2>
                        <p className="section-description mx-auto mb-5 px-3">
                            Hear directly from our satisfied customers about their experiences
                            with Furniforma, and discover why we're their preferred choice for
                            quality furniture.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-10 m-auto">
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={30}
                            navigation={true}
                            modules={[Autoplay, Navigation]} // Removed EffectFade
                            className="mySwiper custom-carousel"
                            loop={true}
                            autoplay={{
                                delay: 2500, // 2.5 seconds
                                disableOnInteraction: false, // Continue autoplay after user interaction
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 3, // Changed from 4 to 3 for better common multi-slide display
                                    spaceBetween: 50,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className="custom-carousel-item text-center">
                                    <img src={user1} className="img-fluid" alt="" />
                                    <p className="mb-3">
                                        "I recently purchased a sofa from Furniforma, and I
                                        couldn't be happier! The quality is exceptional, and it
                                        perfectly complements my living room. The delivery was also
                                        incredibly fast and efficient."
                                    </p>
                                    <h5 className="fw-bold">John Doe</h5>
                                    <span>New York</span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="custom-carousel-item text-center">
                                    <img src={user2} className="img-fluid" alt="" />
                                    <p className="mb-3">
                                        "Furniforma offers an amazing range of modern furniture. I
                                        found the perfect dining set for my apartment, and the
                                        customer service was outstanding. Highly recommend!"
                                    </p>
                                    <h5 className="fw-bold">Jane Smith</h5>
                                    <span>Los Angeles</span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="custom-carousel-item text-center">
                                    <img src={user3} className="img-fluid" alt="" />
                                    <p className="mb-3">
                                        "The bed frame I ordered from Furniforma exceeded my
                                        expectations. It's sturdy, beautifully designed, and was
                                        easy to assemble. A great investment for a good night's
                                        sleep."
                                    </p>
                                    <h5 className="fw-bold">David Lee</h5>
                                    <span>Chicago</span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="custom-carousel-item text-center">
                                    <img src={user1} className="img-fluid" alt="" />
                                    <p className="mb-3">
                                        "I recently purchased a sofa from Furniforma, and I
                                        couldn't be happier! The quality is exceptional, and it
                                        perfectly complements my living room. The delivery was also
                                        incredibly fast and efficient."
                                    </p>
                                    <h5 className="fw-bold">John Doe</h5>
                                    <span>New York</span>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            {/* Blogs */}
            <div className="container my-5 blog-section">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <p className="section-subtitle text-uppercase mb-2">Our Blog</p>
                        <h2 className="section-title fw-bold mb-4 text-uppercase">
                            Latest <span className="highlighted">News</span>
                        </h2>
                        <p className="section-description mx-auto mb-5 px-3">
                            Stay updated with the latest trends, tips, and insights on home
                            decor, furniture care, and interior design from our expert bloggers.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 product-slider">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            effect={'fade'} // Default effect for the Swiper (can be overridden by breakpoints)
                            navigation={{
                                nextEl: '.blog-swiper-next',
                                prevEl: '.blog-swiper-prev',
                            }}
                            modules={[Autoplay, EffectFade, Navigation]} // Autoplay added
                            className="mySwiper blog-swiper"
                            loop={true}
                            autoplay={{
                                delay: 3000, // 3 seconds for blogs
                                disableOnInteraction: false, // Continue autoplay after user interaction
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                    effect: 'fade', // Explicitly set fade for single slide on small screens
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                    effect: 'slide', // Use slide for multiple slides on medium screens
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                                    effect: 'slide', // Use slide for multiple slides on large screens
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className="blog-card">
                                    <div className="blog-img">
                                        <img src={blog1} className="img-fluid w-100" alt="" />
                                    </div>
                                    <div className="blog-content mt-3">
                                        <h5 className="blog-meta">
                                            feb 28,2025 <span className="dot">.</span>
                                            <span>By Editor</span>
                                        </h5>
                                        <h1 className="blog-title mt-2 mb-3">
                                            9 customer Experience Trends That'll Defines the Next Year
                                        </h1>
                                        <p className="blog-desc">
                                            The oddest place you will find financialy reports.
                                        </p>
                                        <a href="#" className="blog-btn">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="blog-card">
                                    <div className="blog-img">
                                        <img src={blog2} className="img-fluid w-100" alt="" />
                                    </div>
                                    <div className="blog-content mt-3">
                                        <h5 className="blog-meta">
                                            Jan 15,2025 <span className="dot">.</span>
                                            <span>By Admin</span>
                                        </h5>
                                        <h1 className="blog-title mt-2 mb-3">
                                            6 simple Ways to Boost Your Ecommerce conversionrate
                                        </h1>
                                        <p className="blog-desc">
                                            The fastest way to grow your online business.
                                        </p>
                                        <a href="#" className="blog-btn">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="blog-card">
                                    <div className="blog-img">
                                        <img src={blog5} className="img-fluid w-100" alt="" />
                                    </div>
                                    <div className="blog-content mt-3">
                                        <h5 className="blog-meta">
                                            Oct 10,2024 <span className="dot">.</span>
                                            <span>By Guest</span>
                                        </h5>
                                        <h1 className="blog-title mt-2 mb-3">
                                            The Art of Choosing the Right Lighting for Your Space
                                        </h1>
                                        <p className="blog-desc">
                                            Illuminate your home with perfect ambiance.
                                        </p>
                                        <a href="#" className="blog-btn">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="blog-card">
                                    <div className="blog-img">
                                        <img src={blog6} className="img-fluid w-100" alt="" />
                                    </div>
                                    <div className="blog-content mt-3">
                                        <h5 className="blog-meta">
                                            Sep 5,2024 <span className="dot">.</span>
                                            <span>By Admin</span>
                                        </h5>
                                        <h1 className="blog-title mt-2 mb-3">
                                            Sustainable Living: Eco-Friendly Furniture Choices
                                        </h1>
                                        <p className="blog-desc">
                                            Furnish your home responsibly.
                                        </p>
                                        <a href="#" className="blog-btn">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="blog-card">
                                    <div className="blog-img">
                                        <img src={blog3} className="img-fluid w-100" alt="" />
                                    </div>
                                    <div className="blog-content mt-3">
                                        <h5 className="blog-meta">
                                            Dec 1,2024 <span className="dot">.</span>
                                            <span>By Author</span>
                                        </h5>
                                        <h1 className="blog-title mt-2 mb-3">
                                            The Top 10 Must-Have Furniture Pieces for a Modern Home
                                        </h1>
                                        <p className="blog-desc">
                                            Essential furniture for contemporary living spaces.
                                        </p>
                                        <a href="#" className="blog-btn">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="blog-card">
                                    <div className="blog-img">
                                        <img src={blog4} className="img-fluid w-100" alt="" />
                                    </div>
                                    <div className="blog-content mt-3">
                                        <h5 className="blog-meta">
                                            Nov 20,2024 <span className="dot">.</span>
                                            <span>By Editor</span>
                                        </h5>
                                        <h1 className="blog-title mt-2 mb-3">
                                            Innovative Storage Solutions for Small Apartments
                                        </h1>
                                        <p className="blog-desc">
                                            Maximize your space with smart and stylish storage.
                                        </p>
                                        <a href="#" className="blog-btn">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <div className="swiper-button-prev blog-swiper-btn blog-swiper-btn-prev swiper-btn swiper-prev">
                            <i className="ri-arrow-left-s-line"></i>
                        </div>
                        <div className="swiper-button-next blog-swiper-btn blog-swiper-btn-next swiper-btn swiper-next">
                            <i className="ri-arrow-right-s-line"></i>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Detail Modal */}
            <div
                className="modal fade"
                id="productDet"
                tabIndex="-1"
                aria-labelledby="productDetLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="productDetLabel">
                                Product Details
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={handleCloseProductModal}
                            ></button>
                        </div>
                        <div className="modal-body">
                            {selectedProduct ? (
                                <div className="row">
                                    <div className="col-md-6">
                                        <img
                                            src={selectedProduct.image}
                                            className="img-fluid w-100"
                                            alt={selectedProduct.name}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <h3 className="product-title">{selectedProduct.name}</h3>
                                        <div className="product-rating">
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-half"></i>
                                        </div>
                                        <div className="price mt-2">
                                            <span>₹{selectedProduct.price}</span>
                                            <del>₹{selectedProduct.offerPrice}</del>
                                        </div>
                                        <p className="product-description mt-3">
                                            {selectedProduct.description || 'No description available.'}
                                        </p>
                                        <div className="d-flex align-items-center mt-3">
                                            <button
                                                className="btn btn-outline-secondary"
                                                onClick={handleDecrease}
                                            >
                                                -
                                            </button>
                                            <span className="mx-2">{quantity}</span>
                                            <button
                                                className="btn btn-outline-secondary"
                                                onClick={handleIncrease}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <button
                                            className="btn btn-dark mt-4"
                                            onClick={() => handleAddToCart(selectedProduct, quantity)}
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <p>No product selected.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
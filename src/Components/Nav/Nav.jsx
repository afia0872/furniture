import React, { useContext, useState,useEffect } from 'react'

import Products from './../../Product.json'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../pages/CartContextProvider';
import { WishlistContext } from './../pages/WishlistContextProvider';



const PrimaryColor = "#9e6747";

function Nav( { showModal, onClose, initialMode = 'signin' }) {

    // signup logics 
  
  // State to toggle between 'signin' and 'signup' forms
  const [mode, setMode] = useState(initialMode);

  // State for form inputs (optional, but good practice for controlled components)
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signinEmail, setSigninEmail] = useState('');
  const [signinPassword, setSigninPassword] = useState('');

  // Effect to manage the Bootstrap modal visibility programmatically
  useEffect(() => {
    const modalElement = document.getElementById('signupModal');
    let bsModal;

    if (modalElement) {
      bsModal = new window.bootstrap.Modal(modalElement);
      if (showModal) {
        bsModal.show();
        setMode(initialMode); // Set the mode when modal opens
      } else {
        bsModal.hide();
      }

      // Cleanup function to prevent memory leaks
      return () => {
        if (bsModal) {
          bsModal.dispose();
        }
      };
    }
  }, [showModal, initialMode]); // Re-run when showModal or initialMode changes

  // Handler for switching modes within the modal
  const switchToSignIn = (e) => {
    e.preventDefault(); // Prevent default link behavior
    setMode('signin');
  };

  const switchToSignUp = (e) => {
    e.preventDefault(); // Prevent default link behavior
    setMode('signup');
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send data to your backend for sign-up
    console.log('Sign Up Data:', { signupName, signupEmail, signupPassword });
    toast.success('Sign Up successful!');
    // Close modal or switch to sign-in after successful sign-up
    onClose();
    // You might want to automatically switch to signin after successful signup
    // setMode('signin');
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send data to your backend for sign-in
    console.log('Sign In Data:', { signinEmail, signinPassword });
    toast.success('Sign In successful!');
    // Close modal after successful sign-in
    onClose();
  };
     const  {cartItems} =useContext(CartContext);
     const  {WishlistItems} =useContext(WishlistContext)

     const WishlistCount =WishlistItems.length;
     const CartCount = cartItems.length;

    const [searchTerm ,setSearchTerm] = useState('');
    const [ filterProducts , setfilterProducts] =useState([]);
    
    const handlechange = (e) => {
        const value =e.target.value;
        setSearchTerm(value);

        if(value.trim() === ''){
            setfilterProducts([]);
        }
        else{
            const filtered =Products.filter((product) =>
            product.name.toLowerCase().includes(value.toLowerCase())
        );
        setfilterProducts(filtered);
        }
    };

    const [selectedProduct , setSelectProduct] =useState(null);

    const handleProductclick =(product) => {
        setSelectProduct(product);
        const modal =new window.bootstrap.Modal(document.getElementById('productModal'));
        modal.show();
    };

    //  Count Countity 
    const [quantity, setQuantity] =useState(1);

    const handleDecrease = () => {
        if(quantity > 1){
            setQuantity( count => count -1);
        }
    };
     const handleIncrease = () => {
        setQuantity( count => count +1);
     };  
   
  return (
    <>
     {/* Nav  */}
    <div className='nav w-100 fixed-top top-0 start-0 bg-light shadow-sm'>
        <nav className='container navbar navbar-expand-lg py-2'>

        {/* logo  */}
            <a href='#' className='navbar-brand'>
                <h3 style={{color:PrimaryColor , margin:0}}>Borcelle.</h3>
            </a>

            {/* Mobile Icon  */}
            <div className='d-lg-none mobile-icon d-flex align-items-center gap-3'>
            <a href='#'>
                <i className='bi bi-search fs-5'></i>
            </a>

            <a href='#'>
                <i className='bi bi-person fs-5'></i>
             </a>
             <a href='#' className='position-relative'>
                <i className='bi bi-heart fs-5'></i>
            <span className='position-absolute top-0 start-100 translate-middle cart-count rounded-pill'>0</span>
            </a>
             <a href='#' className='position-relative'>
                <i className='bi bi-bag fs-5'></i>
                <span className='position-absolute top-0 start-100 translate-middle cart-count rounded-pill'>0</span>  
            </a>
        </div>

                 {/* Toggle Button  */}
         <button
         className='navbar-toggler'
         type='button'
         data-bs-toggle='collapse'
         data-bs-target="#navbarNav"
         aria-controls='navbarNav'
         aria-expanded='false'
         aria-label='Toggle navigation'
         >
            <span className='navbar-toggler-icon'></span>
         </button>

         {/* Main Nav Links  */}
         <div className='collapse navbar-collapse' id='navbarNav'>
            {/* Nav Links  */}
            <ul className='navbar-nav mx-auto align-items-center'>
        <li className='nav-items'>
          <Link to='/' className='nav-link'>Home</Link>
        </li>
        <li className='nav-items'>
          <Link to='/about' className='nav-link'>About</Link>
        </li>
        <li className='nav-items'>
          <Link to='/shop' className='nav-link'>Shop</Link>
        </li>
        <li className='nav-items'>
          <Link to='/blog' className='nav-link'>Blog</Link>
        </li>
        <li className='nav-items'>
          <Link to='/contact' className='nav-link'>Contact</Link>
        </li>
      </ul>

            {/* Desktop Icons  */}
            <ul className='navbar-nav ms-auto d-none d-lg-flex align-items-center gap-4'>
                 <li className='nav-items'>
                    <a href='#' data-bs-toggle='modal' data-bs-target='#searchModal'>
                        <i className='bi bi-search fs-4 text-dark'></i>
                    </a>
                </li>
                 <li className='nav-items'>
                    <a href='#' data-bs-toggle='modal' data-bs-target='#signupModal'>
                        <i className='bi bi-person fs-4 text-dark'></i>
                    </a>
                </li>
                 <li className='nav-items'>
             <Link to='/wishlist' className='position-relative'>
                <i className='bi bi-heart fs-4 text-dark'></i>
                {WishlistCount > 0 && (
                <span className='position-absolute top-0 start-100 translate-middle cart-count rounded-pill'>{WishlistCount}</span>
                )}
            </Link>
            </li>
             <li className='nav-items'>
             <Link to='/carts' className='position-relative'>
                <i className='bi bi-bag fs-4 text-dark'></i>
                {CartCount > 0 && (
                        <span className='position-absolute top-0 start-100 translate-middle cart-count rounded-pill'>{CartCount}</span>  
                )}
                
            </Link>
                 </li>
            </ul>
            </div>
        </nav>
        </div>

    {/* Sign-up Model  */}
   <div className="modal fade" id='signupModal' tabIndex='-1' aria-labelledby='signupModalLabel' aria-hidden='true'>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-4">
          <div className="modal-header border-0">
            {/* Dynamically change modal title based on mode */}
            <h5 className="modal-title sign-up-title fw-bold" id='signupModalLabel'>
              {mode === 'signup' ? 'Sign Up' : 'Sign In'}
            </h5>
            <button type='button' className='btn-close close-modal' data-bs-dismiss='modal' aria-label='close' onClick={onClose}></button>
          </div>
          <div className="modal-body">

            {/* Sign Up Form (conditionally rendered) */}
            {mode === 'signup' && (
              <form onSubmit={handleSignUpSubmit}>
                <div className="mb-3">
                  <label className='form-label'>Name</label>
                  <input
                    type='text'
                    className='form-control border shadow-sm'
                    placeholder='Enter Your Name'
                    required
                    value={signupName}
                    onChange={(e) => setSignupName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className='form-label'>Email address</label>
                  <input
                    type='email'
                    className='form-control border shadow-sm'
                    placeholder='Enter Email Address'
                    required
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className='form-label'>Password</label>
                  <input
                    type='password'
                    className='form-control border shadow-sm'
                    placeholder='Enter Password'
                    required
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                  />
                </div>

                <p className='terms text-muted'>By Sign Up, you agree to our <a href='#'>Terms of Service</a> & <a href='#'>Privacy Policy</a></p>
                <button type='submit' className="btn text-white btn-signup w-100">Sign Up</button>
              </form>
            )}

            {/* Sign In Form (conditionally rendered) */}
            {mode === 'signin' && (
              <form onSubmit={handleSignInSubmit}>
                <div className="mb-3">
                  <label className='form-label'>Email address</label>
                  <input
                    type='email'
                    className='form-control border shadow-sm'
                    placeholder='Enter Email Address'
                    required
                    value={signinEmail}
                    onChange={(e) => setSigninEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className='form-label'>Password</label>
                  <input
                    type='password'
                    className='form-control border shadow-sm'
                    placeholder='Enter Password'
                    required
                    value={signinPassword}
                    onChange={(e) => setSigninPassword(e.target.value)}
                  />
                </div>
                <button type='submit' className="btn text-white btn-signup w-100">Sign In</button>
              </form>
            )}

            {/* Toggle links */}
            <div className="text-center mt-3">
              {mode === 'signup' ? (
                <p className="mb-0 terms">Already have an account? <a href='#' className='fw-bold' onClick={switchToSignIn}>Sign In</a></p>
              ) : (
                <p className="mb-0 terms">Don't have an account? <a href='#' className='fw-bold' onClick={switchToSignUp}>Sign Up</a></p>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  
    {/* Search modal  */}
    <div className="modal fade" id='searchModal' tabIndex='-1' aria-labelledby='signupModalLabel' aria-hidden='true'>
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content p-4">
                <div className="modal-header border-0">
                    <h5 className="modal-tiitle sign-up-title fw-bold" id='signupModalLabel' aria-hidden='true'>Search</h5>
                    <button type='button' className='btn-close close-modal search-close' data-bs-dismiss='modal' aria-label='close'></button>
                </div>
                <div className="modal-body">
                   <form>
                    <div className="mb-3">
                        <input type='text' className='for-control shadow-sm' placeholder='search for Product' autoFocus onChange={handlechange} />
                    </div>
                    <div className="show-search-product-wrap row">
                        {searchTerm.trim() !== '' ? (
                            filterProducts.length > 0 ? (
                                filterProducts.map((product) =>(
                                    <div key={product.id} className="ssp-wrap border mb-2 col-lg-6"
                                    onClick={()=> handleProductclick(product)}
                                    style={{cursor:'pointer'}}>
                                             <div className="ssp-img">
                                                <img src={product.image} className='img-fluid' alt='' />
                                             </div>
                                             <div className="ssp-info p-2">
                                                <h6>{product.name}</h6>
                                             </div>
                                    </div>
                                ))
                            ) :(
                                <p className='text-muted'>No product found.</p>
                            )
                        ):(
                                 <p className='text-muted'>No product found.</p>
                        )}
                      
                        
                         
                    </div>
                   </form>
                </div>
            </div>
        </div>
    </div>

    {/* Product Popup Modal  */}
    <div className="modal fade" id='productModal' tabIndex='-1' aria-labelledby='productModalLabel' aria-hidden='true' >
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content p-3">
                {selectedProduct && (
                    <>
                    <div className="modal-body d-flex flex-column flex-md-row gap-1">
                        <div className="col-md-6">
                            <img src={selectedProduct.image} className='img-fluid rounded border' alt='' />
                        </div>
                        <button type='button' className='btn-close close-modal product-modal-close' data-bs-dismiss='modal' aria-label='close'></button>
                    <div className="col-md-6 d-flex ps-4  flex-column justify-content-center">
                        <div className="modal-header border-0 p-0">
                            <h5 className='modal-title product-title' id='productModalLabel'>{selectedProduct.name}</h5>
                        </div>
                        <div className="d-flex gap-1 text-warnig mb-2">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-half"></i>
                        </div>
                        <h4 className='text-success fw-bold product-modal-price'>
                            ₹{selectedProduct.price}{" "}
                            <span className="text-muted text-decoration-line-through fs-5 fw-normal">
                                 ₹{selectedProduct.offerPrice}
                            </span>
                        </h4>
                        <div className="d-flex align-items-center gap-3">
                            <div className="d-flex align-items-center border rounded" 
                            style={{width :"100px", height:"40px"}}>
                                <span className='px-2' style={{cursor:"pointer"}} onClick={handleDecrease}>-</span>
                                <span className='flex-grow-1 text-center border-start border-end'>{quantity}</span>
                                <span className='px-2' style={{cursor:"pointer"}} onClick={handleIncrease}>+</span>
                            </div>
                            <button className='btn btn-success d-flex align-items-center gap-2 custom-2'
                            onClick={ () => handleAddToCart(selectedProduct,
                                toast.success(`${selectedProduct.name} Added To Cart!`)
                            )} style={{cursor:"pointer"}}>
                                <i className='bi bi-basket'></i>Add To Cart
                            </button>
                        </div>
                         {/* Extra Description  */}
                        <p className='mt-4 product-des'>This high-quality product combines durability.Perfect for daily use, it offers execptional value and desing to enhance your Lifestyle with comfort,Performance, and modern appeal.</p>
                        </div>    
                    </div>
                    </>
                )}
            </div>
        </div>

    </div>
    </>
  )
}
export default Nav
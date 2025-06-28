import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from './CartContextProvider';
import { Link, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

// Define your payment methods as an array of objects
const paymentMethods = [
    {
        id: 'paypal',
        name: 'PayPal',
        icon: 'ri-paypal-fill', // Example icon, ensure you have this in Remixicon
        description: 'You will be redirected to PayPal to complete the purchase.',
        component: null, // No specific input component needed for redirect methods
    },
    {
        id: 'creditCard',
        name: 'Credit/Debit Card',
        icon: 'ri-bank-card-line',
        description: 'We support Mastercard, Visa, Discover, and Stripe.',
        component: ({ selectedPaymentMethodId }) => ( // A component for card inputs
            // Only render these inputs if 'creditCard' is the selected method
            selectedPaymentMethodId === 'creditCard' && (
                <div className="row mt-3 g-3">
                    <div className="col-12">
                        <label htmlFor="cardNumber" className="form-label">Card Number</label>
                        <input type='text' id='cardNumber' className='form-control' placeholder='XXXX XXXX XXXX XXXX' aria-label="Card Number" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="nameOnCard" className="form-label">Name on Card</label>
                        <input type='text' id='nameOnCard' className='form-control' placeholder='Enter your full name' aria-label="Name on Card" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
                        <input type='text' id='expiryDate' className='form-control' placeholder='MM/YY' aria-label="Expiry Date (MM/YY)" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="cvvCode" className="form-label">CVV Code</label>
                        <input type='text' id='cvvCode' className='form-control' placeholder='XXX' aria-label="CVV Code" />
                    </div>
                </div>
            )
        ),
    },
    {
        id: 'payoneer',
        name: 'Payoneer',
        icon: 'ri-money-dollar-circle-line', // Example icon
        description: 'You will be redirected to Payoneer to complete the purchase.',
        component: null,
    },
    {
        id: 'cod',
        name: 'Cash on Delivery (COD)',
        icon: 'ri-hand-coin-line', // Example icon
        description: 'Pay with cash when your order is delivered.',
        component: null,
    },
];

function CheckOut() {
    const { cartItems, clearCart } = useContext(CartContext);
    const [subtotal, setSubtotal] = useState(0);
    const [tax, setTax] = useState(0);
    const [total, setTotal] = useState(0);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(paymentMethods[0].id); // Default to the first method
    const navigate = useNavigate();

    // Calculate totals whenever cartItems change
    useEffect(() => {
        const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const taxRate = 0.18;
        const taxAmount = totalAmount * taxRate;
        const grandTotal = totalAmount + taxAmount;

        setSubtotal(totalAmount);
        setTax(taxAmount);
        setTotal(grandTotal);
    }, [cartItems]);

    // Handle checkout process
    const handleCheckout = () => {
        if (cartItems.length === 0) {
            toast.error("Your cart is empty. Please add items before checking out.");
            navigate('/');
            return;
        }

        // In a real application, you'd send selectedPaymentMethod and order details to a backend
        console.log("Selected Payment Method:", selectedPaymentMethod);
        toast.success("Checkout successful! Your order has been placed.");
        clearCart();
        navigate('/order-confirmation');
    };

    return (
        <>
            {/* Page Header/Breadcrumb Section */}
            <div className="page-section text-center py-5 position-relative overflow-hidden">
                <p className="breadcrumb-text text-muted mb-2 z-5">
                    <Link to='/' className='breadcrumb-link'>Home</Link> / <span className='text-dark'>Checkout</span>
                </p>
                <h2 className="page-heading fw-bold text-uppercase">Checkout</h2>
            </div>

            {/* Main Content Area */}
            <div className="container py-5">
                <div className="row">
                    {/* Left Column: Delivery Address & Payment Method */}
                    <div className="col-lg-7 mb-4 mb-lg-0">
                        <div className="accordion" id='checkoutAccordion'>
                            {/* Delivery Address Section (Unchanged from previous iteration) */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type='button'
                                        data-bs-toggle='collapse'
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls='collapseOne'
                                    >
                                        <div className="d-flex align-items-center gap-2">
                                            <i className="ri-map-pin-line fs-6 text-secondary"></i>
                                            <span className="fw-medium">Delivery Address</span>
                                        </div>
                                    </button>
                                </h2>
                                <div id='collapseOne' className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#checkoutAccordion">
                                    <div className="accordion-body">
                                        <div className="container mt-4">
                                            <div className="row row-cols-1 row-cols-md-2 g-4">
                                                {/* Sample Home Address Card */}
                                                <div className="col">
                                                    <div className="card h-100 p-3 shadow-sm">
                                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                                            <h5 className="fs-6 d-flex align-items-center mb-0">
                                                                <input type="radio" name='address' id='homeAddress' className='form-check-input me-2' defaultChecked />
                                                                <label htmlFor="homeAddress" className='mb-0'>Home</label>
                                                            </h5>
                                                        </div>
                                                        <p className="mb-2" style={{ fontSize: "0.90rem" }}>
                                                            Jitu Chauhan <br />
                                                            4450 North Avenue Oakland, <br />
                                                            Nebraska, United States <br />
                                                            +91 4003-666-5555
                                                        </p>
                                                        <div className="mt-auto pt-2 border-top">
                                                            <a href="#" className="text-success d-block mb-1" style={{ fontSize: ".90rem" }} onClick={(e) => e.preventDefault()}>
                                                                Set as Default
                                                            </a>
                                                            <a href="#" className="text-primary me-2" style={{ fontSize: ".90rem" }} onClick={(e) => e.preventDefault()}>
                                                                Edit
                                                            </a>
                                                            <a href="#" className="text-danger" style={{ fontSize: ".90rem" }} onClick={(e) => e.preventDefault()}>
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Sample Office Address Card */}
                                                <div className="col">
                                                    <div className="card h-100 p-3 shadow-sm">
                                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                                            <h5 className="fs-6 d-flex align-items-center mb-0">
                                                                <input type="radio" name='address' id='officeAddress' className='form-check-input me-2' />
                                                                <label htmlFor="officeAddress" className='mb-0'>Office</label>
                                                            </h5>
                                                        </div>
                                                        <p className="mb-2" style={{ fontSize: "0.90rem" }}>
                                                            A. F. F. <br />
                                                            4450 North Avenue Oakland, <br />
                                                            Nebraska, United States <br />
                                                            +91 4003-666-5555
                                                        </p>
                                                        <div className="mt-auto pt-2 border-top">
                                                            <a href="#" className="text-success d-block mb-1" style={{ fontSize: ".90rem" }} onClick={(e) => e.preventDefault()}>
                                                                Set as Default
                                                            </a>
                                                            <a href="#" className="text-primary me-2" style={{ fontSize: ".90rem" }} onClick={(e) => e.preventDefault()}>
                                                                Edit
                                                            </a>
                                                            <a href="#" className="text-danger" style={{ fontSize: ".90rem" }} onClick={(e) => e.preventDefault()}>
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-end mt-3">
                                                <button type='button' className="btn btn-outline-success btn-sm">Add New Address</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Method Section (Dynamically rendered) */}
                            <div className="accordion-item mt-4">
                                <h2 className="accordion-header" id="headingPayment">
                                    <button
                                        className="accordion-button collapsed"
                                        type='button'
                                        data-bs-toggle='collapse'
                                        data-bs-target="#collapsePayment"
                                        aria-expanded="false"
                                        aria-controls='collapsePayment'
                                    >
                                        <div className="d-flex align-items-center gap-2">
                                            <i className="ri-bank-card-line fs-6 text-secondary"></i>
                                            <span className="fw-medium">Payment Method</span>
                                        </div>
                                    </button>
                                </h2>
                                <div id='collapsePayment' className="accordion-collapse collapse" aria-labelledby="headingPayment" data-bs-parent="#checkoutAccordion">
                                    <div className="accordion-body">
                                        <div className="container mt-4">
                                            {paymentMethods.map((method) => (
                                                <div className="card p-3 mb-3" key={method.id}>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type='radio'
                                                            name='paymentMethod'
                                                            id={method.id}
                                                            value={method.id}
                                                            checked={selectedPaymentMethod === method.id}
                                                            onChange={() => setSelectedPaymentMethod(method.id)}
                                                        />
                                                        <label htmlFor={method.id} className='form-check-label fs-6 fw-semibold d-flex align-items-center gap-2'>
                                                            {method.icon && <i className={`${method.icon}`}></i>}
                                                            Pay with {method.name}
                                                        </label>
                                                        <p className='text-muted ms-4 fs-6 mb-0'>{method.description}</p>
                                                    </div>
                                                    {/* Render specific input component if available for the selected method */}
                                                    {method.component && method.component({ selectedPaymentMethodId: selectedPaymentMethod })}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Order Summary (Unchanged from previous iteration) */}
                    <div className="col-lg-5">
                        <div className="container col-md-10 mx-auto">
                            <div className="card p-4 shadow">
                                <h5 className="border-bottom pb-3 mb-3 fs-4 fw-semibold">Order Summary</h5>

                                <div id='card-items'>
                                    {cartItems.length > 0 ? (
                                        cartItems.map((item) => (
                                            <div key={item.id || item.name} className="d-flex justify-content-between align-items-center mb-3">
                                                <span className="d-flex align-items-center gap-3">
                                                    <img
                                                        src={item.image || "/placeholder-product.jpg"}
                                                        alt={item.name}
                                                        className="img-fluid rounded"
                                                        style={{ width: "60px", height: "60px", objectFit: "cover" }}
                                                    />
                                                    <span className="fw-medium">{item.name} x {item.quantity}</span>
                                                </span>
                                                <span className="fw-semibold">₹{(item.price * item.quantity).toFixed(2)}</span>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-center text-muted py-3">Your cart is empty.</p>
                                    )}
                                </div>

                                <hr className="my-3" />

                                {/* Order Totals */}
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Item Subtotal</span>
                                    <span className="fw-semibold">₹{subtotal.toFixed(2)}</span>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Shipping Fee</span>
                                    <span className="fw-semibold">₹0.00</span>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Tax (VAT 18%)</span>
                                    <span className="fw-semibold">₹{tax.toFixed(2)}</span>
                                </div>

                                <hr className="my-3" />

                                <div className="d-flex justify-content-between fs-5 fw-bold text-success">
                                    <span>Grand Total</span>
                                    <span>₹{total.toFixed(2)}</span>
                                </div>
                            </div>

                            {/* Place Order Button */}
                            <div className="d-grid mt-4">
                                <button onClick={handleCheckout} className='btn btn-success btn-lg'>Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CheckOut;
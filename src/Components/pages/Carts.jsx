import React, { useContext } from 'react';
import { CartContext } from './CartContextProvider';
import { Link } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


function Carts() {
     const { cartItems, removeFromCart, updateQuantity,total } =useContext(CartContext)
  return (
    <>
      <div className="page-section tet-center py-5 position-relative overflow-hidden">
        <p className="breadcrumb-text text-muted mb-2">
            <Link to='/'>Home</Link> / <span className="text-dark">Cart</span>
            </p>
            <h2 className="page-heading fw-bold text-uppercase">Cart</h2>
            </div>
            <section className="pb-5 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="mb-4">Shopping Cart</h2>
                            {cartItems.length === 0 ? ( // Fixed typo: langth to length
                                <div className="alert alert-danger text-center">No Items In Cart</div>
                                ) : (
                                    <div className="table-responsive mt-2">
                                                            {/* Removed: <h2 className="fw-bold">My Wishlist</h2> */} {/* Removed misplaced heading */}
                                                            <table className="table align-middle text-center">
                                                                <thead className="bg-light">
                                                                    <tr>
                                                                        <th className="product-name fw-normal">Product</th>
                                                                        <th className="product-name fw-normal">Price</th>
                                                                        <th className="product-name fw-normal">Quantity</th>
                                                                        <th className="product-name fw-normal">Subtotal</th>
                                                                        <th className="product-name fw-normal">Remove</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {cartItems.map((product) => (
                                                                        <tr key={product.id}>
                                                                            <td>
                                                                                <Link to={`/shop`} className="d-flex align-items-center text-start text-dark text-decoration-none">
                                                                                    <img src={product.image} className="img-fluid rounded-circle" style={{ width: "80px", height: "80px", objectFit: "cover" }} alt="" />
                                                                                    <div className="product-name ms-3">
                                                                                        {product.name}
                                                                                    </div>
                                                                                </Link>
                                                                            </td>
                                                                            <td>
                                                                                <span className="product-price">₹{product.price}</span>
                                                                            </td>
                                                                            <td>
                                                                                <div className="quantity-input">
                                                                                    <input type="number"
                                                                                        className="form-control"
                                                                                        value={product.quantity}
                                                                                        onChange={(e) => updateQuantity(product.id, e.target.value)}
                                                                                    />
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <span className="product-price">₹{(product.price * product.quantity).toFixed(2)}</span>
                                                                            </td>
                                                                            <td>
                                                                                <button
                                                                                    className="btn remove-cart-btn"
                                                                                    onClick={() => {
                                                                                        removeFromCart(product.id);
                                                                                        toast.error(`${product.name} Removed From Cart!`);
                                                                                    }}
                                                                                >
                                                                                    <i className="bi bi-x-lg"></i>
                                                                                </button>
                                                                            </td>
                                                                        </tr>
                                                                    ))}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        )}
                        </div>
                        <div className="col-lg-5">
                            <div className="cart-total-wrap mt-5 p-4 rounded">
                                <h4 className="fw-bold mb-4">Cart Totals</h4>
                                <table className="table borderless">
                                    <tbody>
                                        <tr>
                                            <td>Cart SuTotal</td>
                                            <td className="text-end text-success cart-subtotal product-price">
                                               ₹{total.toFixed(2)}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Shipping</td>
                                            <td className="text-end">Free Shipping</td>

                                        </tr>
                                        <tr>
                                            <td className="fw-semibold">Total</td>
                                            <td className="text-end text-success cart-total product-price"> ₹{total.toFixed(2)}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <Link to='/checkout' className='btn checkout-btn d-inline-block mt-3'>
                                <i className="ri-bank-card-line me-2"></i> Proceed To Checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
    </>
  )
}

export default Carts;
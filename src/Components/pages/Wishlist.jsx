import React, { useContext } from 'react'
import { WishlistContext } from './WishlistContextProvider'
import { CartContext } from './CartContextProvider'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

function Wishlist() {
     const { WishlistItems , removeFromWishlist } = useContext(WishlistContext) // Fixed typo: removeroomwhishlist to removeFromWishlist
     const { addToCart } = useContext(CartContext)
  return (
    <>
        <div className="page-section text-center py-5 position-relative overflow-hidden">
            <p className="breadcrumb-text text-muted mb-2">
                <Link to='/'>Home</Link> / <span className="text-dark">Wishlist</span>
            </p>
            <h2 className="page-heading fw-bold text-uppercase">Wishlist</h2>
        </div>
        <div className="container">
            {
                WishlistItems.length === 0 ?( // Fixed typo: WishlistItems.langth to WishlistItems.length
                    <div className="alert alert-danger text-center mt-5">No Items In Wishlist</div>
                ) : (
                    <div className="table-responsive mt-2">
                        <h2 className="fw-bold">My Wishlist</h2>
                        <table className="table align-middle text-center">
                            <thead className="bg-light">
                                <tr>
                                    <th className="product-name wl-text fw-normal">Product</th>
                                    <th className="product-name wl-text fw-normal">Price</th>
                                    <th className="product-name wl-text fw-normal">Add to Cart</th>
                                    <th className="product-name wl-text fw-normal">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {WishlistItems.map((product) => (
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
                                           <button
                                           className='btn btn-outline-success wl-btn'
                                           onClick={() =>{
                                               addToCart(product);
                                               toast.success(`${product.name} Added To Cart!`)
                                                }}
                                           >
                                            <span>
                                                <i className="ri-shopping-cart-line me-2"><span className="hide-element">Add To Cart </span></i>
                                            </span>

                                           </button>
                                        </td>
                                        <td >
                                            <button
                                            className='btn btn-outline-danger wl-btn'
                                            onClick={() =>{
                                                removeFromWishlist(product.id); // Fixed typo: removeroomwhishlist to removeFromWishlist
                                                toast.info(`${product.name} Removed From Wishlist`) // Fixed typo: Remove Fro Wishlist to Remove From Wishlist
                                            }}
                                            >
                                                <i className="ri-delete-bin-line"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )
            }
        </div>
    </>
  )
}

export default Wishlist
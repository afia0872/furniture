import React, { createContext, useEffect, useState } from 'react'

export const CartContext =createContext();
export const CartContextProvider =({children}) => {
    const [cartItems , setcartItems] = useState(() => {
        const savedCart =localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) :[];
    });

    const total = cartItems.reduce((acc , item) => acc + item.price * item.quantity , 0);

    useEffect(() => {
        localStorage.setItem("cart" ,JSON.stringify(cartItems));
    } ,[cartItems]);

    const addToCart =(product) => {
        const existingItem =cartItems.find(item => item.id === product.id);
        if(existingItem){
            setcartItems(cartItems.map(item =>
                item.id === product.id ? {...item,quantity :item.quantity +1} :item
            ));
        }
        else{
            setcartItems([...cartItems,{ ... product,quantity: 1}]);
        }
    };
     const removeFromCart =(productId) =>{ // Removed unused 'quanity' parameter
         setcartItems(cartItems.filter(item => item.id !== productId));
        };
            
        const updateQuantity =(productId, quantity) => {
        const qty = parseInt(quantity);
        if(qty < 1) return;
        setcartItems(cartItems.map(item =>
            item.id === productId ?  {...item,quantity :qty} : item
        ));

            }
             return(
                <CartContext.Provider value={{cartItems, addToCart, removeFromCart, updateQuantity,total}}>
                    {children}
                </CartContext.Provider>
                )
}

export default CartContextProvider
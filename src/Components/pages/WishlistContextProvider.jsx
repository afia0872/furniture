import React, { createContext, useEffect, useState } from 'react'

export const WishlistContext= createContext();

const WishlistContextProvider = ({children}) => { // Fixed inconsistent casing: Children to children
    const [WishlistItems, setWishlistItems] =useState(()=> {
        const stored = localStorage.getItem('wishlist');
        return stored ? JSON.parse(stored) :[];
    })

    useEffect(()=> {
        localStorage.setItem('wishlist',JSON.stringify(WishlistItems));
}, [WishlistItems]);

const addToWishlist =(product) => {
    const exists = WishlistItems.find(item => item.id === product.id);
    if(!exists){
        setWishlistItems([...WishlistItems, product]);
    }
};

const removeFromWishlist =(id) => {
    setWishlistItems(WishlistItems.filter(item=> item.id  !== id));
};

return(
    <WishlistContext.Provider value={{WishlistItems, addToWishlist, removeFromWishlist}}>
        {children} {/* Fixed inconsistent casing: Children to children */}
    </WishlistContext.Provider>
)
}   

export default WishlistContextProvider
// main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import CartContextProvider from './Components/pages/CartContextProvider.jsx';
import WishlistContextProvider from './Components/pages/WishlistContextProvider.jsx';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* BrowserRouter wraps your App */}
      <CartContextProvider>
        <WishlistContextProvider>
          <App />
        </WishlistContextProvider>
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
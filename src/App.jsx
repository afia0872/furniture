// App.jsx
import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import Index from './Components/pages/Index';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Wishlist from './Components/pages/Wishlist';
import Carts from './Components/pages/Carts';
import CheckOut from './Components/pages/CheckOut';
import Footer from './Components/Footer/Footer';
import About from './Components/pages/About';
import Shop from './Components/pages/Shop';
import Blog from './Components/pages/Blog';
import Contact from './Components/pages/Contact';

function App() {
  return (
    <>
    
      <Nav />
      <ToastContainer position='top-right' autoClose={2000} />
      <Routes> {/* Routes acts as a container for all your individual routes */}
        <Route path='/' element={<Index />} /> {/* Home page */}
        <Route path='/about' element={<About />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/carts' element={<Carts />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/checkout' element={<CheckOut />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
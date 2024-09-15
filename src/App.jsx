import React from 'react';
import { useState } from 'react'
import './App.css';
import './index.css';
import Navbar from './components/Navbar'
import Product from './components/Product';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Search from './components/Search';
import { items } from './components/Data';
const App=() =>
  { 
    const[data,setData]=useState([...items]); //initially data is equals to the items
    const[cart,setCart]=useState([]);
    console.log(cart);

  return (
    <>
      <Router>
      <Navbar  cart={cart} setData={setData}/>
      <Routes>
      <Route path="/" element={<Product  cart={cart} setCart={setCart} items={data}/>}/>
      <Route path="/product/:id" element={<ProductDetails cart={cart} setCart={setCart}/>}/>
      <Route path="/search/:term" element={<Search cart={cart} setCart={setCart}/>}/>
      <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}/>
      </Routes>
      </Router>
      
    </>
  )

}

export default App;

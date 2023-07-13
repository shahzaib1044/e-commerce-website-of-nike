import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Contactus from "./components/Contactus";
import Aboutus from "./components/Aboutus";
import Products from "./components/Products";
import Payment from "./components/Payment";


const App = () => {
  return (
    <div>
      <Header />
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signin" element={<Signin />} />
        <Route exact path="/Signup" element={<Signup />} />
        <Route exact path="/Contactus" element={<Contactus />} />
        <Route exact path="/Aboutus" element={<Aboutus />} />
        <Route exact path="/Products" element={<Products />} />
        <Route exact path="/Payment" element={<Payment />} />
        
        
      </Routes>
    </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;

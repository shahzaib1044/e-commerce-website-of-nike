import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Contactus from './components/Contactus';
import Aboutus from './components/Aboutus';
import Products from './components/Products';
import Payment from './components/Payment';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState('');

  return (
    <Router>
      <div>
        <Header loggedInUser={loggedInUser} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signin" element={<Signin setLoggedInUser={setLoggedInUser} />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Payment" element={<Payment />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;

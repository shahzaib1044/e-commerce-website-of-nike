import React from 'react';
import { Icon } from '@mui/material';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const paragraphStyle = {
    margin: '0',
  };

  return (
    <footer style={footerStyle}>
      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/Products">Products</a>
        <a href="/Aboutus">About</a>
        <a href="/contactus">Contact</a>
      </div>
      <div className="social-icons">
        <Icon className="icon">
          <FaFacebook />
        </Icon>
        <Icon className="icon">
          <FaInstagram />
        </Icon>
        <Icon className="icon">
          <FaYoutube />
        </Icon>
      </div>
      <p style={paragraphStyle}>&copy; {new Date().getFullYear()} Nike. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

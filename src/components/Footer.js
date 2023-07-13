import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
  };

  const paragraphStyle = {
    margin: '0',
  };

  return (
    <footer style={footerStyle}>
      <p style={paragraphStyle}>&copy; {new Date().getFullYear()} Nike. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

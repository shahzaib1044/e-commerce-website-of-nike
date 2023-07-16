import React,{ useContext }  from 'react';
import { Icon } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AuthContext } from './AuthContext';

const Header = () => {
  const { loggedInUser } = useContext(AuthContext);
  const headerStyle = {
    backgroundColor: '#111',
    color: '#fff',
    padding: '1vh',
  };

  const searchContainer = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(59,70,88,255)',
    padding: '1vh',
    borderRadius: '0.5vh',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '2.5vh', // Converted from '20px'
    marginLeft: '3.33vh', // Converted from '50px'
    marginRight: '1.33vh', // Converted from '20px'
  };

  const linkStyle1 = {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1.5vh', // Converted from '20px'
    marginLeft: '3.33vh', // Converted from '50px'
    position: 'relative',
    top: '6.67vh', // Converted from '44px'
  };

  const inputContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const ulStyle = {
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '153.33vh', // Converted from '1400px'
    marginBottom: '3vh', // Converted from '30px'
    position: 'relative',
    top: '-4.5vh', // Converted from '-45px'
  };

  const ulStyle3 = {
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '14.67vh', // Converted from '220px'
    position: 'relative',
    top: '-0.67vh', // Converted from '-20px'
  };

  const searchIconStyle = {
    marginRight: '1.33vh', // Converted from '10px'
  };

  const iconButtonStyle = {
    marginLeft: '1.33vh', // Converted from '10px'
  };

  const logo = require("./downloa.png");

  const userCircleStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '2.67vh', // Converted from '40px'
    height: '2.67vh', // Converted from '40px'
    borderRadius: '3.33vh', // Converted from '50%'
    backgroundColor: '#fff',
    color: '#000',
    fontWeight: 'bold',
    fontSize: '1.2vh', // Converted from '18px'
  }

  return (
    <header style={headerStyle}>
      <nav>
        <a href="/" style={linkStyle1}>
          <img src={logo} alt="Nike logo" height="70" width="150" />
        </a>
        <ul>
          <div style={ulStyle3}>
            <li>
              <a href="/" style={linkStyle}>
                Home
              </a>
            </li>
            <li>
              <a href="/Products" style={linkStyle}>
                Products
              </a>
            </li>
            <li>
              <a href="/Aboutus" style={linkStyle}>
                About
              </a>
            </li>
            <li>
              <a href="/contactus" style={linkStyle}>
                Contact
              </a>
            </li>
          </div>
          <div style={ulStyle}>
            <div style={searchContainer}>
              <SearchIcon />
              <input type="text" placeholder="Search here..." />
            </div>
            <li>
              <Icon style={linkStyle}>
                <FavoriteIcon />
              </Icon>
            </li>
            <li>
              <Icon style={linkStyle}>
                <ShoppingCartIcon />
              </Icon>
            </li>
            {loggedInUser ? (
              <li>
                <div style={userCircleStyle}>{loggedInUser.charAt(0).toUpperCase()}</div>
              </li>
            ) : (
              <li>
                <a href="/Signin" style={linkStyle}>
                  Signin
                </a>
              </li>
            )}
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import React from 'react';
import './Header.css';
import logo from './assets/Screenshot.png'; 

const Header = () => {
  return (
    <header>
      <img 
        src={logo} 
        alt="UniRide Logo" 
        style={{ width: '20%', height: '40%' }} 
      />
    </header>
  );
};

export default Header;

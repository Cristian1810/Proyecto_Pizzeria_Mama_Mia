import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../assets/Store/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { getTotalPrice } = useCart();

  return (
    <div className="navbar">
      <h3 className='text-white' href="#home">Pizzería Mammá Mía!</h3>
      <Link to="/">🍕Home</Link>
      <Link to="/LoginPage">🔒Login</Link>
      <Link to="/RegisterPage">🔐Register</Link>
      <Link to="/Profile">👤Profile</Link>
      <Link to="/Cart" className='right'>🛒Total: ${getTotalPrice()}</Link>
    </div>
  );
};

export default Navbar;

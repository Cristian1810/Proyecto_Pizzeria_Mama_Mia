import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../Store/CartContext';
import { useUser } from '../../Store/UserContext';
import './Navbar.css';

const Navbar = () => {
  const { getTotalPrice } = useCart();
  const { token, logout } = useUser();

  return (
    <div className="navbar">
      <h3 className='text-white' href="#home">Pizzería Mammá Mía!</h3>
      <Link to="/">🍕Home</Link>
      {token ? (
        <>
          <Link to="/Profile">👤Profile</Link>
          <button className='button-logout' onClick={logout}>🔓Logout</button>
        </>
      ) : (
        <>
          <Link to="/LoginPage">🔒Login</Link>
          <Link to="/RegisterPage">🔐Register</Link>
        </>
      )}
      <Link to="/Cart" className='right'>🛒Total: ${getTotalPrice()}</Link>
    </div>
  );
};

export default Navbar;
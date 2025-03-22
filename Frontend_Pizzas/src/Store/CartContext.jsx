import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const handleRemove = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const handleIncrease = (id) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const handleDecrease = (id) => {
    setCart(cart.map(item => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlePayment = async (token) => {
    try {
      const response = await axios.post('http://localhost:5000/api/checkouts', { cart }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert('Se ha producido el pago exitosamente, Gracias por su compra!', response.data);
      setCart([]);
    } catch (error) {
      alert('Error durante el pago:', error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, setCart, handleRemove, handleIncrease, handleDecrease, getTotalPrice, handlePayment }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
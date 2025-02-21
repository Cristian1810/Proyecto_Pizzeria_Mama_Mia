import React, { useState } from 'react';
import { pizzaCart } from '../../pizzas';
import Cart2 from './Cart2';
import "./Cart.css";

const Cart = () => {
const [cart, setCart] = useState(pizzaCart);

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

const handlePayment = () => {
    alert(`Total a pagar:$ ${getTotalPrice()}`);
};

return (
    <div className="container mt-4">
      <h2 className="text-star">Detalles del pedido:</h2>
      <div className="row justify-content-center">
        {cart.map((item) => (
          <Cart2 
            id={item.id}
            img={item.img}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            handleRemove={handleRemove}
            handleIncrease={handleIncrease}
            handleDecrease={handleDecrease}
          />
        ))}
      </div>
      <div className="text-star">
        <h3>Total: ${getTotalPrice()}</h3>
        <button className="btn btn-success" onClick={handlePayment}>Pagar</button>
      </div>
    </div>
  );
};

export default Cart;
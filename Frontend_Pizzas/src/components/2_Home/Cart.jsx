import React, { useState } from 'react';
import { useCart } from '../../Store/CartContext';
import { useUser } from '../../Store/UserContext';
import Cart2 from './Cart2';
import "./Cart.css";

const Cart = () => {
  const { cart, handleRemove, handleIncrease, handleDecrease, getTotalPrice, handlePayment } = useCart();
  const { token } = useUser();
  const [mensajeExitoso, setMensajeExitoso] = useState('');

  const handlePaymentClick = async () => {
    if (token) {
      try {
        await handlePayment(token);
        setMensajeExitoso('Compra realizada con éxito. ¡Gracias por tu compra!');
      } catch (error) {
        console.error('Error durante el pago:', error);
      }
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="text-star">Detalles del pedido:</h3>
      <div className="justify-content-center">
        {cart.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          cart.map((item) => (
            <Cart2 
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              handleRemove={handleRemove}
              handleDecrease={handleDecrease}
              handleIncrease={handleIncrease}
            />
          ))
        )}
      </div>
      {cart.length > 0 && (
        <div className="text-star">
          <h3>Total a pagar: ${getTotalPrice()}</h3>
          <button className="btn btn-success" onClick={handlePaymentClick} disabled={!token}>
            Pagar
          </button>
          {!token && <p className="text-danger">Debes iniciar sesión para poder pagar.</p>}
          {mensajeExitoso && (
            <div className="alert alert-success mt-3" role="alert">
              {mensajeExitoso}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
import React from 'react';
import "./Cart.css";

const Cart2 = ({ id, img, name, price, quantity, handleRemove, handleIncrease, handleDecrease }) => {
  return (
    <div className="col-md-3 mb-5">
      <div className="card">
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title text-white">{name}</h5>
          <hr className='text-white' />
          <p className="card-text text-center text-white"><strong>Precio: $ {price}</strong></p>
          <div className="d-flex justify-content-between">
            <button className="btn btn-danger" onClick={() => handleDecrease(id)}>-</button>
            <p className="card-text mb-2 text-white">Cantidad: {quantity}</p>
            <button className="btn btn-success " onClick={() => handleIncrease(id)}>+</button>
          </div>
          <button className="btn btn-danger mt-3 btn-center" onClick={() => handleRemove(id)}>Eliminar</button>
        </div>
      </div>
    </div>
  );
};

export default Cart2;
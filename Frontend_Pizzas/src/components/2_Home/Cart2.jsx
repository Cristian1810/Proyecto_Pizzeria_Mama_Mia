import React from 'react';

const Cart2 = ({ id, img, name, price, quantity, handleRemove, handleIncrease, handleDecrease }) => {
  return (
    <div className="card mb-3" style={{ maxWidth: "500px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={img} className="img-fluid rounded-start" alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div className="col-md-8">
          <div className="card-body" >
            <h5 className="card-title text-white">{name}</h5>
            <p className="card-text text-white mt-2 ">Precio: ${price}</p>
            <p className="card-text text-white">Cantidad: {quantity}</p>
            <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}>
              <button className="btn btn-danger" onClick={() => handleRemove(id)}>🗑</button>
              <button className="btn btn-success" onClick={() => handleDecrease(id)}>-</button>
              <button className="btn btn-success" onClick={() => handleIncrease(id)}>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart2;
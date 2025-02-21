import React, { useState, useEffect } from 'react';
import Cards2 from "./Cards2";

const Pizza = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas/p001');
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchPizzas();
  }, []);

  return (
    <div className="container mt-4">
        <div className="row justify-content-center">
            <div className="col-md-7 mb-7" key={pizzas.id}>
                <Cards2
                  img={pizzas.img}
                  name={pizzas.name}
                  desc={pizzas.desc}
                  ingredients={pizzas.ingredients}
                  price={pizzas.price}
                />
              </div>
         </div>   
    </div>
  );
};

export default Pizza;
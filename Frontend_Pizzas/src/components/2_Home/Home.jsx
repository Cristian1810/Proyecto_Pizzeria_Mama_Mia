import React, { useState, useEffect } from 'react';
import Cards from "./Cards";
import Header from "./Header";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas');
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchPizzas();
  }, []);

  return (
    <>
      <Header />
      
      <div className="container mt-4">
        <div className="row justify-content-center">
            {pizzas.map((pizza) => (
              <div className="col-md-4 mb-4" key={pizza.id}>
                <Cards
                  img={pizza.img}
                  name={pizza.name}
                  // desc={pizza.desc}
                  ingredients={pizza.ingredients}
                  price={pizza.price}
                  button1Label="Ver mas 👀"
                  button1Action={() => console.log('Ver mas clicked')}
                  button2Label="Añadir 🛒"
                  button2Action={() => console.log('Añadir clicked')}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
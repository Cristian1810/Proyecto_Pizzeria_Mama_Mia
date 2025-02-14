import React from 'react';
import Cards from "./Cards";
import Header from "./Header";
import { pizzas } from '../../pizzas';

const Home = () => {
  return (
    <>
      <Header />
      
      <div className="container mt-4">
        <div className="row justify-content-center">
            {pizzas.map((pizzas) => (
              <div className="col-md-4 mb-4">
                <Cards
                  key={pizzas.id}
                  img={pizzas.img}
                  name={pizzas.name}
                  ingredients="Ingredientes"
                  description={pizzas.ingredients}
                  price={pizzas.price}
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
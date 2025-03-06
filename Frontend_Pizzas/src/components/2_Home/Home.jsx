import React, { useState, useEffect } from 'react';
import { useCart } from '../../Store/CartContext';
import Cards from "./Cards";
import Header from "./Header";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const { cart, setCart } = useCart();

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

  const handleAddToCart = (pizza) => {
    const existingItem = cart.find(item => item.id === pizza.id);
    if (existingItem) {
      setCart(cart.map(item => item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...pizza, quantity: 1 }]);
    }
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
  };

  return (
    <>
      <Header />
      
      <div className="container mt-4">
        {showAlert && (
          <div className=" fixed-top alert alert-success alert-dismissible fade show" role="alert">
            Pizza añadida al carrito
          </div>
        )}

        <div className="row justify-content-center">
          {pizzas.map((pizza) => (
            <div className="col-md-4 mb-4" key={pizza.id}>
              <Cards
                img={pizza.img}
                name={pizza.name}
                ingredients={pizza.ingredients}
                price={pizza.price}
                button1Label="Ver mas 👀"
                button1Action={() => console.log('Ver mas clicked')}
                button2Label="Añadir 🛒"
                button2Action={() => handleAddToCart(pizza)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
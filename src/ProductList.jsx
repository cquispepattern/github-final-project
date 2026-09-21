import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        { name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/13/54/snake-plant-5940209_1280.jpg", cost: "$15", description: "Produces oxygen at night." },
        { name: "Spider Plant", image: "https://cdn.pixabay.com/photo/2018/07/11/08/13/chlorophytum-3530413_1280.jpg", cost: "$12", description: "Filters formaldehyde." }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div>
      <nav className="navbar">
        <h2 onClick={() => setShowCart(false)}>Paradise Nursery</h2>
        <button onClick={() => setShowCart(!showCart)}>🛒 Cart ({totalQuantity})</button>
      </nav>

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((category, index) => (
            <div key={index}>
              <h2>{category.category}</h2>
              <div className="plant-list">
                {category.plants.map((plant, plantIndex) => (
                  <div className="plant-card" key={plantIndex}>
                    <img src={plant.image} alt={plant.name} width="150" />
                    <h3>{plant.name}</h3>
                    <p>{plant.cost}</p>
                    <button onClick={() => handleAddToCart(plant)}>Add to Cart</button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      )}
    </div>
  );
}

export default ProductList;

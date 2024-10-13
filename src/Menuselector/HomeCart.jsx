import React, { useState, useEffect } from 'react';
import CartImt from './CartImt'; 
import './App.css';

const Home = ({ cartItems, setCartItems }) => {
  let [recipes, setRecipes] = useState([]); 

  useEffect(() => {
    
    fetch('http://dummyjson.com/recipes')
      .then((res) => res.json())
      .then((data) => {
        console.log(data); 
        setRecipes(data.recipes || []); 
      })
    
  }, []);

  
  let addToCart = (recipe) => {
    setCartItems([...cartItems, recipe]); 
  };

  return (
    <div>
      <h2>Available Recipes</h2>
      <CartImt recipes={recipes} addToCart={addToCart} />
    </div>
  );
};

export default Home;
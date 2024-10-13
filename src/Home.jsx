// import React from 'react'
// // import M from './M'
// import CartInfo from './CartInfo'

// const Home = () => {
//   return (
//     <div>Home
// <CartInfo />
//       {/* <M/> */}
//     </div>
//   )
// }

// export default Home



import React, { useState, useEffect } from 'react';
import CartInfo from './CartInfo'; 
import './App.css';

const Home = ({ cartItems, setCartItems }) => {
  const [recipes, setRecipes] = useState([]); 

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
      <CartInfo recipes={recipes} addToCart={addToCart} />
    </div>
  );
};

export default Home;

import React from 'react';
import './App.css';

const CartInfo = ({ recipes = [], addToCart }) => {
  console.log('Recipes:', recipes); 

  return (
    <div>
      {recipes.length > 0 ? (
        recipes.map((recipe, index) => (
          <div key={index} className='recipe-item'>
            <img src={recipe.image} alt={recipe.name} />
            <p>{recipe.name}</p>
            <button onClick={() => addToCart(recipe)}>Add to Cart</button> 
          </div>
        ))
      ) : (
        <p>No recipes available</p>
      )}
    </div>
  );
};

export default CartInfo;

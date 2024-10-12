import React from 'react';

const Cart = ({ cartItems }) => {
  return (
    <div>
      <h2>Your Cart</h2>
    
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <h3>{item.title} {item.name}</h3>
              <img src={item.image} alt={item.name} width="100" />
            </li>
          ))}
        </ul>
      
    </div>
  );
};

export default Cart;

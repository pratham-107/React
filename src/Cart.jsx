import React from 'react';



const Cart = ({ cartItems = [] }) => {
  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={index} className='cart-item'>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))
      ) : (
        <p>No items in the cart</p>
      )}
    </div>
  );
};

export default Cart;

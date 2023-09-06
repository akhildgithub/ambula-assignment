// src/CartSummary.js
import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';

function CartSummary() {
  const { state } = useCart();
  const { cart } = state;

  const totalItems = cart.length;
  const subtotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className='cartSummary'>
      <h2>Cart Summary</h2>
      <p>Total Items: {totalItems}</p>
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <ul>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default CartSummary;

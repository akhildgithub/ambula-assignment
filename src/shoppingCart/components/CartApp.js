// src/CartApp.js
import React from 'react';
import { CartProvider } from '../context/CartContext';
import ProductList from './ProductList';
import CartSummary from './CartSummary';
import '../../shoppingCart.css'

function CartApp() {
  return (
    <CartProvider>
      <div className='cartWrapper'>
        <ProductList />
        <CartSummary />
      </div>
    </CartProvider>
  );
}

export default CartApp;

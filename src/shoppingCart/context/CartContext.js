// src/CartContext.js
import React, { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

const initialState = {
  cart: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // Check if the product is already in the cart
      const existingProduct = state.cart.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct) {
        // If the product exists, update its quantity
        existingProduct.count = existingProduct.count + 1;

        return { ...state };
      } else {
        // If the product is not in the cart, add it
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, count: 1 }],
        };
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case "INCREMENT":
      const incrementedCart = state.cart.map((product) =>
        product.id === action.payload.id
          ? { ...product, count: product.count + 1 }
          : product
      );
      return { ...state, cart: incrementedCart };

    case "DECREMENT":
      const decrementedCart = state.cart.map((product) =>
        product.id === action.payload.id
          ? { ...product, count: product.count > 0 ? product.count - 1 : 0 }
          : product
      );
      return { ...state, cart: decrementedCart };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

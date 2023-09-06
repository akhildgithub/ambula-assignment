// src/CartItem.js
import React from "react";
import { useCart } from "../context/CartContext";

function CartItem({ item }) {
  const { dispatch } = useCart();

  const removeFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  const decreaseCount=()=>{
    dispatch({ type: "DECREMENT", payload: item });
  }

  const increaseCount=()=>{
    dispatch({ type: "INCREMENT", payload: item });
  }

  return (
    <li className="cartLi">
      <p>
        {item.name} - ${item.price}
      </p>
      <div className="noOfProducts">
      <button className="removeFromCart"  onClick={decreaseCount}>-</button>
      <p>{item.count}</p>
      <button className="removeFromCart"  onClick={increaseCount}>+</button>
      </div>
      <button className="removeFromCart" onClick={removeFromCart}>
        Remove from Cart
      </button>
    </li>
  );
}

export default CartItem;

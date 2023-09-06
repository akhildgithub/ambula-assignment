// src/ProductList.js
import React from "react";
import { useCart } from "../context/CartContext";
import image1 from "../assets/mac-air-m1.jpg";
import image2 from "../assets/mac-air-m2.jpeg";
import image3 from "../assets/iphone-12-pro-max.jpeg";
import image4 from "../assets/iphone-13-mini.jpeg";
import image5 from "../assets/redmi-10t.jpeg";
import image6 from "../assets/oppo-a16.jpeg";
const images = [image1, image2, image3, image4, image5, image6];

const products = [
  { id: 1, name: "macBook air m1", price: 10, count:0 },
  { id: 2, name: "macBook air m2", price: 15, count:0 },
  { id: 3, name: "iPhone 12 pro max", price: 20, count:0 },
  { id: 4, name: "iPhone 13 mini", price: 30, count:0 },
  { id: 5, name: "Redmi 10T", price: 45, count:0 },
  { id: 6, name: "Oppo A16", price: 60, count:0 },
];

function ProductList() {
  const { dispatch } = useCart();

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div>
      <h2 style={{marginLeft:'30px'}}>Products</h2>
      <ul className="products">
        {products.map((product) => (
          <li className="productsLi" key={product.id}>
            <h3>{product.name}</h3>
            <img src={images[product.id-1]} alt={product.name} />
            <h4 className="text-center">${product.price}</h4>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;

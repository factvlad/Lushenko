import "./App.css";
import goodsArr from "./goods.json";
import React, { useState } from "react";
import Goods from "./Goods";
import CartComponent from "./CartComponent";

function App() {
  const [cart, setCart] = useState({});
  const [count, setCount] = useState(0);

  function addToCart(event) {
    event.preventDefault();
    if (!event.target.classList.contains("add-to-cart")) return false;
    let cartTemp = cart;
    cartTemp[event.target.dataset.key]
      ? cartTemp[event.target.dataset.key]++
      : (cartTemp[event.target.dataset.key] = 1);
    setCart(cartTemp);
    let count1 = count;
    count1++;
    setCount(count1);
  }

  return (
    <>
      <div className="container">
        <h1>Cart</h1>
        <div className="goods-field" onClick={addToCart}>
          {goodsArr.map((item) => (
            <Goods
              title={item.title}
              cost={item.cost}
              image={item.image}
              articul={item.articul}
              key={item.articul}
            />
          ))}
        </div>
        <CartComponent data={cart} />
      </div>
    </>
  );
}

export default App;

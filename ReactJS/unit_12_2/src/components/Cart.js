import React from "react";

function Cart(props) {
  let cart = props.cart;
  let goodsObj = props.data;

  let sum = 0;
  Object.keys(cart).forEach(
    (item) => (sum += goodsObj[item]["cost"] * cart[item])
  );

  return (
    <>
      {Object.keys(cart).map((item) => (
        <div key={item + goodsObj[item]["title"]}>
          <img src={goodsObj[item]["image"]} alt="img" width="30px" />
          <div className="name">{goodsObj[item]["title"]}</div>
          <div>{goodsObj[item]["cost"]}</div>
          <div>{cart[item]}</div>
          <div>{goodsObj[item]["cost"] * cart[item]}$</div>
          <button className="minus" data-key={goodsObj[item]["articul"]}>
            Minus
          </button>
          <button className="delete" data-key={goodsObj[item]["articul"]}>
            Delete
          </button>
        </div>
      ))}
      <div>Total: ${sum}</div>
    </>
  );
}

export default Cart;

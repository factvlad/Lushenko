import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectGoods } from "../store/goodsSlice";
import { selectCart } from "../store/cartSlice";

function Cart(props) {
  let cart = props.cart;
  let goodsObj = props.data;

  let sum = 0;
  Object.keys(cart).forEach(
    (item) => (sum += goodsObj[item]["cost"] * cart[item])
  );
  return (
    <>
      <tr>
        <th>Item</th>
        <th>Image</th>
        <th>Price</th>
        <th>Count</th>
        <th>Cost</th>
      </tr>{" "}
      <tr>
        <div className="goods-field">
          {Object.keys(cart).map((item) => (
            <div key={item + goodsObj[item]["title"]}>
              <br />
              <img src={goodsObj[item]["image"]} className="img" alt="img" width="30px" />
              <th>
                <div className="name">{goodsObj[item]["title"]}</div>
              </th>
              <th>
                <div>{goodsObj[item]["cost"]}</div>
              </th>
              <th>
                <div>{cart[item]}</div>
              </th>
              <th>
                <div>{goodsObj[item]["cost"] * cart[item]}$</div>
              </th>
              <button className="minus" data-key={goodsObj[item]["articul"]}>
                Minus
              </button>
              <button className="delete" data-key={goodsObj[item]["articul"]}>
                Delete
              </button>
            </div>
          ))}
          <tr className="container2">
            <div className="total">Total: ${sum}</div>
          </tr>
        </div>
      </tr>
    </>
  );
}
export default Cart;

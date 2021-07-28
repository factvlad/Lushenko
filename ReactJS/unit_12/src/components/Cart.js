import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectGoods } from "../store/goodsSlice";
import "../App.css";
import { selectCart } from "../store/cartSlice";
import { minus } from "../store/cartSlice";

function Cart(props) {
  const goods = useSelector(selectGoods);
  const cart = useSelector(selectCart);
  const articul = props["articul"];

  const dispatch = useDispatch();

  const goodsObj = goods.reduce((accum, item) => {
    accum[item["articul"]] = item;
    return accum;
  }, {});

  const minusFunc = (event) => {
    event.preventDefault();
    let t = event.target;
    if (!t.classList.contains("minus-cart")) return true;
    dispatch(minus(event.target.dataset["key"]));
  };

  const deleteFunc = () => {};

  return (
    <tr>
      <td>{goodsObj[articul]["title"]}</td>
      <td>
        <img src={goodsObj[articul]["image"]} />
      </td>
      <td>{goodsObj[articul]["cost"]}</td>
      <td>{cart[articul]}</td>
      <td>{cart[articul] * goodsObj[articul]["cost"]}</td>
      <td>
        <button className="minus-cart" data-key={articul} onClick={minusFunc}>
          -
        </button>
      </td>
    </tr>
  );
}

export default Cart;

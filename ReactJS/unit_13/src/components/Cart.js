import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectGoods } from "../store/goodsSlice";
import "../App.css";
import { selectCart } from "../store/cartSlice";

function Cart(props) {
  const goods = useSelector(selectGoods);
  const cart = useSelector(selectCart);
  const articul = props["articul"];

  const dispatch = useDispatch();

  const goodsObj = goods.reduce((accum, item) => {
    accum[item["articul"]] = item;
    return accum;
  }, {});


  return (
    <>
      <table>
        <h1> Корзина </h1>
        <tbody>
          <td>Title</td>
          <td>Cost</td>
          <td>Count</td>
          <td>Total cost</td>

          <td>{goodsObj[articul]["title"]}</td>
          <td>{goodsObj[articul]["cost"]}</td>
          <td>{cart[articul]["count"]}</td>
        </tbody>
      </table>
    </>
  );
}
export default Cart;

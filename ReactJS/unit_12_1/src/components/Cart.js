import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectGoods } from "../store/goodsSlice";
import { increment, selectCart, minus, del } from "../store/cartSlice";

function Cart(props) {
  const goods = useSelector(selectGoods);
  const cart = useSelector(selectCart);
  const articul = props["articul"];

  const dispatch = useDispatch();

  const goodsObj = goods.reduce((accum, item) => {
    accum[item["articul"]] = item;
    return accum;
  }, {});

  let clickHandler = (event) => {
    event.preventDefault();
    let t = event.target;
  //  if (!t.classList.contains("add-to-cart")) return true;
  //   dispatch(increment(t.getAttribute("data-key")));
    if (t.classList.contains("minus-cart")) {
      dispatch(minus(event.target.dataset["key"]));
    }
    if (t.classList.contains("delete-cart")) {
      dispatch(del(event.target.dataset["key"]));
    }
  };

  // const minusCount = (event) => {
  //   event.preventDefault();
  //   let t = event.target;
  //   if (!t.classList.contains("minus-cart")) return true;
  //   dispatch(minus(event.target.dataset["key"]));
  // };

  // const deleteCount = (event) => {
  //   event.preventDefault();
  //   let t = event.target;
  //   if (!t.classList.contains("delete-cart")) return true;
  //   dispatch(del(event.target.dataset["key"]));
  // };

  return (
    <>
      <tr>
        <td>{goodsObj[articul]["title"]}</td>
        <td>
          <img src={goodsObj[articul]["image"]} />
        </td>
        <td>{goodsObj[articul]["cost"]}</td>
        <td>{cart[articul]}</td>
        <td>{cart[articul] * goodsObj[articul]["cost"]}</td>
        <td>
          <button
            className="minus-cart"
            data-key={articul}
            onClick={clickHandler}
          >
            Minus
          </button>
        </td>
        <td>
          <button
            className="delete-cart"
            data-key={articul}
            onClick={clickHandler}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}
export default Cart;

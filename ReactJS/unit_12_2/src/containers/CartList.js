import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectGoods } from "../store/goodsSlice";
import { selectCart, minus, deleteGoods } from "../store/cartSlice";
import Cart from "../components/Cart";

function CartList() {
  const goods = useSelector(selectGoods);
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  const goodsObj = goods.reduce((accum, item) => {
    accum[item["articul"]] = item;
    return accum;
  }, {});

  let clickHandler = (event) => {
    event.preventDefault();
    let t = event.target;
    if (t.classList.contains("minus")) {
      dispatch(minus(t.getAttribute("data-key")));
    }  if (t.classList.contains("delete")) {
      dispatch(deleteGoods(t.getAttribute("data-key")));
    } else {
      return true;
    }
  };
  return (
    <>
      <div onClick={clickHandler}>
        <Cart data={goodsObj} cart={cart} goods={goods} />
      </div>
    </>
  );
}

export default CartList;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectGoods } from "../store/goodsSlice";
import { selectCart } from "../store/cartSlice";
import { minus, del } from "../store/cartSlice";
import Cart from '../components/Cart'

function CartList(props) {
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
    if (t.classList.contains("minus-cart")) {
      dispatch(minus(event.target.dataset["key"]));
    }
    if (t.classList.contains("delete-cart")) {
      dispatch(del(event.target.dataset["key"]));
    }
  };

  let total = 0;
  Object.keys(cart).forEach(
    (item) => (total += goodsObj[item]["cost"] * cart[item])
  );
  return (
    <>
      <tbody>
    
        {Object.keys(cart).map((item) => (
          <tr>
            <th>{goodsObj[item]["title"]}</th>
            <th>
              <img
                src={goodsObj[item]["image"]}
                alt="item"
                className="img"
                width="30px"
              />
            </th>
            <th>{goodsObj[item]["cost"]}</th>
            <th>{cart[item]}</th>
            <th>{goodsObj[item]["cost"] * cart[item]}</th>
          </tr>
        ))}
      </tbody>

      <button className="minus-cart" data-key={articul} onClick={clickHandler}>
        Minus
      </button>
      <button className="delete-cart" data-key={articul} onClick={clickHandler}>
        Delete
      </button>
      <tr className="container2">
        <th className="total">Total:{total}</th>
      </tr>
    </>
  );
}

export default CartList;

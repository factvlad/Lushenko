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
    }
    if (t.classList.contains("delete")) {
      dispatch(deleteGoods(t.getAttribute("data-key")));
    } else {
      return true;
    }
  };

  return (
    <>
      {/* <tbody>
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
      </tr> */}
      <div className='goods-field' onClick={clickHandler}>
        <Cart data={goodsObj} cart={cart} goods={goods} />
      </div>
    </>
  );
}

export default CartList;

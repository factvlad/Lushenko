import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectGoods } from "../store/goodsSlice";
import { selectCart } from "../store/cartSlice";

function Cart(props) {
  const goodsObj = goods.reduce((accum, item) => {
    accum[item["articul"]] = item;
    return accum;
  }, {});

  const goods = useSelector(selectGoods);
  const cart = useSelector(selectCart);
  return (
    <>
	   <tr>
          <th>Item</th>
          <th>Image</th>
          <th>Price</th>
          <th>Count</th>
          <th>Cost</th>
        </tr>
      <div className="goods-field">
        {Object.keys(cart).map((item) => (
          <Cart data={goodsObj} cart={cart} goods={goods} />
        ))}
      </div>
    </>
  );
}
export default Cart;

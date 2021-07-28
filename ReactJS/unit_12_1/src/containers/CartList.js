import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCart } from "../store/cartSlice";
import Cart from "../components/Cart";
import { selectGoods } from "../store/goodsSlice";

function CartList(props) {
  const goods = useSelector(selectGoods);
  const cart = useSelector(selectCart);
  const goodsObj = goods.reduce((accum, item) => {
    accum[item["articul"]] = item;
    return accum;
  }, {});


  let totalSum = 0;
  Object.keys(cart).forEach(
    (item) => (totalSum += goodsObj[item]["cost"] * cart[item])
  );

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>Title</td>
            <td>Image</td>
            <td>Cost</td>
            <td>Count</td>
            <td>Sum</td>
          </tr>
          
          {Object.keys(cart).map((item) => (
            <Cart key={item} articul={item} />
          ))}
        </tbody>
      </table>
      Total: ${totalSum}

      <div className="goods-block">
      <img src={props.image} alt="" />
      <p>{props.title}</p>
      <p>{props.cost}</p>
      <button className="add-to-cart" data-key={props.articul}>
        Add to cart
      </button>
    </div>
    </>
  );
}

export default CartList;

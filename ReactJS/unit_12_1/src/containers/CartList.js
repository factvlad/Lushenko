import React from "react";
import Cart from "../components/Cart";
import { useSelector } from "react-redux";
import { selectCart } from "../store/cartSlice";

function CartList() {
  const cart = useSelector(selectCart);
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>Title</td>
            <td>Image</td>
            <td>Cost</td>
            <td>Count</td>
            <td>Total cost</td>
          </tr>
          {Object.keys(cart).map((item) => (
            <Cart key={item} articul={item} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default CartList;

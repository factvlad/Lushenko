import React from "react";
import Cart from "../components/Cart";
import { useSelector } from "react-redux";
import { selectGoods } from "../store/goodsSlice";
import { selectCart } from "../store/cartSlice";

function CartList() {
  const goods = useSelector(selectGoods);
  const cart = useSelector(selectCart);
  // переиндексация массива товаров
  //(где ключами будет артикул а содержимым обькт товаров )
  const goodsObj = goods.reduce((accum, item) => {
    console.log(accum);
    accum[item["articul"]] = item;
    return accum;
  }, {});
  console.log(goodsObj);

  return (
    <>
      {Object.keys(cart).map((item) => (
        <Cart key={item} articul={item} />
      ))}
    </>
  );
}

export default CartList;

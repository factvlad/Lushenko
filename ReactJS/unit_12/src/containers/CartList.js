import React from "react";
import Cart from "../components/Cart";
import { useSelector } from "react-redux";
import { selectCart } from "../store/cartSlice";

function CartList() {
  const cart = useSelector(selectCart);
  return (
    <>
      {/* cюда перенес таблицу. Ведь заголовок один раз должен добавляться */}
      <table>
        <tbody>
          <tr>
            <td className="tdtable">Фрукты</td>
            <td className="tdtable">Изображение</td>
            <td className="tdtable">Цена</td>
            <td className="tdtable">Количество</td>
            <td className="tdtable">Общая стоимость</td>
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

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectGoods } from '../store/goodsSlice';
import { selectCart } from '../store/cartSlice';
import Cart from '../components/Cart';
import { minus } from '../store/cartSlice';



function CartList() {
    const goods = useSelector(selectGoods);
    const cart = useSelector(selectCart);
    // переиндексация массива товара
    const goodsObj = goods.reduce((accum, item) => {
        accum[item['articul']] = item;
        return accum;
    }, {});
    console.log(goodsObj);

    const dispatch = useDispatch();

    let clickHandler = (event) => {
        event.preventDefault();
        let t = event.target;
        if (!t.classList.contains('btn-outline-warning'))  return true;
        dispatch(minus(t.getAttribute('data-key')));
    }

    return (
        <div onClick={clickHandler}>
                <Cart cart={cart} goodsObj={goodsObj}/>
               {/*  {Object.keys(cart).map(item => <li key={item + goodsObj[item]['title']}>{goodsObj[item]['title']} - {cart[item]}</li>)} */}
        </div>
    )
}

export default CartList;
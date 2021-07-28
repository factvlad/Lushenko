import React from 'react';
import './Cart.css';

const Cart = ({cart , goodsObj}) => {

  let totalSum = 0;
  Object.keys(cart).forEach(item => totalSum += goodsObj[item]['cost'] * cart[item]);

  const renderRow = (item, index) => {
    
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{goodsObj[item]['title']}</td>
        <td>${goodsObj[item]['cost']}</td>
        <td>{cart[item]}</td>
        <td>${goodsObj[item]['cost'] * cart[item]}</td>
        <td>
          <img src={goodsObj[item]['image']} alt="изображение" className="cart-image"/> {/* ОШИБКА!!! */}
        </td>
        <td>
          <button
            className="btn btn-outline-danger btn-sm float-right">
            <i className="fa fa-trash-o" />
          </button>
          <button
            className="btn btn-outline-warning btn-sm float-right minus" data-key={item}>
            <i style={{pointerEvents: 'none'}} className="fa fa-minus-circle" />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Sum</th>
            <th>Image</th>
          </tr>
        </thead>

        <tbody>
        {Object.keys(cart).map(renderRow)}
        </tbody>
      </table>
      <div className="total">
        Total: ${totalSum}
      </div>
  </div>
  );
}


export default Cart; 
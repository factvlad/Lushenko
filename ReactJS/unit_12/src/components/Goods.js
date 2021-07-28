import React,{ Component } from 'react';

class Goods extends Component {

  render() {
    return (
        <div className="goods-block">
            <img src={this.props.image} alt=""/>
            <p>{this.props.title}</p>
            <p>{this.props.cost}</p>
            <button className="add-to-cart" data-key={this.props.articul}>Add to cart</button>
        </div>
    );
  }
}


export default Goods; 
import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, prd) => total + prd.price, 0)
    return (
        <div className="orders ">
            <h1 className="title">Order summery</h1>
    <h4 >Items ordered: {cart.length}</h4>
    <h4>Total price: ${total}</h4>
    <button className="btn btn-success">pay via paypal</button>
        </div>
    );
};

export default Cart;
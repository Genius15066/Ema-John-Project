import React from 'react';

import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i]
        total =total+ product.price*product.quantity;
    }

    let shippingCost = 0.00;
    if (total > 350) {
        shippingCost = 0.99;
    }
    else if (total > 150) {
        shippingCost = 5.99;
    }
    else if (total > 0) {
        shippingCost = 7.99;
    }
    let tax = (total * .1).toFixed(2);
    let totalPrice = (shippingCost + Number(tax) + Number(total)).toFixed(2)
    return (
        <div className="cart-style">
            <h1>Order Summary</h1>
            <h4>Items Ordered : {cart.length}</h4>

            <table className="cost-table">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Product <span><small>(before tax)</small></span></td>
                        <td>{Number(total.toFixed(2))}</td>
                    </tr>
                    <tr>
                        <td>Shipping </td>
                        <td>{shippingCost}</td>
                    </tr>
                    <tr>
                        <td>Tax</td>
                        <td>{tax}</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>{Number(totalPrice)}</td>
                    </tr>
                </tbody>

            </table>
            {
                props.children
            }

        </div>
    );
};

export default Cart;
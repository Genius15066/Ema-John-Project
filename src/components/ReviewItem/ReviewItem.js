import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const { name, quantity, key, img,price} = props.product;
    return (
        <div className="review">
            <div className="review-product-image">
                <img src={img} alt="" />
            </div>
            <div className="review-product-info">
                <h4>{name}</h4>
                <p>Quantity : {quantity}</p>
                <p>Price: ${price}</p>
                <button onClick={() => props.removeProduct(key)} className="cart-btn">Remove</button>
            </div>

        </div>
    );
};

export default ReviewItem;
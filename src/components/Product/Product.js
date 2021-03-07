import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    const{img,name,seller,price,stock,key,category}=props.product;
    return (
        <div className="product">
            <div className="product-image">
                 <img src={img} alt=""/>
            </div>

            <div className="product-info">
                <h4><Link style={{textDecoration:'none'}} to={"/"+category+"/"+key}>{name}</Link></h4>
                <small>by : {seller}</small>
                <p>${price}</p>
                <small>Only {stock} left in store..Order soon..</small>
                <br/>
                {
                    props.showAddtoCart && <button onClick={()=>props.handleAddProduct(props.product)} className="cart-btn"><FontAwesomeIcon style={{marginRight:'10px'}} icon={faShoppingCart}/>Add to Cart</button>
                }
               
 
            </div>
        </div>
    );
};

export default Product;
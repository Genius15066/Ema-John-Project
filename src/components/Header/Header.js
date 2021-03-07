import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <Link to="/shop" replace>Shop</Link>
                <Link to="/review" replace>Order Review</Link>
                <Link to="/manage" replace>Manage</Link>
            </nav>
        </div>
    );
};

export default Header;
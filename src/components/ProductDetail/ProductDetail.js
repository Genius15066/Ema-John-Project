import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const{key}=useParams();
    const product=fakeData.find(pd=>pd.key===key);
    return (
        <>
            <Product product={product} showAddtoCart={false}/>
        </>
    );
};

export default ProductDetail;
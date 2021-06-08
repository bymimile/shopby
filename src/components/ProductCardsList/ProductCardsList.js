import React from 'react';
import ProductCard from '../ProductCard/ProductCard'
import './product-cards-list.scss';

const ProductCardsList = (props) => {
    const {data} = props
    
    const biscuits = data[0]
    return (
        <div className="col-sm">
            <div className="row">
              {biscuits.map(biscuit => <ProductCard biscuit={biscuit}/>)}  
            </div>
        </div>
    )
};

export default ProductCardsList;

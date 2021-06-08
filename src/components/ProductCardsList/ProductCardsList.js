import React from 'react';
import ProductCard from '../ProductCard/ProductCard'
import './product-cards-list.scss';

const ProductCardsList = (props) => {
    return (
        <div className="col-sm">
            <div className="row">
                <ProductCard />
            </div>
        </div>
    )
};

export default ProductCardsList;

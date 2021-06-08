import React from 'react';
import ProductCardsList from '../ProductCardsList/ProductCardsList'
import './store.scss';
import {data} from '../../data';

const Store = () => (
  <div className="col-sm">
    <div className="row">
      <ProductCardsList data={data}/>
    </div>
  </div>
);

export default Store ;

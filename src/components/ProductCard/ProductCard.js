import React from 'react';
import img from '../../assets/logo192.png'
import './product-card.scss';

const ProductCard = (props) => {
    const {biscuit} = props
    return (
        <div className="col-sm-4">
            <div className="card">
                <img src={img} className="card-img-top" alt="" />
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-6">
                            <h5 className="card-title">{biscuit.name}</h5>
                        </div>
                        <div className="col-sm-6">
                            <p>{biscuit.price}</p>
                        </div>
                        <a href="#" className="btn btn-primary btn-sm">Ajouter au panier</a>
                        <a href="#" className="btn btn-primary btn-sm">Voir détail</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

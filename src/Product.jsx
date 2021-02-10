import React from 'react'
import './Product.css'

function Product({title, image, price, rating }) {
    return (
        <div className="product">

            <div className="product__info">
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">

                    {Array(rating).fill().map((_,i) => (<p>🌟</p>))}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                </div>
                                                
            </div>

            <img src="https://images-na.ssl-images-amazon.com/images/I/71Z2bLQ8NmL._AC_SL1000_.jpg" alt="amazon echo"/>
            <button>Add to basket</button>
        </div>
    )
}

export default Product

import React from 'react'
import './CheckoutProduct.css'

function CheckoutProduct({id, image, title, price, rating}) {
    console.log("checkoutproduct, props")
    
    return (
        <div className="checkoutProduct">

            <img className="checkoutProduct__image" src={image} alt={title}/>
            
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}
                    <small>€</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => ( 
                        //_, is just a placeholder means the x value as the first arg is not related, i is. 
                        <p>🌟</p>
                    ))}
                </div>

                <button>Remove from basket</button>

            </div>

            
        </div>
    )
}

export default CheckoutProduct

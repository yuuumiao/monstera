import React, { Component } from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from "./StateProvider"
import CheckoutProduct from './CheckoutProduct'



function Checkout() {

    const [{basket, user}, dispatch] = useStateValue();

    return (

        <div className="checkout">
                <div className="checkout__left">
                    <img className="checkout__ad" src="https://www.disruptivestatic.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-29-at-11.50.03-AM-450x96.png" alt="ad banner"/>
                    <div>
                        <h3>Hello, {user?.email}</h3>
                        <h2 className="checkout__title">
                            Your shopping basket
                        </h2>

                        {basket.map(item => (
                            <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                        ))}

                    </div>
                </div>  

                <div className="checkout__right">
                    <Subtotal />
                </div>   


            </div>
        
    )
}

export default Checkout
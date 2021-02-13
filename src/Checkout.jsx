import React, { Component } from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'

export class Checkout extends Component {
    render() {
        return (
            <div className="checkout">
                <div className="checkout__left">
                    <img className="checkout__ad" src="https://www.disruptivestatic.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-29-at-11.50.03-AM-450x96.png" alt="ad banner"/>
                    <div>
                        <h2 className="checkout__title">
                            Your shopping basket
                        </h2>
                    </div>
                </div>  

                <div className="checkout__right">
                    <Subtotal />


                </div>   


            </div>
        )
    }
}

export default Checkout

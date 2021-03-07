import React, { useState, useEffect } from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { Link, useHistory } from 'react-router-dom'
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer'
import axios from './axios'
import { db } from './firebase'


const Payment = () => {

    const [{ basket, user }, dispatch] = useStateValue()
    const history = useHistory()

    const stripe = useStripe();
    const elements = useElements();

 
    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [processing, setProcessing] = useState("")
    const [succeeded, setSucceeded] = useState(false)

    const [clientSecret, setClientSecret] = useState(true)

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket)*100}`
                //stripe expects the total in a currencies subunits (cents); so we time 100
            })
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret() //call the async function 
    }, [basket])


    console.log("The secret is >>>", clientSecret)

    const handleSubmit = async (event) => {
        event.preventDafault();
        setProcessing(true);

        const payload = await stripe.confirmeCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => { 
            //paymentIntent = payment confirmation
            db.collection('users')
            .doc(user?.uid) 
            //this is uid instead of id
            .collections('orders')
            .doc(paymentIntent.id )
            .set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })

            setSucceeded(true)
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_BASKET'

            })

            history.replace('/orders')
            //swope the page to /orders
        })
    }

    const handleChange = (event) => {
        //listen to the event of customer change the card info and display errors if happens
        setDisabled(event.empty)
        setError(event.error ? event.error.message : "")

    }


    return (
        <div className="payment">
            <div className="payment__container">

                <h1>Checkout (<Link to="/checkout"> {basket?.length} items </Link>)</h1> 

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>

                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct 
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>

                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">

                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className="payment__priceContainer">
                            <CurrencyFormat 
                                renderText={(value) => (
                                   <h3>Order Total:  {value}</h3>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"€"}
                            />
                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </button>

                            </div>
                            {error && <div>{error}</div>}
                        </form>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Payment

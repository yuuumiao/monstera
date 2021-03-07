import React, { useState, useEffect } from 'react'
import './Orders.css'
import { useStateValue } from './StateProvider'
import Order from './Order'
import { db } from './firebase'



function Orders() {
    const [orders, setOrders] = useState([])
    const [{ basket, user}, dispatch ] = useStateValue()

    useEffect(() => {
        if(user) {
       
        db.collections('users')
        .doc(user?.uid)
        .collections('orders')
        .orderBy('created', 'desc')
        .onSnapshot(snapshot => {
            setOrders(snapshot.doc.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        }) 
        } else {
            setOrders([])
        }
       
    }, [])

    return (
        <div className="orders">
            <h1>Your orders</h1>

            {orders?.map(order => (
                <Order order={order} />
            ))}


            
        </div>
    )
}

export default Orders

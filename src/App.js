import React, { useEffect } from 'react'
import './App.css';
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login'
import Orders from './Orders'

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { auth } from './firebase';
import { useStateValue } from "./StateProvider"
import  Payment  from './Payment';

import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe("pk_test_51IOWa0LRu5j4rVh2wcDCxjO94NHIxROyWV24uglwFG8VtX81NpF8Xy5bqRXZBmxamlKzYp4bHqTqIhZF5p18jRDx00PdADIlWw")

function App() {

  const [{}, dispatch] = useStateValue()

   useEffect(() => {
      auth.onAuthStateChanged(authUser => {
        console.log("user is >>>", authUser)
        if (authUser) { 
          //if the user is loggedin 
          dispatch({
            type: "SET_USER",
            user: authUser
          })
        } else { 
          //if the user is logged out
          dispatch({
            type: "SET_USER",
            user: null
          })
        }
      })

   }, []) //like componentDidMount

  return (

    //BEM
    //The homepage with just the slash will remain at the bottom 

    <Router>
    <div className="app">


      <Switch>

       <Route path="/login">
            <Login />
        </Route>

        <Route path="/checkout">
            <Header />
            <Checkout />
        </Route>

        <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
        </Route>

        <Route path="/orders">
          <Header />
          <Orders />
        </Route>

        <Route path="/"> 
            <Header />
            <Home />
        </Route>

      </Switch>

    </div>
    </Router>
  );
}

export default App;

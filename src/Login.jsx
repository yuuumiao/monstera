import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className="login">
            <Link to="/">
            <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Amazon.com-Logo.svg/800px-Amazon.com-Logo.svg.png" alt="logo"/>
            </Link>

            <div className="login__containter">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text"/>
                    <h5>Password</h5>
                    <input type="password"/>
                    <button className="login__signInButton">Sign In</button>
                </form>

            <p>
            By signing-in you agree to the Monstera conditions of use & sale. 
            Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>

            <button classNmae="login__registerButton">Create your Monstera account</button>
            </div>
            
        </div>
    )
}

export default Login

import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from "./firebase"

function Login() {

    const history = useHistory()
    //this allows us programmatically change the URL

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signin = (event) => {
        event.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => history.push("/"))
            .catch((error) => alert(error.message))

    }

    const register = (event) => {
        event.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth)
                if(auth) history.push("/")
            })
            .catch((error) => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
            <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="logo"/>
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <button className="login__signInButton" type="submit" onclick={signin}>Sign In</button>
                </form>

            <p>
            By signing-in you agree to the Monstera conditions of use & sale. 
            Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>

            <button onClick={register}
            className="login__registerButton">Create your Monstera account</button>
            </div>
            
        </div>
    )
}

export default Login

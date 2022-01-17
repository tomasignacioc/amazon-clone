import React from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"

const Login = () => {
    return (
        <div className="login">
            <Link to="/"> 
            <img  className="login__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png" alt="" />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input type="text" />

                    <h5>Password</h5>
                    <input type="password" />

                    <button className="login__signInButton">Sign in</button>
                </form>

                <p>By signing-in you agree to the Amazon-clone Conditions of use & sale. Please see
                    our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className="login__registerButton">Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login

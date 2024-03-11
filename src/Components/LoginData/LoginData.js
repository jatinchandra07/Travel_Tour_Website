import React from 'react'
import { Link } from 'react-router-dom'
import './LoginData.css';
function LoginData() {
    return(
        <>
            <h1 className="main-title text-center">Login / Register page</h1>
            <p className="main-para text-center">Join us now and don't waste time</p>
            <div className="buttons text-center">
                <Link to="/loginpage">
                    <button className="primary-button">Log in</button>
                </Link>
                <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>Register </span></button>
                </Link>
            </div>
        </>
    );
}
export default LoginData;
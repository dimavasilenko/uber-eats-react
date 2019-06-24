import React from 'react';
import './authorization-options.css'
import logo from './images/basket.svg';

export function AuthorizationOptions() {
    return (
        <div className="authorization-options__wrapper">
            <button className="authorization-options">Sign In</button>
            <button className="authorization-options authorization-options--register">Register</button>
            <a href="https://www.ubereats.com/ru-UA/checkout/">
                <img src={logo} alt="basket-logo"/>
            </a>
        </div>
    )
}
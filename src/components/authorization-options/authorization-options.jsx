import React from 'react';
import './authorization-options.css'
import logo from './images/basket.svg';

export function AuthorizationOptions() {
    return (
        <div className="authorization-options">
            <button className="authorization-options__sign-in">Sign In</button>
            <button className="authorization-options__register">Register</button>
            <a href="https://www.ubereats.com/ru-UA/checkout/">
                <img src={logo} alt="basket-logo"/>
            </a>
        </div>
    )
}
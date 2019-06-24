import React from 'react';
import './header.css';
import {DeliveryTerms} from "../delivery-terms/delivery-terms";
import {AuthorizationOptions} from "../authorization-options/authorization-options";

export function Header() {
    return (
        <header className="header">
            <div className="header__wrapper">
                <div className="header__logo--wrapper">
                    <a className="header__logo" href="https://www.ubereats.com/uk-UA/">
                    </a>
                </div>
                <DeliveryTerms/>
                <AuthorizationOptions/>
            </div>
        </header>
);
}
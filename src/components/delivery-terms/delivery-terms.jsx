import React from "react";
import './delivery-terms.css';

export function DeliveryTerms() {
    return (
        <div className="delivery-terms__wrapper">
            <div className="delivery-terms">
                <button className="delivery-terms__time" type="button">ASAP</button>
                <span className="delivery-terms__span">to</span>
                <label className="delivery-terms__label">
                    <input type="text" className="delivery-terms__input" placeholder="Your location"/>
                </label>
            </div>
        </div>
    );
}
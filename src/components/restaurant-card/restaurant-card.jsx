import React from 'react';
import './restaurant-card.css';
import card_logo from './images/MCdonalds.png';

export function RestaurantCard() {
    return (
        <li>
            <a href="https://dimavasilenko.github.io/uber-eats/src/restaurant.html" className="restaurant-card ">
                <img src={card_logo} alt="food_picture"
                     className="restaurant-card__photo"/>
                <span className="restaurant-card__restaurant "> Макдоналдс</span>
                <span className="restaurant-card__cuisines">₴₴ • Бургери</span>
                <span className="restaurant-card__time">25 - 35 Min</span>
            </a>
        </li>
    );
}
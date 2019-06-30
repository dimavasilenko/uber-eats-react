import React from 'react';
import './product-card.css';

export function ProductCard() {
    return (
        <li>
            <a href="javascript:void(0)" className="restaurant-card">
                <div className="restaurant-card__content">
                    <span className="restaurant-card__title ">Сельдь на бородинском хлебе</span>
                    <span className="restaurant-card__options">С яйцом и огурцом</span>
                    <span className="restaurant-card__price">240 ₽</span>
                </div>
                <img src="../restaurant-page/images/dish.png" alt="food_picture"/>
            </a>
        </li>
    );
}
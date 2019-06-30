import React from 'react';
import 'restaurant-menu.css';
import {Link} from "react-router-dom";

export function RestaurantMenu() {
    return (
        <div className="restaurant-menu__nav">
            <ul className="restaurant-menu">
                <li><Link to="/" className="restaurant-menu__card" href="javascript:void(0)">Закуски</Link></li>
                <li><Link to="/" className="restaurant-menu__card" href="javascript:void(0)">Салаты</Link></li>
                <li><Link to="/" className="restaurant-menu__card" href="javascript:void(0)">Супы</Link></li>
                <li><Link to="/" className="restaurant-menu__card" href="javascript:void(0)">Гарячие блюда</Link></li>
                <li><Link to="/" className="restaurant-menu__card" href="javascript:void(0)">Гарниры</Link></li>
                <li><Link to="/" className="restaurant-menu__card" href="javascript:void(0)">Десерты</Link></li>
            </ul>
        </div>
    );
}
import React from 'react';
import './restaurant-card.css';
import {Link} from "react-router-dom";


export function RestaurantCard(props) {
    return (
        <li className="restaurant-card">
            <Link to="/restaurant" className="restaurant-card restaurant-card__link">
                <img className="restaurant-card__img" src={props.imageUrl} alt="food_image"/>
                <span className="restaurant-card__restaurant">{props.title}</span>
                <span className="restaurant-card__category">{props.priceBucket}{props.categories.map((category) => {
                    return (
                        ' • ' + category.keyName
                    )
                })}
      </span>

                <span className="restaurant-card__time">{props.etaRange.min} - {props.etaRange.max} Min</span>
            </Link>
        </li>
    );
}

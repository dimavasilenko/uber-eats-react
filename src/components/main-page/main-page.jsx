import React from 'react';
import '../product-card/product-card.css';
import {RestaurantCard} from "../restaurant-card/restaurant-card";
import {Search} from "../search/search";

export function MainPage() {
    return (
        <div className="main-page__wrapper">
            <div className="main-page">
                <Search/>
                <span className="main-page__city">Kyiv Restaurant</span>
                <ul className="main-page__first">
                    <RestaurantCard/>
                    <RestaurantCard/>
                    <RestaurantCard/>
                </ul>
                <ul className="main-page__second">
                    <RestaurantCard/>
                    <RestaurantCard/>
                    <RestaurantCard/>
                </ul>
                <ul className="main-page__third">
                    <RestaurantCard/>
                    <RestaurantCard/>
                    <RestaurantCard/>
                </ul>
            </div>
        </div>
    );
}

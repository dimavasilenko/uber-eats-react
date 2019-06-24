import React from 'react';
import '../restaurant-layout/restaurant-layout.css';
import '../product-card/product-card.css';
import {RestaurantCard} from "../restaurant-card/restaurant-card";
import {Search} from "../search/search";
import {RestaurantCity} from "../restaurant-city/restaurant-city";

export function MainPage() {
    return (
        <div className="restaurant-layout__wrapper">
            <div className="restaurant-layout">
                <Search/>
                <RestaurantCity/>
                <ul className="restaurant-layout__first">
                    <RestaurantCard/>
                    <RestaurantCard/>
                    <RestaurantCard/>
                </ul>
                <ul className="restaurant-layout__second">
                    <RestaurantCard/>
                    <RestaurantCard/>
                    <RestaurantCard/>
                </ul>
                <ul className="restaurant-layout__third">
                    <RestaurantCard/>
                    <RestaurantCard/>
                    <RestaurantCard/>
                </ul>
            </div>
        </div>
    );
}

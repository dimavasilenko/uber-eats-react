import React from "react";
import { RestaurantCard } from "../restaurant-card/restaurant-card";
import { Search } from "../search/search";
import { restaurants } from "./restaurants-info";
import "../restaurant-card/restaurant-card.css";
import "./main-page.css";

export function MainPage() {
    const title = "Kyiv Restaurant";
  return (
    <div className="main-page">
      <div className="main-page_wrapper">
        <Search />
        <span className="main-page__city">{title}</span>
        <ul className="main-page-list">
          {restaurants.map((restaurant, i) => {
            return (
              <RestaurantCard
                key={i}
                title={restaurant.title}
                categories={restaurant.categories}
                priceBucket={restaurant.priceBucket}
                etaRange={restaurant.etaRange}
                imageUrl={restaurant.imageUrl}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

import React from "react";
import { RestaurantCard } from "../restaurant-card/restaurant-card";
import { Search } from "../search/search";
import { restaurant } from "./restaurant-info";
import "../restaurant-card/restaurant-card.css";
import "./main-page.css";

export function MainPage() {
  const city = "Kyiv Restaurant";
  return (
    <div className="main-page">
      <div className="main-page_wrapper">
        <Search />
        <span className="main-page__city">{city}</span>
        <ul className="main-page__list">
          <div className="main-page__grid">
            {restaurant.map((restaurant, i) => {
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
          </div>
        </ul>
      </div>
    </div>
  );
}

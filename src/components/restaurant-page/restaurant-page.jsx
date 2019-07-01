import React from "react";
import "./restaurant-preview/restaurant-preview.css";
import "./restaurant-menu/restaurant-menu.css";
import "./restaurant-page.css";
import "./product-card/product-card.css";
import { ProductCard } from "./product-card/product-card";
import { RestaurantMenu } from "./restaurant-menu/restaurant-menu";
import { RestaurantPreview } from "./restaurant-preview/restaurant-preview";

export function RestaurantPage() {
  return (
    <>
      <RestaurantPreview />
      <RestaurantMenu />

      <div className="restaurantPage__wrapper">
        <div className="restaurantPage">
          <span className="restaurantPage__title">Закуски</span>
          <ul className="restaurantPage__list">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </ul>
        </div>
      </div>
    </>
  );
}

import React from "react";
import "./restaurant-preview.css";
import { restaurantMenu } from "../restaurantMenuInfo";

export function RestaurantPreview() {
  const background = `url(${restaurantMenu.largeImageUrl})`;
  return (
    <section
      className="restaurant-preview__background"
      style={{ background: background, backgroundPosition: `center center` }}
    >
      <div className="restaurant-preview__wrapper">
        <div className="restaurant-preview">
          <span className="restaurant-preview__title ">
            {restaurantMenu.title}
          </span>
          <div className="restaurant-preview__footer">
            <span className="restaurant-preview__price">
              {restaurantMenu.priceBucket}{" "}
              {restaurantMenu.categories.map(category => {
                return ` • ${category.name}`;
              })}{" "}
            </span>
            <span className="restaurant-preview__time">
              {restaurantMenu.etaRange.min} - {restaurantMenu.etaRange.max} min
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

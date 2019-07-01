import React from "react";
import "./restaurant-preview.css";

export function RestaurantPreview() {
  return (
    <div className="restaurant-preview__background">
      <div className="restaurant-preview__wrapper">
        <div className="restaurant-preview">
          <span className="restaurant-preview__title">Трактир «Пушкин»</span>
          <div className="restaurant-preview__footer">
            <span className="restaurant-preview__price">₴₴₴ • Европейская</span>
            <span className="restaurant-preview__time">40-50 Min</span>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./product-card.css";
import { restaurantMenu } from "../restaurantMenuInfo";

export function ProductCard(props) {
  const image = restaurantMenu.items[props.id].imageUrl;
  return (
    <li className="product-card__wrapper">
      <a href="javascript:void(0)" className="product-card">
        <div className="product-card__content">
          <span className="product-card__title">
            {restaurantMenu.items[props.id].title}
          </span>
          <span className="product-card__recipe">
            {restaurantMenu.items[props.id].itemDescription}
          </span>
          <span className="product-card__price">
            {restaurantMenu.items[props.id].price / 100}₴
          </span>
        </div>
        {image && <img src={image} alt="" className="product-card__photo" />}
      </a>
    </li>
  );
}

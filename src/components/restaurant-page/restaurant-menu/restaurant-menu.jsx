import React from "react";
import "./restaurant-menu.css";
import { ProductCard } from "../product-card/product-card";
import { restaurantMenu } from "../restaurantMenuInfo";

export function RestaurantMenu() {
  return (
    <section className="restaurant-menu">
      <div className="restaurant-menu__wrapper">
        {restaurantMenu.sections.map((section, i) => {
          return (
            <div>
              <span className={"restaurant-menu__type"} id={`${section.title}`}>
                {section.title}
              </span>
              <div className={"restaurant-menu__list"}>
                {section.itemUuids.map((item, i) => {
                  return <ProductCard id={item} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

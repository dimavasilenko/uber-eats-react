import React from "react";
import "./restaurant-preview/restaurant-preview.css";
import "./nav-menu/nav-menu.css";
import "./restaurant-page.css";
import "./product-card/product-card.css";
import { NavMenu } from "./nav-menu/nav-menu";
import { RestaurantPreview } from "./restaurant-preview/restaurant-preview";
import { RestaurantMenu } from "./restaurant-menu/restaurant-menu";

export function RestaurantPage() {
  return (
    <>
      <RestaurantPreview />
      <NavMenu />
      <RestaurantMenu />
    </>
  );
}

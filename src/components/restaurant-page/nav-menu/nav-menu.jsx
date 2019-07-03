import React from "react";
import "./nav-menu.css";
import { restaurantMenu } from "../restaurantMenuInfo";
// import { Link } from "react-router-dom";

export function NavMenu() {
  return (
    <div className="nav-menu__wrapper">
      <ul className="nav-menu__list">
        {restaurantMenu.sections.map((section, i) => {
          return (
            <a href={`#${section.title}`} className={"nav-menu__link"}>
              <li className="nav-menu__item">{section.title}</li>
            </a>
          );
        })}
      </ul>
    </div>
  );
}

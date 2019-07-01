import React from "react";
import "./authorization-options.css";
import logo from "./images/basket.svg";
import "../buttons/buttons.css";

export function AuthorizationOptions() {
  return (
    <div className="authorization-options">
      <button className="button">Sign In</button>
      <button className="button button--register">Register</button>
      <a href="https://www.ubereats.com/ru-UA/checkout/">
        <img src={logo} alt="basket-logo" />
      </a>
    </div>
  );
}

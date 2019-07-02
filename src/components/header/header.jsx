import React from "react";
import "./header.css";
import { DeliveryTerms } from "../delivery-terms/delivery-terms";
import { AuthorizationOptions } from "../authorization-options/authorization-options";
import header_logo from "./images/header-logo.svg";
export function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <img src={header_logo} alt="header" />
        <DeliveryTerms />
        <AuthorizationOptions />
      </div>
    </header>
  );
}

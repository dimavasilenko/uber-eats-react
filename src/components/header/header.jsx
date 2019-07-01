import React from "react";
import "./header.css";
import { DeliveryTerms } from "../delivery-terms/delivery-terms";
import { AuthorizationOptions } from "../authorization-options/authorization-options";

export function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <DeliveryTerms />
        <AuthorizationOptions />
      </div>
    </header>
  );
}

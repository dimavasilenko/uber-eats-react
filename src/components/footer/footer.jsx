import React from "react";
import "./footer.css";
import footer_logo from "./images/white-logo.svg";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <img src={footer_logo} alt="footer" />
      </div>
    </footer>
  );
}

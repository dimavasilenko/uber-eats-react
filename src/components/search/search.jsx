import React from "react";
import "./search.css";

export function Search() {
  return (
    <label className="search__label">
      <input
        type="text"
        className="search"
        placeholder="Search for restaurant or cuisine"
      />
    </label>
  );
}

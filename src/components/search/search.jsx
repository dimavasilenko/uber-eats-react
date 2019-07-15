import React from "react";
import "./search.css";

export function Search(props) {
  function onInputHandler(event) {
    props.onSearchChange(event.target.value.toLowerCase());
  }

  return (
    <label className="search__label">
      <input
        onInput={onInputHandler}
        type="text"
        className="search"
        placeholder="Search for restaurant or cuisine"
      />
    </label>
  );
}

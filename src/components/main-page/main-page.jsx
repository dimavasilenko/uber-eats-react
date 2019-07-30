import React from "react";
import { RestaurantCard } from "../restaurant-card/restaurant-card";
import { Search } from "../search/search";
import { restaurant } from "./restaurant-info";
import "../restaurant-card/restaurant-card.css";
import "./main-page.css";

export class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: "",
      error: null,
      isLoaded: false,
      restaurants: []
    };
  }

  updateSearchValue = searchValue => {
    fetch("https://uber-eats-mates.herokuapp.com/api/v1/restaurants")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            searchValue: searchValue,
            isLoaded: true,
            restaurants: result.restaurants
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  };

  searchInCategories(restaurant) {
    for (let i = 0; i < restaurant.categories.length; i++) {
      if (
        restaurant.categories[i].uuid
          .toLowerCase()
          .includes(this.state.searchValue.toLocaleLowerCase())
      ) {
        return true;
      }
    }
    return false;
  }

  render() {
    const city = "Kyiv Restaurant";
    const { error, isLoaded, restaurants } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <div className="main-page">
          <div className="main-page_wrapper">
            <Search onSearchChange={this.updateSearchValue} />
            <span className="main-page__city">{city}</span>
            <ul className="main-page__list">
              <div className="main-page__grid">
                {restaurant
                  .filter(
                    restaurant =>
                      restaurant.title
                        .toLowerCase()
                        .includes(this.state.searchValue) ||
                      this.searchInCategories(restaurant)
                  )
                  .map((restaurant, i) => {
                    return (
                      <RestaurantCard
                        key={i}
                        title={restaurant.title}
                        categories={restaurant.categories}
                        priceBucket={restaurant.priceBucket}
                        etaRange={restaurant.etaRange}
                        imageUrl={restaurant.imageUrl}
                      />
                    );
                  })}
              </div>
            </ul>
          </div>
        </div>
      );
    }
  }
}

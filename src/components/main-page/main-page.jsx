import React from "react";
import { RestaurantCard } from "../restaurant-card/restaurant-card";
import { Search } from "../search/search";
// import { restaurant } from "./restaurant-info";
import "../restaurant-card/restaurant-card.css";
import "./main-page.css";
export class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      restaurants: []
    };
    this.updateSearch = this.updateSearch.bind(this);
  }

  componentDidMount() {
    fetch("https://uber-eats-mates.herokuapp.com/api/v1/restaurants")
      .then(response => {
        return response.json();
      })
      .then(loadedRestaurants => {
        this.setState(state => ({
          restaurants: loadedRestaurants
        }));
      });
  }

  updateSearch(input) {
    this.setState(state => ({
      searchValue: input
    }));
  }

  searchInCategories(restaurant) {
    for (let i = 0; i < restaurant.categories.length; i++) {
      if (
        restaurant.categories[i].name
          .toLowerCase()
          .includes(this.state.searchValue.toLocaleLowerCase())
      ) {
        return true;
      }
    }
    return false;
  }

  searchInTags(restaurant) {
    for (let i = 0; i < restaurant.tags.length; i++) {
      if (
        restaurant.tags[i].name
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
    return (
      <div className="main-page">
        <div className="main-page_wrapper">
          <Search updateSearch={this.updateSearch} />
          <span className="main-page__city">{city}</span>
          <ul className="main-page__list">
            <div className="Main__restaurants-list">
              <div className="main-page__grid">
                {this.state.restaurants.length > 0
                  ? this.state.restaurants
                      .filter(restaurant => {
                        return (
                          restaurant.title
                            .toLowerCase()
                            .includes(
                              this.state.searchValue.toLocaleLowerCase()
                            ) ||
                          (restaurant.tags && this.searchInTags(restaurant)) ||
                          this.searchInCategories(restaurant)
                        );
                      })
                      .map((restaurant, i) => {
                        return (
                          <RestaurantCard
                            key={i}
                            title={restaurant.title}
                            categories={restaurant.categories}
                            priceBucket={restaurant.priceBucket}
                            etaRange={restaurant.etaRange}
                            imageUrl={restaurant.imageUrl}
                            uuid={restaurant.uuid}
                          />
                        );
                      })
                  : ""}
              </div>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

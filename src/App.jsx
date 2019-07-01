import React from "react";
import { Header } from "./components/header/header";
import { MainPage } from "./components/main-page/main-page";
import { Footer } from "./components/footer/footer";
import { RestaurantPage } from "./components/restaurant-page/restaurant-page";
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
    const title = "Kyiv restaurant";
  return (
    <>
      <Header />

      <Router>
        <Route path="/" exact component={MainPage} />
        <Route path="/restaurant" component={RestaurantPage} />
      </Router>
      <Footer />
    </>
  );
}

export default App;

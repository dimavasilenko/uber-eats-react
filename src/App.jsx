import React from 'react';
import {Header} from "./components/header/header";
import {MainPage} from "./components/main-page/main-page";
import {Footer} from "./components/footer/footer";
import './components/main-page/main-page.css';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

function ProductCard() {
    return <h1>qwerty</h1>
}

function App() {
    return (
        <>
            <Header/>
            <Router>
                <Route path='/'
                       exact
                       component={MainPage}/>
                <Route path='/product-card'
                       component={ProductCard}/>
            </Router>
            <Footer/>
        </>
    );
}

export default App;

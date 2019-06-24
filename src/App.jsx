import React from 'react';
import './App.css';
import {Header} from "./components/header/header";
import {MainPage} from "./components/main/main";
import {Footer} from "./components/footer/footer";

function App() {
    return (
        <div>
            <Header/>
            {<MainPage/>}
            {<Footer/>}
        </div>
    );
}

export default App;

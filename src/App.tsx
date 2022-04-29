import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {List} from "./components/NavBar/List";
import {Footer} from "./components/Footer/Footer";
import {Contents} from "./components/Contents/Contents";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
        <div className="app-wrapper">
            <div className="s"></div>
            <Header/>
            <List/>
            <Contents/>
            <Footer/>
            <div className="x"></div>
         </div>
        </BrowserRouter>
    );
}

export default App;

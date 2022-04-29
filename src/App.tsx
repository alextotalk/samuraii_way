import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {List} from "./components/LeftManu/List";
import {Footer} from "./components/Footer/Footer";
import {Contents} from "./components/Contents/Contents";

function App() {
    return (
        <div className="app-wrapper">
            <div className="s"></div>
            <Header/>
            <List/>
            <Contents/>
            <Footer/>
            <div className="x"></div>
         </div>
    );
}

export default App;

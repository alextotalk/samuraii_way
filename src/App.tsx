import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {List} from "./components/NavBar/List";
import {Footer} from "./components/Footer/Footer";
import {Contents} from "./components/Contents/Contents";
import {StateType} from "./Redux/State";

type AppPropsType = {
    state: StateType
    dispatch:any
}

function App(props: AppPropsType) {
    return (
        <div className="app-wrapper">
            <div className="s"></div>
            <Header/>
            <List/>
            <Contents state={props.state} dispatch={props.dispatch}  />
            <Footer/>
            <div className="x"></div>
        </div>
    );
}

export default App;

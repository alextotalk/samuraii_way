import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {List} from "./components/NavBar/List";
import {Footer} from "./components/Footer/Footer";
import {Contents} from "./components/Contents/Contents";
 import {store} from "./Redux/reduxStore";


type AppPropsType = {
    state: ReturnType<typeof store.getState>
 }
const App: React.FC<AppPropsType> =(props) =>{

    return (
        <div className="app-wrapper">
            <div className="s"></div>
            <Header/>
            <List/>
            <Contents  state={props.state} dispatch={store.dispatch.bind(props.state)} />
            <Footer/>
            <div className="x"></div>
        </div>
    );
}

export default App;

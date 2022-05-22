import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {List} from "./components/NavBar/List";
import {Footer} from "./components/Footer/Footer";
import {Contents} from "./components/Contents/Contents";
import {StoreType} from "./index";

type AppPropsType = {
    state: StoreType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

function App(props: AppPropsType) {
    return (
        <div className="app-wrapper">
            <div className="s"></div>
            <Header/>
            <List/>
            <Contents state={props.state} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
            <Footer/>
            <div className="x"></div>
        </div>
    );
}

export default App;

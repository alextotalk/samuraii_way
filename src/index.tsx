import React from 'react';
import './index.css';
import {PostType} from "./components/Contents/Posts/Posts";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {store} from "./Redux/State";

export  type MessagesType = {
    id: string
    massager: string
}

export  type DialogsItemType = {
    id?: string
    name?: string
}


console.log("hi")

 let renderTree = ( ) => {
    ReactDOM.render(
        <React.StrictMode>
        <BrowserRouter>
             <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>
        </React.StrictMode>,

        document.getElementById('root')
    );
}
store.subscriber(renderTree)
renderTree()

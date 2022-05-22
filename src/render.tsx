import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPost, updateNewPostText} from "./Redux/State";
import React from "react";
import {StoreType} from "./index";

export let renderTree = (store:StoreType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
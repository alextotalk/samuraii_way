import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {PostType} from "./components/Contents/Posts/Posts";
import {store} from "./Redux/State";
import {BrowserRouter} from "react-router-dom";

export  type MessagesType = {
    id: string
    massager: string
}

export  type DialogsItemType = {
    id: string
    name: string
}

export type DialogsPageType = {
    messages: MessagesType[]
    dialogsItem: DialogsItemType[]
}
export type ProfilePageType = {
    posts: PostType[]
}
export type StoreType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    // sidebar:{}
}


ReactDOM.render(
    <BrowserRouter>
        <App state={store}/>
    </BrowserRouter>,
    document.getElementById('root')
);
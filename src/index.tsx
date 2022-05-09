import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {PostType} from "./components/Contents/Posts/Posts";
import {DialogsItemType, MessagesType} from "./components/Contents/Dialogs/Dialogs";
import {store} from "./Redux/State";

type DialogsPageType = {
    messages: MessagesType[]
    dialogsItem: DialogsItemType[]
}
type profilePageType = {
    posts:PostType[]
}
export type StoreType = {
    profilePage: profilePageType
    dialogsPage: DialogsPageType
    sidebar:{}
}

ReactDOM.render(
    <App state={store}/>,
    document.getElementById('root')
);
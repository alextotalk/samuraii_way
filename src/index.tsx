import React from 'react';
import './index.css';
import {PostType} from "./components/Contents/Posts/Posts";
import {addPost, store, subscriber, updateNewPostText} from "./Redux/State";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

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
    newPostText: string

}
export type StoreType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType

}

let renderTree = (store: StoreType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
renderTree(store)
subscriber(renderTree)

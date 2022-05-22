import React from 'react';
import './index.css';
import {PostType} from "./components/Contents/Posts/Posts";

import {renderTree} from "./render";
import {store} from "./Redux/State";

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
    newPostText:string

}
export type StoreType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType

}

renderTree( store )
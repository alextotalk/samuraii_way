import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./profilePageReducer";
import {dialogsPageReducer} from "./dialogsPageReducer";
import {sidebarReducer} from "./sidebarReducer";
 let reducers=combineReducers(
    {
        profilePage :profilePageReducer,
        dialogsPage :dialogsPageReducer,
        sidebar :sidebarReducer
    }
)

export let store=createStore(reducers)
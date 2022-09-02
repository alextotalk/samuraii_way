import React from "react";
import m from "./Contents.module.css"

import {ActionsTypes} from "../../Redux/State";
import {store} from "../../Redux/reduxStore";
import {Route, Routes} from "react-router-dom";
import {Dialogs} from "./Dialogs/Dialogs";
import {Posts} from "./Posts/Posts";

type ContentsPropsType = {
    state: ReturnType<typeof store.getState>
    dispatch: (action: ActionsTypes) => void
}

export const Contents: React.FC<ContentsPropsType> = (props) => {
    return (
        <div className={m.Contents}>
            <Routes>
                <Route
                    render={() => <Posts dispatch={props.dispatch} posts={props.state.profilePage.posts}
                                         newPostText={props.state.profilePage.newPostText}/>}
                    path='/posts'></Route>
                <Route render={() => <Dialogs dispatch={props.dispatch} dialogs={props.state.dialogsPage}/>}
                       path='/dialogs'></Route>
            </Routes>
        </div>
    );
}
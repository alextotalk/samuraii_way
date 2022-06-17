import React from "react";
import m from "./Contents.module.css"
import {Posts} from "./Posts/Posts";
import {Dialogs} from "./Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {ActionsTypes} from "../../Redux/State";
import {store} from "../../Redux/reduxStore";

type ContentsPropsType = {
    state: ReturnType<typeof store.getState>
    dispatch: (action: ActionsTypes) => void
}

export const Contents: React.FC<ContentsPropsType> = (props) => {
    return (
        <div className={m.Contents}>
            <Route
                render={() => <Posts dispatch={props.dispatch} posts={props.state.profilePage.posts}
                                     newPostText={props.state.profilePage.newPostText}/>}
                path='/posts'></Route>
            <Route render={() => <Dialogs dispatch={props.dispatch} dialogs={props.state.dialogsPage}/>}
                   path='/dialogs'></Route>
        </div>
    );
}
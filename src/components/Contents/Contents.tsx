import React from "react";
import m from "./Contents.module.css"
import {Posts} from "./Posts/Posts";
import {Dialogs} from "./Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {StateType} from "../../Redux/State";

type ContentsPropsType = {
    state: StateType
    dispatch: any
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
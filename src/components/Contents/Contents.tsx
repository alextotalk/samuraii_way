import React from "react";
import m from "./Contents.module.css"
import {Posts} from "./Posts/Posts";
import {Dialogs} from "./Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {StoreType} from "../../index";

type ContentsPropsType = {
    state: StoreType
}

export function Contents(props: ContentsPropsType) {
    return (
        <div className={m.Contents}>
            <Route render={() => <Posts posts={props.state.profilePage.posts}/>} path='/posts'></Route>
            <Route render={() => <Dialogs dialogs={props.state.dialogsPage}/>}
                   path='/dialogs'></Route>
        </div>

    );
}
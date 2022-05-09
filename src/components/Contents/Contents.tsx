import React from "react";
import m from "./Contents.module.css"
import {Posts} from "./Posts/Posts";
import {Dialogs} from "./Dialogs/Dialogs";
import {Route} from "react-router-dom";

export function Contents() {
    return (
        <div className={m.Contents}>
            <Route component={Posts} path='/posts'></Route>
            <Route component={Dialogs} path='/dialogs'></Route>
        </div>

    );
}
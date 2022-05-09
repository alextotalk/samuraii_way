import React, {ChangeEvent, MouseEventHandler} from "react";
import m from "./Button.module.css"
import {PostType} from "../Posts";
type ButtonPropsType = {
    addNewPost: any
    name:string
}

export function Button(props:ButtonPropsType) {
    return (
        <div className={m.button}>
             <button onClick={props.addNewPost}>{props.name}</button>
        </div>
    );
}
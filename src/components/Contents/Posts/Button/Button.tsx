import React  from "react";
import m from "./Button.module.css"
 type ButtonPropsType = {
    addNewPost: () => void
    name:string
}

export function Button(props:ButtonPropsType) {
    return (
        <div className={m.button}>
             <button onClick={ props.addNewPost }>{props.name}</button>
        </div>
    );
}
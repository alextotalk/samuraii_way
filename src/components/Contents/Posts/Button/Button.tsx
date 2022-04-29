import React from "react";
import m from "./Button.module.css"

export function Button(props:any) {
    return (
        <div className={m.button}>
             <button>{props.name}</button>
        </div>
    );
}
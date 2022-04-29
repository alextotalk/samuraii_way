import React from "react";
import m from "./Button.module.css"

export function Button() {
    return (
        <div className={m.button}>
             <button>LIKE!</button>
        </div>
    );
}
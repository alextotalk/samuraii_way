import React from "react";
import m from "./TextArea.module.css"

export function TextArea() {
    return (
        <div className={m.textArea}>
            <textarea name="newPost" id="newPost" ></textarea>
        </div>
    );
}
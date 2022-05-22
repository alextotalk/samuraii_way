import React, {ChangeEvent} from "react";
import m from "./TextArea.module.css"

type TextAreaPropsType = {
    getNewPost: (e: ChangeEvent<HTMLTextAreaElement>) => void
    newText:string
}

export function TextArea(props: TextAreaPropsType) {

    return (
        <div className={m.textArea}>
            <textarea value={props.newText} name="newPost" id="newPost" onChange={props.getNewPost}></textarea>
        </div>
    );
}
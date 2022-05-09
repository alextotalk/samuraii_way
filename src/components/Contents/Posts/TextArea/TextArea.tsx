import React, {ChangeEvent} from "react";
import m from "./TextArea.module.css"

type TextAreaPropsType = {
    getNewPost: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export function TextArea(props: TextAreaPropsType) {

    return (
        <div className={m.textArea}>
            <textarea name="newPost" id="newPost" onChange={props.getNewPost}></textarea>
        </div>
    );
}
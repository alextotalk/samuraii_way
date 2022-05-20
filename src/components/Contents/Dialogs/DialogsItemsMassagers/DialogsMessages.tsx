import m from "../Dialogs.module.css";
import React, {ChangeEvent} from "react";
import {MessagesType} from "../../../../index";
import {TextArea} from "../../Posts/TextArea/TextArea";
import {Button} from "../../Posts/Button/Button";

type PropsMessages = {
    messages: MessagesType[]
}
let newPost = ''

let getNewPost = (e: ChangeEvent<HTMLTextAreaElement>) => {
    debugger
    newPost = e.currentTarget.value
    return newPost
}
let addNewPost = (getNewPost: () => void) => {

    return alert(newPost)
}
export function DialogsMessages(props: PropsMessages) {
    return (
        <div className={m.dialogsMassagers}>
            <div>
                <TextArea getNewPost={getNewPost}/>
            </div>
            <div>
                <Button addNewPost={addNewPost} name={"Send"}/>
            </div>
            {props.messages.map((massage: MessagesType, i: React.Key | null | undefined) => {
                return <div key={i} className={m.dialogsMassager}>{massage.massager}</div>
            })}
        </div>
    );
}
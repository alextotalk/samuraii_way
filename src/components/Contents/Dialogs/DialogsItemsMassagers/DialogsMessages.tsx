import m from "../Dialogs.module.css";
import React from "react";
import {MessagesType} from "../../../../index";


type PropsMessagesType = {
    messages: MessagesType[]
    addPost: (postMessage: string) => void
}

export function DialogsMessages(props: PropsMessagesType) {

    return (
        <div className={m.dialogsMassagers}>

            {props.messages.map((massage: MessagesType, i: React.Key | null | undefined) => {
                return <div key={i} className={m.dialogsMassager}>{massage.massager}</div>
            })}
        </div>
    );
}
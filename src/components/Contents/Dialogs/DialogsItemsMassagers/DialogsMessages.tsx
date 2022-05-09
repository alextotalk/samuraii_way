import m from "../Dialogs.module.css";
import React from "react";
import {MessagesType} from "../Dialogs";

type PropsMessages = {
    messages: MessagesType[]
}

export function DialogsMessages(props: PropsMessages) {
    return (
        <div className={m.dialogsMassagers}>
            {props.messages.map((massage: MessagesType, i: React.Key | null | undefined) => {
                return <div key={i} className={m.dialogsMassager}>{massage.massager}</div>
            })}
        </div>
    );
}
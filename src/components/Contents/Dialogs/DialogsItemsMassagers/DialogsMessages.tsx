import m from "../Dialogs.module.css";
import React, {ChangeEvent} from "react";
 import {TextArea} from "../../../ReusdComponents/TextArea/TextArea";
import {Button} from "../../../ReusdComponents/Button/Button";
import {addMessageAC, mewMessageBodyAC} from "../../../../Redux/dialogsPageReducer";
import {ActionsTypes, MessagesType} from "../../../../Redux/State";


type PropsMessagesType = {
    messages: MessagesType[]
    dispatch: (action: ActionsTypes) => void
    mewMessageBody:string

}

export function DialogsMessages(props: PropsMessagesType) {
    let getNewPost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(mewMessageBodyAC(e.currentTarget.value))
    }
    let addNewPost = () => {
        props.dispatch(addMessageAC())
    }
    return (
        <div className={m.dialogsMassagers}>

            {props.messages.map((massage: MessagesType, i: React.Key | null | undefined) => {
                return <div key={i} className={m.dialogsMassager}>{massage.massager}</div>
            })}
            <div>
                <TextArea newText={props.mewMessageBody} getNewPost={getNewPost}/>
            </div>
            <div>
                <Button addNewPost={addNewPost} name={"Send"}/>
            </div>
        </div>
    );
}
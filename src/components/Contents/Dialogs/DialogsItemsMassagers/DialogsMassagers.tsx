import m from "../Dialogs.module.css";
import React from "react";


export function DialogsMassagers(props:any) {
    return (
        <div className={m.dialogsMassagers}>
            <div className={m.dialogsMassager}>{props.massager[0]}</div>
            <div className={m.dialogsMassager}>{props.massager[1]}</div>
            <div className={m.dialogsMassager}>{props.massager[2]}</div>
        </div>
    );
}
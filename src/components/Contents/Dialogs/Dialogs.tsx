import React from "react";
import m from "./Dialogs.module.css"
import {DialogsItems} from "./DialogsItems/DialogsItems";
import {DialogsMassagers} from "./DialogsItemsMassagers/DialogsMassagers";

let massager = ["Hi", "Hi", "Goodbye"]

export function Dialogs() {
    return (<div className={m.dialogs}>
        <DialogsItems/>
        <DialogsMassagers massager={massager}/>

    </div>);
}


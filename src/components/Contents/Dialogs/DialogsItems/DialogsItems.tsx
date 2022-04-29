import m from "../Dialogs.module.css";
import React from "react";
import {ItemsDialogsMassager} from "./ItemsDialogsMassager/ItemsDialogsMassager";

export function DialogsItems() {
    return (
        <div className={m.dialogsItem}>
            <ItemsDialogsMassager name="Viva" id="1"/>
            <ItemsDialogsMassager name="Inna" id="2"/>
         </div>
    );
}
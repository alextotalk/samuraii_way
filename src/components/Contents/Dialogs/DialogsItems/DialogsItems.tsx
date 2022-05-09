import m from "../Dialogs.module.css";
import React from "react";
import {DialogsItemType} from "../Dialogs";
import {ItemsDialogsUser} from "./ItemsDialogsMassager/ItemsDialogsMassager";
 type DialogsItemsPropsType={
    dialogsItem:DialogsItemType[]
}
export function DialogsItems(props:DialogsItemsPropsType) {
    return (
        <div className={m.dialogsItem}>
            {props.dialogsItem.map((e)=>{
                return <ItemsDialogsUser name={e.name} id={e.id}/>

            })}
         </div>
    );
}